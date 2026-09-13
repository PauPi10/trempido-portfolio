// Contenido en español para karicoach.app/es. Textos originales de la app
// (RoleplayCatalog.swift, ContentStore, FUNDAMENTOS.md), no traducciones.
// Los iconos y las imágenes de categoría son los mismos assets que la
// versión inglesa (lib/kari-content.ts).

import { ROLEPLAY_CATEGORIES } from "./kari-content"

const img = (id: string) => ROLEPLAY_CATEGORIES.find((c) => c.id === id)!.img
const count = (id: string) => ROLEPLAY_CATEGORIES.find((c) => c.id === id)!.count

export const KARI_ES = {
  tagline: "Tu gimnasio social por voz",
  oneLiner:
    "Kari es una app de iPhone que entrena tu carisma y tus habilidades sociales hablando en voz alta con una IA. Practicas conversaciones reales, un personaje te responde, y al acabar recibes un informe que te dice exactamente qué mejorar.",
} as const

export const SKILLS_ES = [
  { name: "Confianza social", tagline: "Hablar con quien sea sin quedarte en blanco." },
  { name: "Oratoria", tagline: "Que te escuchen cuando abres la boca." },
  { name: "Citas y atracción", tagline: "Crear química sin frases de manual." },
  { name: "Presencia de liderazgo", tagline: "Que tu idea la firmes tú, no otro." },
  { name: "Conflicto y límites", tagline: "El no limpio, sin excusas kilométricas." },
  { name: "Carisma", tagline: "Esa presencia que se nota al entrar." },
  { name: "Narrativa", tagline: "Contar cualquier cosa y que quieran saber más." },
  { name: "Persuasión e influencia", tagline: "Del «suena bien» al «hecho»." },
  { name: "Negociación", tagline: "Pedir más sin romper la relación." },
] as const

export const HOW_STEPS_ES = [
  {
    n: "01",
    kicker: "Aprende la técnica",
    title: "Una lección hablada, no un vídeo",
    body: "Kari te enseña una técnica concreta y la practicas en voz alta con ella al momento. Un intento, una corrección citando tu palabra literal. Cuando la clavas, sube la dificultad.",
  },
  {
    n: "02",
    kicker: "Ponla a prueba",
    title: "Escenas reales con un personaje que responde",
    body: "Eliges un roleplay, hablas y el personaje reacciona como reaccionaría esa persona: se aburre con lo enlatado, presiona, cede solo ante la técnica. Es exposición de verdad, sin el coste social.",
  },
  {
    n: "03",
    kicker: "Mira qué mejorar",
    title: "Un informe que mide conducta, no calma",
    body: "Al acabar, Kari te enseña dónde ganaste y dónde se te escapó, con evidencia de lo que oyó: muletillas, silencios, finales de frase, preguntas de seguimiento. Y la única cosa a cambiar la próxima vez.",
  },
] as const

