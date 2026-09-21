import { BASE_VIDEO_URL } from "../constants";

export const questions = [
  // ── WORD_CHOICE ──────────────────────────────────────────────
  {
    questionId: "wc_trab_001",
    signIds: ["sign_trabajo"],
    type: "WORD_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}trabajo.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Trabajo" },
          { id: "opt_2", text: "Jefe" },
          { id: "opt_3", text: "Oficina" },
          { id: "opt_4", text: "Trabajador" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_trab_002",
    signIds: ["sign_jefe"],
    type: "WORD_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}jefe.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Compañero" },
          { id: "opt_2", text: "Jefe" },
          { id: "opt_3", text: "Encargado" },
          { id: "opt_4", text: "Trabajador" },
        ],
        correctOptionId: "opt_2",
      },
    },
  },
  {
    questionId: "wc_trab_003",
    signIds: ["sign_telefono"],
    type: "WORD_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}telefono.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Ordenador" },
          { id: "opt_2", text: "Bolígrafo" },
          { id: "opt_3", text: "Teléfono" },
          { id: "opt_4", text: "Calculadora" },
        ],
        correctOptionId: "opt_3",
      },
    },
  },
  {
    questionId: "wc_trab_004",
    signIds: ["sign_ordenador"],
    type: "WORD_CHOICE",
    category: "Trabajo",
    minLevel: 2,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}ordenador.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Teléfono" },
          { id: "opt_2", text: "Calculadora" },
          { id: "opt_3", text: "Bolígrafo" },
          { id: "opt_4", text: "Ordenador" },
        ],
        correctOptionId: "opt_4",
      },
    },
  },
  {
    questionId: "wc_trab_005",
    signIds: ["sign_boligrafo"],
    type: "WORD_CHOICE",
    category: "Trabajo",
    minLevel: 3,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}boligrafo.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Bolígrafo" },
          { id: "opt_2", text: "Calculadora" },
          { id: "opt_3", text: "Archivador" },
          { id: "opt_4", text: "Ordenador" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_trab_006",
    signIds: ["sign_factura"],
    type: "WORD_CHOICE",
    category: "Trabajo",
    minLevel: 4,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}factura.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Pedido" },
          { id: "opt_2", text: "Factura" },
          { id: "opt_3", text: "Albarán" },
          { id: "opt_4", text: "Proveedor" },
        ],
        correctOptionId: "opt_2",
      },
    },
  },
  {
    questionId: "wc_trab_007",
    signIds: ["sign_fabrica"],
    type: "WORD_CHOICE",
    category: "Trabajo",
    minLevel: 5,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}fabrica.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Oficina" },
          { id: "opt_2", text: "Almacén" },
          { id: "opt_3", text: "Fábrica" },
          { id: "opt_4", text: "Maquinaria" },
        ],
        correctOptionId: "opt_3",
      },
    },
  },
  {
    questionId: "wc_trab_008",
    signIds: ["sign_camion"],
    type: "WORD_CHOICE",
    category: "Trabajo",
    minLevel: 8,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}camión.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Furgoneta" },
          { id: "opt_2", text: "Caja de cartón" },
          { id: "opt_3", text: "Proveedor" },
          { id: "opt_4", text: "Camión" },
        ],
        correctOptionId: "opt_4",
      },
    },
  },
  {
    questionId: "wc_trab_009",
    signIds: ["sign_calculadora"],
    type: "WORD_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}calculadora.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Calculadora" },
          { id: "opt_2", text: "Encargado" },
          { id: "opt_3", text: "Albarán" },
          { id: "opt_4", text: "Archivador" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_trab_010",
    signIds: ["sign_companero"],
    type: "WORD_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}compañero.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Compañero" },
          { id: "opt_2", text: "Maquinaria" },
          { id: "opt_3", text: "Albarán" },
          { id: "opt_4", text: "Teléfono" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_trab_011",
    signIds: ["sign_oficina"],
    type: "WORD_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}oficina.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Oficina" },
          { id: "opt_2", text: "Trabajador" },
          { id: "opt_3", text: "Maquinaria" },
          { id: "opt_4", text: "Calculadora" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_trab_012",
    signIds: ["sign_albaran"],
    type: "WORD_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}albaran.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Albarán" },
          { id: "opt_2", text: "Oficina" },
          { id: "opt_3", text: "Teléfono" },
          { id: "opt_4", text: "Encargado" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_trab_013",
    signIds: ["sign_boligrafo"],
    type: "WORD_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}boligrafo.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Bolígrafo" },
          { id: "opt_2", text: "Proveedor" },
          { id: "opt_3", text: "Fecha de servicio" },
          { id: "opt_4", text: "Caja de cartón" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_trab_014",
    signIds: ["sign_factura"],
    type: "WORD_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}factura.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Factura" },
          { id: "opt_2", text: "Compañero" },
          { id: "opt_3", text: "Jefe" },
          { id: "opt_4", text: "Pedido" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_trab_015",
    signIds: ["sign_fabrica"],
    type: "WORD_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}fabrica.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Fábrica" },
          { id: "opt_2", text: "Oficina" },
          { id: "opt_3", text: "Pedido" },
          { id: "opt_4", text: "Teléfono" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_trab_016",
    signIds: ["sign_caja_carton"],
    type: "WORD_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}caja_carton.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Caja de cartón" },
          { id: "opt_2", text: "Ordenador" },
          { id: "opt_3", text: "Proveedor" },
          { id: "opt_4", text: "Archivador" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_trab_017",
    signIds: ["sign_fecha_servicio"],
    type: "WORD_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}fecha_servicio.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Fecha de servicio" },
          { id: "opt_2", text: "Trabajo" },
          { id: "opt_3", text: "Teléfono" },
          { id: "opt_4", text: "Caja de cartón" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_trab_018",
    signIds: ["sign_ordenador"],
    type: "WORD_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}ordenador.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Ordenador" },
          { id: "opt_2", text: "Calculadora" },
          { id: "opt_3", text: "Jefe" },
          { id: "opt_4", text: "Compañero" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_trab_019",
    signIds: ["sign_pedido"],
    type: "WORD_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}pedido.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Pedido" },
          { id: "opt_2", text: "Proveedor" },
          { id: "opt_3", text: "Maquinaria" },
          { id: "opt_4", text: "Compañero" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_trab_020",
    signIds: ["sign_trabajador"],
    type: "WORD_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}trabajador.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Trabajador" },
          { id: "opt_2", text: "Maquinaria" },
          { id: "opt_3", text: "Proveedor" },
          { id: "opt_4", text: "Ordenador" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },

  // ── SIGN_CHOICE ──────────────────────────────────────────────
  {
    questionId: "sc_trab_001",
    signIds: ["sign_oficina"],
    type: "SIGN_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Oficina' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}oficina.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}trabajo.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}jefe.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}telefono.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_trab_002",
    signIds: ["sign_companero"],
    type: "SIGN_CHOICE",
    category: "Trabajo",
    minLevel: 2,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Compañero'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}jefe.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}compañero.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}trabajador.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}encargado.mp4` },
        ],
        correctOptionId: "opt_2",
      },
    },
  },
  {
    questionId: "sc_trab_003",
    signIds: ["sign_trabajador"],
    type: "SIGN_CHOICE",
    category: "Trabajo",
    minLevel: 2,
    content: {
      question: "¿Cómo se representa 'Trabajador' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}compañero.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}jefe.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}trabajador.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}encargado.mp4` },
        ],
        correctOptionId: "opt_3",
      },
    },
  },
  {
    questionId: "sc_trab_004",
    signIds: ["sign_calculadora"],
    type: "SIGN_CHOICE",
    category: "Trabajo",
    minLevel: 3,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Calculadora'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}ordenador.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}boligrafo.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}telefono.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}calculadora.mp4` },
        ],
        correctOptionId: "opt_4",
      },
    },
  },
  {
    questionId: "sc_trab_005",
    signIds: ["sign_pedido"],
    type: "SIGN_CHOICE",
    category: "Trabajo",
    minLevel: 4,
    content: {
      question: "¿Cómo se representa 'Pedido' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}pedido.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}factura.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}albaran.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}proveedor.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_trab_006",
    signIds: ["sign_proveedor"],
    type: "SIGN_CHOICE",
    category: "Trabajo",
    minLevel: 5,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Proveedor'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}pedido.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}proveedor.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}factura.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}fabrica.mp4` },
        ],
        correctOptionId: "opt_2",
      },
    },
  },
  {
    questionId: "sc_trab_007",
    signIds: ["sign_archivador"],
    type: "SIGN_CHOICE",
    category: "Trabajo",
    minLevel: 7,
    content: {
      question: "¿Cómo se representa 'Archivador' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}albaran.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}caja_carton.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}archivador.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}ordenador.mp4` },
        ],
        correctOptionId: "opt_3",
      },
    },
  },
  {
    questionId: "sc_trab_008",
    signIds: ["sign_fecha_servicio"],
    type: "SIGN_CHOICE",
    category: "Trabajo",
    minLevel: 9,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Fecha de servicio'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}factura.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}pedido.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}camión.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}fecha_servicio.mp4` },
        ],
        correctOptionId: "opt_4",
      },
    },
  },
  {
    questionId: "sc_trab_009",
    signIds: ["sign_fecha_servicio"],
    type: "SIGN_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Fecha de servicio' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}fecha_servicio.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}albaran.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}maquinaria.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}trabajador.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_trab_010",
    signIds: ["sign_caja_carton"],
    type: "SIGN_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Caja de cartón'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}caja_carton.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}fabrica.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}telefono.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}albaran.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_trab_011",
    signIds: ["sign_trabajador"],
    type: "SIGN_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Trabajador' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}trabajador.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}albaran.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}camión.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}trabajo.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_trab_012",
    signIds: ["sign_jefe"],
    type: "SIGN_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Jefe'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}jefe.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}maquinaria.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}fecha_servicio.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}factura.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_trab_013",
    signIds: ["sign_camion"],
    type: "SIGN_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Camión' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}camión.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}jefe.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}proveedor.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}fabrica.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_trab_014",
    signIds: ["sign_albaran"],
    type: "SIGN_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Albarán'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}albaran.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}trabajo.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}proveedor.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}fabrica.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_trab_015",
    signIds: ["sign_factura"],
    type: "SIGN_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Factura' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}factura.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}albaran.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}trabajador.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}ordenador.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_trab_016",
    signIds: ["sign_telefono"],
    type: "SIGN_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Teléfono'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}telefono.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}compañero.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}maquinaria.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}boligrafo.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_trab_017",
    signIds: ["sign_calculadora"],
    type: "SIGN_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Calculadora' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}calculadora.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}maquinaria.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}factura.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}camión.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_trab_018",
    signIds: ["sign_ordenador"],
    type: "SIGN_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Ordenador'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}ordenador.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}telefono.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}boligrafo.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}albaran.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_trab_019",
    signIds: ["sign_boligrafo"],
    type: "SIGN_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Bolígrafo' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}boligrafo.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}fabrica.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}trabajo.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}factura.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_trab_020",
    signIds: ["sign_maquinaria"],
    type: "SIGN_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Maquinaria'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}maquinaria.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}trabajador.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}oficina.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}telefono.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_trab_021",
    signIds: ["sign_pedido"],
    type: "SIGN_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Pedido' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}pedido.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}albaran.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}compañero.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}camión.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_trab_022",
    signIds: ["sign_encargado"],
    type: "SIGN_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Encargado'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}encargado.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}telefono.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}oficina.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}archivador.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },

  // ── MATCH_CHOICE ─────────────────────────────────────────────
  {
    questionId: "mc_trab_001",
    signIds: ["sign_trabajo", "sign_jefe", "sign_oficina", "sign_telefono"],
    type: "MATCH_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}trabajo.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}jefe.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}oficina.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}telefono.mp4` },
            ],
            textItems: [
              { id: "text_3", text: "Oficina" },
              { id: "text_1", text: "Trabajo" },
              { id: "text_4", text: "Teléfono" },
              { id: "text_2", text: "Jefe" },
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
    questionId: "mc_trab_002",
    signIds: ["sign_ordenador", "sign_companero", "sign_encargado", "sign_boligrafo"],
    type: "MATCH_CHOICE",
    category: "Trabajo",
    minLevel: 3,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}ordenador.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}compañero.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}encargado.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}boligrafo.mp4` },
            ],
            textItems: [
              { id: "text_2", text: "Compañero" },
              { id: "text_4", text: "Bolígrafo" },
              { id: "text_1", text: "Ordenador" },
              { id: "text_3", text: "Encargado" },
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
    questionId: "mc_trab_003",
    signIds: ["sign_factura", "sign_proveedor", "sign_fabrica", "sign_maquinaria"],
    type: "MATCH_CHOICE",
    category: "Trabajo",
    minLevel: 6,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}factura.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}proveedor.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}fabrica.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}maquinaria.mp4` },
            ],
            textItems: [
              { id: "text_4", text: "Maquinaria" },
              { id: "text_2", text: "Proveedor" },
              { id: "text_1", text: "Factura" },
              { id: "text_3", text: "Fábrica" },
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
    questionId: "mc_trab_004",
    signIds: ["sign_albaran", "sign_archivador", "sign_camion", "sign_fecha_servicio"],
    type: "MATCH_CHOICE",
    category: "Trabajo",
    minLevel: 9,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}albaran.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}archivador.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}camión.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}fecha_servicio.mp4` },
            ],
            textItems: [
              { id: "text_3", text: "Camión" },
              { id: "text_1", text: "Albarán" },
              { id: "text_4", text: "Fecha de servicio" },
              { id: "text_2", text: "Archivador" },
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
    questionId: "mc_trab_005",
    signIds: ["sign_companero", "sign_pedido", "sign_boligrafo", "sign_camion"],
    type: "MATCH_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}compañero.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}pedido.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}boligrafo.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}camión.mp4` },
            ],
            textItems: [
              { id: "text_3", text: "Bolígrafo" },
              { id: "text_4", text: "Camión" },
              { id: "text_2", text: "Pedido" },
              { id: "text_1", text: "Compañero" },
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
    questionId: "mc_trab_006",
    signIds: ["sign_maquinaria", "sign_camion", "sign_trabajo", "sign_fabrica"],
    type: "MATCH_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}maquinaria.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}camión.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}trabajo.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}fabrica.mp4` },
            ],
            textItems: [
              { id: "text_3", text: "Trabajo" },
              { id: "text_4", text: "Fábrica" },
              { id: "text_2", text: "Camión" },
              { id: "text_1", text: "Maquinaria" },
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
    questionId: "mc_trab_007",
    signIds: ["sign_jefe", "sign_albaran", "sign_telefono", "sign_trabajador"],
    type: "MATCH_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}jefe.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}albaran.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}telefono.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}trabajador.mp4` },
            ],
            textItems: [
              { id: "text_3", text: "Teléfono" },
              { id: "text_4", text: "Trabajador" },
              { id: "text_2", text: "Albarán" },
              { id: "text_1", text: "Jefe" },
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
    questionId: "mc_trab_008",
    signIds: ["sign_jefe", "sign_calculadora", "sign_fecha_servicio", "sign_proveedor"],
    type: "MATCH_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}jefe.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}calculadora.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}fecha_servicio.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}proveedor.mp4` },
            ],
            textItems: [
              { id: "text_3", text: "Fecha de servicio" },
              { id: "text_4", text: "Proveedor" },
              { id: "text_2", text: "Calculadora" },
              { id: "text_1", text: "Jefe" },
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
    questionId: "mc_trab_009",
    signIds: ["sign_camion", "sign_factura", "sign_ordenador", "sign_oficina"],
    type: "MATCH_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}camión.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}factura.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}ordenador.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}oficina.mp4` },
            ],
            textItems: [
              { id: "text_3", text: "Ordenador" },
              { id: "text_4", text: "Oficina" },
              { id: "text_2", text: "Factura" },
              { id: "text_1", text: "Camión" },
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
    questionId: "mc_trab_010",
    signIds: ["sign_calculadora", "sign_companero", "sign_trabajo", "sign_ordenador"],
    type: "MATCH_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}calculadora.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}compañero.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}trabajo.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}ordenador.mp4` },
            ],
            textItems: [
              { id: "text_3", text: "Trabajo" },
              { id: "text_4", text: "Ordenador" },
              { id: "text_2", text: "Compañero" },
              { id: "text_1", text: "Calculadora" },
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
    questionId: "mc_trab_011",
    signIds: ["sign_calculadora", "sign_jefe", "sign_trabajador", "sign_boligrafo"],
    type: "MATCH_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}calculadora.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}jefe.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}trabajador.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}boligrafo.mp4` },
            ],
            textItems: [
              { id: "text_3", text: "Trabajador" },
              { id: "text_4", text: "Bolígrafo" },
              { id: "text_2", text: "Jefe" },
              { id: "text_1", text: "Calculadora" },
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
    questionId: "mc_trab_012",
    signIds: ["sign_boligrafo", "sign_calculadora", "sign_fabrica", "sign_factura"],
    type: "MATCH_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}boligrafo.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}calculadora.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}fabrica.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}factura.mp4` },
            ],
            textItems: [
              { id: "text_3", text: "Fábrica" },
              { id: "text_4", text: "Factura" },
              { id: "text_2", text: "Calculadora" },
              { id: "text_1", text: "Bolígrafo" },
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
    questionId: "mc_trab_013",
    signIds: ["sign_trabajo", "sign_caja_carton", "sign_telefono", "sign_trabajador"],
    type: "MATCH_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}trabajo.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}caja_carton.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}telefono.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}trabajador.mp4` },
            ],
            textItems: [
              { id: "text_3", text: "Teléfono" },
              { id: "text_4", text: "Trabajador" },
              { id: "text_2", text: "Caja de cartón" },
              { id: "text_1", text: "Trabajo" },
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
    questionId: "mc_trab_014",
    signIds: ["sign_maquinaria", "sign_fabrica", "sign_trabajador", "sign_oficina"],
    type: "MATCH_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}maquinaria.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}fabrica.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}trabajador.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}oficina.mp4` },
            ],
            textItems: [
              { id: "text_3", text: "Trabajador" },
              { id: "text_4", text: "Oficina" },
              { id: "text_2", text: "Fábrica" },
              { id: "text_1", text: "Maquinaria" },
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
    questionId: "mc_trab_015",
    signIds: ["sign_encargado", "sign_fecha_servicio", "sign_trabajo", "sign_trabajador"],
    type: "MATCH_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}encargado.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}fecha_servicio.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}trabajo.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}trabajador.mp4` },
            ],
            textItems: [
              { id: "text_3", text: "Trabajo" },
              { id: "text_4", text: "Trabajador" },
              { id: "text_2", text: "Fecha de servicio" },
              { id: "text_1", text: "Encargado" },
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
    questionId: "mc_trab_016",
    signIds: ["sign_archivador", "sign_fabrica", "sign_boligrafo", "sign_calculadora"],
    type: "MATCH_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}archivador.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}fabrica.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}boligrafo.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}calculadora.mp4` },
            ],
            textItems: [
              { id: "text_3", text: "Bolígrafo" },
              { id: "text_4", text: "Calculadora" },
              { id: "text_2", text: "Fábrica" },
              { id: "text_1", text: "Archivador" },
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
    questionId: "mc_trab_017",
    signIds: ["sign_jefe", "sign_archivador", "sign_boligrafo", "sign_telefono"],
    type: "MATCH_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}jefe.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}archivador.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}boligrafo.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}telefono.mp4` },
            ],
            textItems: [
              { id: "text_3", text: "Bolígrafo" },
              { id: "text_4", text: "Teléfono" },
              { id: "text_2", text: "Archivador" },
              { id: "text_1", text: "Jefe" },
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
    questionId: "mc_trab_018",
    signIds: ["sign_calculadora", "sign_archivador", "sign_trabajo", "sign_oficina"],
    type: "MATCH_CHOICE",
    category: "Trabajo",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}calculadora.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}archivador.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}trabajo.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}oficina.mp4` },
            ],
            textItems: [
              { id: "text_3", text: "Trabajo" },
              { id: "text_4", text: "Oficina" },
              { id: "text_2", text: "Archivador" },
              { id: "text_1", text: "Calculadora" },
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
