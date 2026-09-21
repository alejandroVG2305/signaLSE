import { BASE_VIDEO_URL } from "../constants";

export const questions = [
  // ── WORD_CHOICE ──────────────────────────────────────────────
  {
    questionId: "wc_fec_001",
    signIds: ["sign_lunes"],
    type: "WORD_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}lunes.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Lunes" },
          { id: "opt_2", text: "Martes" },
          { id: "opt_3", text: "Miércoles" },
          { id: "opt_4", text: "Jueves" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_fec_002",
    signIds: ["sign_viernes"],
    type: "WORD_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}viernes.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Jueves" },
          { id: "opt_2", text: "Viernes" },
          { id: "opt_3", text: "Sábado" },
          { id: "opt_4", text: "Domingo" },
        ],
        correctOptionId: "opt_2",
      },
    },
  },
  {
    questionId: "wc_fec_003",
    signIds: ["sign_primavera"],
    type: "WORD_CHOICE",
    category: "Fechas",
    minLevel: 2,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}primavera.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Verano" },
          { id: "opt_2", text: "Otoño" },
          { id: "opt_3", text: "Primavera" },
          { id: "opt_4", text: "Invierno" },
        ],
        correctOptionId: "opt_3",
      },
    },
  },
  {
    questionId: "wc_fec_004",
    signIds: ["sign_verano"],
    type: "WORD_CHOICE",
    category: "Fechas",
    minLevel: 2,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}verano.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Primavera" },
          { id: "opt_2", text: "Otoño" },
          { id: "opt_3", text: "Invierno" },
          { id: "opt_4", text: "Verano" },
        ],
        correctOptionId: "opt_4",
      },
    },
  },
  {
    questionId: "wc_fec_005",
    signIds: ["sign_enero"],
    type: "WORD_CHOICE",
    category: "Fechas",
    minLevel: 3,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}enero.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Enero" },
          { id: "opt_2", text: "Febrero" },
          { id: "opt_3", text: "Marzo" },
          { id: "opt_4", text: "Abril" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_fec_006",
    signIds: ["sign_abril"],
    type: "WORD_CHOICE",
    category: "Fechas",
    minLevel: 4,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}abril.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Marzo" },
          { id: "opt_2", text: "Abril" },
          { id: "opt_3", text: "Mayo" },
          { id: "opt_4", text: "Junio" },
        ],
        correctOptionId: "opt_2",
      },
    },
  },
  {
    questionId: "wc_fec_007",
    signIds: ["sign_julio"],
    type: "WORD_CHOICE",
    category: "Fechas",
    minLevel: 6,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}julio.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Agosto" },
          { id: "opt_2", text: "Junio" },
          { id: "opt_3", text: "Julio" },
          { id: "opt_4", text: "Septiembre" },
        ],
        correctOptionId: "opt_3",
      },
    },
  },
  {
    questionId: "wc_fec_008",
    signIds: ["sign_noviembre"],
    type: "WORD_CHOICE",
    category: "Fechas",
    minLevel: 8,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}noviembre.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Octubre" },
          { id: "opt_2", text: "Septiembre" },
          { id: "opt_3", text: "Diciembre" },
          { id: "opt_4", text: "Noviembre" },
        ],
        correctOptionId: "opt_4",
      },
    },
  },
  {
    questionId: "wc_fec_009",
    signIds: ["sign_noviembre"],
    type: "WORD_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}noviembre.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Noviembre" },
          { id: "opt_2", text: "Enero" },
          { id: "opt_3", text: "Mayo" },
          { id: "opt_4", text: "Septiembre" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_fec_010",
    signIds: ["sign_julio"],
    type: "WORD_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}julio.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Julio" },
          { id: "opt_2", text: "Marzo" },
          { id: "opt_3", text: "Martes" },
          { id: "opt_4", text: "Otoño" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_fec_011",
    signIds: ["sign_miercoles"],
    type: "WORD_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}miercoles.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Miércoles" },
          { id: "opt_2", text: "Junio" },
          { id: "opt_3", text: "Jueves" },
          { id: "opt_4", text: "Lunes" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_fec_012",
    signIds: ["sign_abril"],
    type: "WORD_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}abril.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Abril" },
          { id: "opt_2", text: "Enero" },
          { id: "opt_3", text: "Domingo" },
          { id: "opt_4", text: "Verano" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_fec_013",
    signIds: ["sign_verano"],
    type: "WORD_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}verano.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Verano" },
          { id: "opt_2", text: "Junio" },
          { id: "opt_3", text: "Miércoles" },
          { id: "opt_4", text: "Septiembre" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_fec_014",
    signIds: ["sign_enero"],
    type: "WORD_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}enero.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Enero" },
          { id: "opt_2", text: "Febrero" },
          { id: "opt_3", text: "Mayo" },
          { id: "opt_4", text: "Invierno" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_fec_015",
    signIds: ["sign_primavera"],
    type: "WORD_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}primavera.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Primavera" },
          { id: "opt_2", text: "Verano" },
          { id: "opt_3", text: "Lunes" },
          { id: "opt_4", text: "Noviembre" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_fec_016",
    signIds: ["sign_diciembre"],
    type: "WORD_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}diciembre.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Diciembre" },
          { id: "opt_2", text: "Agosto" },
          { id: "opt_3", text: "Jueves" },
          { id: "opt_4", text: "Invierno" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_fec_017",
    signIds: ["sign_martes"],
    type: "WORD_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}martes.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Martes" },
          { id: "opt_2", text: "Viernes" },
          { id: "opt_3", text: "Jueves" },
          { id: "opt_4", text: "Octubre" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_fec_018",
    signIds: ["sign_jueves"],
    type: "WORD_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}jueves.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Jueves" },
          { id: "opt_2", text: "Invierno" },
          { id: "opt_3", text: "Junio" },
          { id: "opt_4", text: "Enero" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_fec_019",
    signIds: ["sign_sabado"],
    type: "WORD_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}sabado.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Sábado" },
          { id: "opt_2", text: "Febrero" },
          { id: "opt_3", text: "Viernes" },
          { id: "opt_4", text: "Octubre" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_fec_020",
    signIds: ["sign_junio"],
    type: "WORD_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}junio.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Junio" },
          { id: "opt_2", text: "Viernes" },
          { id: "opt_3", text: "Miércoles" },
          { id: "opt_4", text: "Enero" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_fec_021",
    signIds: ["sign_invierno"],
    type: "WORD_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}invierno.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Invierno" },
          { id: "opt_2", text: "Lunes" },
          { id: "opt_3", text: "Martes" },
          { id: "opt_4", text: "Octubre" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },

  // ── SIGN_CHOICE ──────────────────────────────────────────────
  {
    questionId: "sc_fec_001",
    signIds: ["sign_martes"],
    type: "SIGN_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Martes' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}martes.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}lunes.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}miercoles.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}jueves.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_fec_002",
    signIds: ["sign_miercoles"],
    type: "SIGN_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Miércoles'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}martes.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}jueves.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}miercoles.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}viernes.mp4` },
        ],
        correctOptionId: "opt_3",
      },
    },
  },
  {
    questionId: "sc_fec_003",
    signIds: ["sign_sabado"],
    type: "SIGN_CHOICE",
    category: "Fechas",
    minLevel: 2,
    content: {
      question: "¿Cómo se representa 'Sábado' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}viernes.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}domingo.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}lunes.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}sabado.mp4` },
        ],
        correctOptionId: "opt_4",
      },
    },
  },
  {
    questionId: "sc_fec_004",
    signIds: ["sign_domingo"],
    type: "SIGN_CHOICE",
    category: "Fechas",
    minLevel: 2,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Domingo'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}domingo.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}sabado.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}viernes.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}lunes.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_fec_005",
    signIds: ["sign_otono"],
    type: "SIGN_CHOICE",
    category: "Fechas",
    minLevel: 3,
    content: {
      question: "¿Cómo se representa 'Otoño' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}invierno.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}otono.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}primavera.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}verano.mp4` },
        ],
        correctOptionId: "opt_2",
      },
    },
  },
  {
    questionId: "sc_fec_006",
    signIds: ["sign_febrero"],
    type: "SIGN_CHOICE",
    category: "Fechas",
    minLevel: 4,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Febrero'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}enero.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}marzo.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}abril.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}febrero.mp4` },
        ],
        correctOptionId: "opt_4",
      },
    },
  },
  {
    questionId: "sc_fec_007",
    signIds: ["sign_agosto"],
    type: "SIGN_CHOICE",
    category: "Fechas",
    minLevel: 6,
    content: {
      question: "¿Cómo se representa 'Agosto' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}agosto.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}julio.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}septiembre.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}junio.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_fec_008",
    signIds: ["sign_diciembre"],
    type: "SIGN_CHOICE",
    category: "Fechas",
    minLevel: 9,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Diciembre'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}noviembre.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}octubre.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}diciembre.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}enero.mp4` },
        ],
        correctOptionId: "opt_3",
      },
    },
  },
  {
    questionId: "sc_fec_009",
    signIds: ["sign_septiembre"],
    type: "SIGN_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Septiembre' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}septiembre.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}martes.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}invierno.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}miercoles.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_fec_010",
    signIds: ["sign_mayo"],
    type: "SIGN_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Mayo'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}mayo.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}julio.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}miercoles.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}marzo.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_fec_011",
    signIds: ["sign_jueves"],
    type: "SIGN_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Jueves' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}jueves.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}junio.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}otono.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}febrero.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_fec_012",
    signIds: ["sign_verano"],
    type: "SIGN_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Verano'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}verano.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}septiembre.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}diciembre.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}sabado.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_fec_013",
    signIds: ["sign_febrero"],
    type: "SIGN_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Febrero' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}febrero.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}invierno.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}agosto.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}jueves.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_fec_014",
    signIds: ["sign_diciembre"],
    type: "SIGN_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Diciembre'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}diciembre.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}marzo.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}domingo.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}junio.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_fec_015",
    signIds: ["sign_enero"],
    type: "SIGN_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Enero' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}enero.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}julio.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}octubre.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}otono.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_fec_016",
    signIds: ["sign_viernes"],
    type: "SIGN_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Viernes'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}viernes.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}diciembre.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}junio.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}enero.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_fec_017",
    signIds: ["sign_sabado"],
    type: "SIGN_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Sábado' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}sabado.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}viernes.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}miercoles.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}otono.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_fec_018",
    signIds: ["sign_domingo"],
    type: "SIGN_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Domingo'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}domingo.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}noviembre.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}verano.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}sabado.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_fec_019",
    signIds: ["sign_octubre"],
    type: "SIGN_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Octubre' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}octubre.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}julio.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}primavera.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}lunes.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_fec_020",
    signIds: ["sign_abril"],
    type: "SIGN_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Abril'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}abril.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}primavera.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}otono.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}mayo.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_fec_021",
    signIds: ["sign_julio"],
    type: "SIGN_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Julio' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}julio.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}sabado.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}octubre.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}jueves.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },

  // ── MATCH_CHOICE ─────────────────────────────────────────────
  {
    questionId: "mc_fec_001",
    signIds: ["sign_lunes", "sign_martes", "sign_miercoles", "sign_jueves"],
    type: "MATCH_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}lunes.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}martes.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}miercoles.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}jueves.mp4` },
            ],
            textItems: [
              { id: "text_3", text: "Miércoles" },
              { id: "text_1", text: "Lunes" },
              { id: "text_4", text: "Jueves" },
              { id: "text_2", text: "Martes" },
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
    questionId: "mc_fec_002",
    signIds: ["sign_viernes", "sign_sabado", "sign_domingo", "sign_primavera"],
    type: "MATCH_CHOICE",
    category: "Fechas",
    minLevel: 2,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}viernes.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}sabado.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}domingo.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}primavera.mp4` },
            ],
            textItems: [
              { id: "text_2", text: "Sábado" },
              { id: "text_4", text: "Primavera" },
              { id: "text_1", text: "Viernes" },
              { id: "text_3", text: "Domingo" },
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
    questionId: "mc_fec_003",
    signIds: ["sign_verano", "sign_otono", "sign_invierno", "sign_enero"],
    type: "MATCH_CHOICE",
    category: "Fechas",
    minLevel: 3,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}verano.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}otono.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}invierno.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}enero.mp4` },
            ],
            textItems: [
              { id: "text_4", text: "Enero" },
              { id: "text_2", text: "Otoño" },
              { id: "text_1", text: "Verano" },
              { id: "text_3", text: "Invierno" },
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
    questionId: "mc_fec_004",
    signIds: ["sign_julio", "sign_agosto", "sign_septiembre", "sign_octubre"],
    type: "MATCH_CHOICE",
    category: "Fechas",
    minLevel: 7,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}julio.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}agosto.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}septiembre.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}octubre.mp4` },
            ],
            textItems: [
              { id: "text_3", text: "Septiembre" },
              { id: "text_1", text: "Julio" },
              { id: "text_4", text: "Octubre" },
              { id: "text_2", text: "Agosto" },
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
    questionId: "mc_fec_005",
    signIds: ["sign_otono", "sign_febrero", "sign_diciembre", "sign_junio"],
    type: "MATCH_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}otono.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}febrero.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}diciembre.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}junio.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Otoño" },
              { id: "text_3", text: "Diciembre" },
              { id: "text_4", text: "Junio" },
              { id: "text_2", text: "Febrero" },
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
    questionId: "mc_fec_006",
    signIds: ["sign_sabado", "sign_septiembre", "sign_abril", "sign_otono"],
    type: "MATCH_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}sabado.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}septiembre.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}abril.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}otono.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Sábado" },
              { id: "text_3", text: "Abril" },
              { id: "text_4", text: "Otoño" },
              { id: "text_2", text: "Septiembre" },
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
    questionId: "mc_fec_007",
    signIds: ["sign_miercoles", "sign_diciembre", "sign_sabado", "sign_invierno"],
    type: "MATCH_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}miercoles.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}diciembre.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}sabado.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}invierno.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Miércoles" },
              { id: "text_3", text: "Sábado" },
              { id: "text_4", text: "Invierno" },
              { id: "text_2", text: "Diciembre" },
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
    questionId: "mc_fec_008",
    signIds: ["sign_martes", "sign_primavera", "sign_enero", "sign_domingo"],
    type: "MATCH_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}martes.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}primavera.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}enero.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}domingo.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Martes" },
              { id: "text_3", text: "Enero" },
              { id: "text_4", text: "Domingo" },
              { id: "text_2", text: "Primavera" },
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
    questionId: "mc_fec_009",
    signIds: ["sign_noviembre", "sign_miercoles", "sign_octubre", "sign_sabado"],
    type: "MATCH_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}noviembre.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}miercoles.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}octubre.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}sabado.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Noviembre" },
              { id: "text_3", text: "Octubre" },
              { id: "text_4", text: "Sábado" },
              { id: "text_2", text: "Miércoles" },
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
    questionId: "mc_fec_010",
    signIds: ["sign_invierno", "sign_lunes", "sign_miercoles", "sign_octubre"],
    type: "MATCH_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}invierno.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}lunes.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}miercoles.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}octubre.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Invierno" },
              { id: "text_3", text: "Miércoles" },
              { id: "text_4", text: "Octubre" },
              { id: "text_2", text: "Lunes" },
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
    questionId: "mc_fec_011",
    signIds: ["sign_julio", "sign_sabado", "sign_febrero", "sign_diciembre"],
    type: "MATCH_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}julio.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}sabado.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}febrero.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}diciembre.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Julio" },
              { id: "text_3", text: "Febrero" },
              { id: "text_4", text: "Diciembre" },
              { id: "text_2", text: "Sábado" },
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
    questionId: "mc_fec_012",
    signIds: ["sign_enero", "sign_junio", "sign_octubre", "sign_martes"],
    type: "MATCH_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}enero.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}junio.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}octubre.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}martes.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Enero" },
              { id: "text_3", text: "Octubre" },
              { id: "text_4", text: "Martes" },
              { id: "text_2", text: "Junio" },
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
    questionId: "mc_fec_013",
    signIds: ["sign_febrero", "sign_martes", "sign_sabado", "sign_domingo"],
    type: "MATCH_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}febrero.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}martes.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}sabado.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}domingo.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Febrero" },
              { id: "text_3", text: "Sábado" },
              { id: "text_4", text: "Domingo" },
              { id: "text_2", text: "Martes" },
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
    questionId: "mc_fec_014",
    signIds: ["sign_febrero", "sign_octubre", "sign_domingo", "sign_enero"],
    type: "MATCH_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}febrero.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}octubre.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}domingo.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}enero.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Febrero" },
              { id: "text_3", text: "Domingo" },
              { id: "text_4", text: "Enero" },
              { id: "text_2", text: "Octubre" },
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
    questionId: "mc_fec_015",
    signIds: ["sign_septiembre", "sign_junio", "sign_miercoles", "sign_enero"],
    type: "MATCH_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}septiembre.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}junio.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}miercoles.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}enero.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Septiembre" },
              { id: "text_3", text: "Miércoles" },
              { id: "text_4", text: "Enero" },
              { id: "text_2", text: "Junio" },
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
    questionId: "mc_fec_016",
    signIds: ["sign_verano", "sign_primavera", "sign_domingo", "sign_jueves"],
    type: "MATCH_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}verano.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}primavera.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}domingo.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}jueves.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Verano" },
              { id: "text_3", text: "Domingo" },
              { id: "text_4", text: "Jueves" },
              { id: "text_2", text: "Primavera" },
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
    questionId: "mc_fec_017",
    signIds: ["sign_noviembre", "sign_jueves", "sign_mayo", "sign_marzo"],
    type: "MATCH_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}noviembre.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}jueves.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}mayo.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}marzo.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Noviembre" },
              { id: "text_3", text: "Mayo" },
              { id: "text_4", text: "Marzo" },
              { id: "text_2", text: "Jueves" },
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
    questionId: "mc_fec_018",
    signIds: ["sign_jueves", "sign_martes", "sign_febrero", "sign_septiembre"],
    type: "MATCH_CHOICE",
    category: "Fechas",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}jueves.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}martes.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}febrero.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}septiembre.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Jueves" },
              { id: "text_3", text: "Febrero" },
              { id: "text_4", text: "Septiembre" },
              { id: "text_2", text: "Martes" },
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
