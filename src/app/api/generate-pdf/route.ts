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
      result,
      scores,
      freeAnswer,
      firstName,
      lastName,
      email,
      company,
      activity,
      socials,
      consentShare,
    } = await req.json();

    if (!result || !scores) {
      return NextResponse.json(
        { error: "Données manquantes" },
        { status: 400 }
      );
    }

    const fullName = `${firstName ?? ""} ${lastName ?? ""}`.trim();

    const safeResult = String(result).slice(0, 100);

    const safeFreeAnswer = freeAnswer
      ? String(freeAnswer).slice(0, 60)
      : "";

    // ─────────────────────────────────────────────
    // HTML PDF
    // ─────────────────────────────────────────────

    const html = generateHTML({
      result: safeResult,
      scores,
      freeAnswer: safeFreeAnswer,
      userName: fullName,
    });

    // ─────────────────────────────────────────────
    // PUPPETEER
    // ─────────────────────────────────────────────

    browser = await puppeteer.launch({
      headless: true,
    });

    const page = await browser.newPage();

    await page.setContent(html, {
      waitUntil: "load",
      timeout: 30000,
    });

    const pdfBuffer = await page.pdf({ format: "A4", printBackground: true, margin: { top: "0px", right: "0px", bottom: "0px", left: "0px", }, });

    const buffer = Buffer.from(pdfBuffer);

    // ─────────────────────────────────────────────
    // MAIL ADMIN
    // ─────────────────────────────────────────────

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

      const scoresHtml = Object.entries(
        scores as Record<string, number>
      )
        .sort(([, a], [, b]) => b - a)
        .map(
          ([p, s]) => `
            <tr>
              <td style="padding:6px 12px">${p}</td>
              <td style="padding:6px 12px;font-weight:700">
                ${s}/10
              </td>
            </tr>
          `
        )
        .join("");

      await transporter.sendMail({
        from: `"Tremplin Quiz" <${process.env.SMTP_USER}>`,
        to: process.env.ADMIN_EMAIL,
        replyTo: email || undefined,
        subject: `📊 Nouveau résultat quiz — ${fullName || email || "Anonyme"
          }`,

        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto">

            <h2 style="
              color:#FF2D78;
              border-bottom:2px solid #FF2D78;
              padding-bottom:8px;
            ">
              📊 Nouveau résultat quiz Tremplin
            </h2>

            <table style="
              border-collapse:collapse;
              width:100%;
              margin-bottom:24px;
            ">

              <tr style="background:#f9f9f9">
                <td style="padding:8px 12px;font-weight:700;width:160px">
                  Prénom Nom
                </td>

                <td style="padding:8px 12px">
                  ${fullName || "—"}
                </td>
              </tr>

              <tr>
                <td style="padding:8px 12px;font-weight:700">
                  Email
                </td>

                <td style="padding:8px 12px">
                  ${email || "—"}
                </td>
              </tr>

              <tr style="background:#f9f9f9">
                <td style="padding:8px 12px;font-weight:700">
                  Boîte
                </td>

                <td style="padding:8px 12px">
                  ${company || "—"}
                </td>
              </tr>

              ${activity
            ? `
                <tr>
                  <td style="padding:8px 12px;font-weight:700">
                    Activité
                  </td>

                  <td style="padding:8px 12px">
                    ${activity}
                  </td>
                </tr>
              `
            : ""
          }

              ${socials
            ? `
                <tr style="background:#f9f9f9">
                  <td style="padding:8px 12px;font-weight:700">
                    Réseaux
                  </td>

                  <td style="padding:8px 12px">
                    ${socials}
                  </td>
                </tr>
              `
            : ""
          }

              <tr>
                <td style="padding:8px 12px;font-weight:700">
                  Consentement partage
                </td>

                <td style="padding:8px 12px">
                  ${consentShare ? "✅ Oui" : "❌ Non"}
                </td>
              </tr>

            </table>

            <h3 style="color:#FF2D78">
              Profil dominant : ${result}
            </h3>

            <table
              border="1"
              cellpadding="0"
              cellspacing="0"
              style="
                border-collapse:collapse;
                width:100%;
                border-color:#eee;
              "
            >

              <tr style="background:#FF2D78;color:#fff">
                <th style="padding:8px 12px;text-align:left">
                  Profil
                </th>

                <th style="padding:8px 12px;text-align:left">
                  Score
                </th>
              </tr>

              ${scoresHtml}

            </table>

            <p style="
              color:#888;
              font-size:11px;
              margin-top:24px;
            ">
              Tremplin • contact@tremplin-entreprendre.fr
            </p>

          </div>
        `,

        attachments: [
          {
            filename: "profil-communication-tremplin.pdf",
            content: buffer,
            contentType: "application/pdf",
          },
        ],
      });
    } catch (mailErr) {
      console.error(
        "⚠️ Erreur envoi mail (non-bloquant):",
        mailErr
      );
    }

    // ─────────────────────────────────────────────
    // RESPONSE PDF
    // ─────────────────────────────────────────────

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="profil.pdf"',
      },
    });
  } catch (err: any) {
    console.error("🔥 PDF ERROR:", err);

    return NextResponse.json(
      {
        error: err?.message || "Erreur PDF",
      },
      {
        status: 500,
      }
    );
  } finally {
    if (browser) await browser.close();
  }
}

// ─────────────────────────────────────────────
// CONTENU DÉTAILLÉ PAR PROFIL
// ─────────────────────────────────────────────

function getProfileContent(result: string, color: string): string {
  const profiles: Record<string, { quote: string; points: { title: string; text: string }[]; currentMessage: string; traits: string[]; missing: string[]; tips: { title: string; text: string }[]; insight: string; challenge: string; }> = {

    "🌪 Caméléon": {
      quote: "Je m'adapte à tout… sauf à moi.",
      points: [
        { title: "Tu postes souvent à l'instinct.", text: "Quand tu as une idée, une motivation ou un petit rush d'inspiration. Mais derrière, il n'y a ni vision claire, ni structure solide, ni intention stratégique. Tu avances « au feeling ». Et ta communication finit par dépendre de ton humeur du moment." },
        { title: "Tu veux plaire à tout le monde.", text: "Alors tu adaptes ton message selon ce qui fonctionne, ce que les autres font, ce qu'ils semblent « attendre » de toi. À force de vouloir être validé, ta communication devient floue. On comprend ce que tu fais… mais on ne ressent pas vraiment qui tu es." },
        { title: "Tu regardes énormément les autres.", text: "Pas parce que tu manques d'idées. Mais parce qu'au fond, tu doutes encore de ta propre légitimité. Alors tu compares, tu ajustes, tu corriges. Et sans t'en rendre compte, tu construis une communication qui ressemble davantage aux autres… qu'à toi." },
        { title: "Tu as l'impression d'être irrégulier.", text: "En réalité, tu n'es pas irrégulier. Tu n'as simplement pas encore trouvé une communication alignée avec ta personnalité, ton énergie, ta vision, et la manière dont toi, tu fonctionnes naturellement." },
        { title: "Tu changes souvent de direction trop vite.", text: "Au moindre silence. Au moindre manque de résultat. Au moindre doute. Tu penses que le problème vient de toi… alors tu recommences tout. Nouveau ton, nouvelle stratégie, nouveau positionnement. Mais le vrai problème, ce n'est pas le manque d'idées. C'est le manque de boussole." },
      ],
      currentMessage: "« Je cherche encore ma place. »",
      traits: ["Hypersensible au regard des autres", "Créatif et plein d'idées", "Curieux et intelligent", "Capable de beaucoup donner", "Mentalement saturé par trop d'informations contradictoires", "Forte envie d'être reconnu… sans toujours oser prendre pleinement sa place"],
      missing: ["Une direction claire", "Une identité de communication stable", "Des messages qui te ressemblent vraiment", "Un cadre stratégique simple pour arrêter de partir dans tous les sens", "Assez de confiance pour assumer pleinement ta différence"],
      tips: [
        { title: "Arrête de vouloir parler à tout le monde.", text: "Une communication forte crée naturellement de l'attraction… mais aussi du tri. Et c'est normal." },
        { title: "Choisis une direction et tiens-la.", text: "Même si elle n'est pas parfaite au début. La clarté vient rarement avant l'action. Elle se construit en avançant." },
        { title: "Parle comme tu es dans la vraie vie.", text: "Pas comme « un entrepreneur sur LinkedIn ». Les gens connectent à une énergie sincère. Pas à une image surjouée. Ose être toi, prend confiance." },
        { title: "Consomme moins de contenu.", text: "Tu n'as pas besoin de 150 conseils contradictoires. Tu as surtout besoin de retrouver ton propre point de vue. C'est le moment — GO !" },
      ],
      insight: "Le jour où tu arrêtes de chercher à ressembler à ce qui marche… tu commences enfin à construire quelque chose qui marque.",
      challenge: "Pendant les 7 prochains jours : publie uniquement du contenu que toi, tu aurais aimé lire. Pas pour « faire pro », pas pour plaire à l'algorithme. Juste : une idée que tu crois vraiment, une réflexion personnelle, une expérience vécue, une opinion assumée.",
    },

    "💡 Visionnaire": {
      quote: "Je vois loin… mais je ne sais pas comment le dire.",
      points: [
        { title: "Tu réfléchis énormément.", text: "Tu analyses tout : ton positionnement, ton offre, ton image, ton marché, ton message, ta valeur. Tu veux bien faire, être pertinent, être précis. Mais à force de vouloir tout dire… tu finis par perdre les gens." },
        { title: "Tu as du mal à simplifier ce que tu fais.", text: "Pas parce que ton activité est « trop compliquée ». Mais parce que tu vois beaucoup plus loin et plus profondément que la majorité des gens. Alors quand tu communiques : tu expliques trop, tu intellectualises, tu ajoutes des couches. Et ton audience décroche avant même d'avoir compris la valeur de ce que tu proposes." },
        { title: "Tu as souvent l'impression d'être « mal compris ».", text: "Tu sais que ce que tu proposes est fort. Mais tu as cette frustration permanente : « Pourquoi les gens ne comprennent pas ce que j'essaie de transmettre ? » Alors parfois tu te remets en question, tu changes ton message, tu modifies ton offre. Alors qu'au fond, le problème n'est pas ton expertise. C'est la clarté de ta communication." },
        { title: "Tu passes beaucoup de temps à penser… et peu à structurer.", text: "Tu accumules des notes, des idées, des concepts, des inspirations, des débuts de stratégie. Mais tout reste souvent dans ta tête. Résultat : tu t'éparpilles, tu procrastines certaines prises de parole, ou tu attends « d'avoir enfin trouvé le bon message »." },
        { title: "Tu veux tellement bien faire… que tu bloques.", text: "Tu cherches la phrase parfaite, le positionnement parfait, la stratégie parfaite. Alors tu repousses, tu modifies, tu ajustes encore. Mais pendant ce temps-là, ta communication devient silencieuse… ou incompréhensible." },
      ],
      currentMessage: "« J'ai énormément à apporter… mais je n'arrive pas encore à le rendre limpide. »",
      traits: ["Très intelligent et analytique", "Passionné par le fond plus que par la forme", "Perfectionniste", "Créatif avec une vision long terme", "Frustré de ne pas réussir à transmettre toute la richesse de ses idées", "Cerveau constamment « en mouvement »"],
      missing: ["Une communication plus simple", "Une structure claire", "Des messages compréhensibles rapidement", "Une hiérarchie dans tes idées", "Accepter que simplifier ne veut pas dire appauvrir"],
      tips: [
        { title: "Arrête de vouloir tout expliquer.", text: "Une bonne communication ne dit pas tout. Elle donne envie d'en savoir plus." },
        { title: "Simplifie au maximum ton message.", text: "Si quelqu'un ne comprend pas ce que tu fais en quelques secondes, ce n'est pas qu'il n'est « pas assez intelligent ». C'est que ton message manque encore de clarté." },
        { title: "Commence par le problème, pas par la méthode.", text: "Les gens achètent rarement une réflexion complexe. Ils achètent une transformation qu'ils comprennent immédiatement." },
        { title: "Structure avant de créer.", text: "Ton cerveau produit énormément d'idées. Mais sans cadre, même les meilleures idées deviennent brouillonnes." },
      ],
      insight: "Ce n'est pas ta vision qui est trop floue. C'est sa traduction qui est trop dense. Ce n'est pas ton rôle de tout dire — c'est ton rôle de faire comprendre l'essentiel.",
      challenge: "Pendant les 7 prochains jours : crée uniquement du contenu ultra simple. Une idée principale par contenu, une phrase forte, un message clair, zéro surcharge d'informations. Avant de publier, demande-toi : « Est-ce qu'un inconnu comprend immédiatement ce que je veux dire ? »",
    },

    "🎤 Authentique Bridé·e": {
      quote: "Je veux être moi-même… mais j'ai peur que ce ne soit pas assez.",
      points: [
        { title: "Tu veux être naturel·le… mais tu te surveilles en permanence.", text: "Tu commences un post avec une idée sincère. Puis très vite, une petite voix arrive : « Est-ce que ça fait pro ? », « Est-ce que je vais être pris au sérieux ? ». Et tu corriges. Encore et encore. Jusqu'à ce que ton message soit « propre »… mais moins vivant." },
        { title: "Tu doutes de ta légitimité (même si tu sais des choses).", text: "Tu as de la valeur. Des idées. Une expérience. Une vision. Mais tu n'oses pas toujours l'assumer pleinement. Alors tu minimises tes prises de position, tu atténues tes affirmations, ou tu laisses toujours une porte ouverte « au cas où »." },
        { title: "Tu restes flou·e pour ne pas déranger.", text: "Dire clairement qui tu es, ce que tu fais, ce que tu défends… ça te semble parfois trop frontal. Alors tu arrondis les angles. Ton message devient plus large, plus « safe », plus universel. Mais à force de ne déranger personne… tu ne touches vraiment personne non plus." },
        { title: "Tu n'as pas encore trouvé ton « style à toi ».", text: "Tu testes des façons de communiquer : inspiré·e ici, adapté·e là, influencé·e ailleurs. Mais tu n'as pas encore cette sensation de : « ça, c'est moi. point. » Alors tu restes dans une zone intermédiaire : ni totalement toi, ni totalement stratégique." },
        { title: "Tu communiques comme si tu devais être « validé·e ».", text: "Même inconsciemment, tu écris souvent pour être compris·e, être aimé·e, être accepté·e, éviter le rejet. Et ça change tout ton ton." },
      ],
      currentMessage: "« Je sens que j'ai quelque chose à dire… mais je n'ose pas encore le dire pleinement. »",
      traits: ["Sensible au regard des autres", "Très intuitif·ve", "Créatif·ve mais autocensuré·e", "En quête d'alignement", "Parfois frustré·e de ne pas oser « se montrer vraiment »", "Forte envie d'authenticité… freinée par le doute"],
      missing: ["Un cadre sécurisant pour t'exprimer", "Une structure simple pour ne pas te perdre", "Une méthode pour poser ton identité sans surjouer", "La permission intérieure d'être lisible et assumé·e"],
      tips: [
        { title: "Arrête de vouloir être « bien perçu·e » par tout le monde.", text: "Plus tu essaies de plaire à tous, plus tu t'éloignes de toi-même." },
        { title: "Commence par dire une chose vraie, même imparfaite.", text: "L'authenticité ne vient pas de la perfection. Elle vient de toi tout simplement." },
        { title: "Choisis une manière simple de te présenter et tiens-la.", text: "Pas besoin de te réinventer à chaque contenu." },
        { title: "Autorise-toi à être direct·e.", text: "Dire clairement ce que tu penses n'est pas un risque. C'est une clarté." },
      ],
      insight: "Tu ne deviens pas « moins pro » quand tu es toi-même. Tu deviens plus crédible, plus mémorable et plus impactant·e. Les gens ne se connectent pas à une version polie de toi — ils se connectent à une version claire et naturelle.",
      challenge: "Pendant les 7 prochains jours : publie comme si tu parlais à une seule personne que tu connais vraiment bien. Pas une audience. Pas un marché. Une seule personne. Et dis les choses comme tu les dirais en vrai.",
    },

    "🔧 Technicien·ne": {
      quote: "Je montre ce que je fais, mais pas qui je suis.",
      points: [
        { title: "Tu parles beaucoup de ton savoir-faire…", text: "Tu décris tes services, tes compétences, tes prestations, tes méthodes, tes outils. Tu es dans le « comment ». Mais tu oublies souvent le « pourquoi ça compte »." },
        { title: "Ta communication ressemble à une plaquette.", text: "Claire. Structurée. Propre. Mais froide. On comprend ce que tu fais… mais on ne ressent pas ton intention, ton positionnement, ta différence, ton énergie." },
        { title: "Tu crois que ton travail va parler de lui-même.", text: "Tu fais bien ton job, donc tu penses que « les résultats suffiront à attirer les gens ». Mais dans un monde saturé, être bon ne suffit plus à être visible." },
        { title: "Tu restes trop en retrait dans ta communication.", text: "Tu mets ton expertise en avant… mais pas toi. Résultat : ton contenu est informatif, mais pas mémorable, pas incarné, pas différenciant." },
        { title: "Tu confonds « être professionnel » et « être neutre ».", text: "Tu as peut-être intégré l'idée que parler de soi = pas sérieux, montrer sa personnalité = pas pro, raconter = trop marketing. Alors tu retiens ton expression. Et ta communication devient technique… mais silencieuse." },
      ],
      currentMessage: "« Je sais faire mon métier… mais je ne montre pas pourquoi on devrait me choisir moi. »",
      traits: ["Très compétent techniquement", "Rigoureux·se et fiable", "Orienté·e solutions", "Peu à l'aise avec l'auto-promotion", "Focalisé·e sur la qualité du travail plutôt que sur sa mise en scène", "Convaincu·e que le bon travail suffit… jusqu'à ce que la visibilité manque"],
      missing: ["Une mise en valeur de ta valeur réelle (pas seulement tes tâches)", "Une communication plus incarnée", "Du storytelling autour de ton expertise", "Une stratégie de différenciation", "Comprendre que ton travail n'est pas visible sans ton récit"],
      tips: [
        { title: "Parle moins de ce que tu fais… et plus de ce que ça change.", text: "Les gens n'achètent pas une prestation. Ils achètent un résultat, une transformation, un soulagement." },
        { title: "Ajoute du contexte à ton expertise.", text: "Un savoir-faire sans histoire = invisible. Un savoir-faire incarné = différenciant." },
        { title: "Montre ta façon de penser, pas seulement ton travail.", text: "C'est ta vision qui te distingue, pas uniquement tes services." },
        { title: "Ose te rendre visible dans ta communication.", text: "Ton expertise sans toi = une information. Ton expertise avec toi = une marque." },
      ],
      insight: "Ce n'est pas ton travail qui doit convaincre à ta place. C'est ta capacité à le rendre compréhensible, désirable et mémorable. Dans ton domaine, ceux qui gagnent ne sont pas toujours les meilleurs — ce sont souvent ceux qui savent le mieux expliquer leur valeur.",
      challenge: "Pendant les 7 prochains jours : publie uniquement des contenus qui commencent par « Ce que peu de gens comprennent dans mon métier, c'est que… » ou « Ce que mon travail change vraiment pour mes clients, c'est… »",
    },

    "🌱 Stratège Tétanisé": {
      quote: "Je sais ce qu'il faut faire… mais je ne le fais pas.",
      points: [
        { title: "Tu accumules de la connaissance… mais peu d'application.", text: "Tu as lu des contenus, suivi des conseils, regardé des vidéos, noté des idées de stratégie, sauvegardé des méthodes. Tu sais beaucoup de choses. Mais ton problème n'est pas le manque d'information. C'est le passage à l'action." },
        { title: "Tu commences… mais tu ne termines pas.", text: "Tu lances une stratégie de contenu, une nouvelle organisation, une routine de publication, une idée de positionnement. Puis rapidement : tu doutes, tu ajustes, tu changes de direction, ou tu abandonnes. Pas par paresse. Mais par surcharge mentale." },
        { title: "Tu veux bien faire… donc tu te compliques tout.", text: "Tu cherches la meilleure méthode, le bon timing, la bonne approche, le bon angle. Et à force de vouloir optimiser avant même d'agir… tu restes bloqué·e dans la réflexion." },
        { title: "Tu t'auto-sabotes sans t'en rendre compte.", text: "Ce n'est pas un sabotage conscient. C'est plus subtil : « je vais encore me renseigner avant », « je ne suis pas encore prêt·e », « je dois clarifier ma stratégie ». Et ces phrases deviennent un cycle." },
        { title: "Tu ne manques pas de stratégie… tu manques de continuité.", text: "Tu sais souvent quoi faire. Mais tu n'as pas encore la stabilité pour répéter, ajuster, tenir dans la durée." },
      ],
      currentMessage: "« Je suis capable de comprendre… mais pas encore de structurer dans la durée. »",
      traits: ["Très intelligent et analytique", "Curieux et rapide à comprendre", "Motivé au départ", "Facilement saturé par trop d'options", "Perfectionniste dans sa manière d'agir", "Frustré de ne pas « réussir à tenir une stratégie »"],
      missing: ["Une méthode simple et stable", "Une direction claire à suivre sans réfléchir en permanence", "Un cadre d'action rassurant", "De la constance plutôt que de la perfection", "Accepter que commencer imparfaitement vaut mieux que ne pas commencer"],
      tips: [
        { title: "Réduis ton champ d'action.", text: "Tu n'as pas besoin de 10 stratégies. Tu as besoin d'une seule… tenue correctement." },
        { title: "Arrête d'optimiser avant d'avoir commencé.", text: "Une stratégie imparfaite appliquée vaut mieux qu'une stratégie parfaite jamais lancée." },
        { title: "Fixe une seule action non négociable.", text: "Chaque jour ou chaque semaine, une action simple à réaliser coûte que coûte." },
        { title: "Accepte de faire « simple et constant ».", text: "La régularité bat toujours la complexité." },
      ],
      insight: "Ce n'est pas le fait de savoir plus qui débloque ta situation. C'est le fait de faire suffisamment longtemps pour que ça devienne une stratégie réelle. Une stratégie n'existe pas dans un document — elle existe dans ce que tu fais de manière répétée.",
      challenge: "Pendant les 7 prochains jours : choisis UNE seule action stratégique simple et tiens-la sans exception. 1 post par jour, ou 1 action commerciale par jour, ou 1 contenu structuré tous les 2 jours. Peu importe l'action. Ce qui compte : ne pas changer en cours de route.",
    },

    "🧢 Multicasquette Dérouté": {
      quote: "Je fais mille choses… et personne ne comprend ce que je fais.",
      points: [
        { title: "Tu changes souvent d'idée, de cible, de message.", text: "Un jour tu parles à un type de client, le lendemain à un autre. Puis tu explores une nouvelle offre. Tu ne fais pas ça au hasard — tu es curieux·se, tu comprends vite, tu vois beaucoup de possibilités. Mais à l'extérieur, ça crée de l'incompréhension." },
        { title: "Tu refuses d'entrer dans une case…", text: "Parce que tu sens que tu es plus large que ça, plus riche, plus complexe. Et tu as raison. Mais tu n'as pas encore construit un cadre suffisamment clair pour être compris·e. Résultat : tu restes entre plusieurs positions, sans en occuper une vraiment." },
        { title: "Tu te caches derrière ta polyvalence.", text: "Tu dis « Je fais plein de choses », mais ce que les autres entendent c'est « Je ne comprends pas ce que tu fais exactement ». Dans un monde saturé : flou = invisible, polyvalence non structurée = confusion, richesse non organisée = perte de lisibilité." },
        { title: "Ta communication part dans tous les sens.", text: "Pas parce que tu es désorganisé·e. Mais parce que chaque idée te semble intéressante, chaque direction te semble possible, chaque cible te semble pertinente. Alors tu explores… mais tu ne stabilises pas." },
        { title: "Tu n'as pas encore trouvé ton fil rouge.", text: "C'est là le vrai enjeu : ce n'est pas ton contenu qui est trop riche — c'est ton cadre qui n'est pas assez clair." },
      ],
      currentMessage: "« J'ai beaucoup de choses à proposer… mais je n'ai pas encore trouvé comment les rendre lisibles ensemble. »",
      traits: ["Très curieux·se et polyvalent·e", "Rapide à apprendre et à s'adapter", "Créatif·ve avec beaucoup d'idées", "Frustré·e de ne pas être compris·e", "Allergique à l'enfermement dans une seule identité", "En difficulté pour structurer sa diversité"],
      missing: ["Un fil rouge clair", "Une « porte d'entrée » simple pour te comprendre", "Une manière d'organiser ta polyvalence", "Une identité centrale autour de laquelle tout s'articule", "Transformer ta diversité en force lisible"],
      tips: [
        { title: "Arrête de tout montrer en même temps.", text: "Tu n'as pas besoin de tout dire pour être crédible." },
        { title: "Choisis une porte d'entrée simple.", text: "Les gens doivent pouvoir te comprendre en une phrase." },
        { title: "Organise tes casquettes autour d'un seul axe.", text: "Ce n'est pas la diversité qui pose problème, c'est l'absence de lien entre les éléments." },
        { title: "Assume une hiérarchie dans tes activités.", text: "Tout peut exister… mais tout ne doit pas être mis au même niveau." },
      ],
      insight: "Ce n'est pas en montrant tout ce que tu fais que tu deviens plus clair·e. C'est en choisissant comment tu veux être compris·e en premier. Une identité forte n'est pas une réduction de qui tu es — c'est une porte d'entrée dans ta complexité.",
      challenge: "Pendant les 7 prochains jours : communique tous tes contenus autour d'UN seul angle central, même si tu fais plein de choses différentes. Un problème unique que tu aides à résoudre, une transformation principale que tu apportes, une seule cible prioritaire. Tout doit pouvoir se relier à ce fil rouge.",
    },
  };

  // Cherche le profil correspondant (correspondance partielle sur le nom)
  const profileKey = Object.keys(profiles).find((key) =>
    result.includes(key.replace(/^[^\s]+ /, "").split(" ")[0]) ||
    key.includes(result.replace(/^[^\s]+ /, "").split(" ")[0])
  ) || Object.keys(profiles).find((key) => {
    const keyEmoji = key.split(" ")[0];
    const resultEmoji = result.split(" ")[0];
    return keyEmoji === resultEmoji;
  });

  if (!profileKey) return "";

  const p = profiles[profileKey];

  const pointsHtml = p.points.map((pt, i) => `
    <div class="detail-point">
      <div class="detail-point-title">${i + 1}. ${pt.title}</div>
      <div class="detail-point-text">${pt.text}</div>
    </div>
  `).join("");

  const traitsHtml = p.traits.map(t => `<li>${t}</li>`).join("");
  const missingHtml = p.missing.map(m => `<li>${m}</li>`).join("");
  const tipsHtml = p.tips.map((tip, i) => `
    <div class="detail-point">
      <div class="detail-point-title">${i + 1}. ${tip.title}</div>
      <div class="detail-point-text">${tip.text}</div>
    </div>
  `).join("");

  return `
    <div class="profile-detail">

      <!-- Citation -->
      <div class="detail-quote" style="border-left-color: ${color};">
        <span style="color:${color}; font-weight:700;">"${p.quote}"</span>
      </div>

      <!-- Points -->
      <div class="detail-section">
        ${pointsHtml}
      </div>

      <!-- Ce que ta communication dit -->
      <div class="detail-block" style="border-color:${color}20; background: #0d0d0d;">
        <div class="detail-block-label" style="color:${color};">💬 Ce que ta communication dit actuellement</div>
        <div class="detail-block-value">${p.currentMessage}</div>
      </div>

      <!-- Traits -->
      <div class="detail-block" style="border-color:${color}20; background: #0d0d0d;">
        <div class="detail-block-label" style="color:${color};">🧠 Ce profil est souvent :</div>
        <ul class="detail-list">${traitsHtml}</ul>
      </div>

      <!-- Ce qu'il manque -->
      <div class="detail-block" style="border-color:${color}20; background: #0d0d0d;">
        <div class="detail-block-label" style="color:#ff4d4d;">❌ Ce qu'il te manque :</div>
        <ul class="detail-list">${missingHtml}</ul>
      </div>

      <!-- Conseils -->
      <div class="detail-block" style="border-color:${color}20; background: #0d0d0d;">
        <div class="detail-block-label" style="color:${color};">🛠 Nos conseils :</div>
        ${tipsHtml}
      </div>

      <!-- Déclic -->
      <div class="detail-insight" style="border-color:${color}; background: linear-gradient(135deg, #0d0d0d, #1a1a1a);">
        <div class="detail-block-label" style="color:${color}; margin-bottom:10px;">⚡ Le déclic à avoir :</div>
        <p style="margin:0; color:#e0e0e0; font-size:14px; line-height:1.7;">${p.insight}</p>
      </div>

      <!-- Défi -->
      <div class="detail-insight" style="border-color:${color}40; background: linear-gradient(135deg, #0d0d0d, #111);">
        <div class="detail-block-label" style="color:${color}; margin-bottom:10px;">🎯 Défi à mettre en place maintenant :</div>
        <p style="margin:0; color:#e0e0e0; font-size:14px; line-height:1.7;">${p.challenge}</p>
      </div>

    </div>
  `;
}

// ─────────────────────────────────────────────
// TEMPLATE HTML PDF
// ─────────────────────────────────────────────

function generateHTML({ result, scores, freeAnswer, userName }: any) {
  const profiles = Object.keys(scores);

  const getColor = (p: string) => {
    return p === "🎤 Authentique Bridé·e"
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
  };

  const dominantColor = getColor(result);
  const dominantScore = scores[result] || 0;

  // TRI pour avoir un ordre stable des segments
  const orderedProfiles = [...profiles];

  const segments = orderedProfiles.map((p) => {
    return {
      name: p,
      value: scores[p] || 0,
      color: getColor(p),
    };
  });

  const scoresList = segments
    .map(
      (s) => `
      <div class="score-row">
        <div class="left-score">
          <span class="dot" style="background:${s.color}"></span>
          <span class="score-name">${s.name}</span>
        </div>
        <div class="score-value" style="color:${s.color}">
          ${s.value}/10
        </div>
      </div>
    `
    )
    .join("");

  const profileDetailHtml = getProfileContent(result, dominantColor);

  // ─────────────────────────────
  // JAUJE SEMI-CERCLE SEGMENTÉ
  // ─────────────────────────────
  const radius = 85;
  const circumference = Math.PI * radius;

  const total = segments.length;
  const gap = 2; // petit espace visuel

  const segmentLength = (circumference - gap * total) / total;

  let offset = 0;

  const arcSegments = segments
    .map((s) => {
      const dash = `${segmentLength} ${circumference}`;
      const el = `
        <circle
          cx="100"
          cy="100"
          r="${radius}"
          fill="none"
          stroke="${s.color}"
          stroke-width="14"
          stroke-dasharray="${dash}"
          stroke-dashoffset="-${offset}"
          stroke-linecap="round"
        />
      `;
      offset += segmentLength + gap;
      return el;
    })
    .join("");

  return `
  <html>
  <head>
    <style>
      body {
        margin:0;
        padding:40px;
        background:#000;
        color:#fff;
        font-family:Arial;
      }

                .header {


            border-radius: 28px;


            margin-bottom: 40px;
            padding: 30px;

            border: 1px solid #1f1f1f;

            background:

              linear-gradient(

                180deg,

                #111 0%,

                #080808 100%

              );



            text-align: center;

          }

          .footer {

            margin-top: 50px;

            text-align: center;

            color: #fff;

            font-size: 10px;

          }



      h1 {
        margin:0;
        font-size:26px;
        color:${dominantColor};
      }

      .subtitle {
        color:#aaa;
        font-size:13px;
        margin-bottom:6px;
      }

      /* LAYOUT */
      .layout-top {
        display:flex;
        gap:30px;
        align-items:flex-start;
      }

      .left, .right {
  display: flex;
  flex-direction: column;
          width:340px;
}


      .scores-box {
        background:#0d0d0d;
        border:1px solid #1f1f1f;
        border-radius:16px;
        padding:16px;
        margin-bottom:20px;
      }

      .score-row {
        display:flex;
        justify-content:space-between;
        padding:8px 0;
        font-size:13px;
      }

      .left-score {
        display:flex;
        align-items:center;
        gap:10px;
      }

      .dot {
        width:10px;
        height:10px;
        border-radius:50%;
      }

      .score-name {
        color:#ccc;
      }

      .score-value {
        font-weight:bold;
      }

      /* GAUGE */
      .gauge {
        background:#0d0d0d;
        border-radius:20px;
        padding:20px;
        text-align:center;
        border:1px solid #1f1f1f;
      }

      svg {
        width:100%;
        height:200px;
      }

      .big-score {
        font-size:34px;
        font-weight:bold;
        color:${dominantColor};
        margin-top:-10px;
      }

      @page{
      margin : 30px ;
      background-color : #000
      }
      

      /* DETAIL FULL WIDTH */
      .detail-full {
        margin-top:30px;
        padding: 30px;
        border-radius:16px;
        border: 1px solid #1f1f1f;

            background:

              linear-gradient(

                180deg,

                #111 0%,

                #080808 100%

              );

      }
              .detail-full {
  break-before: auto;
  break-after: auto;
}

.footer { margin-top: 50px; text-align: center; color: #fff; font-size: 15px; } .footer-logo img { width: 140px; margin-bottom: 18px; }
}
    </style>
  </head>

  <body>

  <div class='page'>

    <div class="header">



          <div class="subtitle">

            ✦ PROFIL COMMUNICATION ✦

          </div>



          <h1>

            ${result}

          </h1>



          ${userName

      ? `

                <div class="username">

                  Profil de : ${userName}

                </div>

              `

      : ""

    }



        </div>



    <!-- TOP SECTION -->
    <div class="layout-top">

      <div class="left">
        <div class="scores-box">
          ${scoresList}
        </div>
      </div>

      <div class="right">
        <div class="gauge">

         <svg viewBox="0 0 200 120">

  <!-- BACKGROUND ARC -->
  <path
    d="M20 100 A80 80 0 0 1 180 100"
    stroke="#222"
    stroke-width="14"
    fill="none"
    stroke-linecap="round"
  />

  <!-- MAIN ARC (DOMINANT COLOR) -->
  <path
    d="M20 100 A80 80 0 0 1 180 100"
    stroke="${dominantColor}"
    stroke-width="14"
    fill="none"
    stroke-linecap="round"
    stroke-dasharray="${(Math.PI * 80) * (dominantScore / 10)} ${(Math.PI * 80)}"
  />

</svg>

          <div class="big-score">
            ${dominantScore}/10
          </div>

        </div>
      </div>

    </div>

    <!-- FULL WIDTH DETAIL -->
    <div class="detail-full">
      ${profileDetailHtml}
    </div>

    <div class="footer"> <div class="footer-logo"> <img src="http://localhost:3000/logo-color.png" /> </div> <div> contact@tremplin-entreprendre.fr </div> <div> www.tremplin-entreprendre.fr </div> <div>https://calendly.com/email-tremplin-entreprendre/call-declic?</div> <div style="margin-top:8px;"> Communication • Stratégie • Branding </div> </div>
</div>
  </body>
  </html>
  `;
}