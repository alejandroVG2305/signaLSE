import { BASE_VIDEO_URL } from "../constants";

export const questions = [
  // ── WORD_CHOICE ──────────────────────────────────────────────
  {
    questionId: "wc_dep_001",
    signIds: ["sign_deportes"],
    type: "WORD_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}deportes.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Deportes" },
          { id: "opt_2", text: "Atletismo" },
          { id: "opt_3", text: "Fútbol" },
          { id: "opt_4", text: "Natación" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_dep_002",
    signIds: ["sign_baloncesto"],
    type: "WORD_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}baloncesto.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Fútbol" },
          { id: "opt_2", text: "Baloncesto" },
          { id: "opt_3", text: "Rugby" },
          { id: "opt_4", text: "Voleibol" },
        ],
        correctOptionId: "opt_2",
      },
    },
  },
  {
    questionId: "wc_dep_003",
    signIds: ["sign_futbol"],
    type: "WORD_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}futbol.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Baloncesto" },
          { id: "opt_2", text: "Rugby" },
          { id: "opt_3", text: "Fútbol" },
          { id: "opt_4", text: "Béisbol" },
        ],
        correctOptionId: "opt_3",
      },
    },
  },
  {
    questionId: "wc_dep_004",
    signIds: ["sign_boxeo"],
    type: "WORD_CHOICE",
    category: "Deportes",
    minLevel: 3,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}boxeo.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Lucha" },
          { id: "opt_2", text: "Golf" },
          { id: "opt_3", text: "Ciclismo" },
          { id: "opt_4", text: "Boxeo" },
        ],
        correctOptionId: "opt_4",
      },
    },
  },
  {
    questionId: "wc_dep_005",
    signIds: ["sign_polo"],
    type: "WORD_CHOICE",
    category: "Deportes",
    minLevel: 4,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}polo.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Polo" },
          { id: "opt_2", text: "Golf" },
          { id: "opt_3", text: "Hockey sobre hierba" },
          { id: "opt_4", text: "Ciclismo" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_dep_006",
    signIds: ["sign_natacion"],
    type: "WORD_CHOICE",
    category: "Deportes",
    minLevel: 5,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}natacion.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Surf" },
          { id: "opt_2", text: "Natación" },
          { id: "opt_3", text: "Esquí" },
          { id: "opt_4", text: "Atletismo" },
        ],
        correctOptionId: "opt_2",
      },
    },
  },
  {
    questionId: "wc_dep_007",
    signIds: ["sign_tenis"],
    type: "WORD_CHOICE",
    category: "Deportes",
    minLevel: 6,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}tenis.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Golf" },
          { id: "opt_2", text: "Tiro con arco" },
          { id: "opt_3", text: "Tenis" },
          { id: "opt_4", text: "Bádminton" },
        ],
        correctOptionId: "opt_3",
      },
    },
  },
  {
    questionId: "wc_dep_008",
    signIds: ["sign_surf"],
    type: "WORD_CHOICE",
    category: "Deportes",
    minLevel: 8,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}surf.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Natación" },
          { id: "opt_2", text: "Esquí" },
          { id: "opt_3", text: "Atletismo" },
          { id: "opt_4", text: "Surf" },
        ],
        correctOptionId: "opt_4",
      },
    },
  },
  {
    questionId: "wc_dep_009",
    signIds: ["sign_beisbol"],
    type: "WORD_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}beisbol.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Béisbol" },
          { id: "opt_2", text: "Hockey sobre hielo" },
          { id: "opt_3", text: "Golf" },
          { id: "opt_4", text: "Rugby" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_dep_010",
    signIds: ["sign_natacion"],
    type: "WORD_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}natacion.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Natación" },
          { id: "opt_2", text: "Ciclismo" },
          { id: "opt_3", text: "Tenis" },
          { id: "opt_4", text: "Voleibol" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_dep_011",
    signIds: ["sign_ciclismo"],
    type: "WORD_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}ciclismo.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Ciclismo" },
          { id: "opt_2", text: "Boxeo" },
          { id: "opt_3", text: "Tiro con arco" },
          { id: "opt_4", text: "Tenis" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_dep_012",
    signIds: ["sign_esqui"],
    type: "WORD_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}esqui.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Esquí" },
          { id: "opt_2", text: "Hockey sobre hielo" },
          { id: "opt_3", text: "Ciclismo" },
          { id: "opt_4", text: "Tenis" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_dep_013",
    signIds: ["sign_golf"],
    type: "WORD_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}golf.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Golf" },
          { id: "opt_2", text: "Boxeo" },
          { id: "opt_3", text: "Hockey sobre hierba" },
          { id: "opt_4", text: "Fútbol americano" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_dep_014",
    signIds: ["sign_hockey_hielo"],
    type: "WORD_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}hockey_hielo.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Hockey sobre hielo" },
          { id: "opt_2", text: "Tiro con arco" },
          { id: "opt_3", text: "Ciclismo" },
          { id: "opt_4", text: "Surf" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_dep_015",
    signIds: ["sign_atletismo"],
    type: "WORD_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}atletismo.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Atletismo" },
          { id: "opt_2", text: "Boxeo" },
          { id: "opt_3", text: "Tiro con arco" },
          { id: "opt_4", text: "Hockey sobre hierba" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_dep_016",
    signIds: ["sign_surf"],
    type: "WORD_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}surf.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Surf" },
          { id: "opt_2", text: "Baloncesto" },
          { id: "opt_3", text: "Ciclismo" },
          { id: "opt_4", text: "Atletismo" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_dep_017",
    signIds: ["sign_hockey_hierba"],
    type: "WORD_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}hockey_hierba.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Hockey sobre hierba" },
          { id: "opt_2", text: "Rugby" },
          { id: "opt_3", text: "Deportes" },
          { id: "opt_4", text: "Tiro con arco" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_dep_018",
    signIds: ["sign_tiro_arco"],
    type: "WORD_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}tiro_arco.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Tiro con arco" },
          { id: "opt_2", text: "Tenis" },
          { id: "opt_3", text: "Ciclismo" },
          { id: "opt_4", text: "Esquí" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_dep_019",
    signIds: ["sign_tenis"],
    type: "WORD_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}tenis.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Tenis" },
          { id: "opt_2", text: "Rugby" },
          { id: "opt_3", text: "Surf" },
          { id: "opt_4", text: "Baloncesto" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_dep_020",
    signIds: ["sign_voleibol"],
    type: "WORD_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}voleibol.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Voleibol" },
          { id: "opt_2", text: "Hockey sobre hierba" },
          { id: "opt_3", text: "Surf" },
          { id: "opt_4", text: "Baloncesto" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },

  // ── SIGN_CHOICE ──────────────────────────────────────────────
  {
    questionId: "sc_dep_001",
    signIds: ["sign_atletismo"],
    type: "SIGN_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Atletismo' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}atletismo.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}deportes.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}ciclismo.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}natacion.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_dep_002",
    signIds: ["sign_futbol_americano"],
    type: "SIGN_CHOICE",
    category: "Deportes",
    minLevel: 2,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Fútbol americano'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}futbol.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}futbol_americano.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}rugby.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}beisbol.mp4` },
        ],
        correctOptionId: "opt_2",
      },
    },
  },
  {
    questionId: "sc_dep_003",
    signIds: ["sign_rugby"],
    type: "SIGN_CHOICE",
    category: "Deportes",
    minLevel: 2,
    content: {
      question: "¿Cómo se representa 'Rugby' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}futbol_americano.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}beisbol.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}rugby.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}boxeo.mp4` },
        ],
        correctOptionId: "opt_3",
      },
    },
  },
  {
    questionId: "sc_dep_004",
    signIds: ["sign_ciclismo"],
    type: "SIGN_CHOICE",
    category: "Deportes",
    minLevel: 3,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Ciclismo'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}atletismo.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}natacion.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}esqui.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}ciclismo.mp4` },
        ],
        correctOptionId: "opt_4",
      },
    },
  },
  {
    questionId: "sc_dep_005",
    signIds: ["sign_hockey_hielo"],
    type: "SIGN_CHOICE",
    category: "Deportes",
    minLevel: 4,
    content: {
      question: "¿Cómo se representa 'Hockey sobre hielo' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}hockey_hielo.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}hockey_hierba.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}polo.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}golf.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_dep_006",
    signIds: ["sign_hockey_hierba"],
    type: "SIGN_CHOICE",
    category: "Deportes",
    minLevel: 5,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Hockey sobre hierba'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}golf.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}polo.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}hockey_hierba.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}hockey_hielo.mp4` },
        ],
        correctOptionId: "opt_3",
      },
    },
  },
  {
    questionId: "sc_dep_007",
    signIds: ["sign_voleibol"],
    type: "SIGN_CHOICE",
    category: "Deportes",
    minLevel: 7,
    content: {
      question: "¿Cómo se representa 'Voleibol' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}baloncesto.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}futbol.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}tenis.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}voleibol.mp4` },
        ],
        correctOptionId: "opt_4",
      },
    },
  },
  {
    questionId: "sc_dep_008",
    signIds: ["sign_esqui"],
    type: "SIGN_CHOICE",
    category: "Deportes",
    minLevel: 9,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Esquí'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}surf.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}esqui.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}natacion.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}ciclismo.mp4` },
        ],
        correctOptionId: "opt_2",
      },
    },
  },
  {
    questionId: "sc_dep_009",
    signIds: ["sign_baloncesto"],
    type: "SIGN_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Baloncesto' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}baloncesto.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}boxeo.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}rugby.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}beisbol.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_dep_010",
    signIds: ["sign_tiro_arco"],
    type: "SIGN_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Tiro con arco'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}tiro_arco.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}beisbol.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}natacion.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}ciclismo.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_dep_011",
    signIds: ["sign_esqui"],
    type: "SIGN_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Esquí' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}esqui.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}baloncesto.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}voleibol.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}golf.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_dep_012",
    signIds: ["sign_rugby"],
    type: "SIGN_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Rugby'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}rugby.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}tiro_arco.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}polo.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}deportes.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_dep_013",
    signIds: ["sign_boxeo"],
    type: "SIGN_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Boxeo' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}boxeo.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}voleibol.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}hockey_hierba.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}polo.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_dep_014",
    signIds: ["sign_hockey_hielo"],
    type: "SIGN_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Hockey sobre hielo'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}hockey_hielo.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}beisbol.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}voleibol.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}surf.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_dep_015",
    signIds: ["sign_futbol_americano"],
    type: "SIGN_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Fútbol americano' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}futbol_americano.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}boxeo.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}hockey_hierba.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}surf.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_dep_016",
    signIds: ["sign_deportes"],
    type: "SIGN_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Deportes'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}deportes.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}tenis.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}beisbol.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}surf.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_dep_017",
    signIds: ["sign_natacion"],
    type: "SIGN_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Natación' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}natacion.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}rugby.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}futbol.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}beisbol.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_dep_018",
    signIds: ["sign_polo"],
    type: "SIGN_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Polo'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}polo.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}surf.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}futbol.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}golf.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_dep_019",
    signIds: ["sign_tenis"],
    type: "SIGN_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Tenis' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}tenis.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}rugby.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}baloncesto.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}tiro_arco.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_dep_020",
    signIds: ["sign_ciclismo"],
    type: "SIGN_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Ciclismo'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}ciclismo.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}surf.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}tiro_arco.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}rugby.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_dep_021",
    signIds: ["sign_futbol"],
    type: "SIGN_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Fútbol' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}futbol.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}esqui.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}futbol_americano.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}beisbol.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_dep_022",
    signIds: ["sign_golf"],
    type: "SIGN_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Golf'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}golf.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}atletismo.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}voleibol.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}beisbol.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },

  // ── MATCH_CHOICE ─────────────────────────────────────────────
  {
    questionId: "mc_dep_001",
    signIds: ["sign_deportes", "sign_atletismo", "sign_baloncesto", "sign_futbol"],
    type: "MATCH_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}deportes.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}atletismo.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}baloncesto.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}futbol.mp4` },
            ],
            textItems: [
              { id: "text_3", text: "Baloncesto" },
              { id: "text_1", text: "Deportes" },
              { id: "text_4", text: "Fútbol" },
              { id: "text_2", text: "Atletismo" },
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
    questionId: "mc_dep_002",
    signIds: ["sign_futbol_americano", "sign_rugby", "sign_beisbol", "sign_boxeo"],
    type: "MATCH_CHOICE",
    category: "Deportes",
    minLevel: 3,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}futbol_americano.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}rugby.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}beisbol.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}boxeo.mp4` },
            ],
            textItems: [
              { id: "text_2", text: "Rugby" },
              { id: "text_4", text: "Boxeo" },
              { id: "text_1", text: "Fútbol americano" },
              { id: "text_3", text: "Béisbol" },
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
    questionId: "mc_dep_003",
    signIds: ["sign_ciclismo", "sign_polo", "sign_hockey_hielo", "sign_natacion"],
    type: "MATCH_CHOICE",
    category: "Deportes",
    minLevel: 5,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}ciclismo.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}polo.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}hockey_hielo.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}natacion.mp4` },
            ],
            textItems: [
              { id: "text_4", text: "Natación" },
              { id: "text_2", text: "Polo" },
              { id: "text_1", text: "Ciclismo" },
              { id: "text_3", text: "Hockey sobre hielo" },
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
    questionId: "mc_dep_004",
    signIds: ["sign_tenis", "sign_voleibol", "sign_surf", "sign_esqui"],
    type: "MATCH_CHOICE",
    category: "Deportes",
    minLevel: 9,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}tenis.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}voleibol.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}surf.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}esqui.mp4` },
            ],
            textItems: [
              { id: "text_3", text: "Surf" },
              { id: "text_1", text: "Tenis" },
              { id: "text_4", text: "Esquí" },
              { id: "text_2", text: "Voleibol" },
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
    questionId: "mc_dep_005",
    signIds: ["sign_baloncesto", "sign_futbol_americano", "sign_hockey_hierba", "sign_futbol"],
    type: "MATCH_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}baloncesto.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}futbol_americano.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}hockey_hierba.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}futbol.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Baloncesto" },
              { id: "text_3", text: "Hockey sobre hierba" },
              { id: "text_4", text: "Fútbol" },
              { id: "text_2", text: "Fútbol americano" },
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
    questionId: "mc_dep_006",
    signIds: ["sign_surf", "sign_tiro_arco", "sign_hockey_hielo", "sign_futbol_americano"],
    type: "MATCH_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}surf.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}tiro_arco.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}hockey_hielo.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}futbol_americano.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Surf" },
              { id: "text_3", text: "Hockey sobre hielo" },
              { id: "text_4", text: "Fútbol americano" },
              { id: "text_2", text: "Tiro con arco" },
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
    questionId: "mc_dep_007",
    signIds: ["sign_rugby", "sign_tiro_arco", "sign_surf", "sign_hockey_hierba"],
    type: "MATCH_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}rugby.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}tiro_arco.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}surf.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}hockey_hierba.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Rugby" },
              { id: "text_3", text: "Surf" },
              { id: "text_4", text: "Hockey sobre hierba" },
              { id: "text_2", text: "Tiro con arco" },
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
    questionId: "mc_dep_008",
    signIds: ["sign_natacion", "sign_polo", "sign_golf", "sign_boxeo"],
    type: "MATCH_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}natacion.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}polo.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}golf.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}boxeo.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Natación" },
              { id: "text_3", text: "Golf" },
              { id: "text_4", text: "Boxeo" },
              { id: "text_2", text: "Polo" },
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
    questionId: "mc_dep_009",
    signIds: ["sign_futbol", "sign_esqui", "sign_hockey_hielo", "sign_tiro_arco"],
    type: "MATCH_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}futbol.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}esqui.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}hockey_hielo.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}tiro_arco.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Fútbol" },
              { id: "text_3", text: "Hockey sobre hielo" },
              { id: "text_4", text: "Tiro con arco" },
              { id: "text_2", text: "Esquí" },
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
    questionId: "mc_dep_010",
    signIds: ["sign_futbol", "sign_hockey_hielo", "sign_beisbol", "sign_tiro_arco"],
    type: "MATCH_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}futbol.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}hockey_hielo.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}beisbol.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}tiro_arco.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Fútbol" },
              { id: "text_3", text: "Béisbol" },
              { id: "text_4", text: "Tiro con arco" },
              { id: "text_2", text: "Hockey sobre hielo" },
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
    questionId: "mc_dep_011",
    signIds: ["sign_tenis", "sign_natacion", "sign_futbol_americano", "sign_esqui"],
    type: "MATCH_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}tenis.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}natacion.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}futbol_americano.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}esqui.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Tenis" },
              { id: "text_3", text: "Fútbol americano" },
              { id: "text_4", text: "Esquí" },
              { id: "text_2", text: "Natación" },
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
    questionId: "mc_dep_012",
    signIds: ["sign_beisbol", "sign_tenis", "sign_hockey_hielo", "sign_esqui"],
    type: "MATCH_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}beisbol.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}tenis.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}hockey_hielo.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}esqui.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Béisbol" },
              { id: "text_3", text: "Hockey sobre hielo" },
              { id: "text_4", text: "Esquí" },
              { id: "text_2", text: "Tenis" },
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
    questionId: "mc_dep_013",
    signIds: ["sign_tiro_arco", "sign_futbol_americano", "sign_esqui", "sign_rugby"],
    type: "MATCH_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}tiro_arco.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}futbol_americano.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}esqui.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}rugby.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Tiro con arco" },
              { id: "text_3", text: "Esquí" },
              { id: "text_4", text: "Rugby" },
              { id: "text_2", text: "Fútbol americano" },
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
    questionId: "mc_dep_014",
    signIds: ["sign_rugby", "sign_golf", "sign_atletismo", "sign_hockey_hielo"],
    type: "MATCH_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}rugby.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}golf.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}atletismo.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}hockey_hielo.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Rugby" },
              { id: "text_3", text: "Atletismo" },
              { id: "text_4", text: "Hockey sobre hielo" },
              { id: "text_2", text: "Golf" },
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
    questionId: "mc_dep_015",
    signIds: ["sign_tiro_arco", "sign_ciclismo", "sign_rugby", "sign_beisbol"],
    type: "MATCH_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}tiro_arco.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}ciclismo.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}rugby.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}beisbol.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Tiro con arco" },
              { id: "text_3", text: "Rugby" },
              { id: "text_4", text: "Béisbol" },
              { id: "text_2", text: "Ciclismo" },
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
    questionId: "mc_dep_016",
    signIds: ["sign_voleibol", "sign_hockey_hielo", "sign_polo", "sign_esqui"],
    type: "MATCH_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}voleibol.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}hockey_hielo.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}polo.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}esqui.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Voleibol" },
              { id: "text_3", text: "Polo" },
              { id: "text_4", text: "Esquí" },
              { id: "text_2", text: "Hockey sobre hielo" },
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
    questionId: "mc_dep_017",
    signIds: ["sign_esqui", "sign_rugby", "sign_natacion", "sign_futbol"],
    type: "MATCH_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}esqui.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}rugby.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}natacion.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}futbol.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Esquí" },
              { id: "text_3", text: "Natación" },
              { id: "text_4", text: "Fútbol" },
              { id: "text_2", text: "Rugby" },
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
    questionId: "mc_dep_018",
    signIds: ["sign_esqui", "sign_surf", "sign_hockey_hielo", "sign_tenis"],
    type: "MATCH_CHOICE",
    category: "Deportes",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}esqui.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}surf.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}hockey_hielo.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}tenis.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Esquí" },
              { id: "text_3", text: "Hockey sobre hielo" },
              { id: "text_4", text: "Tenis" },
              { id: "text_2", text: "Surf" },
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
