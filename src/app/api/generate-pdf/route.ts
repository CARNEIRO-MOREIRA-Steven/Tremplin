// app/api/generate-pdf/route.ts

import { NextRequest, NextResponse } from "next/server";
import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { result, scores, freeAnswer, userName } = body;

    if (!result || !scores) {
      return NextResponse.json(
        { error: "Données manquantes" },
        { status: 400 }
      );
    }

    // sanitize
    const safeResult = String(result).slice(0, 100);
    const safeUserName = userName ? String(userName).slice(0, 50) : "";
    const safeFreeAnswer = freeAnswer
      ? String(freeAnswer).slice(0, 60)
      : "";

    const html = generateHTML({
      result: safeResult,
      scores,
      freeAnswer: safeFreeAnswer,
      userName: safeUserName,
    });

    const isProd = process.env.NODE_ENV === "production";

const browser = await puppeteer.launch({
  args: isProd ? chromium.args : [],
  executablePath: isProd
    ? await chromium.executablePath()
    : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
});

    const page = await browser.newPage();

    // timeout safe
    await page.setContent(html, {
      waitUntil: "networkidle0",
      timeout: 30000,
    });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    await browser.close();

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="profil-communication-tremplin.pdf"',
      },
    });
  } catch (err: any) {
    console.error("🔥 PDF ERROR FULL:", err);

    return NextResponse.json(
      {
        error: err?.message || "Erreur PDF inconnue",
      },
      { status: 500 }
    );
  }
}

// ─────────────────────────────────────────────
// HTML TEMPLATE
// ─────────────────────────────────────────────

function generateHTML({ result, scores, freeAnswer, userName }: any) {
  const profiles = Object.keys(scores);

  const bars = profiles
    .map((p: string) => {
      const value = scores[p] || 0;
      const width = Math.min(value * 10, 100);
      const color =
        p === "🎤 Authentique Bridé·e"
          ? "#FF2D78"
          : p === "🌱 Stratège Tétanisé"
          ? "#00FF88"
          : p === "🌪 Caméléon"
          ? "#00D4FF"
          : p === "💡 Visionnaire"
          ? "#FFD700"
          : p === "🔧 Technicien·ne"
          ? "#FF6B35"
          : "#7B2FBE";

      return `
        <div style="margin-bottom:14px;">
          <div style="display:flex;justify-content:space-between;font-size:12px;color:#fff;">
            <span>${p}</span>
            <span style="color:${color};font-weight:700">${value}/10</span>
          </div>

          <div style="
            background:#111;
            height:6px;
            border-radius:10px;
            overflow:hidden;
            margin-top:6px;
          ">
            <div style="
              width:${width}%;
              height:100%;
              background:${color};
              box-shadow:0 0 12px ${color};
            "></div>
          </div>
        </div>
      `;
    })
    .join("");


  return `
  <html>
  <body style="
    margin:0;
    font-family:Arial, sans-serif;
    background:#000;
    color:white;
    padding:40px;
  ">

    <div style="
      text-align:center;
      margin-bottom:30px;
    ">
    <div style='      
    border:1px solid #ce82bb;
      border-radius:16px;
      margin-bottom:30px;
      padding:20px;'>
      <div style="color:#ce82bb;font-size:11px;letter-spacing:3px;">
        ✦ PROFIL COMMUNICATION ✦
      </div>

      <h1 style="
        margin:10px 0 0;
        font-size:26px;
      ">
        ${result}
      </h1>

      ${
        userName
          ? `<p style="color:#888;margin-top:8px;">Profil de : ${userName}</p>`
          : ""
      }

      </div>

    <!-- SCORES -->
    <div style="
      border:1px solid #7abd73;
      border-radius:16px;
      padding:20px;
      background:#0a0a0a;
      margin-bottom:30px;
    ">
      <div style="color:#7abd73;font-size:10px;letter-spacing:2px;margin-bottom:20px;">
        RÉPARTITION DES SCORES
      </div>

      ${bars}
    </div>

    ${
      freeAnswer
        ? `
      <div style="
        border:1px solid #5aceb8;
        border-radius:16px;
        padding:20px;
        background:#0a0a0a;
      ">
        <div style="color:#888;font-size:10px;letter-spacing:2px;">
          Ton vrai blocage en 1 mot
        </div>
        <h3 style="color:#5aceb8;">"${freeAnswer}"</h3>
      </div>
    `
        : ""
    }

    <div style="
      text-align:center;
      margin-top:40px;
      font-size:10px;
      color:#555;
    ">
      Tremplin • Communication & Stratégie
    </div>

  </body>
  </html>
  `;
}