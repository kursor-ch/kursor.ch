export type Answers = Record<string, string>;

export interface ScoreBreakdown {
  profil: number;
  projet: number;
  financier: number;
  preparation: number;
  total: number;
}

const Q1_POINTS: Record<string, number> = {
  cdi: 12,
  cdd: 8,
  recherche: 6,
  freelance: 4,
};

const Q2_POINTS: Record<string, number> = {
  tech: 10,
  pharma_sante: 10,
  ingenierie: 9,
  horlogerie: 9,
  btp: 7,
  finance: 6,
  conseil: 6,
  commerce: 4,
  hotellerie: 4,
  education: 4,
  autre: 4,
};

const Q3_POINTS: Record<string, number> = {
  "2500_3k": 8,
  "3k_4k": 8,
  "2k_2500": 5,
  gt4k: 5,
  lt2k: 2,
};

const Q4_POINTS: Record<string, number> = {
  geneve: 10,
  vaud: 10,
  bale: 8,
  neuchatel: 7,
  jura: 7,
  fribourg: 6,
  valais: 6,
  berne: 6,
  zurich: 5,
  tessin: 4,
  indecis: 3,
};

const Q5_POINTS: Record<string, number> = {
  lt3m: 10,
  "3_6m": 8,
  exploration: 3,
};

const Q6_POINTS: Record<string, number> = {
  gt5k: 20,
  "4k_5k": 16,
  "3k_4k": 12,
  lt3k: 6,
};

const Q7_POINTS: Record<string, number> = {
  offre: 10,
  entretiens: 8,
  postule: 6,
  recherches: 3,
};

const Q8_POINTS: Record<string, number> = {
  tres_bien: 18,
  quelques: 10,
  aucune: 3,
};

const HIGH_REVENUE = new Set(["3k_4k", "gt4k"]);

export function computeScore(answers: Answers): ScoreBreakdown {
  let q1 = Q1_POINTS[answers.statut] ?? 0;

  // Freelancer bonus: +6 if freelance AND revenu >= 3k€
  if (answers.statut === "freelance" && HIGH_REVENUE.has(answers.revenu)) {
    q1 = 10; // 4 base + 6 bonus
  }

  const q2 = Q2_POINTS[answers.secteur] ?? 0;
  const q3 = Q3_POINTS[answers.revenu] ?? 0;
  const profil = Math.min(30, q1 + q2 + q3);

  const q4 = Q4_POINTS[answers.canton] ?? 0;
  const q5 = Q5_POINTS[answers.horizon] ?? 0;
  const q7 = Q7_POINTS[answers.demarches] ?? 0;
  const projet = Math.min(30, q4 + q5 + q7);

  const financier = Q6_POINTS[answers.budget] ?? 0;
  const preparation = Q8_POINTS[answers.connaissance] ?? 0;

  return {
    profil,
    projet,
    financier,
    preparation,
    total: profil + projet + financier + preparation,
  };
}
