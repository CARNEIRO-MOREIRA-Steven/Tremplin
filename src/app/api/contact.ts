// app/api/send-results/route.ts
// Envoie les résultats du quiz par email (à l'utilisateur et à Tremplin)
// Utilise l'API route Next.js + nodemailer (ou Resend/SendGrid selon config)

import { NextRequest, NextResponse } from "next/server";

// ── Config ─────────────────────────────────────────────────────────────────────
// Remplace ces placeholders par tes vraies valeurs dans .env.local :
//   TREMPLIN_EMAIL=contact@tremplin.fr
//   EMAIL_FROM=noreply@tremplin.fr
//   RESEND_API_KEY=re_xxxx  (si tu utilises Resend)
const TREMPLIN_EMAIL = process.env.TREMPLIN_EMAIL ?? "contact@tremplin.fr";
const EMAIL_FROM = process.env.EMAIL_FROM ?? "noreply@tremplin.fr";

// ── Types ──────────────────────────────────────────────────────────────────────
interface SendResultsBody {
  name: string;
  email: string;
  result: string;
  scores: Record<string, number>;
  freeAnswer?: string;
  consentShare: boolean;   // RGPD : partage avec Tremplin
  consentEmail: boolean;   // RGPD : recevoir le PDF par mail
}

// ── Handler ────────────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body: SendResultsBody = await req.json();

    // Validation de base
    if (!body.email || !body.name || !body.result) {
      return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
    }

    if (!isValidEmail(body.email)) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    if (!body.consentEmail) {
      return NextResponse.json({ error: "Consentement requis" }, { status: 400 });
    }

    // ── Email utilisateur ───────────────────────────────────────────────────────
    const userEmailHtml = buildUserEmail(body);
    await sendEmail({
      to: body.email,
      from: EMAIL_FROM,
      subject: `Tremplin • Ton profil communication : ${body.result}`,
      html: userEmailHtml,
    });

    // ── Email Tremplin (seulement si consentement partagé) ─────────────────────
    if (body.consentShare) {
      const adminEmailHtml = buildAdminEmail(body);
      await sendEmail({
        to: TREMPLIN_EMAIL,
        from: EMAIL_FROM,
        subject: `Nouveau profil quiz — ${body.name} — ${body.result}`,
        html: adminEmailHtml,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("send-results error:", err);
    return NextResponse.json({ error: "Erreur lors de l'envoi" }, { status: 500 });
  }
}

// ── Envoi mail (adapte selon ton provider) ─────────────────────────────────────
async function sendEmail({
  to,
  from,
  subject,
  html,
}: {
  to: string;
  from: string;
  subject: string;
  html: string;
}) {
  // ── OPTION A : Resend (recommandé, simple) ──────────────────────────────────
  // npm install resend
  // const { Resend } = await import("resend");
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({ from, to, subject, html });

  // ── OPTION B : Nodemailer (SMTP) ────────────────────────────────────────────
  // npm install nodemailer @types/nodemailer
  // const nodemailer = await import("nodemailer");
  // const transporter = nodemailer.createTransport({
  //   host: process.env.SMTP_HOST,
  //   port: Number(process.env.SMTP_PORT ?? 587),
  //   auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  // });
  // await transporter.sendMail({ from, to, subject, html });

  // ── PLACEHOLDER (log en dev, remplace par l'option ci-dessus en prod) ───────
  console.log(`[EMAIL] To: ${to} | From: ${from} | Subject: ${subject}`);
  console.log(`[EMAIL] HTML: ${html.slice(0, 200)}...`);
}

// ── Templates HTML ─────────────────────────────────────────────────────────────
function buildUserEmail(data: SendResultsBody): string {
  const scoresHtml = Object.entries(data.scores)
    .sort(([, a], [, b]) => b - a)
    .map(
      ([profile, score]) =>
        `<tr>
          <td style="padding:6px 12px;color:${profile === data.result ? "#FF2D78" : "#cccccc"};font-weight:${profile === data.result ? "bold" : "normal"}">${profile}</td>
          <td style="padding:6px 12px;color:#00D4FF;text-align:right">${score}/10</td>
        </tr>`
    )
    .join("");

  return `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0D0D0D;font-family:Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0D0D0D;padding:40px 0">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#1A1A2E;border-radius:12px;overflow:hidden;border:1px solid #333355">
        
        <!-- Header -->
        <tr><td style="background:linear-gradient(135deg,#1E0A2E,#0A1628);padding:32px;text-align:center;border-bottom:2px solid #FF2D78">
          <p style="margin:0 0 4px;color:#FF2D78;font-size:12px;letter-spacing:3px;font-weight:bold">TREMPLIN</p>
          <h1 style="margin:0;color:#ffffff;font-size:24px">Ton profil communication</h1>
          <p style="margin:8px 0 0;color:#888888;font-size:14px">Bonjour ${data.name} ! Voici tes résultats.</p>
        </td></tr>

        <!-- Profil dominant -->
        <tr><td style="padding:32px;text-align:center">
          <p style="margin:0 0 8px;color:#888888;font-size:11px;letter-spacing:2px">PROFIL DOMINANT</p>
          <p style="margin:0;color:#ffffff;font-size:28px;font-weight:bold">${data.result}</p>
        </td></tr>

        <!-- Scores -->
        <tr><td style="padding:0 32px 24px">
          <p style="color:#00D4FF;font-size:12px;font-weight:bold;letter-spacing:2px;margin:0 0 12px">RÉPARTITION DES SCORES</p>
          <table width="100%" style="border-collapse:collapse;background:#0D0D0D;border-radius:8px;overflow:hidden">
            ${scoresHtml}
          </table>
        </td></tr>

        ${data.freeAnswer ? `
        <!-- Mot clé -->
        <tr><td style="padding:0 32px 24px">
          <div style="background:#1A0A2E;border:1px solid #7B2FBE;border-radius:8px;padding:16px;text-align:center">
            <p style="margin:0 0 4px;color:#888888;font-size:11px">TON MOT CLÉ</p>
            <p style="margin:0;color:#7B2FBE;font-size:20px;font-weight:bold">"${data.freeAnswer}"</p>
          </div>
        </td></tr>` : ""}

        <!-- CTA -->
        <tr><td style="padding:24px 32px 40px;text-align:center;border-top:1px solid #333355">
          <p style="color:#cccccc;font-size:14px;margin:0 0 20px">Prêt·e à passer à l'action ?</p>
          <a href="https://calendly.com/PLACEHOLDER" style="background:#FF2D78;color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:50px;font-weight:bold;font-size:14px;display:inline-block">
            Réserver mon call découverte →
          </a>
        </td></tr>

        <!-- Footer RGPD -->
        <tr><td style="background:#0D0D0D;padding:16px 32px;text-align:center;border-top:1px solid #222">
          <p style="color:#555;font-size:11px;margin:0">
            Tu reçois cet email car tu as complété le quiz Tremplin et consenti à recevoir tes résultats.<br>
            Conformément au RGPD, tes données ne sont pas conservées sans ton accord explicite.<br>
            <a href="mailto:${TREMPLIN_EMAIL}" style="color:#888;text-decoration:underline">Se désinscrire</a>
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function buildAdminEmail(data: SendResultsBody): string {
  const scoresText = Object.entries(data.scores)
    .sort(([, a], [, b]) => b - a)
    .map(([p, s]) => `<li>${p} : <strong>${s}/10</strong></li>`)
    .join("");

  return `
<!DOCTYPE html>
<html lang="fr">
<body style="font-family:Arial,sans-serif;background:#f5f5f5;padding:40px">
  <div style="max-width:500px;margin:0 auto;background:#fff;border-radius:8px;padding:32px;border:1px solid #ddd">
    <h2 style="color:#FF2D78;margin:0 0 24px">Nouveau profil quiz</h2>
    <p><strong>Nom :</strong> ${data.name}</p>
    <p><strong>Email :</strong> <a href="mailto:${data.email}">${data.email}</a></p>
    <p><strong>Profil dominant :</strong> ${data.result}</p>
    ${data.freeAnswer ? `<p><strong>Mot clé :</strong> "${data.freeAnswer}"</p>` : ""}
    <p><strong>Scores :</strong></p>
    <ul>${scoresText}</ul>
    <hr style="border:none;border-top:1px solid #eee;margin:24px 0">
    <p style="color:#888;font-size:12px">
      ✅ L'utilisateur a consenti au partage de ses données avec Tremplin.<br>
      Date : ${new Date().toLocaleString("fr-FR")}
    </p>
  </div>
</body>
</html>`;
}

// ── Utils ──────────────────────────────────────────────────────────────────────
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}