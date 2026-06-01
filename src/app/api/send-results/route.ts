import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, result, scores, freeAnswer, consentEmail, consentShare } = body;

  try {
    const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,                        // ← true obligatoire pour le port 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

    const scoresHtml = Object.entries(scores as Record<string, number>)
      .sort(([, a], [, b]) => b - a)
      .map(([p, s]) => `<tr><td>${p}</td><td><b>${s}/10</b></td></tr>`)
      .join("");

    await transporter.sendMail({
      from: `"Tremplin Quiz" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `📊 Résultats quiz partagés — ${name || email}`,
      html: `
        <h2 style="color:#FF2D78">Résultats quiz partagés</h2>
        <p><b>Nom :</b> ${name} | <b>Email :</b> ${email}</p>
        <p><b>Profil dominant :</b> ${result}</p>
        <p><b>Consent email :</b> ${consentEmail ? "✅" : "❌"} | <b>Consent partage :</b> ${consentShare ? "✅" : "❌"}</p>
        ${freeAnswer ? `<p><b>Réponse libre :</b> ${freeAnswer}</p>` : ""}
        <table border="1" cellpadding="6" style="border-collapse:collapse;font-family:sans-serif">
          <tr><th>Profil</th><th>Score</th></tr>
          ${scoresHtml}
        </table>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Erreur envoi mail" }, { status: 500 });
  }
}