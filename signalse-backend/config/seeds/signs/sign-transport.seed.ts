import { BASE_VIDEO_URL } from "../constants";

export const signs = [
  {
    signId: "sign_transportes",
    term: "Transportes",
    category: "Transporte",
    complexity: "Básico",
    minLevel: 1,
    videoUrl: `${BASE_VIDEO_URL}transportes.mp4`,
    meaning:
      "Conjunto de medios y sistemas que permiten el desplazamiento de personas o mercancías de un lugar a otro",
    keySteps: [
      "Coloca ambas manos al frente con los dedos índice levantados.",
      "Mueve las manos alternativamente de un lado a otro.",
      "Mantén los codos flexionados para dar estabilidad al movimiento.",
    ],
  },
  {
    signId: "sign_coche",
    term: "Coche",
    category: "Transporte",
    complexity: "Básico",
    minLevel: 1,
    videoUrl: `${BASE_VIDEO_URL}coche.mp4`,
    meaning:
      "Vehículo de motor con cuatro ruedas diseñado para el transporte de personas",
    keySteps: [
      "Extiende los brazos al frente a la altura del pecho.",
      "Cierra los puños con firmeza imitando el agarre de un volante.",
      "Gira las manos de izquierda a derecha de manera alterna.",
      "Mantén un ritmo constante recreando la acción de conducir.",
    ],
  },
  {
    signId: "sign_autobus",
    term: "Autobús",
    category: "Transporte",
    complexity: "Básico",
    minLevel: 1,
    videoUrl: `${BASE_VIDEO_URL}autobus.mp4`,
    meaning:
      "Vehículo de transporte público de gran tamaño diseñado para llevar muchos pasajeros",
    keySteps: [
      "Eleva ambas manos a la altura de la cabeza.",
      "Entrecierra ambas manos ligeramente.",
      "Realiza un suave movimiento juntando ambas manos en varios toques.",
    ],
  },
  {
    signId: "sign_tren",
    term: "Tren",
    category: "Transporte",
    complexity: "Básico",
    minLevel: 2,
    videoUrl: `${BASE_VIDEO_URL}tren.mp4`,
    meaning:
      "Vehículo que circula sobre raíles formado por una locomotora y varios vagones",
    keySteps: [
      "Coloca el antebrazo izquierdo en posición horizontal delante de tu pecho.",
      "Coloca el brazo derecho en vertical, de forma perpendicular al brazo.",
      "Mueve el brazo derecho en horizontal, abriendo y cerrando la mano.",
    ],
  },
  {
    signId: "sign_bicicleta",
    term: "Bicicleta",
    category: "Transporte",
    complexity: "Básico",
    minLevel: 2,
    videoUrl: `${BASE_VIDEO_URL}bicicleta.mp4`,
    meaning:
      "Vehículo de dos ruedas impulsado por pedales que acciona el propio ciclista",
    keySteps: [
      "Coloca ambas manos al frente con los puños ligeramente cerrados.",
      "Levanta en ambas manos el pulgar y el meñique.",
      "Mueve las manos de forma alterna trazando círculos de arriba a abajo.",
      "Mantén los antebrazos alineados y paralelos durante la ejecución.",
    ],
  },
  {
    signId: "sign_avion",
    term: "Avión",
    category: "Transporte",
    complexity: "Intermedio",
    minLevel: 3,
    videoUrl: `${BASE_VIDEO_URL}avion.mp4`,
    meaning:
      "Vehículo aéreo con alas fijas propulsado por motores que transporta personas o mercancías",
    keySteps: [
      "Extiende la mano izquierda horizontalmente con la palma mirando hacia arriba.",
      "Configura la mano derecha extendiendo únicamente los dedos pulgar y meñique.",
      "Apoya la mano derecha sobre la palma de la mano izquierda al inicio.",
      "Desplaza la mano derecha hacia adelante y hacia arriba simulando el despegue.",
    ],
  },
  {
    signId: "sign_moto",
    term: "Moto",
    category: "Transporte",
    complexity: "Intermedio",
    minLevel: 3,
    videoUrl: `${BASE_VIDEO_URL}moto.mp4`,
    meaning: "Vehículo de dos ruedas con motor que se conduce a horcajadas",
    keySteps: [
      "Sitúa ambas manos al frente a la altura del abdomen.",
      "Cierra los puños simulando sujetar el manillar de una motocicleta.",
      "Gira una muñeca hacia atrás.",
      "Repite este movimiento brevemente emulando la aceleración del motor.",
    ],
  },
  {
    signId: "sign_barco",
    term: "Barco",
    category: "Transporte",
    complexity: "Intermedio",
    minLevel: 4,
    videoUrl: `${BASE_VIDEO_URL}barco.mp4`,
    meaning:
      "Embarcación de gran tamaño que navega por el mar o ríos impulsada por motores o velas",
    keySteps: [
      "Junta las palmas de ambas manos por sus dedos apuntando hacia adelante.",
      "Alinea los dedos extendidos para diseñar la proa triangular de una embarcación.",
      "Desplaza las manos unidas hacia el frente.",
    ],
  },
  {
    signId: "sign_metro",
    term: "Metro",
    category: "Transporte",
    complexity: "Intermedio",
    minLevel: 4,
    videoUrl: `${BASE_VIDEO_URL}metro.mp4`,
    meaning:
      "Tren eléctrico subterráneo de transporte público que circula por una ciudad",
    keySteps: [
      "Extiende la mano izquierda de forma horizontal con la palma orientada hacia abajo.",
      "Modela la mano derecha curvando los dedos para crear una forma de C.",
      "Pasa la mano derecha por debajo de la izquierda moviéndola de un lado a otro.",
      "Mantén la mano izquierda totalmente inmóvil representando el techo del túnel.",
    ],
  },
  {
    signId: "sign_tranvia",
    term: "Tranvía",
    category: "Transporte",
    complexity: "Intermedio",
    minLevel: 5,
    videoUrl: `${BASE_VIDEO_URL}tranvía.mp4`,
    meaning:
      "Vehículo eléctrico sobre raíles que circula por las calles de una ciudad",
    keySteps: [
      "Extiende los dedos índice y corazón de una mano formando una V.",
      "Deja la otra mano inmóvil.",
      "Desplaza la mano en V hacia adelante.",
    ],
  },
  {
    signId: "sign_furgoneta",
    term: "Furgoneta",
    category: "Transporte",
    complexity: "Intermedio",
    minLevel: 6,
    videoUrl: `${BASE_VIDEO_URL}furgoneta.mp4`,
    meaning:
      "Vehículo de motor más grande que un coche, con zona de carga trasera, usado para transportar mercancías",
    keySteps: [
      "Posiciona ambas manos a los lados del rostro con las palmas enfrentadas.",
      "Flexiona ligeramente las manos para marcar un volumen rectangular extendido.",
      "Desplaza las dos manos rectas hacia el frente, acercándolas.",
      "Reproduce el signo de 'Coche'.",
    ],
  },
  {
    signId: "sign_helicoptero",
    term: "Helicóptero",
    category: "Transporte",
    complexity: "Avanzado",
    minLevel: 7,
    videoUrl: `${BASE_VIDEO_URL}helicoptero.mp4`,
    meaning:
      "Aeronave que se eleva y desplaza mediante la rotación de palas horizontales",
    keySteps: [
      "Extiende la mano izquierda plana y horizontal con la palma hacia abajo.",
      "Coloca la mano derecha encima con los dedos completamente abiertos y separados.",
      "Mueve rápidamente los dedos de la mano derecha simulando vibración o giro.",
      "Mantén la mano izquierda como base fija imitando el fuselaje estable.",
    ],
  },
  {
    signId: "sign_submarino",
    term: "Submarino",
    category: "Transporte",
    complexity: "Avanzado",
    minLevel: 8,
    videoUrl: `${BASE_VIDEO_URL}submarino.mp4`,
    meaning: "Embarcación diseñada para navegar sumergida bajo el agua",
    keySteps: [
      "Coloca la mano izquierda extendida horizontalmente con la palma hacia abajo.",
      "Levanta el dedo meñique de la mano derecha manteniendo el puño cerrado.",
      "Desplaza la mano derecha hacia abajo.",
    ],
  },
  {
    signId: "sign_cohete",
    term: "Cohete",
    category: "Transporte",
    complexity: "Avanzado",
    minLevel: 9,
    videoUrl: `${BASE_VIDEO_URL}cohete.mp4`,
    meaning:
      "Vehículo propulsado por motores de reacción capaz de viajar fuera de la atmósfera terrestre",
    keySteps: [
      "Sitúa la mano izquierda extendida horizontalmente con la palma hacia abajo.",
      "Extiende hacia arriba el dedo índice de la mano derecha.",
      "Eleva la mano derecha verticalmente hacia arriba.",
    ],
  },
];
