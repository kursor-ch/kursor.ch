import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kursor CH — Politique de confidentialité",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="privacy-page">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .privacy-page {
              --bg: #050505; --card: #0D0D0D; --line: #1C1C1C;
              --amb: #C87F1A; --amb3: #E5A740;
              --w: #F5F1EB; --w2: #C4BEB4; --w3: #918B82; --w4: #5E5952;
              font-family: 'Manrope', -apple-system, sans-serif;
              background: var(--bg); color: var(--w2);
              line-height: 1.75; -webkit-font-smoothing: antialiased;
              font-size: 14.5px; min-height: 100vh;
            }
            .privacy-page .wrap { max-width: 680px; margin: 0 auto; padding: 24px 24px 80px; }
            .privacy-page .hdr { display: flex; align-items: center; gap: 10px; padding-bottom: 32px; border-bottom: 1px solid var(--line); margin-bottom: 40px; }
            .privacy-page .hdr a { font-family: 'Manrope', -apple-system, sans-serif; font-weight: 700; font-size: 15px; color: var(--w); text-decoration: none; }
            .privacy-page h1 { font-family: 'Instrument Serif', Georgia, serif; font-size: 32px; font-weight: 400; color: var(--w); margin-bottom: 8px; line-height: 1.2; }
            .privacy-page .updated { font-size: 12px; color: var(--w4); margin-bottom: 40px; font-weight: 500; }
            .privacy-page h2 { font-family: 'Instrument Serif', Georgia, serif; font-size: 22px; font-weight: 400; color: var(--w); margin-top: 40px; margin-bottom: 16px; padding-top: 24px; border-top: 1px solid var(--line); }
            .privacy-page h2:first-of-type { border-top: none; padding-top: 0; }
            .privacy-page h3 { font-size: 15px; font-weight: 700; color: var(--w); margin-top: 24px; margin-bottom: 8px; }
            .privacy-page p { margin-bottom: 14px; color: var(--w2); }
            .privacy-page ul, .privacy-page ol { margin-bottom: 14px; padding-left: 20px; }
            .privacy-page li { margin-bottom: 6px; color: var(--w2); }
            .privacy-page strong { color: var(--w); font-weight: 600; }
            .privacy-page a { color: var(--amb3); text-decoration: underline; text-underline-offset: 2px; }
            .privacy-page .highlight { background: var(--card); border: 1px solid var(--line); border-radius: 10px; padding: 16px 20px; margin: 20px 0; }
            .privacy-page .highlight p { margin-bottom: 0; }
            .privacy-page table { width: 100%; border-collapse: collapse; margin: 16px 0 20px; font-size: 13px; }
            .privacy-page th { text-align: left; padding: 10px 12px; background: var(--card); color: var(--w); font-weight: 600; border: 1px solid var(--line); }
            .privacy-page td { padding: 10px 12px; border: 1px solid var(--line); color: var(--w2); vertical-align: top; }
            .privacy-page .back { display: inline-block; margin-top: 40px; padding: 12px 24px; background: var(--card); border: 1px solid var(--line); border-radius: 10px; color: var(--w3); font-size: 13px; font-weight: 600; text-decoration: none; transition: all .12s; }
            .privacy-page .back:hover { border-color: var(--amb); color: var(--w); }
          `,
        }}
      />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <div className="wrap">
        <div className="hdr">
          <Link href="/" style={{ textDecoration: "none" }}>
            <span
              style={{
                fontFamily: "'Manrope', -apple-system, sans-serif",
                fontWeight: 700,
                fontSize: 15,
                color: "#F5F1EB",
              }}
            >
              Kursor CH
            </span>
          </Link>
        </div>

        <h1>Politique de confidentialité</h1>
        <p className="updated">Dernière mise à jour : 12 mars 2026</p>

        <div className="highlight">
          <p>
            La présente politique décrit comment Kursor CH collecte, traite,
            utilise et protège vos données personnelles. Elle est rédigée en
            conformité avec le{" "}
            <strong>
              Règlement Général sur la Protection des Données (RGPD — Règlement
              UE 2016/679)
            </strong>{" "}
            et la{" "}
            <strong>
              Loi fédérale suisse sur la protection des données (nLPD — RS
              235.1)
            </strong>
            , entrée en vigueur le 1er septembre 2023.
          </p>
        </div>

        <h2>1. Responsable du traitement</h2>
        <p>
          Le responsable du traitement des données collectées via le site
          kursor.ch et ses sous-domaines est :
        </p>
        <p>
          <strong>SAVGC Consulting</strong>
          <br />
          Représenté par son fondateur
          <br />
          Email : contact@kursor.ch
          <br />
          Suisse
        </p>
        <p>
          En l&apos;absence de délégué à la protection des données (DPO)
          désigné, toute demande relative à l&apos;exercice de vos droits peut
          être adressée directement à l&apos;adresse indiquée ci-dessus.
        </p>

        <h2>2. Données collectées</h2>
        <h3>2.1 Données collectées directement</h3>
        <p>
          Lorsque vous complétez le diagnostic de viabilité sur kursor.ch, les
          données suivantes sont collectées :
        </p>
        <table>
          <thead>
            <tr>
              <th>Catégorie</th>
              <th>Données</th>
              <th>Finalité</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Identité</strong>
              </td>
              <td>Prénom, adresse email</td>
              <td>Générer et transmettre votre rapport</td>
            </tr>
            <tr>
              <td>
                <strong>Projet professionnel</strong>
              </td>
              <td>
                Type de projet (salarié, entrepreneur, frontalier), secteur
                d&apos;activité, canton visé, horizon temporel
              </td>
              <td>
                Calculer votre score de viabilité et personnaliser les
                recommandations
              </td>
            </tr>
            <tr>
              <td>
                <strong>Préparation</strong>
              </td>
              <td>
                Sujets déjà anticipés (LAMal, LPP, fiscalité, logement, RC
                ménage)
              </td>
              <td>
                Identifier vos angles morts et calibrer le rapport
              </td>
            </tr>
            <tr>
              <td>
                <strong>Consentements</strong>
              </td>
              <td>
                Choix explicites d&apos;opt-in pour chaque finalité de
                traitement
              </td>
              <td>
                Respecter vos préférences de contact et de partage
              </td>
            </tr>
          </tbody>
        </table>

        <h3>2.2 Données collectées automatiquement</h3>
        <p>
          Aucun cookie de suivi publicitaire n&apos;est déposé sur votre
          terminal. L&apos;outil d&apos;analyse statistique utilisé (Umami) est
          conforme au RGPD, auto-hébergé, et ne collecte ni ne stocke de
          données à caractère personnel. Les données agrégées suivantes sont
          enregistrées :
        </p>
        <ul>
          <li>
            Pages consultées, durée de session, taux de complétion du diagnostic
          </li>
          <li>
            Pays d&apos;origine de la connexion (géolocalisation au niveau du
            pays uniquement)
          </li>
          <li>
            Type de terminal et navigateur (données techniques anonymisées)
          </li>
        </ul>
        <p>
          Aucune de ces données ne permet d&apos;identifier un utilisateur
          individuellement.
        </p>

        <h2>3. Bases juridiques du traitement</h2>
        <p>
          Conformément à l&apos;article 6 du RGPD et aux articles 30 à 31 de la
          nLPD, les bases juridiques fondant les traitements de données opérés
          par Kursor CH sont les suivantes :
        </p>
        <table>
          <thead>
            <tr>
              <th>Traitement</th>
              <th>Base juridique</th>
              <th>Référence</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Génération du diagnostic et du rapport personnalisé
              </td>
              <td>
                Exécution de mesures précontractuelles à la demande de la
                personne concernée
              </td>
              <td>Art. 6(1)(b) RGPD</td>
            </tr>
            <tr>
              <td>
                Transmission du profil aux partenaires de confiance
              </td>
              <td>Consentement explicite</td>
              <td>Art. 6(1)(a) RGPD / Art. 6(6) nLPD</td>
            </tr>
            <tr>
              <td>
                Envoi de conseils et actualités par email
              </td>
              <td>Consentement explicite</td>
              <td>Art. 6(1)(a) RGPD / Art. 6(6) nLPD</td>
            </tr>
            <tr>
              <td>
                Amélioration du service (statistiques agrégées)
              </td>
              <td>
                Intérêt légitime du responsable du traitement
              </td>
              <td>Art. 6(1)(f) RGPD / Art. 31(1) nLPD</td>
            </tr>
          </tbody>
        </table>

        <h2>4. Finalités du traitement</h2>
        <p>
          Vos données personnelles sont traitées exclusivement pour les
          finalités suivantes :
        </p>
        <ol>
          <li>
            <strong>Diagnostic et rapport personnalisé</strong> — Calculer votre
            score de viabilité (/100), identifier vos risques, générer et vous
            transmettre un rapport détaillé par email. Ce traitement est
            indispensable à la fourniture du service.
          </li>
          <li>
            <strong>Mise en relation avec des partenaires</strong> — Uniquement
            si vous y consentez expressément : transmission de votre profil
            (secteur, canton, horizon, score) à des partenaires de confiance
            (cabinets de recrutement, fiduciaires, conseillers en prévoyance)
            afin que ceux-ci puissent vous proposer un accompagnement adapté.
          </li>
          <li>
            <strong>Communications marketing</strong> — Uniquement si vous y
            consentez expressément : envoi de conseils, guides et actualités
            relatifs à l&apos;expatriation en Suisse. Fréquence maximale : 2
            emails par semaine.
          </li>
          <li>
            <strong>Amélioration du service</strong> — Analyse statistique
            anonymisée des diagnostics complétés pour affiner l&apos;algorithme
            de scoring et améliorer la pertinence des recommandations. Ces
            données sont systématiquement agrégées et ne permettent pas de vous
            identifier.
          </li>
        </ol>
        <p>
          Vos données ne font l&apos;objet d&apos;
          <strong>aucune vente</strong> à des tiers. Aucun traitement de
          profilage au sens de l&apos;article 22 du RGPD n&apos;est effectué à
          votre encontre.
        </p>

        <h2>5. Destinataires des données</h2>
        <p>
          Les données personnelles collectées sont susceptibles d&apos;être
          communiquées aux catégories de destinataires suivantes, dans les
          limites strictes des consentements que vous avez accordés :
        </p>
        <table>
          <thead>
            <tr>
              <th>Destinataire</th>
              <th>Données partagées</th>
              <th>Condition</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Partenaires d&apos;insertion professionnelle</td>
              <td>Prénom, email, secteur, canton, score, horizon</td>
              <td>Consentement explicite (case 2)</td>
            </tr>
            <tr>
              <td>Partenaires fiduciaires</td>
              <td>
                Prénom, email, type d&apos;activité, canton, score, horizon
              </td>
              <td>Consentement explicite (case 2)</td>
            </tr>
            <tr>
              <td>Partenaires prévoyance/assurance</td>
              <td>Prénom, email, canton, sujets non anticipés</td>
              <td>Consentement explicite (case 2)</td>
            </tr>
          </tbody>
        </table>

        <h3>5.1 Sous-traitants techniques</h3>
        <p>
          Pour le fonctionnement de la plateforme, les sous-traitants suivants
          interviennent dans le traitement de vos données :
        </p>
        <ul>
          <li>
            <strong>Tally.so</strong> (Belgique, UE) — Collecte des réponses au
            diagnostic
          </li>
          <li>
            <strong>Airtable</strong> (États-Unis) — Stockage structuré des
            données de leads. Transfert encadré par les clauses contractuelles
            types (SCC) adoptées par la Commission européenne.
          </li>
          <li>
            <strong>Resend</strong> (États-Unis) — Envoi transactionnel et
            marketing d&apos;emails. Transfert encadré par les SCC.
          </li>
          <li>
            <strong>Vercel</strong> (États-Unis) — Hébergement de
            l&apos;application. Aucune donnée personnelle stockée côté serveur
            au-delà des logs techniques éphémères.
          </li>
        </ul>
        <p>
          Chaque sous-traitant est lié par un accord de traitement des données
          (DPA) garantissant un niveau de protection adéquat au sens de
          l&apos;article 28 du RGPD et de l&apos;article 9 de la nLPD.
        </p>

        <h2>6. Transferts de données hors Suisse et hors EEE</h2>
        <p>
          Certains sous-traitants (Airtable, Resend, Vercel) sont établis aux
          États-Unis. Ces transferts sont encadrés par :
        </p>
        <ul>
          <li>
            Le <strong>EU-US Data Privacy Framework</strong> (DPF) pour les
            entités certifiées, et/ou
          </li>
          <li>
            Les <strong>clauses contractuelles types</strong> (SCC) de la
            Commission européenne (Décision 2021/914), et/ou
          </li>
          <li>
            Le{" "}
            <strong>Swiss-US Data Privacy Framework</strong> reconnu par le
            Conseil fédéral suisse
          </li>
        </ul>
        <p>
          En l&apos;absence de décision d&apos;adéquation applicable, des
          garanties supplémentaires (chiffrement en transit et au repos,
          minimisation des données transférées) sont mises en œuvre conformément
          aux recommandations du PFPDT et du CEPD.
        </p>

        <h2>7. Durée de conservation</h2>
        <table>
          <thead>
            <tr>
              <th>Données</th>
              <th>Durée</th>
              <th>Justification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Réponses au diagnostic et score</td>
              <td>24 mois à compter de la soumission</td>
              <td>
                Amélioration du modèle de scoring et suivi de la relation
              </td>
            </tr>
            <tr>
              <td>Adresse email</td>
              <td>
                24 mois ou jusqu&apos;au retrait du consentement
              </td>
              <td>
                Transmission du rapport et communications autorisées
              </td>
            </tr>
            <tr>
              <td>Données de consentement (preuves)</td>
              <td>36 mois</td>
              <td>
                Obligation de preuve du consentement (Art. 7(1) RGPD)
              </td>
            </tr>
            <tr>
              <td>Données anonymisées (statistiques)</td>
              <td>Durée illimitée</td>
              <td>
                Données ne permettant pas d&apos;identification
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          À l&apos;expiration de ces délais, les données sont supprimées de
          manière sécurisée ou anonymisées de façon irréversible.
        </p>

        <h2>8. Vos droits</h2>
        <p>
          Conformément au RGPD (articles 15 à 22) et à la nLPD (articles 25 à
          29), vous disposez des droits suivants :
        </p>
        <ul>
          <li>
            <strong>Droit d&apos;accès</strong> — Obtenir confirmation que vos
            données sont traitées et en recevoir une copie
          </li>
          <li>
            <strong>Droit de rectification</strong> — Corriger des données
            inexactes ou incomplètes
          </li>
          <li>
            <strong>Droit à l&apos;effacement</strong> — Demander la suppression
            de vos données lorsque le traitement n&apos;est plus nécessaire ou
            que vous retirez votre consentement
          </li>
          <li>
            <strong>Droit à la portabilité</strong> — Recevoir vos données dans
            un format structuré, couramment utilisé et lisible par machine
          </li>
          <li>
            <strong>Droit d&apos;opposition</strong> — Vous opposer à un
            traitement fondé sur l&apos;intérêt légitime
          </li>
          <li>
            <strong>Droit de retrait du consentement</strong> — Retirer à tout
            moment un consentement précédemment accordé, sans effet rétroactif
            sur la licéité du traitement effectué avant le retrait
          </li>
          <li>
            <strong>Droit de déposer une réclamation</strong> — Saisir
            l&apos;autorité de contrôle compétente
          </li>
        </ul>

        <h3>8.1 Exercice de vos droits</h3>
        <p>
          Toute demande peut être adressée par email à{" "}
          <strong>contact@kursor.ch</strong> en précisant votre identité et la
          nature de votre demande. Nous nous engageons à y répondre dans un
          délai de <strong>30 jours</strong>.
        </p>

        <h3>8.2 Autorités de contrôle compétentes</h3>
        <ul>
          <li>
            <strong>Suisse :</strong> Préposé fédéral à la protection des
            données et à la transparence (PFPDT) —{" "}
            <a
              href="https://www.edoeb.admin.ch"
              target="_blank"
              rel="noopener noreferrer"
            >
              edoeb.admin.ch
            </a>
          </li>
          <li>
            <strong>France :</strong> Commission nationale de
            l&apos;informatique et des libertés (CNIL) —{" "}
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              cnil.fr
            </a>
          </li>
          <li>
            <strong>Belgique :</strong> Autorité de protection des données
            (APD) —{" "}
            <a
              href="https://www.autoriteprotectiondonnees.be"
              target="_blank"
              rel="noopener noreferrer"
            >
              autoriteprotectiondonnees.be
            </a>
          </li>
          <li>
            <strong>Luxembourg :</strong> Commission nationale pour la
            protection des données (CNPD) —{" "}
            <a
              href="https://cnpd.public.lu"
              target="_blank"
              rel="noopener noreferrer"
            >
              cnpd.public.lu
            </a>
          </li>
        </ul>

        <h2>9. Sécurité des données</h2>
        <p>
          Kursor CH met en œuvre des mesures techniques et organisationnelles
          appropriées pour protéger vos données personnelles contre tout accès
          non autorisé, altération, divulgation ou destruction, conformément aux
          principes de « Privacy by Design » et de « Privacy by Default »
          inscrits dans l&apos;article 7 de la nLPD :
        </p>
        <ul>
          <li>
            Chiffrement des données en transit (TLS 1.3) et au repos
          </li>
          <li>
            Accès restreint aux données sur la base du principe du moindre
            privilège
          </li>
          <li>
            Authentification renforcée pour l&apos;accès aux interfaces
            d&apos;administration
          </li>
          <li>
            Aucun stockage de données bancaires ou de mots de passe utilisateur
          </li>
          <li>Revue périodique des accès et des sous-traitants</li>
        </ul>

        <h2>10. Cookies et technologies de suivi</h2>
        <p>
          Le site kursor.ch{" "}
          <strong>
            ne dépose aucun cookie publicitaire, de retargeting ou de profilage
          </strong>{" "}
          sur votre terminal.
        </p>
        <p>
          Seuls des cookies strictement nécessaires au fonctionnement du service
          (gestion de session, préférences d&apos;affichage) sont susceptibles
          d&apos;être utilisés. Ces cookies ne requièrent pas votre consentement
          au titre de l&apos;article 5(3) de la Directive 2002/58/CE
          (ePrivacy).
        </p>
        <p>
          L&apos;outil d&apos;analyse statistique utilisé (Umami) fonctionne
          sans cookie et sans collecte de données personnelles, en conformité
          avec les lignes directrices du PFPDT et de la CNIL relatives aux
          outils de mesure d&apos;audience exemptés de consentement.
        </p>

        <h2>11. Mineurs</h2>
        <p>
          Le diagnostic Kursor CH s&apos;adresse à des professionnels majeurs
          envisageant une expatriation. Le service n&apos;est pas destiné aux
          personnes de moins de 18 ans. Aucune donnée n&apos;est collectée
          sciemment auprès de mineurs. Si nous avons connaissance qu&apos;un
          mineur a soumis des données personnelles, celles-ci seront supprimées
          sans délai.
        </p>

        <h2>12. Modification de la présente politique</h2>
        <p>
          La présente politique de confidentialité est susceptible d&apos;être
          mise à jour pour refléter l&apos;évolution des traitements ou des
          obligations réglementaires. La date de dernière mise à jour figure en
          haut de ce document. En cas de modification substantielle, une
          notification sera adressée par email aux personnes concernées.
        </p>

        <h2>13. Droit applicable et juridiction</h2>
        <p>
          La présente politique est soumise au droit suisse. Tout litige relatif
          à l&apos;interprétation ou à l&apos;exécution de la présente politique
          sera porté devant les tribunaux compétents du canton de domicile du
          responsable du traitement, sous réserve des dispositions impératives du
          droit de la consommation applicables dans le pays de résidence de la
          personne concernée.
        </p>

        <div className="highlight">
          <p>
            <strong>Contact :</strong> Pour toute question relative à cette
            politique ou à vos données personnelles, écrivez-nous à{" "}
            <strong>contact@kursor.ch</strong>.
          </p>
        </div>

        <Link href="/" className="back">
          ← Revenir au diagnostic
        </Link>
      </div>
    </div>
  );
}
