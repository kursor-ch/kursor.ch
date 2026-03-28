import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kursor CH — Politique de confidentialité",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="bg-creme" style={{ minHeight: "100vh" }}>
      <div
        className="mx-auto px-6"
        style={{ maxWidth: 640, paddingTop: 48, paddingBottom: 80 }}
      >
        <h1
          className="font-heading"
          style={{
            fontSize: 32,
            fontWeight: 600,
            color: "#111827",
            marginBottom: 8,
            lineHeight: 1.2,
          }}
        >
          Politique de confidentialité
        </h1>
        <p
          className="font-body"
          style={{
            fontSize: 13,
            fontWeight: 400,
            color: "#9CA3AF",
            marginBottom: 40,
          }}
        >
          Dernière mise à jour : mars 2026
        </p>

        <div
          className="rounded-xl border font-body"
          style={{
            borderColor: "#E5E7EB",
            backgroundColor: "#FFFFFF",
            padding: "16px 20px",
            marginBottom: 40,
            fontSize: 14.5,
            lineHeight: 1.75,
            color: "#4B5563",
          }}
        >
          <p>
            La présente politique décrit comment Kursor CH collecte, traite,
            utilise et protège vos données personnelles. Elle est rédigée en
            conformité avec le{" "}
            <strong style={{ color: "#111827" }}>
              Règlement Général sur la Protection des Données (RGPD — Règlement
              UE 2016/679)
            </strong>{" "}
            et la{" "}
            <strong style={{ color: "#111827" }}>
              Loi fédérale suisse sur la protection des données (nLPD — RS
              235.1)
            </strong>
            , entrée en vigueur le 1er septembre 2023.
          </p>
        </div>

        {/* Section style helpers - using consistent inline styles */}

        {/* 1. Responsable du traitement */}
        <h2
          className="font-heading"
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: "#111827",
            marginTop: 40,
            marginBottom: 16,
            paddingTop: 24,
            borderTop: "1px solid #E5E7EB",
          }}
        >
          1. Responsable du traitement
        </h2>
        <p className="font-body" style={bodyStyle}>
          Le responsable du traitement des données collectées via le site
          kursor.ch et ses sous-domaines est :
        </p>
        <p className="font-body" style={bodyStyle}>
          <strong style={{ color: "#111827" }}>SAVGC Consulting</strong>
          <br />
          Représenté par son fondateur
          <br />
          Email : contact@kursor.ch
          <br />
          Suisse
        </p>
        <p className="font-body" style={bodyStyle}>
          En l&apos;absence de délégué à la protection des données (DPO)
          désigné, toute demande relative à l&apos;exercice de vos droits peut
          être adressée directement à l&apos;adresse indiquée ci-dessus.
        </p>

        {/* 2. Données collectées */}
        <h2 className="font-heading" style={h2Style}>
          2. Données collectées
        </h2>
        <h3 className="font-heading" style={h3Style}>
          2.1 Données collectées directement
        </h3>
        <p className="font-body" style={bodyStyle}>
          Lorsque vous complétez le diagnostic de viabilité sur kursor.ch, les
          données suivantes sont collectées :
        </p>
        <div className="overflow-x-auto" style={{ marginBottom: 20 }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Catégorie</th>
                <th style={thStyle}>Données</th>
                <th style={thStyle}>Finalité</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>
                  <strong style={{ color: "#111827" }}>Identité</strong>
                </td>
                <td style={tdStyle}>Prénom, adresse email</td>
                <td style={tdStyle}>Générer et transmettre votre rapport</td>
              </tr>
              <tr>
                <td style={tdStyle}>
                  <strong style={{ color: "#111827" }}>Projet professionnel</strong>
                </td>
                <td style={tdStyle}>
                  Type de projet (salarié, entrepreneur, frontalier), secteur
                  d&apos;activité, canton visé, horizon temporel
                </td>
                <td style={tdStyle}>
                  Calculer votre score de viabilité et personnaliser les
                  recommandations
                </td>
              </tr>
              <tr>
                <td style={tdStyle}>
                  <strong style={{ color: "#111827" }}>Préparation</strong>
                </td>
                <td style={tdStyle}>
                  Sujets déjà anticipés (LAMal, LPP, fiscalité, logement, RC
                  ménage)
                </td>
                <td style={tdStyle}>
                  Identifier vos angles morts et calibrer le rapport
                </td>
              </tr>
              <tr>
                <td style={tdStyle}>
                  <strong style={{ color: "#111827" }}>Consentements</strong>
                </td>
                <td style={tdStyle}>
                  Choix explicites d&apos;opt-in pour chaque finalité de
                  traitement
                </td>
                <td style={tdStyle}>
                  Respecter vos préférences de contact et de partage
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-heading" style={h3Style}>
          2.2 Données collectées automatiquement
        </h3>
        <p className="font-body" style={bodyStyle}>
          Aucun cookie de suivi publicitaire n&apos;est déposé sur votre
          terminal. L&apos;outil d&apos;analyse statistique utilisé (Plausible) est
          conforme au RGPD et ne collecte ni ne stocke de
          données à caractère personnel. Les données agrégées suivantes sont
          enregistrées :
        </p>
        <ul className="font-body" style={ulStyle}>
          <li style={liStyle}>
            Pages consultées, durée de session, taux de complétion du diagnostic
          </li>
          <li style={liStyle}>
            Pays d&apos;origine de la connexion (géolocalisation au niveau du
            pays uniquement)
          </li>
          <li style={liStyle}>
            Type de terminal et navigateur (données techniques anonymisées)
          </li>
        </ul>
        <p className="font-body" style={bodyStyle}>
          Aucune de ces données ne permet d&apos;identifier un utilisateur
          individuellement.
        </p>

        {/* 3. Bases juridiques */}
        <h2 className="font-heading" style={h2Style}>
          3. Bases juridiques du traitement
        </h2>
        <p className="font-body" style={bodyStyle}>
          Conformément à l&apos;article 6 du RGPD et aux articles 30 à 31 de la
          nLPD, les bases juridiques fondant les traitements de données opérés
          par Kursor CH sont les suivantes :
        </p>
        <div className="overflow-x-auto" style={{ marginBottom: 20 }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Traitement</th>
                <th style={thStyle}>Base juridique</th>
                <th style={thStyle}>Référence</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>
                  Génération du diagnostic et du rapport personnalisé
                </td>
                <td style={tdStyle}>
                  Exécution de mesures précontractuelles à la demande de la
                  personne concernée
                </td>
                <td style={tdStyle}>Art. 6(1)(b) RGPD</td>
              </tr>
              <tr>
                <td style={tdStyle}>
                  Transmission du profil aux partenaires de confiance
                </td>
                <td style={tdStyle}>Consentement explicite</td>
                <td style={tdStyle}>Art. 6(1)(a) RGPD / Art. 6(6) nLPD</td>
              </tr>
              <tr>
                <td style={tdStyle}>
                  Envoi de conseils et actualités par email
                </td>
                <td style={tdStyle}>Consentement explicite</td>
                <td style={tdStyle}>Art. 6(1)(a) RGPD / Art. 6(6) nLPD</td>
              </tr>
              <tr>
                <td style={tdStyle}>
                  Amélioration du service (statistiques agrégées)
                </td>
                <td style={tdStyle}>
                  Intérêt légitime du responsable du traitement
                </td>
                <td style={tdStyle}>Art. 6(1)(f) RGPD / Art. 31(1) nLPD</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 4. Finalités */}
        <h2 className="font-heading" style={h2Style}>
          4. Finalités du traitement
        </h2>
        <p className="font-body" style={bodyStyle}>
          Vos données personnelles sont traitées exclusivement pour les
          finalités suivantes :
        </p>
        <ol className="font-body" style={olStyle}>
          <li style={liStyle}>
            <strong style={{ color: "#111827" }}>Diagnostic et rapport personnalisé</strong> — Calculer votre
            score de viabilité (/100), identifier vos risques, générer et vous
            transmettre un rapport détaillé par email. Ce traitement est
            indispensable à la fourniture du service.
          </li>
          <li style={liStyle}>
            <strong style={{ color: "#111827" }}>Mise en relation avec des partenaires</strong> — Uniquement
            si vous y consentez expressément : transmission de votre profil
            (secteur, canton, horizon, score) à des partenaires de confiance
            (cabinets de recrutement, fiduciaires, conseillers en prévoyance)
            afin que ceux-ci puissent vous proposer un accompagnement adapté.
          </li>
          <li style={liStyle}>
            <strong style={{ color: "#111827" }}>Communications marketing</strong> — Uniquement si vous y
            consentez expressément : envoi de conseils, guides et actualités
            relatifs à l&apos;expatriation en Suisse. Fréquence maximale : 2
            emails par semaine.
          </li>
          <li style={liStyle}>
            <strong style={{ color: "#111827" }}>Amélioration du service</strong> — Analyse statistique
            anonymisée des diagnostics complétés pour affiner l&apos;algorithme
            de scoring et améliorer la pertinence des recommandations. Ces
            données sont systématiquement agrégées et ne permettent pas de vous
            identifier.
          </li>
        </ol>
        <p className="font-body" style={bodyStyle}>
          Vos données ne font l&apos;objet d&apos;
          <strong style={{ color: "#111827" }}>aucune vente</strong> à des tiers. Aucun traitement de
          profilage au sens de l&apos;article 22 du RGPD n&apos;est effectué à
          votre encontre.
        </p>

        {/* 5. Destinataires */}
        <h2 className="font-heading" style={h2Style}>
          5. Destinataires des données
        </h2>
        <p className="font-body" style={bodyStyle}>
          Les données personnelles collectées sont susceptibles d&apos;être
          communiquées aux catégories de destinataires suivantes, dans les
          limites strictes des consentements que vous avez accordés :
        </p>
        <div className="overflow-x-auto" style={{ marginBottom: 20 }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Destinataire</th>
                <th style={thStyle}>Données partagées</th>
                <th style={thStyle}>Condition</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Partenaires d&apos;insertion professionnelle</td>
                <td style={tdStyle}>Prénom, email, secteur, canton, score, horizon</td>
                <td style={tdStyle}>Consentement explicite (case 2)</td>
              </tr>
              <tr>
                <td style={tdStyle}>Partenaires fiduciaires</td>
                <td style={tdStyle}>
                  Prénom, email, type d&apos;activité, canton, score, horizon
                </td>
                <td style={tdStyle}>Consentement explicite (case 2)</td>
              </tr>
              <tr>
                <td style={tdStyle}>Partenaires prévoyance/assurance</td>
                <td style={tdStyle}>Prénom, email, canton, sujets non anticipés</td>
                <td style={tdStyle}>Consentement explicite (case 2)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-heading" style={h3Style}>
          5.1 Sous-traitants techniques
        </h3>
        <p className="font-body" style={bodyStyle}>
          Pour le fonctionnement de la plateforme, les sous-traitants suivants
          interviennent dans le traitement de vos données :
        </p>
        <ul className="font-body" style={ulStyle}>
          <li style={liStyle}>
            <strong style={{ color: "#111827" }}>Airtable</strong> (États-Unis) — Stockage structuré des
            données de leads. Transfert encadré par les clauses contractuelles
            types (SCC) adoptées par la Commission européenne.
          </li>
          <li style={liStyle}>
            <strong style={{ color: "#111827" }}>Brevo</strong> (France, UE) — Envoi transactionnel et
            marketing d&apos;emails.
          </li>
          <li style={liStyle}>
            <strong style={{ color: "#111827" }}>Vercel</strong> (États-Unis) — Hébergement de
            l&apos;application. Aucune donnée personnelle stockée côté serveur
            au-delà des logs techniques éphémères.
          </li>
        </ul>
        <p className="font-body" style={bodyStyle}>
          Chaque sous-traitant est lié par un accord de traitement des données
          (DPA) garantissant un niveau de protection adéquat au sens de
          l&apos;article 28 du RGPD et de l&apos;article 9 de la nLPD.
        </p>

        {/* 6. Transferts */}
        <h2 className="font-heading" style={h2Style}>
          6. Transferts de données hors Suisse et hors EEE
        </h2>
        <p className="font-body" style={bodyStyle}>
          Certains sous-traitants (Airtable, Vercel) sont établis aux
          États-Unis. Ces transferts sont encadrés par :
        </p>
        <ul className="font-body" style={ulStyle}>
          <li style={liStyle}>
            Le <strong style={{ color: "#111827" }}>EU-US Data Privacy Framework</strong> (DPF) pour les
            entités certifiées, et/ou
          </li>
          <li style={liStyle}>
            Les <strong style={{ color: "#111827" }}>clauses contractuelles types</strong> (SCC) de la
            Commission européenne (Décision 2021/914), et/ou
          </li>
          <li style={liStyle}>
            Le{" "}
            <strong style={{ color: "#111827" }}>Swiss-US Data Privacy Framework</strong> reconnu par le
            Conseil fédéral suisse
          </li>
        </ul>
        <p className="font-body" style={bodyStyle}>
          En l&apos;absence de décision d&apos;adéquation applicable, des
          garanties supplémentaires (chiffrement en transit et au repos,
          minimisation des données transférées) sont mises en œuvre conformément
          aux recommandations du PFPDT et du CEPD.
        </p>

        {/* 7. Conservation */}
        <h2 className="font-heading" style={h2Style}>
          7. Durée de conservation
        </h2>
        <div className="overflow-x-auto" style={{ marginBottom: 20 }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Données</th>
                <th style={thStyle}>Durée</th>
                <th style={thStyle}>Justification</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Réponses au diagnostic et score</td>
                <td style={tdStyle}>24 mois à compter de la soumission</td>
                <td style={tdStyle}>
                  Amélioration du modèle de scoring et suivi de la relation
                </td>
              </tr>
              <tr>
                <td style={tdStyle}>Adresse email</td>
                <td style={tdStyle}>
                  24 mois ou jusqu&apos;au retrait du consentement
                </td>
                <td style={tdStyle}>
                  Transmission du rapport et communications autorisées
                </td>
              </tr>
              <tr>
                <td style={tdStyle}>Données de consentement (preuves)</td>
                <td style={tdStyle}>36 mois</td>
                <td style={tdStyle}>
                  Obligation de preuve du consentement (Art. 7(1) RGPD)
                </td>
              </tr>
              <tr>
                <td style={tdStyle}>Données anonymisées (statistiques)</td>
                <td style={tdStyle}>Durée illimitée</td>
                <td style={tdStyle}>
                  Données ne permettant pas d&apos;identification
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="font-body" style={bodyStyle}>
          À l&apos;expiration de ces délais, les données sont supprimées de
          manière sécurisée ou anonymisées de façon irréversible.
        </p>

        {/* 8. Vos droits */}
        <h2 className="font-heading" style={h2Style}>
          8. Vos droits
        </h2>
        <p className="font-body" style={bodyStyle}>
          Conformément au RGPD (articles 15 à 22) et à la nLPD (articles 25 à
          29), vous disposez des droits suivants :
        </p>
        <ul className="font-body" style={ulStyle}>
          <li style={liStyle}>
            <strong style={{ color: "#111827" }}>Droit d&apos;accès</strong> — Obtenir confirmation que vos
            données sont traitées et en recevoir une copie
          </li>
          <li style={liStyle}>
            <strong style={{ color: "#111827" }}>Droit de rectification</strong> — Corriger des données
            inexactes ou incomplètes
          </li>
          <li style={liStyle}>
            <strong style={{ color: "#111827" }}>Droit à l&apos;effacement</strong> — Demander la suppression
            de vos données lorsque le traitement n&apos;est plus nécessaire ou
            que vous retirez votre consentement
          </li>
          <li style={liStyle}>
            <strong style={{ color: "#111827" }}>Droit à la portabilité</strong> — Recevoir vos données dans
            un format structuré, couramment utilisé et lisible par machine
          </li>
          <li style={liStyle}>
            <strong style={{ color: "#111827" }}>Droit d&apos;opposition</strong> — Vous opposer à un
            traitement fondé sur l&apos;intérêt légitime
          </li>
          <li style={liStyle}>
            <strong style={{ color: "#111827" }}>Droit de retrait du consentement</strong> — Retirer à tout
            moment un consentement précédemment accordé, sans effet rétroactif
            sur la licéité du traitement effectué avant le retrait
          </li>
          <li style={liStyle}>
            <strong style={{ color: "#111827" }}>Droit de déposer une réclamation</strong> — Saisir
            l&apos;autorité de contrôle compétente
          </li>
        </ul>

        <h3 className="font-heading" style={h3Style}>
          8.1 Exercice de vos droits
        </h3>
        <p className="font-body" style={bodyStyle}>
          Toute demande peut être adressée par email à{" "}
          <strong style={{ color: "#111827" }}>equipe@kursor.ch</strong> en précisant votre identité et la
          nature de votre demande. Nous nous engageons à y répondre dans un
          délai de <strong style={{ color: "#111827" }}>30 jours</strong>.
        </p>

        <h3 className="font-heading" style={h3Style}>
          8.2 Autorités de contrôle compétentes
        </h3>
        <ul className="font-body" style={ulStyle}>
          <li style={liStyle}>
            <strong style={{ color: "#111827" }}>Suisse :</strong> Préposé fédéral à la protection des
            données et à la transparence (PFPDT)
          </li>
          <li style={liStyle}>
            <strong style={{ color: "#111827" }}>France :</strong> Commission nationale de
            l&apos;informatique et des libertés (CNIL)
          </li>
          <li style={liStyle}>
            <strong style={{ color: "#111827" }}>Belgique :</strong> Autorité de protection des données
            (APD)
          </li>
          <li style={liStyle}>
            <strong style={{ color: "#111827" }}>Luxembourg :</strong> Commission nationale pour la
            protection des données (CNPD)
          </li>
        </ul>

        {/* 9. Sécurité */}
        <h2 className="font-heading" style={h2Style}>
          9. Sécurité des données
        </h2>
        <p className="font-body" style={bodyStyle}>
          Kursor CH met en œuvre des mesures techniques et organisationnelles
          appropriées pour protéger vos données personnelles contre tout accès
          non autorisé, altération, divulgation ou destruction, conformément aux
          principes de « Privacy by Design » et de « Privacy by Default »
          inscrits dans l&apos;article 7 de la nLPD :
        </p>
        <ul className="font-body" style={ulStyle}>
          <li style={liStyle}>
            Chiffrement des données en transit (TLS 1.3) et au repos
          </li>
          <li style={liStyle}>
            Accès restreint aux données sur la base du principe du moindre
            privilège
          </li>
          <li style={liStyle}>
            Authentification renforcée pour l&apos;accès aux interfaces
            d&apos;administration
          </li>
          <li style={liStyle}>
            Aucun stockage de données bancaires ou de mots de passe utilisateur
          </li>
          <li style={liStyle}>Revue périodique des accès et des sous-traitants</li>
        </ul>

        {/* 10. Cookies */}
        <h2 className="font-heading" style={h2Style}>
          10. Cookies et technologies de suivi
        </h2>
        <p className="font-body" style={bodyStyle}>
          Le site kursor.ch{" "}
          <strong style={{ color: "#111827" }}>
            ne dépose aucun cookie publicitaire, de retargeting ou de profilage
          </strong>{" "}
          sur votre terminal.
        </p>
        <p className="font-body" style={bodyStyle}>
          L&apos;outil d&apos;analyse statistique utilisé (Plausible) fonctionne
          sans cookie et sans collecte de données personnelles, en conformité
          avec les lignes directrices du PFPDT et de la CNIL relatives aux
          outils de mesure d&apos;audience exemptés de consentement.
        </p>

        {/* 11. Mineurs */}
        <h2 className="font-heading" style={h2Style}>
          11. Mineurs
        </h2>
        <p className="font-body" style={bodyStyle}>
          Le diagnostic Kursor CH s&apos;adresse à des professionnels majeurs
          envisageant une expatriation. Le service n&apos;est pas destiné aux
          personnes de moins de 18 ans. Aucune donnée n&apos;est collectée
          sciemment auprès de mineurs. Si nous avons connaissance qu&apos;un
          mineur a soumis des données personnelles, celles-ci seront supprimées
          sans délai.
        </p>

        {/* 12. Modification */}
        <h2 className="font-heading" style={h2Style}>
          12. Modification de la présente politique
        </h2>
        <p className="font-body" style={bodyStyle}>
          La présente politique de confidentialité est susceptible d&apos;être
          mise à jour pour refléter l&apos;évolution des traitements ou des
          obligations réglementaires. La date de dernière mise à jour figure en
          haut de ce document. En cas de modification substantielle, une
          notification sera adressée par email aux personnes concernées.
        </p>

        {/* 13. Droit applicable */}
        <h2 className="font-heading" style={h2Style}>
          13. Droit applicable et juridiction
        </h2>
        <p className="font-body" style={bodyStyle}>
          La présente politique est soumise au droit suisse. Tout litige relatif
          à l&apos;interprétation ou à l&apos;exécution de la présente politique
          sera porté devant les tribunaux compétents du canton de domicile du
          responsable du traitement, sous réserve des dispositions impératives du
          droit de la consommation applicables dans le pays de résidence de la
          personne concernée.
        </p>

        {/* Contact box */}
        <div
          className="rounded-xl border font-body"
          style={{
            borderColor: "#E5E7EB",
            backgroundColor: "#FFFFFF",
            padding: "16px 20px",
            marginTop: 40,
            fontSize: 14.5,
            lineHeight: 1.75,
            color: "#4B5563",
          }}
        >
          <p>
            <strong style={{ color: "#111827" }}>Contact :</strong> Pour toute question relative à cette
            politique ou à vos données personnelles, écrivez-nous à{" "}
            <strong style={{ color: "#111827" }}>equipe@kursor.ch</strong>.
          </p>
        </div>

        <Link
          href="/"
          className="inline-block font-body transition-all duration-200 hover:border-amber-600 hover:text-gray-900"
          style={{
            marginTop: 40,
            padding: "12px 24px",
            backgroundColor: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: 10,
            color: "#6B7280",
            fontSize: 13,
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          &larr; Revenir à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}

/* Shared styles */
const bodyStyle: React.CSSProperties = {
  fontSize: 15,
  fontWeight: 400,
  color: "#4B5563",
  lineHeight: 1.8,
  marginBottom: 14,
};

const h2Style: React.CSSProperties = {
  fontSize: 20,
  fontWeight: 600,
  color: "#111827",
  marginTop: 40,
  marginBottom: 16,
  paddingTop: 24,
  borderTop: "1px solid #E5E7EB",
};

const h3Style: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 600,
  color: "#111827",
  marginTop: 24,
  marginBottom: 8,
};

const ulStyle: React.CSSProperties = {
  marginBottom: 14,
  paddingLeft: 20,
  listStyleType: "disc",
};

const olStyle: React.CSSProperties = {
  marginBottom: 14,
  paddingLeft: 20,
  listStyleType: "decimal",
};

const liStyle: React.CSSProperties = {
  marginBottom: 8,
  fontSize: 15,
  lineHeight: 1.8,
  color: "#4B5563",
};

const tableStyle: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  margin: "16px 0 20px",
  fontSize: 13,
};

const thStyle: React.CSSProperties = {
  textAlign: "left",
  padding: "10px 12px",
  backgroundColor: "#F9FAFB",
  color: "#111827",
  fontWeight: 600,
  border: "1px solid #E5E7EB",
};

const tdStyle: React.CSSProperties = {
  padding: "10px 12px",
  border: "1px solid #E5E7EB",
  color: "#4B5563",
  verticalAlign: "top",
};
