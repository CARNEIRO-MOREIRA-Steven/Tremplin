// app/api/generate-pdf/route.ts

import { NextRequest, NextResponse } from "next/server";
import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  let browser = null;

  try {
    const {
      result, scores, freeAnswer,
      firstName, lastName, email, company, activity, socials, consentShare,
    } = await req.json();

    if (!result || !scores) {
      return NextResponse.json({ error: "Données manquantes" }, { status: 400 });
    }

    const fullName = `${firstName ?? ""} ${lastName ?? ""}`.trim();
    const safeResult = String(result).slice(0, 100);
    const safeFreeAnswer = freeAnswer ? String(freeAnswer).slice(0, 60) : "";

    const html = generateHTML({
      result: safeResult,
      scores,
      freeAnswer: safeFreeAnswer,
      userName: fullName,
    });

    browser = await puppeteer.launch({ headless: true });

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "load", timeout: 30000 });
    const pdfBuffer = await page.pdf({ format: "A4", printBackground: true });
    const buffer = Buffer.from(pdfBuffer);

    // ── Envoi mail à la société ───────────────────────────────────────────────
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        authMethod: "LOGIN",
      });

      const scoresHtml = Object.entries(scores as Record<string, number>)
        .sort(([, a], [, b]) => b - a)
        .map(([p, s]) => `<tr><td style="padding:6px 12px">${p}</td><td style="padding:6px 12px;font-weight:700">${s}/10</td></tr>`)
        .join("");

      await transporter.sendMail({
        from: `"Tremplin Quiz" <${process.env.SMTP_USER}>`,
        to: process.env.ADMIN_EMAIL,
        replyTo: email || undefined,
        subject: `📊 Nouveau résultat quiz — ${fullName || email || "Anonyme"}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto">
            <h2 style="color:#FF2D78;border-bottom:2px solid #FF2D78;padding-bottom:8px">
              📊 Nouveau résultat quiz Tremplin
            </h2>

            <table style="border-collapse:collapse;width:100%;margin-bottom:24px">
              <tr style="background:#f9f9f9"><td style="padding:8px 12px;font-weight:700;width:160px">Prénom Nom</td><td style="padding:8px 12px">${fullName || "—"}</td></tr>
              <tr><td style="padding:8px 12px;font-weight:700">Email</td><td style="padding:8px 12px">${email || "—"}</td></tr>
              <tr style="background:#f9f9f9"><td style="padding:8px 12px;font-weight:700">Boîte</td><td style="padding:8px 12px">${company || "—"}</td></tr>
              ${activity ? `<tr><td style="padding:8px 12px;font-weight:700">Activité</td><td style="padding:8px 12px">${activity}</td></tr>` : ""}
              ${socials ? `<tr style="background:#f9f9f9"><td style="padding:8px 12px;font-weight:700">Réseaux</td><td style="padding:8px 12px">${socials}</td></tr>` : ""}
              <tr><td style="padding:8px 12px;font-weight:700">Consentement partage</td><td style="padding:8px 12px">${consentShare ? "✅ Oui" : "❌ Non"}</td></tr>
            </table>

            <h3 style="color:#FF2D78">Profil dominant : ${result}</h3>

            <table border="1" cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;border-color:#eee">
              <tr style="background:#FF2D78;color:#fff">
                <th style="padding:8px 12px;text-align:left">Profil</th>
                <th style="padding:8px 12px;text-align:left">Score</th>
              </tr>
              ${scoresHtml}
            </table>

            <p style="color:#888;font-size:11px;margin-top:24px">
              Tremplin • contact@tremplin-entreprendre.fr
            </p>
          </div>
        `,
        attachments: [{
          filename: "profil-communication-tremplin.pdf",
          content: buffer,
          contentType: "application/pdf",
        }],
      });
    } catch (mailErr) {
      // Le mail échoue mais le téléchargement continue quand même
      console.error("⚠️ Erreur envoi mail (non-bloquant):", mailErr);
    }

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="profil.pdf"',
      },
    });

  } catch (err: any) {
    console.error("🔥 PDF ERROR:", err);
    return NextResponse.json({ error: err?.message || "Erreur PDF" }, { status: 500 });
  } finally {
    if (browser) await browser.close();
  }
}

// ─── HTML TEMPLATE (inchangé) ─────────────────────────────────────────────────

function generateHTML({ result, scores, freeAnswer, userName }: any) {
  const profiles = Object.keys(scores);

  const bars = profiles.map((p: string) => {
    const value = scores[p] || 0;
    const width = Math.min(value * 10, 100);
    const color =
      p === "🎤 Authentique Bridé·e" ? "#FF2D78"
      : p === "🌱 Stratège Tétanisé"  ? "#00FF88"
      : p === "🌪 Caméléon"           ? "#00D4FF"
      : p === "💡 Visionnaire"         ? "#FFD700"
      : p === "🔧 Technicien·ne"       ? "#FF6B35"
      : "#7B2FBE";

    return `
      <div style="margin-bottom:14px;">
        <div style="display:flex;justify-content:space-between;font-size:12px;color:#fff;">
          <span>${p}</span>
          <span style="color:${color};font-weight:700">${value}/10</span>
        </div>
        <div style="background:#111;height:6px;border-radius:10px;overflow:hidden;margin-top:6px;">
          <div style="width:${width}%;height:100%;background:${color};box-shadow:0 0 12px ${color};"></div>
        </div>
      </div>
    `;
  }).join("");

  return `
  <html>
    <body style="margin:0;font-family:Arial;background:#000;color:#fff;padding:40px;">
      <div style="text-align:center;margin-bottom:30px;">
        <div style="border:1px solid #ce82bb;border-radius:16px;padding:20px;margin-bottom:30px;">
          <div style="color:#ce82bb;font-size:11px;letter-spacing:3px;">✦ PROFIL COMMUNICATION ✦</div>
          <h1 style="margin:10px 0 0;font-size:26px;">${result}</h1>
          ${userName ? `<p style="color:#888;">Profil de : ${userName}</p>` : ""}
        </div>
      </div>
      <div style="border:1px solid #7abd73;border-radius:16px;padding:20px;background:#0a0a0a;margin-bottom:30px;">
        <div style="color:#7abd73;font-size:10px;letter-spacing:2px;margin-bottom:20px;">RÉPARTITION DES SCORES</div>
        ${bars}
      </div>
      ${freeAnswer ? `
        <div style="border:1px solid #5aceb8;border-radius:16px;padding:20px;background:#0a0a0a;">
          <div style="color:#888;font-size:10px;letter-spacing:2px;">Ton vrai blocage en 1 mot</div>
          <h3 style="color:#5aceb8;">"${freeAnswer}"</h3>
        </div>
      ` : ""}
      <div style="text-align:center;margin-top:40px;font-size:10px;color:#555;">
        Tremplin • Communication & Stratégie
      </div>
    </body>
  </html>
  `;
}