export const ROLEPLAY_CATEGORIES_ES = [
  {
    id: "dating",
    name: "Citas y ligue",
    count: count("dating"),
    img: img("dating"),
    blurb: "Acércate en frío, crea química, sal de la friendzone o encaja un no con elegancia. Personajes que se aburren de las frases enlatadas.",
    scenes: [
      { icon: "martini", title: "Acércate en frío en un bar", character: "Noa está con sus amigas y se aburre con las frases de manual.", mission: "Inicia una conversación natural y gánate tres minutos de charla real." },
      { icon: "coffee", title: "Domina la primera cita de Tinder", character: "Lía te evalúa y lanza temas trampa: el ex, qué buscas.", mission: "Convierte el interrogatorio en una conversación con química." },
      { icon: "heart-crack", title: "Sal de la friendzone", character: "Carla es tu amiga de siempre y no se lo espera.", mission: "Expresa tu interés sin presiones, protegiendo la amistad." },
    ],
  },
  {
    id: "career",
    name: "Trabajo y carrera",
    count: count("career"),
    img: img("career"),
    blurb: "Entrevistas, ascensos, negociar sueldo, dar feedback difícil o decir que no a tu jefe. Interlocutores con preguntas trampa y presupuesto ajustado.",
    scenes: [
      { icon: "briefcase", title: "Triunfa en tu entrevista de trabajo", character: "Elena, de RR. HH., es amable pero esconde preguntas trampa.", mission: "Presenta tus puntos fuertes con seguridad, sin sonar arrogante." },
      { icon: "trending-up", title: "Defiende tu caso para un ascenso", character: "Víctor, tu jefe, se escuda en que el presupuesto es limitado.", mission: "Defiende tu valía con datos y pide el ascenso sin rodeos." },
      { icon: "coins", title: "Negocia tu compensación", character: "Marta, de selección, dice que la oferta es el tope de la banda.", mission: "Negocia al alza con argumentos sólidos y convincentes." },
    ],
  },
  {
    id: "persuasion",
    name: "Persuasión y negociación",
    count: count("persuasion"),
    img: img("persuasion"),
    blurb: "Convence a un inversor, negocia un alquiler, recupera un dinero prestado o cancela una suscripción sin dejarte liar por retención.",
    scenes: [
      { icon: "gem", title: "Convence a un millonario", character: "El magnate Soler ha oído mil pitches, se aburre e interrumpe.", mission: "Engánchalo y gánate cinco minutos más de reunión." },
      { icon: "scissors", title: "Cancela una suscripción sin dejarte liar", character: "Iker, de retención, usa ofertas agresivas y chantaje emocional.", mission: "Mantente firme hasta que confirme que tu baja está tramitada." },
      { icon: "toy-brick", title: "Convence a un niño de 3 años de compartir", character: "Teo se cierra en banda: «es mío», pura lógica infantil.", mission: "Que comparta sin gritos, castigos ni premios absurdos." },
    ],
  },
  {
    id: "everyday",
    name: "Situaciones sociales",
    count: count("everyday"),
    img: img("everyday"),
    blurb: "El vecino ruidoso, el que se cuela, la cuenta injusta del grupo, el taxista con ruta escénica. Defiende tu terreno sin montar un espectáculo.",
    scenes: [
      { icon: "volume-2", title: "Aborda el ruido del vecino", character: "Toni se pone a la defensiva: en su casa hace lo que quiere.", mission: "Que baje la música ya, sin iniciar una guerra vecinal." },
      { icon: "receipt", title: "Aborda la equidad en el pago grupal", character: "Hugo presiona para dividir a partes iguales y te llama tacaño.", mission: "Paga solo lo tuyo con naturalidad y firmeza." },
      { icon: "footprints", title: "Defiende tu lugar en la fila", character: "Se cuela y se hace el despistado.", mission: "Reclama tu sitio con firmeza y sin escándalo." },
    ],
  },
  {
    id: "relationships",
    name: "Relaciones y familia",
    count: count("relationships"),
    img: img("relationships"),
    blurb: "Pide perdón de verdad, pon límites a la suegra, dile a un amigo lo que te molesta o reconecta con quien perdiste. Conversaciones delicadas, bien hechas.",
    scenes: [
      { icon: "hand-heart", title: "Pide perdón de verdad", character: "Ot está dolido pero finge que no pasa nada.", mission: "Discúlpate sin excusas y propón cómo repararlo." },
      { icon: "soup", title: "Límites con la suegra", character: "Pilar se presenta sin avisar «solo para ayudar».", mission: "Pídele que avise antes de venir sin herir sus sentimientos." },
      { icon: "phone-call", title: "Reconecta con un amigo perdido", character: "Roc reacciona con distancia tras tres años sin hablaros.", mission: "Rompe la frialdad y consigue quedar la semana que viene." },
    ],
  },
] as const

export const FEATURES_ES = [
  { icon: "mic", title: "Entrenas hablando, en voz alta", body: "Nada de leer teoría ni pulsar botones. Kari te oye de verdad por voz en tiempo real y responde al momento, como una conversación real." },
  { icon: "flame", title: "Un personaje que te lo pone difícil", body: "Cada roleplay tiene su carácter y su misión. No cede a la primera: hace pagar las muletas y solo se rinde ante la técnica bien usada." },
  { icon: "report", title: "Informe con evidencia, no halagos", body: "Muletillas contadas, silencios medidos, finales de frase, tiempo de habla. Kari te dice la verdad con datos, no un «muy bien»." },
  { icon: "gauge", title: "Tu número de carisma", body: "A medida que entrenas, Kari calibra una nota basada en evidencias reales de tus sesiones y te señala tu palanca: lo que más te está costando." },
  { icon: "grid", title: "+160 escenas y 45 lecciones", body: "Desde una entrevista de trabajo hasta salir de la friendzone. Variar de escenario retiene más que repetir el mismo hasta la comodidad." },
  { icon: "lock", title: "Sin filtros, y privado", body: "Kari te cuenta las muletillas una a una, lo que nadie te dijo en años. Practicas a solas, cuando quieras, sin la vergüenza de fallar delante de nadie." },
] as const

export const REPORT_ES = {
  title: "Domina la primera cita",
  score: 74,
  metrics: [
    { label: "Muletillas", value: "3", note: "«o sea» ×2 · «eh» ×1" },
    { label: "Preguntas de seguimiento", value: "5", note: "profundizaste bien" },
    { label: "Silencios largos", value: "1", note: "4,2 s tras su pregunta" },
    { label: "Tiempo de habla", value: "68 %", note: "equilibrio sano" },
  ],
  verdict: "La única cosa: cierra las frases hacia abajo. Ganas presencia sin decir una palabra más.",
} as const

