import { BASE_VIDEO_URL } from "../constants";

export const questions = [
  // ── WORD_CHOICE ──────────────────────────────────────────────
  {
    questionId: "wc_cor_001",
    signIds: ["sign_hola"],
    type: "WORD_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}hola.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Hola" },
          { id: "opt_2", text: "Adiós" },
          { id: "opt_3", text: "Gracias" },
          { id: "opt_4", text: "Por favor" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_cor_002",
    signIds: ["sign_gracias"],
    type: "WORD_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}gracias.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Por favor" },
          { id: "opt_2", text: "Gracias" },
          { id: "opt_3", text: "Sí" },
          { id: "opt_4", text: "Hola" },
        ],
        correctOptionId: "opt_2",
      },
    },
  },
  {
    questionId: "wc_cor_003",
    signIds: ["sign_si"],
    type: "WORD_CHOICE",
    category: "Cortesía",
    minLevel: 2,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}si.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "No" },
          { id: "opt_2", text: "Bien" },
          { id: "opt_3", text: "Sí" },
          { id: "opt_4", text: "Mal" },
        ],
        correctOptionId: "opt_3",
      },
    },
  },
  {
    questionId: "wc_cor_004",
    signIds: ["sign_bien"],
    type: "WORD_CHOICE",
    category: "Cortesía",
    minLevel: 2,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}bien.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Mal" },
          { id: "opt_2", text: "Regular" },
          { id: "opt_3", text: "¿Qué tal?" },
          { id: "opt_4", text: "Bien" },
        ],
        correctOptionId: "opt_4",
      },
    },
  },
  {
    questionId: "wc_cor_005",
    signIds: ["sign_buenos_dias"],
    type: "WORD_CHOICE",
    category: "Cortesía",
    minLevel: 3,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}buenos_dias.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Buenos días" },
          { id: "opt_2", text: "Buenas tardes" },
          { id: "opt_3", text: "Buenas noches" },
          { id: "opt_4", text: "Bienvenido" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_cor_006",
    signIds: ["sign_buenas_noches"],
    type: "WORD_CHOICE",
    category: "Cortesía",
    minLevel: 4,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}buenas_noches.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Buenos días" },
          { id: "opt_2", text: "Buenas noches" },
          { id: "opt_3", text: "Buenas tardes" },
          { id: "opt_4", text: "Adiós" },
        ],
        correctOptionId: "opt_2",
      },
    },
  },
  {
    questionId: "wc_cor_007",
    signIds: ["sign_de_nada"],
    type: "WORD_CHOICE",
    category: "Cortesía",
    minLevel: 6,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}de_nada.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Gracias" },
          { id: "opt_2", text: "Por favor" },
          { id: "opt_3", text: "De nada" },
          { id: "opt_4", text: "Encantado" },
        ],
        correctOptionId: "opt_3",
      },
    },
  },
  {
    questionId: "wc_cor_008",
    signIds: ["sign_como_te_llamas"],
    type: "WORD_CHOICE",
    category: "Cortesía",
    minLevel: 7,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}como_te_llamas.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "¿Qué tal?" },
          { id: "opt_2", text: "¿Necesitas algo?" },
          { id: "opt_3", text: "¿Perdón?" },
          { id: "opt_4", text: "¿Cómo te llamas?" },
        ],
        correctOptionId: "opt_4",
      },
    },
  },
  {
    questionId: "wc_cor_009",
    signIds: ["sign_bienvenido"],
    type: "WORD_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}bienvenido.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Bienvenido" },
          { id: "opt_2", text: "Encantado" },
          { id: "opt_3", text: "Sí" },
          { id: "opt_4", text: "Gracias" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_cor_010",
    signIds: ["sign_te_puedo_ayudar"],
    type: "WORD_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}te_puedo_ayudar.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "¿Te puedo ayudar?" },
          { id: "opt_2", text: "Encantado" },
          { id: "opt_3", text: "¿Cómo te llamas?" },
          { id: "opt_4", text: "Sí" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_cor_011",
    signIds: ["sign_si"],
    type: "WORD_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}si.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Sí" },
          { id: "opt_2", text: "Por favor" },
          { id: "opt_3", text: "Bien" },
          { id: "opt_4", text: "Buenos días" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_cor_012",
    signIds: ["sign_buenos_dias"],
    type: "WORD_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}buenos_dias.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Buenos días" },
          { id: "opt_2", text: "Bienvenido" },
          { id: "opt_3", text: "Buenas tardes" },
          { id: "opt_4", text: "¿Te puedo ayudar?" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_cor_013",
    signIds: ["sign_que_tal"],
    type: "WORD_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}que_tal.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "¿Qué tal?" },
          { id: "opt_2", text: "No" },
          { id: "opt_3", text: "¿Perdón?" },
          { id: "opt_4", text: "¿Necesitas algo?" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_cor_014",
    signIds: ["sign_como_te_llamas"],
    type: "WORD_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}como_te_llamas.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "¿Cómo te llamas?" },
          { id: "opt_2", text: "Hasta la vista" },
          { id: "opt_3", text: "Bienvenido" },
          { id: "opt_4", text: "Mal" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_cor_015",
    signIds: ["sign_por_favor"],
    type: "WORD_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}por_favor.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Por favor" },
          { id: "opt_2", text: "Bienvenido" },
          { id: "opt_3", text: "Regular" },
          { id: "opt_4", text: "Bien" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_cor_016",
    signIds: ["sign_de_nada"],
    type: "WORD_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}de_nada.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "De nada" },
          { id: "opt_2", text: "¿Necesitas algo?" },
          { id: "opt_3", text: "¿Qué tal?" },
          { id: "opt_4", text: "Regular" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_cor_017",
    signIds: ["sign_adios"],
    type: "WORD_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}adios.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Adiós" },
          { id: "opt_2", text: "¿Te puedo ayudar?" },
          { id: "opt_3", text: "Mal" },
          { id: "opt_4", text: "Buenas noches" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_cor_018",
    signIds: ["sign_hasta_la_vista"],
    type: "WORD_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}hasta_la_vista.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Hasta la vista" },
          { id: "opt_2", text: "¿Cómo te llamas?" },
          { id: "opt_3", text: "Hola" },
          { id: "opt_4", text: "Buenas tardes" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_cor_019",
    signIds: ["sign_regular"],
    type: "WORD_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}regular.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Regular" },
          { id: "opt_2", text: "¿Qué tal?" },
          { id: "opt_3", text: "¿Te puedo ayudar?" },
          { id: "opt_4", text: "Encantado" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_cor_020",
    signIds: ["sign_mal"],
    type: "WORD_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}mal.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Mal" },
          { id: "opt_2", text: "¿Cómo te llamas?" },
          { id: "opt_3", text: "Encantado" },
          { id: "opt_4", text: "De nada" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_cor_021",
    signIds: ["sign_necesitas_algo"],
    type: "WORD_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}necesitas_algo.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "¿Necesitas algo?" },
          { id: "opt_2", text: "No" },
          { id: "opt_3", text: "Sí" },
          { id: "opt_4", text: "¿Te puedo ayudar?" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },

  // ── SIGN_CHOICE ──────────────────────────────────────────────
  {
    questionId: "sc_cor_001",
    signIds: ["sign_adios"],
    type: "SIGN_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Adiós' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}adios.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}hola.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}hasta_la_vista.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}gracias.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_cor_002",
    signIds: ["sign_por_favor"],
    type: "SIGN_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Por favor'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}gracias.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}por_favor.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}de_nada.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}bien.mp4` },
        ],
        correctOptionId: "opt_2",
      },
    },
  },
  {
    questionId: "sc_cor_003",
    signIds: ["sign_no"],
    type: "SIGN_CHOICE",
    category: "Cortesía",
    minLevel: 2,
    content: {
      question: "¿Cómo se representa 'No' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}si.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}mal.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}no.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}regular.mp4` },
        ],
        correctOptionId: "opt_3",
      },
    },
  },
  {
    questionId: "sc_cor_004",
    signIds: ["sign_mal"],
    type: "SIGN_CHOICE",
    category: "Cortesía",
    minLevel: 3,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Mal'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}bien.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}no.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}regular.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}mal.mp4` },
        ],
        correctOptionId: "opt_4",
      },
    },
  },
  {
    questionId: "sc_cor_005",
    signIds: ["sign_bienvenido"],
    type: "SIGN_CHOICE",
    category: "Cortesía",
    minLevel: 3,
    content: {
      question: "¿Cómo se representa 'Bienvenido' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}bienvenido.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}buenos_dias.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}hola.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}encantado.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_cor_006",
    signIds: ["sign_que_tal"],
    type: "SIGN_CHOICE",
    category: "Cortesía",
    minLevel: 5,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de '¿Qué tal?'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}regular.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}que_tal.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}bien.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}como_te_llamas.mp4` },
        ],
        correctOptionId: "opt_2",
      },
    },
  },
  {
    questionId: "sc_cor_007",
    signIds: ["sign_hasta_la_vista"],
    type: "SIGN_CHOICE",
    category: "Cortesía",
    minLevel: 7,
    content: {
      question: "¿Cómo se representa 'Hasta la vista' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}adios.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}hola.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}hasta_la_vista.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}encantado.mp4` },
        ],
        correctOptionId: "opt_3",
      },
    },
  },
  {
    questionId: "sc_cor_008",
    signIds: ["sign_perdon_pregunta"],
    type: "SIGN_CHOICE",
    category: "Cortesía",
    minLevel: 9,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de '¿Perdón?'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}necesitas_algo.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}te_puedo_ayudar.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}como_te_llamas.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}perdon_pregunta.mp4` },
        ],
        correctOptionId: "opt_4",
      },
    },
  },
  {
    questionId: "sc_cor_009",
    signIds: ["sign_que_tal"],
    type: "SIGN_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa '¿Qué tal?' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}que_tal.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}gracias.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}encantado.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}mal.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_cor_010",
    signIds: ["sign_regular"],
    type: "SIGN_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Regular'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}regular.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}gracias.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}por_favor.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}si.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_cor_011",
    signIds: ["sign_no"],
    type: "SIGN_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'No' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}no.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}buenos_dias.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}encantado.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}como_te_llamas.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_cor_012",
    signIds: ["sign_buenas_tardes"],
    type: "SIGN_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Buenas tardes'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}buenas_tardes.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}buenas_noches.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}bienvenido.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}de_nada.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_cor_013",
    signIds: ["sign_hola"],
    type: "SIGN_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Hola' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}hola.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}de_nada.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}bien.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}como_te_llamas.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_cor_014",
    signIds: ["sign_bien"],
    type: "SIGN_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Bien'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}bien.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}bienvenido.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}gracias.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}encantado.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_cor_015",
    signIds: ["sign_de_nada"],
    type: "SIGN_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'De nada' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}de_nada.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}buenas_noches.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}gracias.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}adios.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_cor_016",
    signIds: ["sign_perdon_pregunta"],
    type: "SIGN_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de '¿Perdón?'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}perdon_pregunta.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}adios.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}buenas_noches.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}gracias.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_cor_017",
    signIds: ["sign_como_te_llamas"],
    type: "SIGN_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa '¿Cómo te llamas?' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}como_te_llamas.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}hola.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}de_nada.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}que_tal.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_cor_018",
    signIds: ["sign_necesitas_algo"],
    type: "SIGN_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de '¿Necesitas algo?'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}necesitas_algo.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}no.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}si.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}buenas_noches.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_cor_019",
    signIds: ["sign_te_puedo_ayudar"],
    type: "SIGN_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa '¿Te puedo ayudar?' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}te_puedo_ayudar.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}no.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}buenas_tardes.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}encantado.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_cor_020",
    signIds: ["sign_encantado"],
    type: "SIGN_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Encantado'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}encantado.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}buenas_noches.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}mal.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}hasta_la_vista.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_cor_021",
    signIds: ["sign_buenos_dias"],
    type: "SIGN_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Buenos días' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}buenos_dias.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}no.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}bien.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}hola.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },

  // ── MATCH_CHOICE ─────────────────────────────────────────────
  {
    questionId: "mc_cor_001",
    signIds: ["sign_hola", "sign_adios", "sign_gracias", "sign_por_favor"],
    type: "MATCH_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}hola.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}adios.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}gracias.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}por_favor.mp4` },
            ],
            textItems: [
              { id: "text_3", text: "Gracias" },
              { id: "text_1", text: "Hola" },
              { id: "text_4", text: "Por favor" },
              { id: "text_2", text: "Adiós" },
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
    questionId: "mc_cor_002",
    signIds: ["sign_si", "sign_no", "sign_bien", "sign_mal"],
    type: "MATCH_CHOICE",
    category: "Cortesía",
    minLevel: 3,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}si.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}no.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}bien.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}mal.mp4` },
            ],
            textItems: [
              { id: "text_2", text: "No" },
              { id: "text_4", text: "Mal" },
              { id: "text_1", text: "Sí" },
              { id: "text_3", text: "Bien" },
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
    questionId: "mc_cor_003",
    signIds: ["sign_buenas_tardes", "sign_buenas_noches", "sign_que_tal", "sign_regular"],
    type: "MATCH_CHOICE",
    category: "Cortesía",
    minLevel: 5,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}buenas_tardes.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}buenas_noches.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}que_tal.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}regular.mp4` },
            ],
            textItems: [
              { id: "text_4", text: "Regular" },
              { id: "text_2", text: "Buenas noches" },
              { id: "text_1", text: "Buenas tardes" },
              { id: "text_3", text: "¿Qué tal?" },
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
    questionId: "mc_cor_004",
    signIds: ["sign_de_nada", "sign_encantado", "sign_como_te_llamas", "sign_hasta_la_vista"],
    type: "MATCH_CHOICE",
    category: "Cortesía",
    minLevel: 7,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}de_nada.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}encantado.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}como_te_llamas.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}hasta_la_vista.mp4` },
            ],
            textItems: [
              { id: "text_3", text: "¿Cómo te llamas?" },
              { id: "text_1", text: "De nada" },
              { id: "text_4", text: "Hasta la vista" },
              { id: "text_2", text: "Encantado" },
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
    questionId: "mc_cor_005",
    signIds: ["sign_encantado", "sign_hasta_la_vista", "sign_bien", "sign_que_tal"],
    type: "MATCH_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}encantado.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}hasta_la_vista.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}bien.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}que_tal.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Encantado" },
              { id: "text_3", text: "Bien" },
              { id: "text_4", text: "¿Qué tal?" },
              { id: "text_2", text: "Hasta la vista" },
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
    questionId: "mc_cor_006",
    signIds: ["sign_hola", "sign_si", "sign_encantado", "sign_que_tal"],
    type: "MATCH_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}hola.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}si.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}encantado.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}que_tal.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Hola" },
              { id: "text_3", text: "Encantado" },
              { id: "text_4", text: "¿Qué tal?" },
              { id: "text_2", text: "Sí" },
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
    questionId: "mc_cor_007",
    signIds: ["sign_buenas_noches", "sign_perdon_pregunta", "sign_buenas_tardes", "sign_buenos_dias"],
    type: "MATCH_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}buenas_noches.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}perdon_pregunta.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}buenas_tardes.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}buenos_dias.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Buenas noches" },
              { id: "text_3", text: "Buenas tardes" },
              { id: "text_4", text: "Buenos días" },
              { id: "text_2", text: "¿Perdón?" },
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
    questionId: "mc_cor_008",
    signIds: ["sign_hasta_la_vista", "sign_como_te_llamas", "sign_adios", "sign_buenas_tardes"],
    type: "MATCH_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}hasta_la_vista.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}como_te_llamas.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}adios.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}buenas_tardes.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Hasta la vista" },
              { id: "text_3", text: "Adiós" },
              { id: "text_4", text: "Buenas tardes" },
              { id: "text_2", text: "¿Cómo te llamas?" },
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
    questionId: "mc_cor_009",
    signIds: ["sign_bien", "sign_no", "sign_regular", "sign_que_tal"],
    type: "MATCH_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}bien.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}no.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}regular.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}que_tal.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Bien" },
              { id: "text_3", text: "Regular" },
              { id: "text_4", text: "¿Qué tal?" },
              { id: "text_2", text: "No" },
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
    questionId: "mc_cor_010",
    signIds: ["sign_si", "sign_necesitas_algo", "sign_como_te_llamas", "sign_buenas_noches"],
    type: "MATCH_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}si.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}necesitas_algo.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}como_te_llamas.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}buenas_noches.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Sí" },
              { id: "text_3", text: "¿Cómo te llamas?" },
              { id: "text_4", text: "Buenas noches" },
              { id: "text_2", text: "¿Necesitas algo?" },
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
    questionId: "mc_cor_011",
    signIds: ["sign_como_te_llamas", "sign_regular", "sign_buenas_noches", "sign_bienvenido"],
    type: "MATCH_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}como_te_llamas.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}regular.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}buenas_noches.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}bienvenido.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "¿Cómo te llamas?" },
              { id: "text_3", text: "Buenas noches" },
              { id: "text_4", text: "Bienvenido" },
              { id: "text_2", text: "Regular" },
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
    questionId: "mc_cor_012",
    signIds: ["sign_adios", "sign_necesitas_algo", "sign_te_puedo_ayudar", "sign_buenas_tardes"],
    type: "MATCH_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}adios.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}necesitas_algo.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}te_puedo_ayudar.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}buenas_tardes.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Adiós" },
              { id: "text_3", text: "¿Te puedo ayudar?" },
              { id: "text_4", text: "Buenas tardes" },
              { id: "text_2", text: "¿Necesitas algo?" },
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
    questionId: "mc_cor_013",
    signIds: ["sign_buenas_noches", "sign_bienvenido", "sign_gracias", "sign_que_tal"],
    type: "MATCH_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}buenas_noches.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}bienvenido.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}gracias.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}que_tal.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Buenas noches" },
              { id: "text_3", text: "Gracias" },
              { id: "text_4", text: "¿Qué tal?" },
              { id: "text_2", text: "Bienvenido" },
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
    questionId: "mc_cor_014",
    signIds: ["sign_de_nada", "sign_bien", "sign_como_te_llamas", "sign_hasta_la_vista"],
    type: "MATCH_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}de_nada.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}bien.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}como_te_llamas.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}hasta_la_vista.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "De nada" },
              { id: "text_3", text: "¿Cómo te llamas?" },
              { id: "text_4", text: "Hasta la vista" },
              { id: "text_2", text: "Bien" },
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
    questionId: "mc_cor_015",
    signIds: ["sign_bienvenido", "sign_si", "sign_no", "sign_de_nada"],
    type: "MATCH_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}bienvenido.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}si.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}no.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}de_nada.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Bienvenido" },
              { id: "text_3", text: "No" },
              { id: "text_4", text: "De nada" },
              { id: "text_2", text: "Sí" },
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
    questionId: "mc_cor_016",
    signIds: ["sign_buenas_tardes", "sign_como_te_llamas", "sign_hasta_la_vista", "sign_perdon_pregunta"],
    type: "MATCH_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}buenas_tardes.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}como_te_llamas.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}hasta_la_vista.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}perdon_pregunta.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Buenas tardes" },
              { id: "text_3", text: "Hasta la vista" },
              { id: "text_4", text: "¿Perdón?" },
              { id: "text_2", text: "¿Cómo te llamas?" },
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
    questionId: "mc_cor_017",
    signIds: ["sign_buenas_tardes", "sign_buenos_dias", "sign_adios", "sign_necesitas_algo"],
    type: "MATCH_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}buenas_tardes.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}buenos_dias.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}adios.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}necesitas_algo.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Buenas tardes" },
              { id: "text_3", text: "Adiós" },
              { id: "text_4", text: "¿Necesitas algo?" },
              { id: "text_2", text: "Buenos días" },
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
    questionId: "mc_cor_018",
    signIds: ["sign_como_te_llamas", "sign_bienvenido", "sign_hasta_la_vista", "sign_regular"],
    type: "MATCH_CHOICE",
    category: "Cortesía",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}como_te_llamas.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}bienvenido.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}hasta_la_vista.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}regular.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "¿Cómo te llamas?" },
              { id: "text_3", text: "Hasta la vista" },
              { id: "text_4", text: "Regular" },
              { id: "text_2", text: "Bienvenido" },
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
