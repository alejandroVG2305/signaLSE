import { BASE_VIDEO_URL } from "../constants";

export const questions = [
  // ── WORD_CHOICE ──────────────────────────────────────────────
  {
    questionId: "wc_fam_001",
    signIds: ["sign_familia"],
    type: "WORD_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}familia.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Familia" },
          { id: "opt_2", text: "Padre" },
          { id: "opt_3", text: "Madre" },
          { id: "opt_4", text: "Hijo" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_fam_002",
    signIds: ["sign_padre"],
    type: "WORD_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}padre.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Madre" },
          { id: "opt_2", text: "Padre" },
          { id: "opt_3", text: "Hijo" },
          { id: "opt_4", text: "Familia" },
        ],
        correctOptionId: "opt_2",
      },
    },
  },
  {
    questionId: "wc_fam_003",
    signIds: ["sign_madre"],
    type: "WORD_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}madre.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Padre" },
          { id: "opt_2", text: "Hija" },
          { id: "opt_3", text: "Madre" },
          { id: "opt_4", text: "Familia" },
        ],
        correctOptionId: "opt_3",
      },
    },
  },
  {
    questionId: "wc_fam_004",
    signIds: ["sign_hombre"],
    type: "WORD_CHOICE",
    category: "Familia",
    minLevel: 2,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}hombre.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Mujer" },
          { id: "opt_2", text: "Padre" },
          { id: "opt_3", text: "Hijo" },
          { id: "opt_4", text: "Hombre" },
        ],
        correctOptionId: "opt_4",
      },
    },
  },
  {
    questionId: "wc_fam_005",
    signIds: ["sign_abuelo"],
    type: "WORD_CHOICE",
    category: "Familia",
    minLevel: 2,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}abuelo.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Abuelo" },
          { id: "opt_2", text: "Abuela" },
          { id: "opt_3", text: "Padre" },
          { id: "opt_4", text: "Tío" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_fam_006",
    signIds: ["sign_tio"],
    type: "WORD_CHOICE",
    category: "Familia",
    minLevel: 3,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}tio.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Tía" },
          { id: "opt_2", text: "Tío" },
          { id: "opt_3", text: "Abuelo" },
          { id: "opt_4", text: "Primo" },
        ],
        correctOptionId: "opt_2",
      },
    },
  },
  {
    questionId: "wc_fam_007",
    signIds: ["sign_nieto"],
    type: "WORD_CHOICE",
    category: "Familia",
    minLevel: 4,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}nieto.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Nieta" },
          { id: "opt_2", text: "Hijo" },
          { id: "opt_3", text: "Nieto" },
          { id: "opt_4", text: "Sobrino" },
        ],
        correctOptionId: "opt_3",
      },
    },
  },
  {
    questionId: "wc_fam_008",
    signIds: ["sign_padrastro"],
    type: "WORD_CHOICE",
    category: "Familia",
    minLevel: 7,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}padrastro.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Madrastra" },
          { id: "opt_2", text: "Padre" },
          { id: "opt_3", text: "Suegro" },
          { id: "opt_4", text: "Padrastro" },
        ],
        correctOptionId: "opt_4",
      },
    },
  },
  {
    questionId: "wc_fam_009",
    signIds: ["sign_hermanastra"],
    type: "WORD_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}hermanastra.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Hermanastra" },
          { id: "opt_2", text: "Nieto" },
          { id: "opt_3", text: "Suegro" },
          { id: "opt_4", text: "Hermanastro" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_fam_010",
    signIds: ["sign_nieta"],
    type: "WORD_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}nieta.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Nieta" },
          { id: "opt_2", text: "Suegro" },
          { id: "opt_3", text: "Sobrino" },
          { id: "opt_4", text: "Hombre" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_fam_011",
    signIds: ["sign_padrastro"],
    type: "WORD_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}padrastro.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Padrastro" },
          { id: "opt_2", text: "Abuelo" },
          { id: "opt_3", text: "Padre" },
          { id: "opt_4", text: "Sobrino" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_fam_012",
    signIds: ["sign_hombre"],
    type: "WORD_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}hombre.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Hombre" },
          { id: "opt_2", text: "Madrastra" },
          { id: "opt_3", text: "Madre" },
          { id: "opt_4", text: "Hija" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_fam_013",
    signIds: ["sign_nuera"],
    type: "WORD_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}nuera.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Nuera" },
          { id: "opt_2", text: "Padre" },
          { id: "opt_3", text: "Sobrino" },
          { id: "opt_4", text: "Tía" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_fam_014",
    signIds: ["sign_tia"],
    type: "WORD_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}tia.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Tía" },
          { id: "opt_2", text: "Hermanastro" },
          { id: "opt_3", text: "Mujer" },
          { id: "opt_4", text: "Primo" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_fam_015",
    signIds: ["sign_abuela"],
    type: "WORD_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}abuela.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Abuela" },
          { id: "opt_2", text: "Abuelo" },
          { id: "opt_3", text: "Sobrina" },
          { id: "opt_4", text: "Madre" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_fam_016",
    signIds: ["sign_yerno"],
    type: "WORD_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}yerno.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Yerno" },
          { id: "opt_2", text: "Hombre" },
          { id: "opt_3", text: "Hermanastro" },
          { id: "opt_4", text: "Nuera" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_fam_017",
    signIds: ["sign_sobrino"],
    type: "WORD_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}sobrino.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Sobrino" },
          { id: "opt_2", text: "Tío" },
          { id: "opt_3", text: "Hermanastro" },
          { id: "opt_4", text: "Nieto" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_fam_018",
    signIds: ["sign_hijo"],
    type: "WORD_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}hijo.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Hijo" },
          { id: "opt_2", text: "Tía" },
          { id: "opt_3", text: "Hermanastro" },
          { id: "opt_4", text: "Sobrina" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_fam_019",
    signIds: ["sign_abuelo"],
    type: "WORD_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}abuelo.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Abuelo" },
          { id: "opt_2", text: "Hombre" },
          { id: "opt_3", text: "Primo" },
          { id: "opt_4", text: "Abuela" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_fam_020",
    signIds: ["sign_primo"],
    type: "WORD_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}primo.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Primo" },
          { id: "opt_2", text: "Tío" },
          { id: "opt_3", text: "Hijo" },
          { id: "opt_4", text: "Hombre" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },

  // ── SIGN_CHOICE ──────────────────────────────────────────────
  {
    questionId: "sc_fam_001",
    signIds: ["sign_hijo"],
    type: "SIGN_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Hijo' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}hijo.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}hija.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}padre.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}madre.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_fam_002",
    signIds: ["sign_hija"],
    type: "SIGN_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Hija'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}hijo.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}hija.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}madre.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}familia.mp4` },
        ],
        correctOptionId: "opt_2",
      },
    },
  },
  {
    questionId: "sc_fam_003",
    signIds: ["sign_mujer"],
    type: "SIGN_CHOICE",
    category: "Familia",
    minLevel: 2,
    content: {
      question: "¿Cómo se representa 'Mujer' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}hombre.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}madre.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}mujer.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}abuela.mp4` },
        ],
        correctOptionId: "opt_3",
      },
    },
  },
  {
    questionId: "sc_fam_004",
    signIds: ["sign_abuela"],
    type: "SIGN_CHOICE",
    category: "Familia",
    minLevel: 2,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Abuela'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}abuelo.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}madre.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}tia.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}abuela.mp4` },
        ],
        correctOptionId: "opt_4",
      },
    },
  },
  {
    questionId: "sc_fam_005",
    signIds: ["sign_tia"],
    type: "SIGN_CHOICE",
    category: "Familia",
    minLevel: 3,
    content: {
      question: "¿Cómo se representa 'Tía' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}tia.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}tio.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}abuela.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}madre.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_fam_006",
    signIds: ["sign_prima"],
    type: "SIGN_CHOICE",
    category: "Familia",
    minLevel: 4,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Prima'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}primo.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}prima.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}tia.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}sobrina.mp4` },
        ],
        correctOptionId: "opt_2",
      },
    },
  },
  {
    questionId: "sc_fam_007",
    signIds: ["sign_sobrino"],
    type: "SIGN_CHOICE",
    category: "Familia",
    minLevel: 5,
    content: {
      question: "¿Cómo se representa 'Sobrino' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}sobrina.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}nieto.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}sobrino.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}primo.mp4` },
        ],
        correctOptionId: "opt_3",
      },
    },
  },
  {
    questionId: "sc_fam_008",
    signIds: ["sign_madrastra"],
    type: "SIGN_CHOICE",
    category: "Familia",
    minLevel: 6,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Madrastra'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}padrastro.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}madre.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}suegra.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}madrastra.mp4` },
        ],
        correctOptionId: "opt_4",
      },
    },
  },
  {
    questionId: "sc_fam_009",
    signIds: ["sign_hermanastro"],
    type: "SIGN_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Hermanastro' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}hermanastro.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}nieta.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}tio.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}padrastro.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_fam_010",
    signIds: ["sign_tia"],
    type: "SIGN_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Tía'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}tia.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}suegra.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}nieto.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}madrastra.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_fam_011",
    signIds: ["sign_madrastra"],
    type: "SIGN_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Madrastra' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}madrastra.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}hombre.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}sobrina.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}suegra.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_fam_012",
    signIds: ["sign_mujer"],
    type: "SIGN_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Mujer'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}mujer.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}tia.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}abuelo.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}primo.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_fam_013",
    signIds: ["sign_abuela"],
    type: "SIGN_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Abuela' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}abuela.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}sobrina.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}nieto.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}suegro.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_fam_014",
    signIds: ["sign_nieto"],
    type: "SIGN_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Nieto'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}nieto.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}nieta.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}yerno.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}hija.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_fam_015",
    signIds: ["sign_nieta"],
    type: "SIGN_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Nieta' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}nieta.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}familia.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}primo.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}tio.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_fam_016",
    signIds: ["sign_sobrino"],
    type: "SIGN_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Sobrino'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}sobrino.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}tia.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}primo.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}madrastra.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_fam_017",
    signIds: ["sign_primo"],
    type: "SIGN_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Primo' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}primo.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}madrastra.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}tio.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}abuela.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_fam_018",
    signIds: ["sign_madre"],
    type: "SIGN_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Madre'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}madre.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}nieto.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}abuela.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}sobrina.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_fam_019",
    signIds: ["sign_tio"],
    type: "SIGN_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Tío' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}tio.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}hijo.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}prima.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}tia.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_fam_020",
    signIds: ["sign_yerno"],
    type: "SIGN_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Yerno'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}yerno.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}hijo.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}hermanastro.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}madre.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_fam_021",
    signIds: ["sign_prima"],
    type: "SIGN_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Prima' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}prima.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}hombre.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}nieta.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}madre.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },

  // ── MATCH_CHOICE ─────────────────────────────────────────────
  {
    questionId: "mc_fam_001",
    signIds: ["sign_familia", "sign_padre", "sign_madre", "sign_hijo"],
    type: "MATCH_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}familia.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}padre.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}madre.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}hijo.mp4` },
            ],
            textItems: [
              { id: "text_3", text: "Madre" },
              { id: "text_1", text: "Familia" },
              { id: "text_4", text: "Hijo" },
              { id: "text_2", text: "Padre" },
            ],
          },
        ],
        correctMatches: {
          media_1: "text_1",
          media_2: "text_2",
          media_3: "text_3",
          media_4: "text_4",
        },
      },
    },
  },
  {
    questionId: "mc_fam_002",
    signIds: ["sign_hombre", "sign_mujer", "sign_abuelo", "sign_abuela"],
    type: "MATCH_CHOICE",
    category: "Familia",
    minLevel: 2,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}hombre.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}mujer.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}abuelo.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}abuela.mp4` },
            ],
            textItems: [
              { id: "text_4", text: "Abuela" },
              { id: "text_2", text: "Mujer" },
              { id: "text_1", text: "Hombre" },
              { id: "text_3", text: "Abuelo" },
            ],
          },
        ],
        correctMatches: {
          media_1: "text_1",
          media_2: "text_2",
          media_3: "text_3",
          media_4: "text_4",
        },
      },
    },
  },
  {
    questionId: "mc_fam_003",
    signIds: ["sign_primo", "sign_prima", "sign_nieto", "sign_nieta"],
    type: "MATCH_CHOICE",
    category: "Familia",
    minLevel: 4,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}primo.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}prima.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}nieto.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}nieta.mp4` },
            ],
            textItems: [
              { id: "text_2", text: "Prima" },
              { id: "text_4", text: "Nieta" },
              { id: "text_1", text: "Primo" },
              { id: "text_3", text: "Nieto" },
            ],
          },
        ],
        correctMatches: {
          media_1: "text_1",
          media_2: "text_2",
          media_3: "text_3",
          media_4: "text_4",
        },
      },
    },
  },
  {
    questionId: "mc_fam_004",
    signIds: ["sign_padrastro", "sign_suegra", "sign_suegro", "sign_nuera"],
    type: "MATCH_CHOICE",
    category: "Familia",
    minLevel: 9,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}padrastro.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}suegra.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}suegro.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}nuera.mp4` },
            ],
            textItems: [
              { id: "text_3", text: "Suegro" },
              { id: "text_1", text: "Padrastro" },
              { id: "text_4", text: "Nuera" },
              { id: "text_2", text: "Suegra" },
            ],
          },
        ],
        correctMatches: {
          media_1: "text_1",
          media_2: "text_2",
          media_3: "text_3",
          media_4: "text_4",
        },
      },
    },
  },
  {
    questionId: "mc_fam_005",
    signIds: ["sign_abuelo", "sign_abuela", "sign_familia", "sign_tia"],
    type: "MATCH_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}abuelo.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}abuela.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}familia.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}tia.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Abuelo" },
              { id: "text_3", text: "Familia" },
              { id: "text_4", text: "Tía" },
              { id: "text_2", text: "Abuela" },
            ],
          },
        ],
        correctMatches: {
          media_1: "text_1",
          media_2: "text_2",
          media_3: "text_3",
          media_4: "text_4",
        },
      },
    },
  },
  {
    questionId: "mc_fam_006",
    signIds: ["sign_hija", "sign_primo", "sign_familia", "sign_hombre"],
    type: "MATCH_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}hija.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}primo.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}familia.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}hombre.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Hija" },
              { id: "text_3", text: "Familia" },
              { id: "text_4", text: "Hombre" },
              { id: "text_2", text: "Primo" },
            ],
          },
        ],
        correctMatches: {
          media_1: "text_1",
          media_2: "text_2",
          media_3: "text_3",
          media_4: "text_4",
        },
      },
    },
  },
  {
    questionId: "mc_fam_007",
    signIds: ["sign_abuelo", "sign_tia", "sign_hija", "sign_suegro"],
    type: "MATCH_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}abuelo.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}tia.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}hija.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}suegro.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Abuelo" },
              { id: "text_3", text: "Hija" },
              { id: "text_4", text: "Suegro" },
              { id: "text_2", text: "Tía" },
            ],
          },
        ],
        correctMatches: {
          media_1: "text_1",
          media_2: "text_2",
          media_3: "text_3",
          media_4: "text_4",
        },
      },
    },
  },
  {
    questionId: "mc_fam_008",
    signIds: ["sign_hijo", "sign_abuela", "sign_hermanastro", "sign_abuelo"],
    type: "MATCH_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}hijo.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}abuela.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}hermanastro.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}abuelo.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Hijo" },
              { id: "text_3", text: "Hermanastro" },
              { id: "text_4", text: "Abuelo" },
              { id: "text_2", text: "Abuela" },
            ],
          },
        ],
        correctMatches: {
          media_1: "text_1",
          media_2: "text_2",
          media_3: "text_3",
          media_4: "text_4",
        },
      },
    },
  },
  {
    questionId: "mc_fam_009",
    signIds: ["sign_yerno", "sign_mujer", "sign_padrastro", "sign_madrastra"],
    type: "MATCH_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}yerno.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}mujer.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}padrastro.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}madrastra.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Yerno" },
              { id: "text_3", text: "Padrastro" },
              { id: "text_4", text: "Madrastra" },
              { id: "text_2", text: "Mujer" },
            ],
          },
        ],
        correctMatches: {
          media_1: "text_1",
          media_2: "text_2",
          media_3: "text_3",
          media_4: "text_4",
        },
      },
    },
  },
  {
    questionId: "mc_fam_010",
    signIds: ["sign_hija", "sign_familia", "sign_padrastro", "sign_hombre"],
    type: "MATCH_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}hija.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}familia.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}padrastro.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}hombre.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Hija" },
              { id: "text_3", text: "Padrastro" },
              { id: "text_4", text: "Hombre" },
              { id: "text_2", text: "Familia" },
            ],
          },
        ],
        correctMatches: {
          media_1: "text_1",
          media_2: "text_2",
          media_3: "text_3",
          media_4: "text_4",
        },
      },
    },
  },
  {
    questionId: "mc_fam_011",
    signIds: ["sign_familia", "sign_mujer", "sign_yerno", "sign_nieto"],
    type: "MATCH_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}familia.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}mujer.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}yerno.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}nieto.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Familia" },
              { id: "text_3", text: "Yerno" },
              { id: "text_4", text: "Nieto" },
              { id: "text_2", text: "Mujer" },
            ],
          },
        ],
        correctMatches: {
          media_1: "text_1",
          media_2: "text_2",
          media_3: "text_3",
          media_4: "text_4",
        },
      },
    },
  },
  {
    questionId: "mc_fam_012",
    signIds: ["sign_prima", "sign_primo", "sign_abuelo", "sign_hija"],
    type: "MATCH_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}prima.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}primo.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}abuelo.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}hija.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Prima" },
              { id: "text_3", text: "Abuelo" },
              { id: "text_4", text: "Hija" },
              { id: "text_2", text: "Primo" },
            ],
          },
        ],
        correctMatches: {
          media_1: "text_1",
          media_2: "text_2",
          media_3: "text_3",
          media_4: "text_4",
        },
      },
    },
  },
  {
    questionId: "mc_fam_013",
    signIds: ["sign_abuela", "sign_primo", "sign_nieta", "sign_nieto"],
    type: "MATCH_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}abuela.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}primo.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}nieta.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}nieto.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Abuela" },
              { id: "text_3", text: "Nieta" },
              { id: "text_4", text: "Nieto" },
              { id: "text_2", text: "Primo" },
            ],
          },
        ],
        correctMatches: {
          media_1: "text_1",
          media_2: "text_2",
          media_3: "text_3",
          media_4: "text_4",
        },
      },
    },
  },
  {
    questionId: "mc_fam_014",
    signIds: ["sign_suegra", "sign_tia", "sign_abuela", "sign_padrastro"],
    type: "MATCH_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}suegra.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}tia.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}abuela.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}padrastro.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Suegra" },
              { id: "text_3", text: "Abuela" },
              { id: "text_4", text: "Padrastro" },
              { id: "text_2", text: "Tía" },
            ],
          },
        ],
        correctMatches: {
          media_1: "text_1",
          media_2: "text_2",
          media_3: "text_3",
          media_4: "text_4",
        },
      },
    },
  },
  {
    questionId: "mc_fam_015",
    signIds: ["sign_prima", "sign_madrastra", "sign_suegra", "sign_nuera"],
    type: "MATCH_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}prima.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}madrastra.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}suegra.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}nuera.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Prima" },
              { id: "text_3", text: "Suegra" },
              { id: "text_4", text: "Nuera" },
              { id: "text_2", text: "Madrastra" },
            ],
          },
        ],
        correctMatches: {
          media_1: "text_1",
          media_2: "text_2",
          media_3: "text_3",
          media_4: "text_4",
        },
      },
    },
  },
  {
    questionId: "mc_fam_016",
    signIds: ["sign_suegro", "sign_hermanastro", "sign_suegra", "sign_nieto"],
    type: "MATCH_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}suegro.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}hermanastro.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}suegra.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}nieto.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Suegro" },
              { id: "text_3", text: "Suegra" },
              { id: "text_4", text: "Nieto" },
              { id: "text_2", text: "Hermanastro" },
            ],
          },
        ],
        correctMatches: {
          media_1: "text_1",
          media_2: "text_2",
          media_3: "text_3",
          media_4: "text_4",
        },
      },
    },
  },
  {
    questionId: "mc_fam_017",
    signIds: ["sign_abuela", "sign_mujer", "sign_primo", "sign_madrastra"],
    type: "MATCH_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}abuela.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}mujer.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}primo.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}madrastra.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Abuela" },
              { id: "text_3", text: "Primo" },
              { id: "text_4", text: "Madrastra" },
              { id: "text_2", text: "Mujer" },
            ],
          },
        ],
        correctMatches: {
          media_1: "text_1",
          media_2: "text_2",
          media_3: "text_3",
          media_4: "text_4",
        },
      },
    },
  },
  {
    questionId: "mc_fam_018",
    signIds: ["sign_tio", "sign_sobrino", "sign_hermanastra", "sign_padrastro"],
    type: "MATCH_CHOICE",
    category: "Familia",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}tio.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}sobrino.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}hermanastra.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}padrastro.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Tío" },
              { id: "text_3", text: "Hermanastra" },
              { id: "text_4", text: "Padrastro" },
              { id: "text_2", text: "Sobrino" },
            ],
          },
        ],
        correctMatches: {
          media_1: "text_1",
          media_2: "text_2",
          media_3: "text_3",
          media_4: "text_4",
        },
      },
    },
  },
];
