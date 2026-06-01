import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { company, name, activity, need, offer, phone, email, contactPrefs } = body;

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

    await transporter.sendMail({
      from: `"Tremplin Contact" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `📩 Nouvelle demande — ${name} (${company})`,
      html: `
        <h2 style="color:#FF2D78">Nouvelle demande de contact</h2>
        <table style="border-collapse:collapse;font-family:sans-serif;line-height:1.8">
          <tr><td><b>Nom de la boîte</b></td><td>${company}</td></tr>
          <tr><td><b>Nom / Prénom</b></td><td>${name}</td></tr>
          <tr><td><b>Activité</b></td><td>${activity}</td></tr>
          <tr><td><b>Besoin / Blocage</b></td><td>${need}</td></tr>
          <tr><td><b>Offre souhaitée</b></td><td>${offer}</td></tr>
          <tr><td><b>Téléphone</b></td><td>${phone}</td></tr>
          <tr><td><b>Email</b></td><td>${email}</td></tr>
          <tr><td><b>Contact préféré</b></td><td>${contactPrefs?.join(", ") || "—"}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Erreur envoi mail" }, { status: 500 });
  }
}