// Misma base científica que /science, con las mismas referencias.
export const SCIENCE_ES = [
  {
    stat: "d = −1,39 vs −1,41",
    claim: "Hablar con una IA por voz equivale a la exposición real.",
    detail: "Un meta-análisis de 11 estudios controlados (N=508) encontró que la exposición simulada para el miedo a hablar en público es prácticamente idéntica a la exposición en vivo (d=−1,39 frente a d=−1,41). Practicar en voz alta con una IA es exposición legítima.",
    source: "Reeves et al. · Behavior Modification · 2022",
    url: "https://doi.org/10.1177/0145445521991102",
  },
  {
    stat: "d = 0,87",
    claim: "Practicar con técnica funciona; exponerte solo no crea habilidad.",
    detail: "Un ensayo controlado (N=106, ansiedad social) mostró que exposición más entrenamiento de habilidades superó a la exposición sola en habilidad valorada por jueces (d=0,87). Por eso Kari combina lecciones y roleplays: ninguna de las dos patas sobra.",
    source: "Beidel et al. · J. Anxiety Disorders · 2014",
    url: "https://doi.org/10.1016/j.janxdis.2014.09.016",
  },
  {
    stat: "40 → 71",
    claim: "El carisma vocal se entrena en horas, no en años.",
    detail: "El sistema «Pascal» (N=72) logró una mejora grande del carisma prosódico con 4 horas de práctica con feedback (40 → 71, p<0,001). Solo con la señal acústica se predice el 66-75 % del carisma percibido.",
    source: "Niebuhr et al. · Frontiers in Communication · 2019",
    url: "https://doi.org/10.3389/fcomm.2019.00012",
  },
  {
    stat: "2011",
    claim: "El carisma se enseña, y a quien lo entrena se le ve más influyente.",
    detail: "Directivos entrenados en tácticas verbales concretas (historias, metáforas, contrastes, listas de tres) fueron percibidos como más influyentes por sus propios equipos. Son las únicas tácticas de carisma con efecto causal demostrado.",
    source: "Antonakis et al. · Academy of Management L&E · 2011",
    url: "https://doi.org/10.5465/amle.2010.0012",
  },
  {
    stat: "Huang 2017",
    claim: "Las preguntas de seguimiento predicen que gustes.",
    detail: "Profundizar en lo que el otro acaba de decir predice simpatía y segundas citas. Kari cuenta tus preguntas de seguimiento, tus silencios largos y tu variación de energía como evidencia dura en el informe.",
    source: "Huang et al. · J. Personality and Social Psychology · 2017",
    url: "https://doi.org/10.1037/pspi0000097",
  },
] as const

export const FAQS_ES = [
  {
    q: "¿Qué es exactamente Kari?",
    a: "Kari es una app de iPhone para entrenar tus habilidades sociales y tu carisma hablando en voz alta con una entrenadora de IA. Combina lecciones (una técnica concreta que practicas al momento) con roleplays (escenas reales donde un personaje te responde), y cada sesión termina con un informe que te dice qué mejorar.",
  },
  {
    q: "¿De verdad funciona practicar con una IA?",
    a: "La evidencia dice que sí. Un meta-análisis de 11 estudios (N=508) encontró que la exposición simulada es prácticamente idéntica a la real para el miedo a hablar en público (d=−1,39 frente a −1,41), y el entrenamiento de voz con feedback mejora el carisma percibido en horas (N=72, p<0,001). Todo el diseño de Kari parte de estudios primarios y meta-análisis.",
  },
  {
    q: "¿Tengo que hablar en voz alta?",
    a: "Sí, y es lo importante. Kari te escucha de verdad: oye tus muletillas, tus silencios, tu ritmo y tus finales de frase. Ese feedback sobre cómo suenas solo es posible hablando, no escribiendo. Practicas a solas y en privado, así que no hay vergüenza de fallar delante de nadie.",
  },
  {
    q: "¿Qué puedo practicar?",
    a: "Más de 160 roleplays (citas, trabajo, negociación, conflictos vecinales, familia) y 45 lecciones repartidas en 9 habilidades: confianza social, oratoria, citas y atracción, liderazgo, límites, carisma, narrativa, persuasión y negociación.",
  },
  {
    q: "¿En qué idiomas está Kari?",
    a: "Kari está disponible en 31 idiomas, con español e inglés como idiomas principales. Puedes entrenar en el que te resulte más natural.",
  },
  {
    q: "¿Cuánto cuesta Kari?",
    a: "Kari funciona por suscripción, con plan semanal y plan anual, y puedes ampliar el tiempo de conversación con packs de minutos de pago único. El precio exacto aparece en la App Store, en tu moneda, antes de pagar. Cancelas cuando quieras desde los ajustes de tu cuenta de Apple.",
  },
  {
    q: "¿Kari me graba o me juzga?",
    a: "Kari analiza tu voz en tiempo real para darte feedback, pero el audio no se almacena y ninguna persona lo escucha. El objetivo es medir conducta para que mejores, nunca juzgarte. Kari nunca te puntúa por «estar tranquilo». Consulta la política de privacidad para el detalle.",
  },
  {
    q: "¿Kari es una app de terapia?",
    a: "No. Kari es una herramienta educativa de entrenamiento de habilidades de comunicación, un gimnasio social. No es un servicio médico ni psicológico y no sustituye a un profesional de la salud mental.",
  },
] as const
