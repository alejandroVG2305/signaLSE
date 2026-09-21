import { BASE_VIDEO_URL } from "../constants";

export const questions = [
  // ── WORD_CHOICE ──────────────────────────────────────────────
  {
    questionId: "wc_col_001",
    signIds: ["sign_amarillo"],
    type: "WORD_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}amarillo.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Amarillo" },
          { id: "opt_2", text: "Azul" },
          { id: "opt_3", text: "Rojo" },
          { id: "opt_4", text: "Verde" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_col_002",
    signIds: ["sign_azul"],
    type: "WORD_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}azul.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Verde" },
          { id: "opt_2", text: "Azul" },
          { id: "opt_3", text: "Morado" },
          { id: "opt_4", text: "Gris" },
        ],
        correctOptionId: "opt_2",
      },
    },
  },
  {
    questionId: "wc_col_003",
    signIds: ["sign_blanco"],
    type: "WORD_CHOICE",
    category: "Colores",
    minLevel: 2,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}blanco.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Gris" },
          { id: "opt_2", text: "Negro" },
          { id: "opt_3", text: "Blanco" },
          { id: "opt_4", text: "Rosa" },
        ],
        correctOptionId: "opt_3",
      },
    },
  },
  {
    questionId: "wc_col_004",
    signIds: ["sign_gris"],
    type: "WORD_CHOICE",
    category: "Colores",
    minLevel: 2,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}gris.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Blanco" },
          { id: "opt_2", text: "Negro" },
          { id: "opt_3", text: "Marrón" },
          { id: "opt_4", text: "Gris" },
        ],
        correctOptionId: "opt_4",
      },
    },
  },
  {
    questionId: "wc_col_005",
    signIds: ["sign_marron"],
    type: "WORD_CHOICE",
    category: "Colores",
    minLevel: 4,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}marron.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Marrón" },
          { id: "opt_2", text: "Naranja" },
          { id: "opt_3", text: "Rojo" },
          { id: "opt_4", text: "Morado" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_col_006",
    signIds: ["sign_naranja"],
    type: "WORD_CHOICE",
    category: "Colores",
    minLevel: 5,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}naranja.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Amarillo" },
          { id: "opt_2", text: "Naranja" },
          { id: "opt_3", text: "Rojo" },
          { id: "opt_4", text: "Marrón" },
        ],
        correctOptionId: "opt_2",
      },
    },
  },
  {
    questionId: "wc_col_007",
    signIds: ["sign_rojo"],
    type: "WORD_CHOICE",
    category: "Colores",
    minLevel: 7,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}rojo.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Rosa" },
          { id: "opt_2", text: "Naranja" },
          { id: "opt_3", text: "Rojo" },
          { id: "opt_4", text: "Morado" },
        ],
        correctOptionId: "opt_3",
      },
    },
  },
  {
    questionId: "wc_col_008",
    signIds: ["sign_verde"],
    type: "WORD_CHOICE",
    category: "Colores",
    minLevel: 9,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}verde.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Azul" },
          { id: "opt_2", text: "Morado" },
          { id: "opt_3", text: "Rosa" },
          { id: "opt_4", text: "Verde" },
        ],
        correctOptionId: "opt_4",
      },
    },
  },
  {
    questionId: "wc_col_009",
    signIds: ["sign_marron"],
    type: "WORD_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}marron.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Marrón" },
          { id: "opt_2", text: "Amarillo vívido" },
          { id: "opt_3", text: "Negro" },
          { id: "opt_4", text: "Rosa" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_col_010",
    signIds: ["sign_verde"],
    type: "WORD_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}verde.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Verde" },
          { id: "opt_2", text: "Amarillo vívido" },
          { id: "opt_3", text: "Naranja" },
          { id: "opt_4", text: "Gris" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_col_011",
    signIds: ["sign_rojo"],
    type: "WORD_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}rojo.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Rojo" },
          { id: "opt_2", text: "Marrón" },
          { id: "opt_3", text: "Gris oscuro" },
          { id: "opt_4", text: "Rosa" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_col_012",
    signIds: ["sign_amarillo_vivido"],
    type: "WORD_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}amarillo_vivido.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Amarillo vívido" },
          { id: "opt_2", text: "Azul" },
          { id: "opt_3", text: "Gris" },
          { id: "opt_4", text: "Rosa" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_col_013",
    signIds: ["sign_rosa"],
    type: "WORD_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}rosa.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Rosa" },
          { id: "opt_2", text: "Marrón" },
          { id: "opt_3", text: "Verde" },
          { id: "opt_4", text: "Amarillo vívido" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_col_014",
    signIds: ["sign_naranja"],
    type: "WORD_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}naranja.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Naranja" },
          { id: "opt_2", text: "Rosa" },
          { id: "opt_3", text: "Verde" },
          { id: "opt_4", text: "Rojo" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_col_015",
    signIds: ["sign_blanco"],
    type: "WORD_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}blanco.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Blanco" },
          { id: "opt_2", text: "Negro" },
          { id: "opt_3", text: "Gris oscuro" },
          { id: "opt_4", text: "Amarillo" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_col_016",
    signIds: ["sign_gris"],
    type: "WORD_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}gris.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Gris" },
          { id: "opt_2", text: "Amarillo vívido" },
          { id: "opt_3", text: "Amarillo" },
          { id: "opt_4", text: "Naranja" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_col_017",
    signIds: ["sign_negro"],
    type: "WORD_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}negro.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Negro" },
          { id: "opt_2", text: "Amarillo" },
          { id: "opt_3", text: "Rojo" },
          { id: "opt_4", text: "Rosa" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_col_018",
    signIds: ["sign_gris_claro"],
    type: "WORD_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}gris_claro.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Gris claro" },
          { id: "opt_2", text: "Azul" },
          { id: "opt_3", text: "Rosa" },
          { id: "opt_4", text: "Morado" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_col_019",
    signIds: ["sign_gris_oscuro"],
    type: "WORD_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}gris_oscuro.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Gris oscuro" },
          { id: "opt_2", text: "Gris claro" },
          { id: "opt_3", text: "Verde" },
          { id: "opt_4", text: "Negro" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_col_020",
    signIds: ["sign_morado"],
    type: "WORD_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}morado.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Morado" },
          { id: "opt_2", text: "Gris" },
          { id: "opt_3", text: "Verde" },
          { id: "opt_4", text: "Azul" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_col_021",
    signIds: ["sign_negro"],
    type: "WORD_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}negro.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Negro" },
          { id: "opt_2", text: "Azul" },
          { id: "opt_3", text: "Amarillo vívido" },
          { id: "opt_4", text: "Verde" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },

  // ── SIGN_CHOICE ──────────────────────────────────────────────
  {
    questionId: "sc_col_001",
    signIds: ["sign_amarillo_vivido"],
    type: "SIGN_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Amarillo vívido' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}amarillo_vivido.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}amarillo.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}naranja.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}rojo.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_col_002",
    signIds: ["sign_blanco"],
    type: "SIGN_CHOICE",
    category: "Colores",
    minLevel: 2,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Blanco'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}gris.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}blanco.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}amarillo.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}azul.mp4` },
        ],
        correctOptionId: "opt_2",
      },
    },
  },
  {
    questionId: "sc_col_003",
    signIds: ["sign_gris_claro"],
    type: "SIGN_CHOICE",
    category: "Colores",
    minLevel: 3,
    content: {
      question: "¿Cómo se representa 'Gris claro' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}gris.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}gris_oscuro.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}gris_claro.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}blanco.mp4` },
        ],
        correctOptionId: "opt_3",
      },
    },
  },
  {
    questionId: "sc_col_004",
    signIds: ["sign_gris_oscuro"],
    type: "SIGN_CHOICE",
    category: "Colores",
    minLevel: 3,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Gris oscuro'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}gris_claro.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}negro.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}gris.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}gris_oscuro.mp4` },
        ],
        correctOptionId: "opt_4",
      },
    },
  },
  {
    questionId: "sc_col_005",
    signIds: ["sign_morado"],
    type: "SIGN_CHOICE",
    category: "Colores",
    minLevel: 4,
    content: {
      question: "¿Cómo se representa 'Morado' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}morado.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}rosa.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}azul.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}negro.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_col_006",
    signIds: ["sign_negro"],
    type: "SIGN_CHOICE",
    category: "Colores",
    minLevel: 6,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Negro'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}marron.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}gris_oscuro.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}negro.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}azul.mp4` },
        ],
        correctOptionId: "opt_3",
      },
    },
  },
  {
    questionId: "sc_col_007",
    signIds: ["sign_rosa"],
    type: "SIGN_CHOICE",
    category: "Colores",
    minLevel: 8,
    content: {
      question: "¿Cómo se representa 'Rosa' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}rojo.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}morado.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}naranja.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}rosa.mp4` },
        ],
        correctOptionId: "opt_4",
      },
    },
  },
  {
    questionId: "sc_col_008",
    signIds: ["sign_marron"],
    type: "SIGN_CHOICE",
    category: "Colores",
    minLevel: 4,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Marrón'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}naranja.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}marron.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}rojo.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}morado.mp4` },
        ],
        correctOptionId: "opt_2",
      },
    },
  },
  {
    questionId: "sc_col_009",
    signIds: ["sign_gris"],
    type: "SIGN_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Gris' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}gris.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}morado.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}amarillo_vivido.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}rosa.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_col_010",
    signIds: ["sign_blanco"],
    type: "SIGN_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Blanco'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}blanco.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}gris_claro.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}marron.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}azul.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_col_011",
    signIds: ["sign_gris_oscuro"],
    type: "SIGN_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Gris oscuro' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}gris_oscuro.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}rosa.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}blanco.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}gris_claro.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_col_012",
    signIds: ["sign_amarillo"],
    type: "SIGN_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Amarillo'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}amarillo.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}verde.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}rojo.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}gris_oscuro.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_col_013",
    signIds: ["sign_verde"],
    type: "SIGN_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Verde' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}verde.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}gris.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}morado.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}gris_oscuro.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_col_014",
    signIds: ["sign_morado"],
    type: "SIGN_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Morado'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}morado.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}naranja.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}marron.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}amarillo_vivido.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_col_015",
    signIds: ["sign_azul"],
    type: "SIGN_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Azul' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}azul.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}naranja.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}blanco.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}rojo.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_col_016",
    signIds: ["sign_rojo"],
    type: "SIGN_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Rojo'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}rojo.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}blanco.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}azul.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}amarillo.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_col_017",
    signIds: ["sign_gris_claro"],
    type: "SIGN_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Gris claro' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}gris_claro.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}gris.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}rojo.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}amarillo.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_col_018",
    signIds: ["sign_marron"],
    type: "SIGN_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Marrón'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}marron.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}gris.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}amarillo_vivido.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}rosa.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_col_019",
    signIds: ["sign_rosa"],
    type: "SIGN_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Rosa' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}rosa.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}marron.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}gris.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}gris_claro.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_col_020",
    signIds: ["sign_naranja"],
    type: "SIGN_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Naranja'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}naranja.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}amarillo.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}verde.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}gris_claro.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_col_021",
    signIds: ["sign_negro"],
    type: "SIGN_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Negro' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}negro.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}azul.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}gris.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}rosa.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_col_022",
    signIds: ["sign_blanco"],
    type: "SIGN_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Blanco'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}blanco.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}amarillo_vivido.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}verde.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}rosa.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },

  // ── MATCH_CHOICE ─────────────────────────────────────────────
  {
    questionId: "mc_col_001",
    signIds: ["sign_amarillo", "sign_azul", "sign_blanco", "sign_gris"],
    type: "MATCH_CHOICE",
    category: "Colores",
    minLevel: 2,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}amarillo.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}azul.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}blanco.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}gris.mp4` },
            ],
            textItems: [
              { id: "text_3", text: "Blanco" },
              { id: "text_1", text: "Amarillo" },
              { id: "text_4", text: "Gris" },
              { id: "text_2", text: "Azul" },
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
    questionId: "mc_col_002",
    signIds: ["sign_gris_claro", "sign_gris_oscuro", "sign_marron", "sign_morado"],
    type: "MATCH_CHOICE",
    category: "Colores",
    minLevel: 4,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}gris_claro.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}gris_oscuro.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}marron.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}morado.mp4` },
            ],
            textItems: [
              { id: "text_2", text: "Gris oscuro" },
              { id: "text_4", text: "Morado" },
              { id: "text_1", text: "Gris claro" },
              { id: "text_3", text: "Marrón" },
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
    questionId: "mc_col_003",
    signIds: ["sign_naranja", "sign_negro", "sign_rojo", "sign_rosa"],
    type: "MATCH_CHOICE",
    category: "Colores",
    minLevel: 8,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}naranja.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}negro.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}rojo.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}rosa.mp4` },
            ],
            textItems: [
              { id: "text_4", text: "Rosa" },
              { id: "text_2", text: "Negro" },
              { id: "text_1", text: "Naranja" },
              { id: "text_3", text: "Rojo" },
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
    questionId: "mc_col_004",
    signIds: ["sign_amarillo_vivido", "sign_naranja", "sign_rojo", "sign_verde"],
    type: "MATCH_CHOICE",
    category: "Colores",
    minLevel: 9,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}amarillo_vivido.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}naranja.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}rojo.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}verde.mp4` },
            ],
            textItems: [
              { id: "text_3", text: "Rojo" },
              { id: "text_1", text: "Amarillo vívido" },
              { id: "text_4", text: "Verde" },
              { id: "text_2", text: "Naranja" },
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
    questionId: "mc_col_005",
    signIds: ["sign_negro", "sign_azul", "sign_rosa", "sign_verde"],
    type: "MATCH_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}negro.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}azul.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}rosa.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}verde.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Negro" },
              { id: "text_3", text: "Rosa" },
              { id: "text_4", text: "Verde" },
              { id: "text_2", text: "Azul" },
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
    questionId: "mc_col_006",
    signIds: ["sign_verde", "sign_gris_oscuro", "sign_naranja", "sign_gris"],
    type: "MATCH_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}verde.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}gris_oscuro.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}naranja.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}gris.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Verde" },
              { id: "text_3", text: "Naranja" },
              { id: "text_4", text: "Gris" },
              { id: "text_2", text: "Gris oscuro" },
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
    questionId: "mc_col_007",
    signIds: ["sign_verde", "sign_gris", "sign_marron", "sign_rosa"],
    type: "MATCH_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}verde.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}gris.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}marron.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}rosa.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Verde" },
              { id: "text_3", text: "Marrón" },
              { id: "text_4", text: "Rosa" },
              { id: "text_2", text: "Gris" },
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
    questionId: "mc_col_008",
    signIds: ["sign_rosa", "sign_gris", "sign_morado", "sign_gris_oscuro"],
    type: "MATCH_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}rosa.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}gris.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}morado.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}gris_oscuro.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Rosa" },
              { id: "text_3", text: "Morado" },
              { id: "text_4", text: "Gris oscuro" },
              { id: "text_2", text: "Gris" },
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
    questionId: "mc_col_009",
    signIds: ["sign_marron", "sign_amarillo", "sign_verde", "sign_blanco"],
    type: "MATCH_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}marron.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}amarillo.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}verde.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}blanco.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Marrón" },
              { id: "text_3", text: "Verde" },
              { id: "text_4", text: "Blanco" },
              { id: "text_2", text: "Amarillo" },
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
    questionId: "mc_col_010",
    signIds: ["sign_marron", "sign_rojo", "sign_morado", "sign_naranja"],
    type: "MATCH_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}marron.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}rojo.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}morado.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}naranja.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Marrón" },
              { id: "text_3", text: "Morado" },
              { id: "text_4", text: "Naranja" },
              { id: "text_2", text: "Rojo" },
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
    questionId: "mc_col_011",
    signIds: ["sign_gris", "sign_morado", "sign_azul", "sign_naranja"],
    type: "MATCH_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}gris.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}morado.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}azul.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}naranja.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Gris" },
              { id: "text_3", text: "Azul" },
              { id: "text_4", text: "Naranja" },
              { id: "text_2", text: "Morado" },
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
    questionId: "mc_col_012",
    signIds: ["sign_amarillo", "sign_blanco", "sign_azul", "sign_morado"],
    type: "MATCH_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}amarillo.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}blanco.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}azul.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}morado.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Amarillo" },
              { id: "text_3", text: "Azul" },
              { id: "text_4", text: "Morado" },
              { id: "text_2", text: "Blanco" },
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
    questionId: "mc_col_013",
    signIds: ["sign_rojo", "sign_rosa", "sign_amarillo_vivido", "sign_verde"],
    type: "MATCH_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}rojo.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}rosa.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}amarillo_vivido.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}verde.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Rojo" },
              { id: "text_3", text: "Amarillo vívido" },
              { id: "text_4", text: "Verde" },
              { id: "text_2", text: "Rosa" },
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
    questionId: "mc_col_014",
    signIds: ["sign_verde", "sign_gris_claro", "sign_gris_oscuro", "sign_morado"],
    type: "MATCH_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}verde.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}gris_claro.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}gris_oscuro.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}morado.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Verde" },
              { id: "text_3", text: "Gris oscuro" },
              { id: "text_4", text: "Morado" },
              { id: "text_2", text: "Gris claro" },
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
    questionId: "mc_col_015",
    signIds: ["sign_morado", "sign_gris_claro", "sign_naranja", "sign_rosa"],
    type: "MATCH_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}morado.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}gris_claro.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}naranja.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}rosa.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Morado" },
              { id: "text_3", text: "Naranja" },
              { id: "text_4", text: "Rosa" },
              { id: "text_2", text: "Gris claro" },
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
    questionId: "mc_col_016",
    signIds: ["sign_verde", "sign_rosa", "sign_morado", "sign_azul"],
    type: "MATCH_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}verde.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}rosa.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}morado.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}azul.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Verde" },
              { id: "text_3", text: "Morado" },
              { id: "text_4", text: "Azul" },
              { id: "text_2", text: "Rosa" },
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
    questionId: "mc_col_017",
    signIds: ["sign_amarillo_vivido", "sign_gris", "sign_rojo", "sign_naranja"],
    type: "MATCH_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}amarillo_vivido.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}gris.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}rojo.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}naranja.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Amarillo vívido" },
              { id: "text_3", text: "Rojo" },
              { id: "text_4", text: "Naranja" },
              { id: "text_2", text: "Gris" },
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
    questionId: "mc_col_018",
    signIds: ["sign_azul", "sign_rosa", "sign_blanco", "sign_marron"],
    type: "MATCH_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}azul.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}rosa.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}blanco.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}marron.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Azul" },
              { id: "text_3", text: "Blanco" },
              { id: "text_4", text: "Marrón" },
              { id: "text_2", text: "Rosa" },
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
    questionId: "mc_col_019",
    signIds: ["sign_morado", "sign_naranja", "sign_rojo", "sign_azul"],
    type: "MATCH_CHOICE",
    category: "Colores",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}morado.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}naranja.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}rojo.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}azul.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Morado" },
              { id: "text_3", text: "Rojo" },
              { id: "text_4", text: "Azul" },
              { id: "text_2", text: "Naranja" },
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
