export interface Animal {
  id: string;
  name: string;
  scientificName: string;
  status: string;
  population: string;
  location: string;
  habitat: string;
  weight: string;
  lifespan: string;
  heroImage: string;
  gallery: string[];
  shortDescription: string;
  description: string;
  threats: string[];
  conservation: string;
  funFact: string;
}

export const animals: Animal[] = [
  {
    id: "leopardo-de-amur",
    name: "Leopardo de Amur",
    scientificName: "Panthera pardus orientalis",
    status: "En Peligro Critico",
    population: "~120 individuos en estado salvaje",
    location: "Extremo oriente de Rusia y noreste de China",
    habitat: "Bosques templados y boreales con inviernos severos",
    weight: "25 - 48 kg",
    lifespan: "10 - 15 anos en estado salvaje",
    heroImage: "/images/leopardo-amur-hero.jpg",
    gallery: [
      "/images/leopardo-amur-hero.jpg",
      "/images/leopardo-amur-2.jpg",
      "/images/leopardo-amur-3.jpg",
    ],
    shortDescription:
      "El felino mas raro del mundo, con apenas 120 ejemplares sobreviviendo en los bosques nevados del extremo oriente ruso.",
    description:
      "El leopardo de Amur es una subespecie de leopardo adaptada a los climas mas frios del planeta. Su grueso pelaje, que puede alcanzar los 7.5 cm en invierno, lo protege de temperaturas que descienden hasta -30 grados Celsius. A diferencia de otros leopardos, sus rosetas son mas grandes y espaciadas, con bordes mas gruesos para proporcionar mejor camuflaje en la nieve. Son cazadores solitarios y nocturnos que pueden recorrer hasta 25 kilometros en una sola noche en busca de presas como ciervos sika, corzos y liebres.",
    threats: [
      "Caza furtiva por su valiosa piel",
      "Destruccion del habitat por tala e incendios forestales",
      "Endogamia debido a la reducida poblacion",
      "Disminucion de presas por caza ilegal",
      "Conflicto con comunidades humanas cercanas",
    ],
    conservation:
      "Desde 2012, el Parque Nacional Tierra del Leopardo en Rusia protege gran parte de su habitat restante. Los esfuerzos de conservacion han logrado que la poblacion aumente de solo 30 individuos en 2007 a aproximadamente 120 en la actualidad, demostrando que la recuperacion es posible con medidas adecuadas.",
    funFact:
      "El leopardo de Amur puede saltar mas de 6 metros en horizontal y 3 metros en vertical, lo que lo convierte en uno de los felinos mas agiles del mundo.",
  },
  {
    id: "vaquita-marina",
    name: "Vaquita Marina",
    scientificName: "Phocoena sinus",
    status: "En Peligro Critico",
    population: "~10 individuos estimados",
    location: "Golfo de California, Mexico",
    habitat: "Aguas costeras poco profundas del Alto Golfo de California",
    weight: "30 - 55 kg",
    lifespan: "Aproximadamente 21 anos",
    heroImage: "/images/vaquita-hero.jpg",
    gallery: [
      "/images/vaquita-hero.jpg",
      "/images/vaquita-2.jpg",
      "/images/vaquita-3.jpg",
    ],
    shortDescription:
      "El mamifero marino mas amenazado del planeta, con menos de 10 ejemplares sobreviviendo en el Golfo de California.",
    description:
      "La vaquita marina es la marsopa mas pequena del mundo y el cetaceo mas amenazado del planeta. Fue descubierta cientificamente en 1958 y es endemica del Alto Golfo de California en Mexico, lo que significa que no existe en ningun otro lugar del mundo. Mide apenas 1.5 metros de longitud y se caracteriza por los distintivos anillos oscuros alrededor de sus ojos y boca, que le dan una apariencia unica. Es extremadamente timida y dificil de observar, emergiendo brevemente a la superficie para respirar antes de desaparecer.",
    threats: [
      "Captura incidental en redes de pesca ilegales para totoaba",
      "Pesca ilegal de totoaba (cuya vejiga natatoria se vende en el mercado negro asiatico)",
      "Contaminacion de su habitat marino",
      "Poblacion tan reducida que dificulta la reproduccion",
      "Endogamia genetica severa",
    ],
    conservation:
      "Mexico ha implementado vedas de pesca y zonas de exclusion en el habitat de la vaquita. Organizaciones internacionales como Sea Shepherd patrullan las aguas para retirar redes ilegales. Sin embargo, la pesca ilegal de totoaba continua siendo la principal amenaza, impulsada por el alto valor de la vejiga natatoria en el mercado negro chino.",
    funFact:
      "La vaquita marina fue descubierta a partir de craneos encontrados en 1958, y no fue fotografiada viva hasta 1985, lo que demuestra lo esquiva que es esta especie.",
  },
  {
    id: "orangutan-de-sumatra",
    name: "Orangutan de Sumatra",
    scientificName: "Pongo abelii",
    status: "En Peligro Critico",
    population: "~13,846 individuos",
    location: "Isla de Sumatra, Indonesia",
    habitat: "Selvas tropicales de tierras bajas y montanas",
    weight: "30 - 90 kg (machos mas grandes)",
    lifespan: "Hasta 60 anos en cautiverio",
    heroImage: "/images/orangutan-hero.jpg",
    gallery: [
      "/images/orangutan-hero.jpg",
      "/images/orangutan-2.jpg",
      "/images/orangutan-3.jpg",
    ],
    shortDescription:
      "Uno de nuestros parientes mas cercanos, con una inteligencia extraordinaria, lucha por sobrevivir en las selvas de Sumatra.",
    description:
      "El orangutan de Sumatra es uno de los tres grandes simios asiaticos y comparte aproximadamente el 96.4% de su ADN con los humanos. Son los primates arboreos mas grandes del mundo, pasando la mayor parte de su vida en las copas de los arboles donde construyen nidos elaborados cada noche para dormir. Su nombre proviene del malayo 'orang hutan', que significa 'persona del bosque'. Son animales extremadamente inteligentes que utilizan herramientas, como palos para extraer insectos o miel, y hojas grandes como paraguas.",
    threats: [
      "Deforestacion masiva para plantaciones de aceite de palma",
      "Tala ilegal de bosques tropicales",
      "Caza furtiva y trafico de crias como mascotas",
      "Incendios forestales (muchos provocados intencionalmente)",
      "Fragmentacion del habitat que aisla poblaciones",
    ],
    conservation:
      "Programas como el Sumatran Orangutan Conservation Programme (SOCP) rescatan y rehabilitan orangutanes huerfanos para reintroducirlos en la naturaleza. La creacion del Ecosistema Leuser en Sumatra protege una de las ultimas grandes extensiones de selva tropical, hogar de la mayor poblacion de orangutanes de Sumatra.",
    funFact:
      "Los orangutanes tienen el periodo de infancia mas largo de todos los primates despues de los humanos: las crias permanecen con su madre durante 8 anos, aprendiendo habilidades esenciales de supervivencia.",
  },
  {
    id: "gorila-de-montana",
    name: "Gorila de Montana",
    scientificName: "Gorilla beringei beringei",
    status: "En Peligro",
    population: "~1,063 individuos",
    location: "Ruanda, Uganda y Republica Democratica del Congo",
    habitat: "Bosques nubosos de montana entre 2,200 y 4,300 metros de altitud",
    weight: "100 - 220 kg (machos espalda plateada)",
    lifespan: "35 - 40 anos en estado salvaje",
    heroImage: "/images/gorila-hero.jpg",
    gallery: [
      "/images/gorila-hero.jpg",
      "/images/gorila-2.jpg",
      "/images/gorila-3.jpg",
    ],
    shortDescription:
      "El primate mas grande del mundo, habitando las nieblas de las montanas volcanicas de Africa Central.",
    description:
      "El gorila de montana es una de las dos subespecies de gorila oriental y el primate mas grande que existe. Viven en grupos familiares liderados por un macho dominante de espalda plateada, que puede pesar mas de 200 kg. Su grueso pelaje negro, mas largo que el de otros gorilas, les permite sobrevivir en altitudes donde las temperaturas pueden descender por debajo de cero. Son herbivoros que se alimentan principalmente de hojas, tallos, brotes y ocasionalmente frutas. Poseen 16 tipos diferentes de vocalizaciones identificadas para comunicarse.",
    threats: [
      "Conflictos armados en la region de los Grandes Lagos africanos",
      "Enfermedades transmitidas por humanos (como gripe y COVID-19)",
      "Caza furtiva con trampas para otros animales",
      "Perdida de habitat por expansion agricola",
      "Cambio climatico que altera su ecosistema de montana",
    ],
    conservation:
      "El turismo de gorilas en Ruanda y Uganda ha convertido a estos primates en una fuente vital de ingresos para las comunidades locales, incentivando su proteccion. Gracias a decadas de esfuerzos de conservacion liderados por organizaciones como el Dian Fossey Gorilla Fund, la poblacion ha crecido de 620 individuos en 1989 a mas de 1,000 en la actualidad.",
    funFact:
      "Cada gorila tiene un patron unico de arrugas en su nariz, similar a las huellas dactilares humanas. Los investigadores utilizan estas 'huellas nasales' para identificar individuos.",
  },
  {
    id: "tortuga-carey",
    name: "Tortuga Carey",
    scientificName: "Eretmochelys imbricata",
    status: "En Peligro Critico",
    population: "~20,000 hembras anidadoras",
    location: "Oceanos tropicales de todo el mundo",
    habitat: "Arrecifes de coral, costas rocosas y manglares tropicales",
    weight: "45 - 75 kg",
    lifespan: "30 - 50 anos",
    heroImage: "/images/tortuga-hero.jpg",
    gallery: [
      "/images/tortuga-hero.jpg",
      "/images/tortuga-2.jpg",
      "/images/tortuga-3.jpg",
    ],
    shortDescription:
      "Una antigua viajera de los oceanos cuyo hermoso caparazon la ha puesto al borde de la extincion.",
    description:
      "La tortuga carey es una de las siete especies de tortugas marinas que existen en el mundo y una de las mas antiguas, habiendo sobrevivido millones de anos. Se distingue por su hermoso caparazon con escamas superpuestas de tonos ambar, marron y dorado, y por su pico puntiagudo similar al de un halcon, que le permite alimentarse de esponjas en las grietas de los arrecifes de coral. Son fundamentales para la salud de los arrecifes ya que controlan las poblaciones de esponjas, permitiendo que los corales prosperen. Pueden migrar miles de kilometros entre sus areas de alimentacion y las playas de anidacion.",
    threats: [
      "Comercio ilegal de su caparazon para joyeria y artesanias ('carey')",
      "Captura incidental en redes de pesca comercial",
      "Destruccion de playas de anidacion por desarrollo costero",
      "Contaminacion marina y plasticos en los oceanos",
      "Cambio climatico que afecta la temperatura de las playas de anidacion (determinante del sexo)",
    ],
    conservation:
      "Tratados internacionales como CITES prohiben el comercio de productos de carey. Programas de proteccion de nidos en playas de anidacion en el Caribe, Oceano Indico y Pacifico han ayudado a proteger millones de huevos. La reduccion del uso de plasticos y la creacion de areas marinas protegidas son esenciales para su supervivencia.",
    funFact:
      "La temperatura del nido determina el sexo de las crias: temperaturas mas altas producen hembras y temperaturas mas bajas producen machos. El cambio climatico esta alterando esta proporcion de manera preocupante.",
  },
];

export function getAnimalById(id: string): Animal | undefined {
  return animals.find((animal) => animal.id === id);
}
