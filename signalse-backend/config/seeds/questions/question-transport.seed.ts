import { BASE_VIDEO_URL } from "../constants";

export const questions = [
  // ── WORD_CHOICE ──────────────────────────────────────────────
  {
    questionId: "wc_tra_001",
    signIds: ["sign_transportes"],
    type: "WORD_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}transportes.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Transportes" },
          { id: "opt_2", text: "Coche" },
          { id: "opt_3", text: "Autobús" },
          { id: "opt_4", text: "Tren" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_tra_002",
    signIds: ["sign_coche"],
    type: "WORD_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}coche.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Autobús" },
          { id: "opt_2", text: "Coche" },
          { id: "opt_3", text: "Moto" },
          { id: "opt_4", text: "Bicicleta" },
        ],
        correctOptionId: "opt_2",
      },
    },
  },
  {
    questionId: "wc_tra_003",
    signIds: ["sign_autobus"],
    type: "WORD_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}autobus.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Tren" },
          { id: "opt_2", text: "Coche" },
          { id: "opt_3", text: "Autobús" },
          { id: "opt_4", text: "Metro" },
        ],
        correctOptionId: "opt_3",
      },
    },
  },
  {
    questionId: "wc_tra_004",
    signIds: ["sign_tren"],
    type: "WORD_CHOICE",
    category: "Transporte",
    minLevel: 2,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}tren.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Metro" },
          { id: "opt_2", text: "Tranvía" },
          { id: "opt_3", text: "Autobús" },
          { id: "opt_4", text: "Tren" },
        ],
        correctOptionId: "opt_4",
      },
    },
  },
  {
    questionId: "wc_tra_005",
    signIds: ["sign_avion"],
    type: "WORD_CHOICE",
    category: "Transporte",
    minLevel: 3,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}avion.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Avión" },
          { id: "opt_2", text: "Helicóptero" },
          { id: "opt_3", text: "Cohete" },
          { id: "opt_4", text: "Barco" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_tra_006",
    signIds: ["sign_barco"],
    type: "WORD_CHOICE",
    category: "Transporte",
    minLevel: 4,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}barco.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Avión" },
          { id: "opt_2", text: "Barco" },
          { id: "opt_3", text: "Submarino" },
          { id: "opt_4", text: "Metro" },
        ],
        correctOptionId: "opt_2",
      },
    },
  },
  {
    questionId: "wc_tra_007",
    signIds: ["sign_furgoneta"],
    type: "WORD_CHOICE",
    category: "Transporte",
    minLevel: 6,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}furgoneta.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Coche" },
          { id: "opt_2", text: "Moto" },
          { id: "opt_3", text: "Furgoneta" },
          { id: "opt_4", text: "Tren" },
        ],
        correctOptionId: "opt_3",
      },
    },
  },
  {
    questionId: "wc_tra_008",
    signIds: ["sign_helicoptero"],
    type: "WORD_CHOICE",
    category: "Transporte",
    minLevel: 7,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}helicoptero.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Avión" },
          { id: "opt_2", text: "Cohete" },
          { id: "opt_3", text: "Submarino" },
          { id: "opt_4", text: "Helicóptero" },
        ],
        correctOptionId: "opt_4",
      },
    },
  },
  {
    questionId: "wc_tra_009",
    signIds: ["sign_cohete"],
    type: "WORD_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}cohete.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Cohete" },
          { id: "opt_2", text: "Moto" },
          { id: "opt_3", text: "Metro" },
          { id: "opt_4", text: "Tren" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_tra_010",
    signIds: ["sign_moto"],
    type: "WORD_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}moto.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Moto" },
          { id: "opt_2", text: "Coche" },
          { id: "opt_3", text: "Autobús" },
          { id: "opt_4", text: "Submarino" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_tra_011",
    signIds: ["sign_barco"],
    type: "WORD_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}barco.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Barco" },
          { id: "opt_2", text: "Bicicleta" },
          { id: "opt_3", text: "Transportes" },
          { id: "opt_4", text: "Tranvía" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_tra_012",
    signIds: ["sign_submarino"],
    type: "WORD_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}submarino.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Submarino" },
          { id: "opt_2", text: "Moto" },
          { id: "opt_3", text: "Barco" },
          { id: "opt_4", text: "Cohete" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_tra_013",
    signIds: ["sign_bicicleta"],
    type: "WORD_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}bicicleta.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Bicicleta" },
          { id: "opt_2", text: "Tren" },
          { id: "opt_3", text: "Cohete" },
          { id: "opt_4", text: "Coche" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_tra_014",
    signIds: ["sign_tranvia"],
    type: "WORD_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}tranvía.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Tranvía" },
          { id: "opt_2", text: "Submarino" },
          { id: "opt_3", text: "Barco" },
          { id: "opt_4", text: "Moto" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_tra_015",
    signIds: ["sign_tren"],
    type: "WORD_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}tren.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Tren" },
          { id: "opt_2", text: "Furgoneta" },
          { id: "opt_3", text: "Autobús" },
          { id: "opt_4", text: "Metro" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_tra_016",
    signIds: ["sign_avion"],
    type: "WORD_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}avion.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Avión" },
          { id: "opt_2", text: "Tren" },
          { id: "opt_3", text: "Cohete" },
          { id: "opt_4", text: "Furgoneta" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_tra_017",
    signIds: ["sign_helicoptero"],
    type: "WORD_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}helicoptero.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Helicóptero" },
          { id: "opt_2", text: "Tren" },
          { id: "opt_3", text: "Submarino" },
          { id: "opt_4", text: "Avión" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_tra_018",
    signIds: ["sign_metro"],
    type: "WORD_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}metro.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Metro" },
          { id: "opt_2", text: "Barco" },
          { id: "opt_3", text: "Transportes" },
          { id: "opt_4", text: "Tranvía" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_tra_019",
    signIds: ["sign_furgoneta"],
    type: "WORD_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}furgoneta.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Furgoneta" },
          { id: "opt_2", text: "Barco" },
          { id: "opt_3", text: "Autobús" },
          { id: "opt_4", text: "Submarino" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_tra_020",
    signIds: ["sign_transportes"],
    type: "WORD_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}transportes.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Transportes" },
          { id: "opt_2", text: "Avión" },
          { id: "opt_3", text: "Bicicleta" },
          { id: "opt_4", text: "Tranvía" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },

  // ── SIGN_CHOICE ──────────────────────────────────────────────
  {
    questionId: "sc_tra_001",
    signIds: ["sign_bicicleta"],
    type: "SIGN_CHOICE",
    category: "Transporte",
    minLevel: 2,
    content: {
      question: "¿Cómo se representa 'Bicicleta' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}bicicleta.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}moto.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}tren.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}coche.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_tra_002",
    signIds: ["sign_moto"],
    type: "SIGN_CHOICE",
    category: "Transporte",
    minLevel: 3,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Moto'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}bicicleta.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}moto.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}coche.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}avion.mp4` },
        ],
        correctOptionId: "opt_2",
      },
    },
  },
  {
    questionId: "sc_tra_003",
    signIds: ["sign_metro"],
    type: "SIGN_CHOICE",
    category: "Transporte",
    minLevel: 4,
    content: {
      question: "¿Cómo se representa 'Metro' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}tren.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}autobus.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}metro.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}tranvía.mp4` },
        ],
        correctOptionId: "opt_3",
      },
    },
  },
  {
    questionId: "sc_tra_004",
    signIds: ["sign_tranvia"],
    type: "SIGN_CHOICE",
    category: "Transporte",
    minLevel: 5,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Tranvía'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}metro.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}tren.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}autobus.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}tranvía.mp4` },
        ],
        correctOptionId: "opt_4",
      },
    },
  },
  {
    questionId: "sc_tra_005",
    signIds: ["sign_transportes"],
    type: "SIGN_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Transportes' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}transportes.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}coche.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}autobus.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}tren.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_tra_006",
    signIds: ["sign_submarino"],
    type: "SIGN_CHOICE",
    category: "Transporte",
    minLevel: 8,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Submarino'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}barco.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}submarino.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}cohete.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}helicoptero.mp4` },
        ],
        correctOptionId: "opt_2",
      },
    },
  },
  {
    questionId: "sc_tra_007",
    signIds: ["sign_cohete"],
    type: "SIGN_CHOICE",
    category: "Transporte",
    minLevel: 9,
    content: {
      question: "¿Cómo se representa 'Cohete' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}avion.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}helicoptero.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}cohete.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}submarino.mp4` },
        ],
        correctOptionId: "opt_3",
      },
    },
  },
  {
    questionId: "sc_tra_008",
    signIds: ["sign_furgoneta"],
    type: "SIGN_CHOICE",
    category: "Transporte",
    minLevel: 6,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Furgoneta'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}moto.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}helicoptero.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}coche.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}furgoneta.mp4` },
        ],
        correctOptionId: "opt_4",
      },
    },
  },
  {
    questionId: "sc_tra_009",
    signIds: ["sign_moto"],
    type: "SIGN_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Moto' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}moto.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}bicicleta.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}avion.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}tranvía.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_tra_010",
    signIds: ["sign_tren"],
    type: "SIGN_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Tren'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}tren.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}metro.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}transportes.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}moto.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_tra_011",
    signIds: ["sign_cohete"],
    type: "SIGN_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Cohete' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}cohete.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}submarino.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}tren.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}furgoneta.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_tra_012",
    signIds: ["sign_barco"],
    type: "SIGN_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Barco'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}barco.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}moto.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}tren.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}cohete.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_tra_013",
    signIds: ["sign_avion"],
    type: "SIGN_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Avión' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}avion.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}moto.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}bicicleta.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}transportes.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_tra_014",
    signIds: ["sign_helicoptero"],
    type: "SIGN_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Helicóptero'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}helicoptero.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}coche.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}avion.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}moto.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_tra_015",
    signIds: ["sign_autobus"],
    type: "SIGN_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Autobús' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}autobus.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}barco.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}furgoneta.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}metro.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_tra_016",
    signIds: ["sign_metro"],
    type: "SIGN_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Metro'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}metro.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}tranvía.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}helicoptero.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}avion.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_tra_017",
    signIds: ["sign_tranvia"],
    type: "SIGN_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Tranvía' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}tranvía.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}helicoptero.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}furgoneta.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}autobus.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_tra_018",
    signIds: ["sign_furgoneta"],
    type: "SIGN_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Furgoneta'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}furgoneta.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}autobus.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}coche.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}barco.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_tra_019",
    signIds: ["sign_coche"],
    type: "SIGN_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Coche' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}coche.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}autobus.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}cohete.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}submarino.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_tra_020",
    signIds: ["sign_submarino"],
    type: "SIGN_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Submarino'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}submarino.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}moto.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}helicoptero.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}transportes.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_tra_021",
    signIds: ["sign_bicicleta"],
    type: "SIGN_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Bicicleta' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}bicicleta.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}moto.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}coche.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}tranvía.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_tra_022",
    signIds: ["sign_furgoneta"],
    type: "SIGN_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Furgoneta'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}furgoneta.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}tren.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}helicoptero.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}moto.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },

  // ── MATCH_CHOICE ─────────────────────────────────────────────
  {
    questionId: "mc_tra_001",
    signIds: ["sign_coche", "sign_autobus", "sign_tren", "sign_bicicleta"],
    type: "MATCH_CHOICE",
    category: "Transporte",
    minLevel: 2,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}coche.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}autobus.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}tren.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}bicicleta.mp4` },
            ],
            textItems: [
              { id: "text_3", text: "Tren" },
              { id: "text_1", text: "Coche" },
              { id: "text_4", text: "Bicicleta" },
              { id: "text_2", text: "Autobús" },
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
    questionId: "mc_tra_002",
    signIds: ["sign_avion", "sign_moto", "sign_barco", "sign_metro"],
    type: "MATCH_CHOICE",
    category: "Transporte",
    minLevel: 4,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}avion.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}moto.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}barco.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}metro.mp4` },
            ],
            textItems: [
              { id: "text_2", text: "Moto" },
              { id: "text_4", text: "Metro" },
              { id: "text_1", text: "Avión" },
              { id: "text_3", text: "Barco" },
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
    questionId: "mc_tra_003",
    signIds: ["sign_tranvia", "sign_furgoneta", "sign_helicoptero", "sign_submarino"],
    type: "MATCH_CHOICE",
    category: "Transporte",
    minLevel: 8,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}tranvía.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}furgoneta.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}helicoptero.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}submarino.mp4` },
            ],
            textItems: [
              { id: "text_4", text: "Submarino" },
              { id: "text_2", text: "Furgoneta" },
              { id: "text_1", text: "Tranvía" },
              { id: "text_3", text: "Helicóptero" },
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
    questionId: "mc_tra_004",
    signIds: ["sign_coche", "sign_moto", "sign_barco", "sign_helicoptero"],
    type: "MATCH_CHOICE",
    category: "Transporte",
    minLevel: 7,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}coche.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}moto.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}barco.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}helicoptero.mp4` },
            ],
            textItems: [
              { id: "text_3", text: "Barco" },
              { id: "text_1", text: "Coche" },
              { id: "text_4", text: "Helicóptero" },
              { id: "text_2", text: "Moto" },
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
    questionId: "mc_tra_005",
    signIds: ["sign_submarino", "sign_tren", "sign_tranvia", "sign_barco"],
    type: "MATCH_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}submarino.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}tren.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}tranvía.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}barco.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Submarino" },
              { id: "text_3", text: "Tranvía" },
              { id: "text_4", text: "Barco" },
              { id: "text_2", text: "Tren" },
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
    questionId: "mc_tra_006",
    signIds: ["sign_moto", "sign_autobus", "sign_helicoptero", "sign_barco"],
    type: "MATCH_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}moto.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}autobus.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}helicoptero.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}barco.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Moto" },
              { id: "text_3", text: "Helicóptero" },
              { id: "text_4", text: "Barco" },
              { id: "text_2", text: "Autobús" },
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
    questionId: "mc_tra_007",
    signIds: ["sign_tren", "sign_tranvia", "sign_furgoneta", "sign_metro"],
    type: "MATCH_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}tren.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}tranvía.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}furgoneta.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}metro.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Tren" },
              { id: "text_3", text: "Furgoneta" },
              { id: "text_4", text: "Metro" },
              { id: "text_2", text: "Tranvía" },
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
    questionId: "mc_tra_008",
    signIds: ["sign_tren", "sign_avion", "sign_moto", "sign_cohete"],
    type: "MATCH_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}tren.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}avion.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}moto.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}cohete.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Tren" },
              { id: "text_3", text: "Moto" },
              { id: "text_4", text: "Cohete" },
              { id: "text_2", text: "Avión" },
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
    questionId: "mc_tra_009",
    signIds: ["sign_coche", "sign_tren", "sign_helicoptero", "sign_bicicleta"],
    type: "MATCH_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}coche.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}tren.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}helicoptero.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}bicicleta.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Coche" },
              { id: "text_3", text: "Helicóptero" },
              { id: "text_4", text: "Bicicleta" },
              { id: "text_2", text: "Tren" },
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
    questionId: "mc_tra_010",
    signIds: ["sign_transportes", "sign_barco", "sign_autobus", "sign_submarino"],
    type: "MATCH_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}transportes.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}barco.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}autobus.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}submarino.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Transportes" },
              { id: "text_3", text: "Autobús" },
              { id: "text_4", text: "Submarino" },
              { id: "text_2", text: "Barco" },
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
    questionId: "mc_tra_011",
    signIds: ["sign_tranvia", "sign_tren", "sign_barco", "sign_moto"],
    type: "MATCH_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}tranvía.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}tren.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}barco.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}moto.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Tranvía" },
              { id: "text_3", text: "Barco" },
              { id: "text_4", text: "Moto" },
              { id: "text_2", text: "Tren" },
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
    questionId: "mc_tra_012",
    signIds: ["sign_autobus", "sign_barco", "sign_furgoneta", "sign_helicoptero"],
    type: "MATCH_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}autobus.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}barco.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}furgoneta.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}helicoptero.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Autobús" },
              { id: "text_3", text: "Furgoneta" },
              { id: "text_4", text: "Helicóptero" },
              { id: "text_2", text: "Barco" },
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
    questionId: "mc_tra_013",
    signIds: ["sign_coche", "sign_submarino", "sign_furgoneta", "sign_bicicleta"],
    type: "MATCH_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}coche.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}submarino.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}furgoneta.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}bicicleta.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Coche" },
              { id: "text_3", text: "Furgoneta" },
              { id: "text_4", text: "Bicicleta" },
              { id: "text_2", text: "Submarino" },
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
    questionId: "mc_tra_014",
    signIds: ["sign_avion", "sign_tren", "sign_autobus", "sign_cohete"],
    type: "MATCH_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}avion.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}tren.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}autobus.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}cohete.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Avión" },
              { id: "text_3", text: "Autobús" },
              { id: "text_4", text: "Cohete" },
              { id: "text_2", text: "Tren" },
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
    questionId: "mc_tra_015",
    signIds: ["sign_avion", "sign_furgoneta", "sign_metro", "sign_tranvia"],
    type: "MATCH_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}avion.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}furgoneta.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}metro.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}tranvía.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Avión" },
              { id: "text_3", text: "Metro" },
              { id: "text_4", text: "Tranvía" },
              { id: "text_2", text: "Furgoneta" },
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
    questionId: "mc_tra_016",
    signIds: ["sign_helicoptero", "sign_tren", "sign_furgoneta", "sign_transportes"],
    type: "MATCH_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}helicoptero.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}tren.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}furgoneta.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}transportes.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Helicóptero" },
              { id: "text_3", text: "Furgoneta" },
              { id: "text_4", text: "Transportes" },
              { id: "text_2", text: "Tren" },
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
    questionId: "mc_tra_017",
    signIds: ["sign_helicoptero", "sign_barco", "sign_moto", "sign_metro"],
    type: "MATCH_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}helicoptero.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}barco.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}moto.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}metro.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Helicóptero" },
              { id: "text_3", text: "Moto" },
              { id: "text_4", text: "Metro" },
              { id: "text_2", text: "Barco" },
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
    questionId: "mc_tra_018",
    signIds: ["sign_transportes", "sign_furgoneta", "sign_autobus", "sign_submarino"],
    type: "MATCH_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}transportes.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}furgoneta.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}autobus.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}submarino.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Transportes" },
              { id: "text_3", text: "Autobús" },
              { id: "text_4", text: "Submarino" },
              { id: "text_2", text: "Furgoneta" },
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
    questionId: "mc_tra_019",
    signIds: ["sign_cohete", "sign_submarino", "sign_moto", "sign_bicicleta"],
    type: "MATCH_CHOICE",
    category: "Transporte",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}cohete.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}submarino.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}moto.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}bicicleta.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Cohete" },
              { id: "text_3", text: "Moto" },
              { id: "text_4", text: "Bicicleta" },
              { id: "text_2", text: "Submarino" },
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
