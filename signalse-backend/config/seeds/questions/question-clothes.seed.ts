import { BASE_VIDEO_URL } from "../constants";

export const questions = [
  // ── WORD_CHOICE ──────────────────────────────────────────────
  {
    questionId: "wc_rop_001",
    signIds: ["sign_ropa"],
    type: "WORD_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}ropa.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Ropa" },
          { id: "opt_2", text: "Camisa" },
          { id: "opt_3", text: "Pantalón" },
          { id: "opt_4", text: "Zapato" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_rop_002",
    signIds: ["sign_camisa"],
    type: "WORD_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}camisa.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Pantalón" },
          { id: "opt_2", text: "Camisa" },
          { id: "opt_3", text: "Chaqueta" },
          { id: "opt_4", text: "Vestido" },
        ],
        correctOptionId: "opt_2",
      },
    },
  },
  {
    questionId: "wc_rop_003",
    signIds: ["sign_zapato"],
    type: "WORD_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}zapato.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Bota" },
          { id: "opt_2", text: "Zapatilla" },
          { id: "opt_3", text: "Zapato" },
          { id: "opt_4", text: "Calcetín" },
        ],
        correctOptionId: "opt_3",
      },
    },
  },
  {
    questionId: "wc_rop_004",
    signIds: ["sign_chaqueta"],
    type: "WORD_CHOICE",
    category: "Ropa",
    minLevel: 2,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}chaqueta.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Abrigo" },
          { id: "opt_2", text: "Cazadora" },
          { id: "opt_3", text: "Chaleco" },
          { id: "opt_4", text: "Chaqueta" },
        ],
        correctOptionId: "opt_4",
      },
    },
  },
  {
    questionId: "wc_rop_005",
    signIds: ["sign_corbata"],
    type: "WORD_CHOICE",
    category: "Ropa",
    minLevel: 3,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}corbata.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Corbata" },
          { id: "opt_2", text: "Bufanda" },
          { id: "opt_3", text: "Cinturón" },
          { id: "opt_4", text: "Pañuelo" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_rop_006",
    signIds: ["sign_gorra"],
    type: "WORD_CHOICE",
    category: "Ropa",
    minLevel: 4,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}gorra.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Sombrero" },
          { id: "opt_2", text: "Gorra" },
          { id: "opt_3", text: "Gorro" },
          { id: "opt_4", text: "Capucha" },
        ],
        correctOptionId: "opt_2",
      },
    },
  },
  {
    questionId: "wc_rop_007",
    signIds: ["sign_falda"],
    type: "WORD_CHOICE",
    category: "Ropa",
    minLevel: 6,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}falda.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Vestido" },
          { id: "opt_2", text: "Pantalón" },
          { id: "opt_3", text: "Falda" },
          { id: "opt_4", text: "Capucha" },
        ],
        correctOptionId: "opt_3",
      },
    },
  },
  {
    questionId: "wc_rop_008",
    signIds: ["sign_cazadora"],
    type: "WORD_CHOICE",
    category: "Ropa",
    minLevel: 7,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}cazadora.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Chaqueta" },
          { id: "opt_2", text: "Chaleco" },
          { id: "opt_3", text: "Abrigo" },
          { id: "opt_4", text: "Cazadora" },
        ],
        correctOptionId: "opt_4",
      },
    },
  },
  {
    questionId: "wc_rop_009",
    signIds: ["sign_chaleco"],
    type: "WORD_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}chaleco.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Chaleco" },
          { id: "opt_2", text: "Falda" },
          { id: "opt_3", text: "Zapatilla" },
          { id: "opt_4", text: "Camisa" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_rop_010",
    signIds: ["sign_panuelo"],
    type: "WORD_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}panuelo.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Pañuelo" },
          { id: "opt_2", text: "Falda" },
          { id: "opt_3", text: "Cazadora" },
          { id: "opt_4", text: "Vestido" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_rop_011",
    signIds: ["sign_cinturon"],
    type: "WORD_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}cinturon.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Cinturón" },
          { id: "opt_2", text: "Capucha" },
          { id: "opt_3", text: "Pañuelo" },
          { id: "opt_4", text: "Abrigo" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_rop_012",
    signIds: ["sign_vestido"],
    type: "WORD_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}vestido.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Vestido" },
          { id: "opt_2", text: "Chaqueta" },
          { id: "opt_3", text: "Jersey" },
          { id: "opt_4", text: "Gorra" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_rop_013",
    signIds: ["sign_gorra"],
    type: "WORD_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}gorra.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Gorra" },
          { id: "opt_2", text: "Zapatilla" },
          { id: "opt_3", text: "Abrigo" },
          { id: "opt_4", text: "Capucha" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_rop_014",
    signIds: ["sign_gorro"],
    type: "WORD_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}gorro.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Gorro" },
          { id: "opt_2", text: "Capucha" },
          { id: "opt_3", text: "Pantalón" },
          { id: "opt_4", text: "Falda" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_rop_015",
    signIds: ["sign_bota"],
    type: "WORD_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}bota.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Bota" },
          { id: "opt_2", text: "Abrigo" },
          { id: "opt_3", text: "Zapatilla" },
          { id: "opt_4", text: "Capucha" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_rop_016",
    signIds: ["sign_falda"],
    type: "WORD_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}falda.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Falda" },
          { id: "opt_2", text: "Cazadora" },
          { id: "opt_3", text: "Cinturón" },
          { id: "opt_4", text: "Bota" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_rop_017",
    signIds: ["sign_corbata"],
    type: "WORD_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}corbata.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Corbata" },
          { id: "opt_2", text: "Pantalón" },
          { id: "opt_3", text: "Jersey" },
          { id: "opt_4", text: "Bota" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_rop_018",
    signIds: ["sign_chaqueta"],
    type: "WORD_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}chaqueta.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Chaqueta" },
          { id: "opt_2", text: "Pañuelo" },
          { id: "opt_3", text: "Cazadora" },
          { id: "opt_4", text: "Gorro" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_rop_019",
    signIds: ["sign_abrigo"],
    type: "WORD_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}abrigo.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Abrigo" },
          { id: "opt_2", text: "Cazadora" },
          { id: "opt_3", text: "Gorra" },
          { id: "opt_4", text: "Capucha" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_rop_020",
    signIds: ["sign_bufanda"],
    type: "WORD_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}bufanda.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Bufanda" },
          { id: "opt_2", text: "Cinturón" },
          { id: "opt_3", text: "Abrigo" },
          { id: "opt_4", text: "Gorro" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },

  // ── SIGN_CHOICE ──────────────────────────────────────────────
  {
    questionId: "sc_rop_001",
    signIds: ["sign_pantalon"],
    type: "SIGN_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Pantalón' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}pantalon.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}camisa.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}ropa.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}vestido.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_rop_002",
    signIds: ["sign_vestido"],
    type: "SIGN_CHOICE",
    category: "Ropa",
    minLevel: 2,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Vestido'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}falda.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}vestido.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}pantalon.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}camisa.mp4` },
        ],
        correctOptionId: "opt_2",
      },
    },
  },
  {
    questionId: "sc_rop_003",
    signIds: ["sign_abrigo"],
    type: "SIGN_CHOICE",
    category: "Ropa",
    minLevel: 2,
    content: {
      question: "¿Cómo se representa 'Abrigo' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}chaqueta.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}cazadora.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}abrigo.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}chaleco.mp4` },
        ],
        correctOptionId: "opt_3",
      },
    },
  },
  {
    questionId: "sc_rop_004",
    signIds: ["sign_bota"],
    type: "SIGN_CHOICE",
    category: "Ropa",
    minLevel: 3,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Bota'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}zapato.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}zapatilla.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}pantalon.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}bota.mp4` },
        ],
        correctOptionId: "opt_4",
      },
    },
  },
  {
    questionId: "sc_rop_005",
    signIds: ["sign_cinturon"],
    type: "SIGN_CHOICE",
    category: "Ropa",
    minLevel: 4,
    content: {
      question: "¿Cómo se representa 'Cinturón' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}cinturon.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}corbata.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}bufanda.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}panuelo.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_rop_006",
    signIds: ["sign_gorro"],
    type: "SIGN_CHOICE",
    category: "Ropa",
    minLevel: 5,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Gorro'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}gorra.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}gorro.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}capucha.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}bufanda.mp4` },
        ],
        correctOptionId: "opt_2",
      },
    },
  },
  {
    questionId: "sc_rop_007",
    signIds: ["sign_chaleco"],
    type: "SIGN_CHOICE",
    category: "Ropa",
    minLevel: 7,
    content: {
      question: "¿Cómo se representa 'Chaleco' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}chaqueta.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}cazadora.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}chaleco.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}abrigo.mp4` },
        ],
        correctOptionId: "opt_3",
      },
    },
  },
  {
    questionId: "sc_rop_008",
    signIds: ["sign_zapatilla"],
    type: "SIGN_CHOICE",
    category: "Ropa",
    minLevel: 9,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Zapatilla'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}zapato.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}bota.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}pantalon.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}zapatilla.mp4` },
        ],
        correctOptionId: "opt_4",
      },
    },
  },
  {
    questionId: "sc_rop_009",
    signIds: ["sign_gorro"],
    type: "SIGN_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Gorro' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}gorro.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}corbata.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}zapatilla.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}capucha.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_rop_010",
    signIds: ["sign_falda"],
    type: "SIGN_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Falda'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}falda.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}vestido.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}chaqueta.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}corbata.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_rop_011",
    signIds: ["sign_jersey"],
    type: "SIGN_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Jersey' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}jersey.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}panuelo.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}chaqueta.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}capucha.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_rop_012",
    signIds: ["sign_panuelo"],
    type: "SIGN_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Pañuelo'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}panuelo.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}gorro.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}capucha.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}zapatilla.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_rop_013",
    signIds: ["sign_ropa"],
    type: "SIGN_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Ropa' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}ropa.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}zapatilla.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}vestido.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}panuelo.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_rop_014",
    signIds: ["sign_capucha"],
    type: "SIGN_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Capucha'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}capucha.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}pantalon.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}cazadora.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}cinturon.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_rop_015",
    signIds: ["sign_cazadora"],
    type: "SIGN_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Cazadora' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}cazadora.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}bufanda.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}jersey.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}cinturon.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_rop_016",
    signIds: ["sign_zapatilla"],
    type: "SIGN_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Zapatilla'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}zapatilla.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}cinturon.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}capucha.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}camisa.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_rop_017",
    signIds: ["sign_camisa"],
    type: "SIGN_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Camisa' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}camisa.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}chaleco.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}zapato.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}falda.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_rop_018",
    signIds: ["sign_bota"],
    type: "SIGN_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Bota'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}bota.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}capucha.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}camisa.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}ropa.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_rop_019",
    signIds: ["sign_bufanda"],
    type: "SIGN_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Bufanda' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}bufanda.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}chaqueta.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}cazadora.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}chaleco.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_rop_020",
    signIds: ["sign_chaleco"],
    type: "SIGN_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Chaleco'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}chaleco.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}cazadora.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}zapatilla.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}gorra.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_rop_021",
    signIds: ["sign_cinturon"],
    type: "SIGN_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Cinturón' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}cinturon.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}ropa.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}chaqueta.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}zapato.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_rop_022",
    signIds: ["sign_corbata"],
    type: "SIGN_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Corbata'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}corbata.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}bufanda.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}zapato.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}ropa.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },

  // ── MATCH_CHOICE ─────────────────────────────────────────────
  {
    questionId: "mc_rop_001",
    signIds: ["sign_ropa", "sign_camisa", "sign_pantalon", "sign_zapato"],
    type: "MATCH_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}ropa.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}camisa.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}pantalon.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}zapato.mp4` },
            ],
            textItems: [
              { id: "text_3", text: "Pantalón" },
              { id: "text_1", text: "Ropa" },
              { id: "text_4", text: "Zapato" },
              { id: "text_2", text: "Camisa" },
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
    questionId: "mc_rop_002",
    signIds: ["sign_chaqueta", "sign_vestido", "sign_abrigo", "sign_bota"],
    type: "MATCH_CHOICE",
    category: "Ropa",
    minLevel: 3,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}chaqueta.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}vestido.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}abrigo.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}bota.mp4` },
            ],
            textItems: [
              { id: "text_2", text: "Vestido" },
              { id: "text_4", text: "Bota" },
              { id: "text_1", text: "Chaqueta" },
              { id: "text_3", text: "Abrigo" },
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
    questionId: "mc_rop_003",
    signIds: ["sign_bufanda", "sign_corbata", "sign_cinturon", "sign_gorra"],
    type: "MATCH_CHOICE",
    category: "Ropa",
    minLevel: 4,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}bufanda.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}corbata.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}cinturon.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}gorra.mp4` },
            ],
            textItems: [
              { id: "text_4", text: "Gorra" },
              { id: "text_2", text: "Corbata" },
              { id: "text_1", text: "Bufanda" },
              { id: "text_3", text: "Cinturón" },
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
    questionId: "mc_rop_004",
    signIds: ["sign_gorro", "sign_jersey", "sign_falda", "sign_capucha"],
    type: "MATCH_CHOICE",
    category: "Ropa",
    minLevel: 6,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}gorro.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}jersey.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}falda.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}capucha.mp4` },
            ],
            textItems: [
              { id: "text_3", text: "Falda" },
              { id: "text_1", text: "Gorro" },
              { id: "text_4", text: "Capucha" },
              { id: "text_2", text: "Jersey" },
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
    questionId: "mc_rop_005",
    signIds: ["sign_panuelo", "sign_corbata", "sign_pantalon", "sign_ropa"],
    type: "MATCH_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}panuelo.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}corbata.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}pantalon.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}ropa.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Pañuelo" },
              { id: "text_3", text: "Pantalón" },
              { id: "text_4", text: "Ropa" },
              { id: "text_2", text: "Corbata" },
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
    questionId: "mc_rop_006",
    signIds: ["sign_capucha", "sign_corbata", "sign_falda", "sign_bufanda"],
    type: "MATCH_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}capucha.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}corbata.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}falda.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}bufanda.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Capucha" },
              { id: "text_3", text: "Falda" },
              { id: "text_4", text: "Bufanda" },
              { id: "text_2", text: "Corbata" },
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
    questionId: "mc_rop_007",
    signIds: ["sign_bota", "sign_cazadora", "sign_ropa", "sign_panuelo"],
    type: "MATCH_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}bota.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}cazadora.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}ropa.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}panuelo.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Bota" },
              { id: "text_3", text: "Ropa" },
              { id: "text_4", text: "Pañuelo" },
              { id: "text_2", text: "Cazadora" },
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
    questionId: "mc_rop_008",
    signIds: ["sign_zapatilla", "sign_bota", "sign_gorra", "sign_gorro"],
    type: "MATCH_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}zapatilla.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}bota.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}gorra.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}gorro.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Zapatilla" },
              { id: "text_3", text: "Gorra" },
              { id: "text_4", text: "Gorro" },
              { id: "text_2", text: "Bota" },
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
    questionId: "mc_rop_009",
    signIds: ["sign_gorro", "sign_gorra", "sign_camisa", "sign_falda"],
    type: "MATCH_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}gorro.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}gorra.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}camisa.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}falda.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Gorro" },
              { id: "text_3", text: "Camisa" },
              { id: "text_4", text: "Falda" },
              { id: "text_2", text: "Gorra" },
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
    questionId: "mc_rop_010",
    signIds: ["sign_jersey", "sign_camisa", "sign_bota", "sign_ropa"],
    type: "MATCH_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}jersey.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}camisa.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}bota.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}ropa.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Jersey" },
              { id: "text_3", text: "Bota" },
              { id: "text_4", text: "Ropa" },
              { id: "text_2", text: "Camisa" },
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
    questionId: "mc_rop_011",
    signIds: ["sign_zapatilla", "sign_jersey", "sign_ropa", "sign_falda"],
    type: "MATCH_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}zapatilla.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}jersey.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}ropa.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}falda.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Zapatilla" },
              { id: "text_3", text: "Ropa" },
              { id: "text_4", text: "Falda" },
              { id: "text_2", text: "Jersey" },
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
    questionId: "mc_rop_012",
    signIds: ["sign_panuelo", "sign_corbata", "sign_ropa", "sign_capucha"],
    type: "MATCH_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}panuelo.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}corbata.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}ropa.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}capucha.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Pañuelo" },
              { id: "text_3", text: "Ropa" },
              { id: "text_4", text: "Capucha" },
              { id: "text_2", text: "Corbata" },
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
    questionId: "mc_rop_013",
    signIds: ["sign_chaqueta", "sign_capucha", "sign_cazadora", "sign_corbata"],
    type: "MATCH_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}chaqueta.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}capucha.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}cazadora.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}corbata.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Chaqueta" },
              { id: "text_3", text: "Cazadora" },
              { id: "text_4", text: "Corbata" },
              { id: "text_2", text: "Capucha" },
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
    questionId: "mc_rop_014",
    signIds: ["sign_cinturon", "sign_jersey", "sign_zapatilla", "sign_ropa"],
    type: "MATCH_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}cinturon.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}jersey.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}zapatilla.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}ropa.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Cinturón" },
              { id: "text_3", text: "Zapatilla" },
              { id: "text_4", text: "Ropa" },
              { id: "text_2", text: "Jersey" },
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
    questionId: "mc_rop_015",
    signIds: ["sign_vestido", "sign_zapatilla", "sign_panuelo", "sign_corbata"],
    type: "MATCH_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}vestido.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}zapatilla.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}panuelo.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}corbata.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Vestido" },
              { id: "text_3", text: "Pañuelo" },
              { id: "text_4", text: "Corbata" },
              { id: "text_2", text: "Zapatilla" },
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
    questionId: "mc_rop_016",
    signIds: ["sign_cazadora", "sign_chaqueta", "sign_capucha", "sign_bufanda"],
    type: "MATCH_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}cazadora.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}chaqueta.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}capucha.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}bufanda.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Cazadora" },
              { id: "text_3", text: "Capucha" },
              { id: "text_4", text: "Bufanda" },
              { id: "text_2", text: "Chaqueta" },
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
    questionId: "mc_rop_017",
    signIds: ["sign_capucha", "sign_abrigo", "sign_jersey", "sign_gorro"],
    type: "MATCH_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}capucha.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}abrigo.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}jersey.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}gorro.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Capucha" },
              { id: "text_3", text: "Jersey" },
              { id: "text_4", text: "Gorro" },
              { id: "text_2", text: "Abrigo" },
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
    questionId: "mc_rop_018",
    signIds: ["sign_panuelo", "sign_chaqueta", "sign_jersey", "sign_gorra"],
    type: "MATCH_CHOICE",
    category: "Ropa",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}panuelo.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}chaqueta.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}jersey.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}gorra.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Pañuelo" },
              { id: "text_3", text: "Jersey" },
              { id: "text_4", text: "Gorra" },
              { id: "text_2", text: "Chaqueta" },
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
