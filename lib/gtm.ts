/**
 * Helpers pour envoyer des events GTM via window.dataLayer.
 *
 * Tous les events sont pushés dans dataLayer avec un nom standardisé
 * et des propriétés structurées. Ils peuvent ensuite être capturés
 * dans GTM via des Triggers de type "Custom Event" et envoyés vers
 * GA4, Google Ads, Meta, etc.
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export type GtmEvent =
  // Funnel diagnostic
  | "diagnostic_started"
  | "diagnostic_question_answered"
  | "diagnostic_contact_submitted"
  | "diagnostic_completed"
  // Logement funnel-specific events
  | "logement_funnel_started"
  | "logement_step_completed"
  | "logement_contact_shown"
  | "logement_consent_shown"
  | "logement_submitted"
  | "logement_submit_failed"
  | "newsletter_optin_logement"
  // Retraite funnel-specific events
  | "retraite_funnel_started"
  | "retraite_step_completed"
  | "retraite_contact_shown"
  | "retraite_consent_shown"
  | "retraite_submitted"
  | "retraite_submit_failed"
  | "retraite_disqualified"
  | "newsletter_optin_retraite"
  // Conversions
  | "lead_submitted"
  | "newsletter_subscribed"
  // Engagement
  | "cta_click"
  | "external_link_click"
  | "scroll_depth"
  // Cookies
  | "cookie_consent_update";

export type GtmProps = Record<string, string | number | boolean | undefined>;

/**
 * Push un event dans le dataLayer GTM.
 * Safe en SSR : ne fait rien si window/dataLayer n’est pas dispo.
 */
export function pushEvent(event: GtmEvent, props?: GtmProps): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...(props || {}),
  });
}

/**
 * Track un début de funnel (intro → première question).
 */
export function trackDiagnosticStarted(funnel: string): void {
  pushEvent("diagnostic_started", { funnel });
}

/**
 * Track une réponse à une question du diagnostic.
 */
export function trackQuestionAnswered(
  funnel: string,
  questionId: string,
  answer: string,
  step: number,
): void {
  pushEvent("diagnostic_question_answered", {
    funnel,
    question_id: questionId,
    answer,
    step,
  });
}

/**
 * Track la soumission du formulaire de contact.
 */
export function trackContactSubmitted(
  funnel: string,
  optInsAccepted: boolean,
): void {
  pushEvent("diagnostic_contact_submitted", {
    funnel,
    opt_ins_accepted: optInsAccepted,
  });
  // Lead conversion (à utiliser comme conversion Google Ads / Meta)
  pushEvent("lead_submitted", { funnel });
}

/**
 * Track la complétion du diagnostic (affichage des résultats).
 */
export function trackDiagnosticCompleted(
  funnel: string,
  score: number,
  verdict: string,
): void {
  pushEvent("diagnostic_completed", {
    funnel,
    score,
    verdict,
  });
}

/**
 * Track un clic sur un CTA important.
 */
export function trackCtaClick(label: string, location: string): void {
  pushEvent("cta_click", { label, location });
}
