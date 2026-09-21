import { BASE_VIDEO_URL } from "../constants";

export const questions = [
  // ── WORD_CHOICE ──────────────────────────────────────────────
  {
    questionId: "wc_int_001",
    signIds: ["sign_internet"],
    type: "WORD_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}internet.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Internet" },
          { id: "opt_2", text: "Email" },
          { id: "opt_3", text: "Web" },
          { id: "opt_4", text: "Blog" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_int_002",
    signIds: ["sign_email"],
    type: "WORD_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}email.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Mensajes" },
          { id: "opt_2", text: "Email" },
          { id: "opt_3", text: "Internet" },
          { id: "opt_4", text: "WhatsApp" },
        ],
        correctOptionId: "opt_2",
      },
    },
  },
  {
    questionId: "wc_int_003",
    signIds: ["sign_mensajes"],
    type: "WORD_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}mensajes.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Email" },
          { id: "opt_2", text: "Chatear" },
          { id: "opt_3", text: "Mensajes" },
          { id: "opt_4", text: "Compartir" },
        ],
        correctOptionId: "opt_3",
      },
    },
  },
  {
    questionId: "wc_int_004",
    signIds: ["sign_whatsapp"],
    type: "WORD_CHOICE",
    category: "Internet",
    minLevel: 2,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}whatsapp.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Email" },
          { id: "opt_2", text: "Facebook" },
          { id: "opt_3", text: "Twitter" },
          { id: "opt_4", text: "WhatsApp" },
        ],
        correctOptionId: "opt_4",
      },
    },
  },
  {
    questionId: "wc_int_005",
    signIds: ["sign_arroba"],
    type: "WORD_CHOICE",
    category: "Internet",
    minLevel: 3,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}arroba.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Arroba" },
          { id: "opt_2", text: "Hashtag" },
          { id: "opt_3", text: "Email" },
          { id: "opt_4", text: "Blog" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_int_006",
    signIds: ["sign_facebook"],
    type: "WORD_CHOICE",
    category: "Internet",
    minLevel: 4,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}facebook.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Instagram" },
          { id: "opt_2", text: "Facebook" },
          { id: "opt_3", text: "Twitter" },
          { id: "opt_4", text: "Red social" },
        ],
        correctOptionId: "opt_2",
      },
    },
  },
  {
    questionId: "wc_int_007",
    signIds: ["sign_google"],
    type: "WORD_CHOICE",
    category: "Internet",
    minLevel: 6,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}google.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "YouTube" },
          { id: "opt_2", text: "Skype" },
          { id: "opt_3", text: "Google" },
          { id: "opt_4", text: "Internet" },
        ],
        correctOptionId: "opt_3",
      },
    },
  },
  {
    questionId: "wc_int_008",
    signIds: ["sign_youtube"],
    type: "WORD_CHOICE",
    category: "Internet",
    minLevel: 8,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}youtube.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Google" },
          { id: "opt_2", text: "Skype" },
          { id: "opt_3", text: "Facebook" },
          { id: "opt_4", text: "YouTube" },
        ],
        correctOptionId: "opt_4",
      },
    },
  },
  {
    questionId: "wc_int_009",
    signIds: ["sign_arroba"],
    type: "WORD_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}arroba.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Arroba" },
          { id: "opt_2", text: "Google" },
          { id: "opt_3", text: "Red social" },
          { id: "opt_4", text: "Suscribirse" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_int_010",
    signIds: ["sign_compartir"],
    type: "WORD_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}compartir.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Compartir" },
          { id: "opt_2", text: "WhatsApp" },
          { id: "opt_3", text: "YouTube" },
          { id: "opt_4", text: "Facebook" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_int_011",
    signIds: ["sign_twitter"],
    type: "WORD_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}twitter.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Twitter" },
          { id: "opt_2", text: "Internet" },
          { id: "opt_3", text: "Red social" },
          { id: "opt_4", text: "Blog" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_int_012",
    signIds: ["sign_google"],
    type: "WORD_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}google.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Google" },
          { id: "opt_2", text: "Compartir" },
          { id: "opt_3", text: "Arroba" },
          { id: "opt_4", text: "WhatsApp" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_int_013",
    signIds: ["sign_whatsapp"],
    type: "WORD_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}whatsapp.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "WhatsApp" },
          { id: "opt_2", text: "Skype" },
          { id: "opt_3", text: "Chatear" },
          { id: "opt_4", text: "Facebook" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_int_014",
    signIds: ["sign_youtube"],
    type: "WORD_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}youtube.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "YouTube" },
          { id: "opt_2", text: "Google" },
          { id: "opt_3", text: "Suscribirse" },
          { id: "opt_4", text: "Email" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_int_015",
    signIds: ["sign_red_social"],
    type: "WORD_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}red_social.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Red social" },
          { id: "opt_2", text: "Internet" },
          { id: "opt_3", text: "Facebook" },
          { id: "opt_4", text: "Mensajes" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_int_016",
    signIds: ["sign_instagram"],
    type: "WORD_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}instagram.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Instagram" },
          { id: "opt_2", text: "Red social" },
          { id: "opt_3", text: "Skype" },
          { id: "opt_4", text: "Internet" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_int_017",
    signIds: ["sign_chatear"],
    type: "WORD_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}chatear.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Chatear" },
          { id: "opt_2", text: "Compartir" },
          { id: "opt_3", text: "Mensajes" },
          { id: "opt_4", text: "Blog" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_int_018",
    signIds: ["sign_skype"],
    type: "WORD_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}skype.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Skype" },
          { id: "opt_2", text: "YouTube" },
          { id: "opt_3", text: "Email" },
          { id: "opt_4", text: "Google" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_int_019",
    signIds: ["sign_facebook"],
    type: "WORD_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "¿Qué representa este signo?",
      mediaUrl: `${BASE_VIDEO_URL}facebook.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Facebook" },
          { id: "opt_2", text: "Skype" },
          { id: "opt_3", text: "Blog" },
          { id: "opt_4", text: "Red social" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "wc_int_020",
    signIds: ["sign_hashtag"],
    type: "WORD_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "¿Qué significa este signo en LSE?",
      mediaUrl: `${BASE_VIDEO_URL}hashtag.mp4`,
      data: {
        options: [
          { id: "opt_1", text: "Hashtag" },
          { id: "opt_2", text: "Internet" },
          { id: "opt_3", text: "YouTube" },
          { id: "opt_4", text: "Instagram" },
        ],
        correctOptionId: "opt_1",
      },
    },
  },

  // ── SIGN_CHOICE ──────────────────────────────────────────────
  {
    questionId: "sc_int_001",
    signIds: ["sign_chatear"],
    type: "SIGN_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Chatear' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}chatear.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}mensajes.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}compartir.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}email.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_int_002",
    signIds: ["sign_compartir"],
    type: "SIGN_CHOICE",
    category: "Internet",
    minLevel: 2,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Compartir'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}chatear.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}compartir.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}red_social.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}mensajes.mp4` },
        ],
        correctOptionId: "opt_2",
      },
    },
  },
  {
    questionId: "sc_int_003",
    signIds: ["sign_red_social"],
    type: "SIGN_CHOICE",
    category: "Internet",
    minLevel: 2,
    content: {
      question: "¿Cómo se representa 'Red social' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}internet.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}facebook.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}red_social.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}compartir.mp4` },
        ],
        correctOptionId: "opt_3",
      },
    },
  },
  {
    questionId: "sc_int_004",
    signIds: ["sign_blog"],
    type: "SIGN_CHOICE",
    category: "Internet",
    minLevel: 3,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Blog'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}arroba.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}red_social.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}google.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}blog.mp4` },
        ],
        correctOptionId: "opt_4",
      },
    },
  },
  {
    questionId: "sc_int_005",
    signIds: ["sign_instagram"],
    type: "SIGN_CHOICE",
    category: "Internet",
    minLevel: 4,
    content: {
      question: "¿Cómo se representa 'Instagram' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}instagram.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}facebook.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}twitter.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}skype.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_int_006",
    signIds: ["sign_twitter"],
    type: "SIGN_CHOICE",
    category: "Internet",
    minLevel: 5,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Twitter'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}instagram.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}twitter.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}facebook.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}hashtag.mp4` },
        ],
        correctOptionId: "opt_2",
      },
    },
  },
  {
    questionId: "sc_int_007",
    signIds: ["sign_skype"],
    type: "SIGN_CHOICE",
    category: "Internet",
    minLevel: 6,
    content: {
      question: "¿Cómo se representa 'Skype' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}youtube.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}suscribirse.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}skype.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}google.mp4` },
        ],
        correctOptionId: "opt_3",
      },
    },
  },
  {
    questionId: "sc_int_008",
    signIds: ["sign_suscribirse"],
    type: "SIGN_CHOICE",
    category: "Internet",
    minLevel: 7,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Suscribirse'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}google.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}skype.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}youtube.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}suscribirse.mp4` },
        ],
        correctOptionId: "opt_4",
      },
    },
  },
  {
    questionId: "sc_int_009",
    signIds: ["sign_suscribirse"],
    type: "SIGN_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Suscribirse' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}suscribirse.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}twitter.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}instagram.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}mensajes.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_int_010",
    signIds: ["sign_mensajes"],
    type: "SIGN_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Mensajes'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}mensajes.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}whatsapp.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}arroba.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}skype.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_int_011",
    signIds: ["sign_twitter"],
    type: "SIGN_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Twitter' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}twitter.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}arroba.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}chatear.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}email.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_int_012",
    signIds: ["sign_youtube"],
    type: "SIGN_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'YouTube'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}youtube.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}blog.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}internet.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}email.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_int_013",
    signIds: ["sign_blog"],
    type: "SIGN_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Blog' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}blog.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}hashtag.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}compartir.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}suscribirse.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_int_014",
    signIds: ["sign_internet"],
    type: "SIGN_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Internet'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}internet.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}chatear.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}red_social.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}google.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_int_015",
    signIds: ["sign_hashtag"],
    type: "SIGN_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Hashtag' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}hashtag.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}email.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}red_social.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}instagram.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_int_016",
    signIds: ["sign_skype"],
    type: "SIGN_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Skype'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}skype.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}chatear.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}compartir.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}instagram.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_int_017",
    signIds: ["sign_compartir"],
    type: "SIGN_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Compartir' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}compartir.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}hashtag.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}email.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}suscribirse.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_int_018",
    signIds: ["sign_whatsapp"],
    type: "SIGN_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'WhatsApp'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}whatsapp.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}skype.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}google.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}suscribirse.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_int_019",
    signIds: ["sign_red_social"],
    type: "SIGN_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Red social' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}red_social.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}skype.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}twitter.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}youtube.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_int_020",
    signIds: ["sign_arroba"],
    type: "SIGN_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Arroba'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}arroba.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}twitter.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}suscribirse.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}red_social.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_int_021",
    signIds: ["sign_facebook"],
    type: "SIGN_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "¿Cómo se representa 'Facebook' en LSE?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}facebook.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}hashtag.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}whatsapp.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}twitter.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },
  {
    questionId: "sc_int_022",
    signIds: ["sign_instagram"],
    type: "SIGN_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "¿Cuál de estos vídeos muestra el signo de 'Instagram'?",
      data: {
        options: [
          { id: "opt_1", mediaUrl: `${BASE_VIDEO_URL}instagram.mp4` },
          { id: "opt_2", mediaUrl: `${BASE_VIDEO_URL}compartir.mp4` },
          { id: "opt_3", mediaUrl: `${BASE_VIDEO_URL}arroba.mp4` },
          { id: "opt_4", mediaUrl: `${BASE_VIDEO_URL}red_social.mp4` },
        ],
        correctOptionId: "opt_1",
      },
    },
  },

  // ── MATCH_CHOICE ─────────────────────────────────────────────
  {
    questionId: "mc_int_001",
    signIds: ["sign_internet", "sign_email", "sign_mensajes", "sign_chatear"],
    type: "MATCH_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}internet.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}email.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}mensajes.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}chatear.mp4` },
            ],
            textItems: [
              { id: "text_3", text: "Mensajes" },
              { id: "text_1", text: "Internet" },
              { id: "text_4", text: "Chatear" },
              { id: "text_2", text: "Email" },
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
    questionId: "mc_int_002",
    signIds: ["sign_compartir", "sign_whatsapp", "sign_red_social", "sign_arroba"],
    type: "MATCH_CHOICE",
    category: "Internet",
    minLevel: 3,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}compartir.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}whatsapp.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}red_social.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}arroba.mp4` },
            ],
            textItems: [
              { id: "text_2", text: "WhatsApp" },
              { id: "text_4", text: "Arroba" },
              { id: "text_1", text: "Compartir" },
              { id: "text_3", text: "Red social" },
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
    questionId: "mc_int_003",
    signIds: ["sign_blog", "sign_facebook", "sign_instagram", "sign_twitter"],
    type: "MATCH_CHOICE",
    category: "Internet",
    minLevel: 5,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}blog.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}facebook.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}instagram.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}twitter.mp4` },
            ],
            textItems: [
              { id: "text_4", text: "Twitter" },
              { id: "text_2", text: "Facebook" },
              { id: "text_1", text: "Blog" },
              { id: "text_3", text: "Instagram" },
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
    questionId: "mc_int_004",
    signIds: ["sign_google", "sign_skype", "sign_suscribirse", "sign_youtube"],
    type: "MATCH_CHOICE",
    category: "Internet",
    minLevel: 8,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}google.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}skype.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}suscribirse.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}youtube.mp4` },
            ],
            textItems: [
              { id: "text_3", text: "Suscribirse" },
              { id: "text_1", text: "Google" },
              { id: "text_4", text: "YouTube" },
              { id: "text_2", text: "Skype" },
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
    questionId: "mc_int_005",
    signIds: ["sign_suscribirse", "sign_twitter", "sign_chatear", "sign_internet"],
    type: "MATCH_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}suscribirse.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}twitter.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}chatear.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}internet.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Suscribirse" },
              { id: "text_3", text: "Chatear" },
              { id: "text_4", text: "Internet" },
              { id: "text_2", text: "Twitter" },
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
    questionId: "mc_int_006",
    signIds: ["sign_instagram", "sign_chatear", "sign_hashtag", "sign_email"],
    type: "MATCH_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}instagram.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}chatear.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}hashtag.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}email.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Instagram" },
              { id: "text_3", text: "Hashtag" },
              { id: "text_4", text: "Email" },
              { id: "text_2", text: "Chatear" },
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
    questionId: "mc_int_007",
    signIds: ["sign_mensajes", "sign_hashtag", "sign_instagram", "sign_youtube"],
    type: "MATCH_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}mensajes.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}hashtag.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}instagram.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}youtube.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Mensajes" },
              { id: "text_3", text: "Instagram" },
              { id: "text_4", text: "YouTube" },
              { id: "text_2", text: "Hashtag" },
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
    questionId: "mc_int_008",
    signIds: ["sign_twitter", "sign_instagram", "sign_arroba", "sign_skype"],
    type: "MATCH_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}twitter.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}instagram.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}arroba.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}skype.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Twitter" },
              { id: "text_3", text: "Arroba" },
              { id: "text_4", text: "Skype" },
              { id: "text_2", text: "Instagram" },
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
    questionId: "mc_int_009",
    signIds: ["sign_chatear", "sign_blog", "sign_instagram", "sign_internet"],
    type: "MATCH_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}chatear.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}blog.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}instagram.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}internet.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Chatear" },
              { id: "text_3", text: "Instagram" },
              { id: "text_4", text: "Internet" },
              { id: "text_2", text: "Blog" },
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
    questionId: "mc_int_010",
    signIds: ["sign_suscribirse", "sign_whatsapp", "sign_youtube", "sign_mensajes"],
    type: "MATCH_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}suscribirse.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}whatsapp.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}youtube.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}mensajes.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Suscribirse" },
              { id: "text_3", text: "YouTube" },
              { id: "text_4", text: "Mensajes" },
              { id: "text_2", text: "WhatsApp" },
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
    questionId: "mc_int_011",
    signIds: ["sign_youtube", "sign_hashtag", "sign_email", "sign_mensajes"],
    type: "MATCH_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}youtube.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}hashtag.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}email.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}mensajes.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "YouTube" },
              { id: "text_3", text: "Email" },
              { id: "text_4", text: "Mensajes" },
              { id: "text_2", text: "Hashtag" },
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
    questionId: "mc_int_012",
    signIds: ["sign_mensajes", "sign_hashtag", "sign_skype", "sign_blog"],
    type: "MATCH_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}mensajes.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}hashtag.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}skype.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}blog.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Mensajes" },
              { id: "text_3", text: "Skype" },
              { id: "text_4", text: "Blog" },
              { id: "text_2", text: "Hashtag" },
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
    questionId: "mc_int_013",
    signIds: ["sign_suscribirse", "sign_email", "sign_instagram", "sign_google"],
    type: "MATCH_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}suscribirse.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}email.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}instagram.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}google.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Suscribirse" },
              { id: "text_3", text: "Instagram" },
              { id: "text_4", text: "Google" },
              { id: "text_2", text: "Email" },
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
    questionId: "mc_int_014",
    signIds: ["sign_arroba", "sign_chatear", "sign_instagram", "sign_hashtag"],
    type: "MATCH_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}arroba.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}chatear.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}instagram.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}hashtag.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Arroba" },
              { id: "text_3", text: "Instagram" },
              { id: "text_4", text: "Hashtag" },
              { id: "text_2", text: "Chatear" },
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
    questionId: "mc_int_015",
    signIds: ["sign_hashtag", "sign_arroba", "sign_google", "sign_youtube"],
    type: "MATCH_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}hashtag.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}arroba.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}google.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}youtube.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Hashtag" },
              { id: "text_3", text: "Google" },
              { id: "text_4", text: "YouTube" },
              { id: "text_2", text: "Arroba" },
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
    questionId: "mc_int_016",
    signIds: ["sign_arroba", "sign_compartir", "sign_blog", "sign_suscribirse"],
    type: "MATCH_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}arroba.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}compartir.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}blog.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}suscribirse.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Arroba" },
              { id: "text_3", text: "Blog" },
              { id: "text_4", text: "Suscribirse" },
              { id: "text_2", text: "Compartir" },
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
    questionId: "mc_int_017",
    signIds: ["sign_whatsapp", "sign_skype", "sign_internet", "sign_red_social"],
    type: "MATCH_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "Relaciona cada signo con su término",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}whatsapp.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}skype.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}internet.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}red_social.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "WhatsApp" },
              { id: "text_3", text: "Internet" },
              { id: "text_4", text: "Red social" },
              { id: "text_2", text: "Skype" },
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
    questionId: "mc_int_018",
    signIds: ["sign_chatear", "sign_skype", "sign_blog", "sign_whatsapp"],
    type: "MATCH_CHOICE",
    category: "Internet",
    minLevel: 1,
    content: {
      question: "Empareja los signos con sus significados",
      data: {
        options: [
          {
            id: "match_group",
            mediaItems: [
              { id: "media_1", mediaUrl: `${BASE_VIDEO_URL}chatear.mp4` },
              { id: "media_2", mediaUrl: `${BASE_VIDEO_URL}skype.mp4` },
              { id: "media_3", mediaUrl: `${BASE_VIDEO_URL}blog.mp4` },
              { id: "media_4", mediaUrl: `${BASE_VIDEO_URL}whatsapp.mp4` },
            ],
            textItems: [
              { id: "text_1", text: "Chatear" },
              { id: "text_3", text: "Blog" },
              { id: "text_4", text: "WhatsApp" },
              { id: "text_2", text: "Skype" },
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
