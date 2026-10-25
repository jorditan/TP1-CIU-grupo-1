// Catálogo de demostración: precios de referencia, badges y financiación ficticios.
export const productos = [
    {
        id: 1,
        nombre: "Drácula",
        autor: "Bram Stoker",
        categoria: "Terror",
        precio: 18000,
        imagen: "/img/dracula.webp",
        descripcion: "Una novela clásica sobre el vampiro más famoso de la literatura.",
        sinopsis: "Jonathan Harker viaja a Transilvania para ayudar al conde Drácula con una operación inmobiliaria. Pronto descubre que su anfitrión esconde una naturaleza aterradora y que amenaza con extender su oscuridad por Inglaterra.",
        stock: 0,
        caracteristicas: {
            editorial: "Austral",
            paginas: 496,
            idioma: "Español",
            isbn: "9789505471234",
            anio: 2022
        },
        badges: ["Clásico"]
    },
    {
        id: 2,
        nombre: "It",
        autor: "Stephen King",
        categoria: "Terror",
        precio: 32000,
        imagen: "/img/it.webp",
        descripcion: "Una novela de terror sobre una entidad que acecha a un pueblo.",
        sinopsis: "En el pueblo de Derry, un grupo de amigos se enfrenta a una entidad maligna que adopta distintas formas, especialmente la de un payaso llamado Pennywise. Años después, deberán regresar para cumplir una promesa y enfrentar sus peores miedos.",
        stock: 5,
        caracteristicas: {
            editorial: "Debolsillo",
            paginas: 1504,
            idioma: "Español",
            isbn: "9789877254567",
            anio: 2021
        },
        badges: ["Más vendido","Recomendado"]
    },
    {
        id: 3,
        nombre: "Frankenstein",
        autor: "Mary Shelley",
        categoria: "Terror",
        precio: 16000,
        imagen: "/img/frankenstein.webp",
        descripcion: "Una obra clásica sobre los límites de la ciencia y la ambición humana.",
        sinopsis: "Victor Frankenstein, un joven científico, consigue dar vida a una criatura creada a partir de restos humanos. Horrorizado por su creación, la abandona, desencadenando una tragedia que cuestionará la responsabilidad de quien juega a ser Dios.",
        stock: 12,
        caracteristicas: {
            editorial: "Alma",
            paginas: 288,
            idioma: "Español",
            isbn: "9788418933123",
            anio: 2023
        },
        badges: ["Usado"]
    },
    {
        id: 4,
        nombre: "El Hobbit",
        autor: "J. R. R. Tolkien",
        categoria: "Fantasía",
        precio: 20000,
        imagen: "/img/el-hobbit.webp",
        descripcion: "Una aventura fantástica protagonizada por un hobbit y un grupo de enanos.",
        sinopsis: "Bilbo Bolsón lleva una vida tranquila hasta que el mago Gandalf y trece enanos lo invitan a una expedición para recuperar un tesoro custodiado por el dragón Smaug. Durante el viaje descubrirá su valentía y vivirá aventuras inesperadas.",
        stock: 1,
        caracteristicas: {
            editorial: "Minotauro",
            paginas: 288,
            idioma: "Español",
            isbn: "9788445000661",
            anio: 2020
        },
        badges: ["Usado"]
    },
    {
        id: 5,
        nombre: "Harry Potter y la piedra filosofal",
        autor: "J. K. Rowling",
        categoria: "Fantasía",
        precio: 17500,
        imagen: "/img/harry-potter.webp",
        descripcion: "El inicio de una saga sobre magia, amistad y aventuras.",
        sinopsis: "Harry Potter descubre, al cumplir once años, que es un mago y que ha sido aceptado en el Colegio Hogwarts de Magia y Hechicería. Allí hará amigos, aprenderá a utilizar sus poderes y descubrirá secretos relacionados con su pasado.",
        stock: 7,
        caracteristicas: {
            editorial: "Salamandra",
            paginas: 256,
            idioma: "Español",
            isbn: "9788478884452",
            anio: 2021
        },
        badges: ["Más vendido"],
        cuotasSinInteres: 6
    },
    {
        id: 6,
        nombre: "El nombre del viento",
        autor: "Patrick Rothfuss",
        categoria: "Fantasía",
        precio: 29000,
        imagen: "/img/el-nombre-del-viento.webp",
        descripcion: "Una novela fantástica sobre un músico, mago y aventurero.",
        sinopsis: "Kvothe, un hombre rodeado de leyendas, relata la historia de su vida: desde su infancia con una troupe de artistas itinerantes hasta su ingreso en una prestigiosa universidad donde estudia magia y busca respuestas sobre un misterioso grupo.",
        stock: 4,
        caracteristicas: {
            editorial: "Plaza & Janés",
            paginas: 880,
            idioma: "Español",
            isbn: "9788401337208",
            anio: 2019
        },
        badges: ["Nuevo"]
    },
    {
        id: 7,
        nombre: "Dune",
        autor: "Frank Herbert",
        categoria: "Ciencia Ficción",
        precio: 12000,
        imagen: "/img/dune.webp",
        descripcion: "Una épica de ciencia ficción sobre política, ecología y poder.",
        sinopsis: "Paul Atreides viaja con su familia al planeta desértico Arrakis, la única fuente de una sustancia esencial para los viajes espaciales. Tras una traición, deberá sobrevivir en un entorno hostil y descubrir su lugar en el destino del planeta.",
        stock: 6,
        caracteristicas: {
            editorial: "Debolsillo",
            paginas: 784,
            idioma: "Español",
            isbn: "9789877257896",
            anio: 2022
        },
        precioAnterior: 15000,
        badges: ["Selección destacada"],
        cuotasSinInteres: 3
    },
    {
        id: 8,
        nombre: "Fundación",
        autor: "Isaac Asimov",
        categoria: "Ciencia Ficción",
        precio: 21000,
        imagen: "/img/fundacion.webp",
        descripcion: "Una novela sobre el futuro de la humanidad y el destino de un imperio galáctico.",
        sinopsis: "Hari Seldon desarrolla una ciencia capaz de predecir estadísticamente el futuro de grandes civilizaciones. Ante la inminente caída del Imperio Galáctico, organiza una fundación destinada a preservar el conocimiento y reducir el período de caos que vendrá después.",
        stock: 0,
        caracteristicas: {
            editorial: "Debolsillo",
            paginas: 256,
            idioma: "Español",
            isbn: "9788497599241",
            anio: 2020
        },
        badges: ["Clásico"]
    },
    {
        id: 9,
        nombre: "Fahrenheit 451",
        autor: "Ray Bradbury",
        categoria: "Ciencia Ficción",
        precio: 17000,
        imagen: "/img/fahrenheit-451.webp",
        descripcion: "Una distopía sobre la censura y el valor del pensamiento crítico.",
        sinopsis: "En una sociedad donde los libros están prohibidos, Guy Montag trabaja como bombero encargado de quemarlos. Después de conocer a personas que cuestionan el sistema, comienza a dudar de su trabajo y a descubrir el poder transformador de la lectura.",
        stock: 11,
        caracteristicas: {
            editorial: "Minotauro",
            paginas: 192,
            idioma: "Español",
            isbn: "9788445000678",
            anio: 2021
        },
        badges: ["Más vendido"]
    },
    {
        id: 10,
        nombre: "Steve Jobs",
        autor: "Walter Isaacson",
        categoria: "Biografía",
        precio: 30000,
        imagen: "/img/steve-jobs.webp",
        descripcion: "Biografía del cofundador de Apple y su impacto en la tecnología.",
        sinopsis: "A partir de entrevistas con Steve Jobs, sus familiares y sus colaboradores, Walter Isaacson reconstruye la vida de uno de los empresarios más influyentes de la tecnología, explorando su creatividad, su carácter y el desarrollo de productos que transformaron distintas industrias.",
        stock: 1,
        caracteristicas: {
            editorial: "Debate",
            paginas: 744,
            idioma: "Español",
            isbn: "9788483069458",
            anio: 2011
        },
        badges: ["Usado"]
    },
    {
        id: 11,
        nombre: "El principito",
        autor: "Antoine de Saint-Exupéry",
        categoria: "Infantil",
        precio: 14000,
        imagen: "/img/el-principito.webp",
        descripcion: "Un relato ilustrado sobre la amistad, el amor y la imaginación.",
        sinopsis: "Un piloto conoce a un pequeño príncipe que viene de otro planeta. A través de sus relatos sobre los viajes que realizó y los personajes que conoció, ambos reflexionan sobre la amistad, los vínculos y aquello que realmente importa en la vida.",
        stock: 15,
        caracteristicas: {
            editorial: "Salamandra",
            paginas: 96,
            idioma: "Español",
            isbn: "9788498381495",
            anio: 2020
        },
        badges: ["Más vendido"],
        cuotasSinInteres: 6
    },
    {
        id: 12,
        nombre: "Matilda",
        autor: "Roald Dahl",
        categoria: "Infantil",
        precio: 16000,
        imagen: "/img/matilda.webp",
        descripcion: "Una historia infantil sobre una niña brillante, curiosa y valiente.",
        sinopsis: "Matilda es una niña extraordinariamente inteligente que ama los libros, pero vive con una familia que no valora sus capacidades. Cuando comienza a ir a la escuela, conoce a una maestra comprensiva y descubre que posee poderes sorprendentes que la ayudarán a enfrentar las injusticias.",
        stock: 8,
        caracteristicas: {
            editorial: "Loqueleo",
            paginas: 240,
            idioma: "Español",
            isbn: "9788491221379",
            anio: 2022
        },
        badges: ["Nuevo"]
    },
    {
        id: 13,
        nombre: "Neuromante",
        autor: "William Gibson",
        categoria: "Ciencia Ficción",
        precio: 23500,
        imagen: "/img/neuromante.webp",
        descripcion: "La novela seminal que definió el género ciberpunk y el concepto de ciberespacio.",
        sinopsis: "Case era el mejor ladrón de datos de la red hasta que dañaron su sistema nervioso como castigo. Cuando un misterioso empleador le ofrece una cura a cambio de hackear una inteligencia artificial corporativa, se sumerge en una conspiración global.",
        stock: 9,
        caracteristicas: {
            editorial: "Minotauro",
            paginas: 320,
            idioma: "Español",
            isbn: "9788445009121",
            anio: 2023
        },
        badges: ["Edición especial"]
    },
    {
        id: 14,
        nombre: "1984",
        autor: "George Orwell",
        categoria: "Ciencia Ficción",
        precio: 15500,
        imagen: "/img/1984.webp",
        descripcion: "La inquietante distopía sobre la vigilancia total y la pérdida de la individualidad.",
        sinopsis: "En Oceanía, el Gran Hermano controla cada pensamiento y acción de los ciudadanos. Winston Smith trabaja reescribiendo la historia en el Ministerio de la Verdad, pero en secreto comienza a rebelarse contra el régimen totalitario.",
        stock: 14,
        caracteristicas: {
            editorial: "Debolsillo",
            paginas: 352,
            idioma: "Español",
            isbn: "9789877253450",
            anio: 2021
        },
        badges: ["Más vendido"]
    },
    {
        id: 15,
        nombre: "El problema de los tres cuerpos",
        autor: "Cixin Liu",
        categoria: "Ciencia Ficción",
        precio: 28000,
        imagen: "/img/el-problema-de-los-tres-cuerpos.webp",
        descripcion: "El primer contacto con una civilización alienígena al borde del colapso.",
        sinopsis: "Durante la Revolución Cultural china, un proyecto militar envía señales al espacio buscando vida extraterrestre. Décadas después, una serie de suicidios inexplicables entre científicos revela que una civilización alienígena ha respondido y planea invadir la Tierra.",
        stock: 4,
        caracteristicas: {
            editorial: "Nova",
            paginas: 416,
            idioma: "Español",
            isbn: "9788466659734",
            anio: 2024
        },
        badges: ["Novedad"]
    },
    {
        id: 16,
        nombre: "El resplandor",
        autor: "Stephen King",
        categoria: "Terror",
        precio: 26500,
        imagen: "/img/el-resplandor.webp",
        descripcion: "Aislamiento, locura y presencias siniestras en un hotel de montaña.",
        sinopsis: "Jack Torrance acepta el trabajo de cuidador invernal en el aislado Hotel Overlook con la esperanza de superar su alcoholismo y escribir una obra. A medida que el invierno avanza y la nieve los deja incomunicados, fuerzas oscuras comienzan a desestabilizar su mente.",
        stock: 3,
        caracteristicas: {
            editorial: "Debolsillo",
            paginas: 656,
            idioma: "Español",
            isbn: "9789877253801",
            anio: 2022
        },
        badges: ["Más vendido"]
    },
    {
        id: 17,
        nombre: "Estudio en escarlata",
        autor: "Arthur Conan Doyle",
        categoria: "Policial",
        precio: 13500,
        imagen: "/img/estudio-en-escarlata.webp",
        descripcion: "La primera aparición literaria del célebre detective Sherlock Holmes.",
        sinopsis: "El doctor John Watson conoce al excéntrico Sherlock Holmes y juntos alquilan el departamento del 221B de Baker Street. Pronto se ven envueltos en la investigación de un misterioso asesinato en una casa abandonada que desconcierta a Scotland Yard.",
        stock: 8,
        caracteristicas: {
            editorial: "Alianza",
            paginas: 184,
            idioma: "Español",
            isbn: "9788420650944",
            anio: 2020
        },
        badges: ["Usado"]
    },
    {
        id: 18,
        nombre: "Diez negritos",
        autor: "Agatha Christie",
        categoria: "Policial",
        precio: 19000,
        imagen: "/img/diez-negritos.webp",
        descripcion: "Diez personas atrapadas en una isla mueren una a una siguiendo una canción infantil.",
        sinopsis: "Ocho personas son invitadas a una mansión en una isla solitaria por un anfitrión misterioso. Al llegar, se encuentran solo con la servidumbre y una grabación que acusa a cada uno de un crimen pasado impune, desatando una cacería mortal.",
        stock: 6,
        caracteristicas: {
            editorial: "Booket",
            paginas: 224,
            idioma: "Español",
            isbn: "9788408168249",
            anio: 2023
        },
        badges: ["Más vendido"]
    },
    {
        id: 19,
        nombre: "El guardián entre el centeno",
        autor: "J. D. Salinger",
        categoria: "Ficción",
        precio: 16800,
        imagen: "/img/el-guardian-entre-el-centeno.webp",
        descripcion: "El viaje interior de un adolescente enfrentado a la hipocresía del mundo adulto.",
        sinopsis: "Holden Caulfield es expulsado de su escuela preparatoria y decide vagar solo por las calles de Nueva York antes de regresar a casa. Con una mirada cínica y vulnerable, cuestiona las convenciones sociales y busca autenticidad.",
        stock: 0,
        caracteristicas: {
            editorial: "Alianza",
            paginas: 272,
            idioma: "Español",
            isbn: "9788420674209",
            anio: 2021
        },
        precioAnterior: 21000,
        badges: ["Selección destacada"],
        cuotasSinInteres: 3
    },
    {
        id: 20,
        nombre: "Sapiens: De animales a dioses",
        autor: "Yuval Noah Harari",
        categoria: "No Ficción",
        precio: 34000,
        imagen: "/img/sapiens.webp",
        descripcion: "Una breve historia de la humanidad desde la evolución biológica hasta el presente.",
        sinopsis: "Harari explora cómo una especie de simio insignificante logró dominar el planeta mediante la capacidad de crear y creer en ficciones compartidas: naciones, dinero, religión y derechos humanos.",
        stock: 10,
        caracteristicas: {
            editorial: "Debate",
            paginas: 496,
            idioma: "Español",
            isbn: "9789873752193",
            anio: 2022
        },
        badges: ["Más vendido"]
    },
    {
        id: 21,
        nombre: "El camino del artista",
        autor: "Julia Cameron",
        categoria: "No Ficción",
        precio: 25000,
        imagen: "/img/el-camino-del-artista.webp",
        descripcion: "Un programa práctico de doce semanas para recuperar la creatividad y desbloquear ideas.",
        sinopsis: "A través de herramientas como las páginas matutinas y las citas con el artista, Julia Cameron guía a creadores de todas las disciplinas para superar bloqueos mentales, miedos y juicios paralizantes.",
        stock: 5,
        caracteristicas: {
            editorial: "Aguilar",
            paginas: 336,
            idioma: "Español",
            isbn: "9788403519800",
            anio: 2023
        },
        badges: ["Novedad"]
    },
    {
        id: 22,
        nombre: "Ficciones",
        autor: "Jorge Luis Borges",
        categoria: "Ficción",
        precio: 19500,
        imagen: "/img/ficciones.webp",
        descripcion: "Cuentos fundamentales sobre laberintos, bibliotecas infinitas y espejos.",
        sinopsis: "Reúne obras maestras como 'El jardín de senderos que se bifurcan' y 'Artificios'. Borges desafía la noción de realidad, tiempo e identidad a través de acertijos metafísicos y literatura fantástica.",
        stock: 12,
        caracteristicas: {
            editorial: "Debolsillo",
            paginas: 224,
            idioma: "Español",
            isbn: "9789875666474",
            anio: 2022
        },
        badges: ["Clásico"]
    },
    {
        id: 23,
        nombre: "La sombra del viento",
        autor: "Carlos Ruiz Zafón",
        categoria: "Policial",
        precio: 27500,
        imagen: "/img/la-sombra-del-viento.webp",
        descripcion: "Un misterio literario ambientado en una Barcelona gótica y melancólica.",
        sinopsis: "Daniel Sempere descubre un libro maldito en el Cementerio de los Libros Olvidados. Al intentar averiguar el paradero de su autor, Julián Carax, abre la puerta a una red de secretos familiares, crímenes y pasiones prohibidas.",
        stock: 7,
        caracteristicas: {
            editorial: "Planeta",
            paginas: 576,
            idioma: "Español",
            isbn: "9788408163398",
            anio: 2021
        },
        badges: ["Edición especial"]
    },
    {
        id: 24,
        nombre: "La llamada de Cthulhu",
        autor: "H. P. Lovecraft",
        categoria: "Terror",
        precio: 15000,
        imagen: "/img/la-llamada-de-cthulhu.webp",
        descripcion: "El relato central del horror cósmico y los dioses primigenios.",
        sinopsis: "A través de notas, recortes de prensa y testimonios inconexos, Francis Thurston descubre una secta global que rinde culto a una criatura ciclópea sumergida en la ciudad submarina de R'lyeh, aguardando su despertar.",
        stock: 0,
        caracteristicas: {
            editorial: "Alianza",
            paginas: 160,
            idioma: "Español",
            isbn: "9788420668987",
            anio: 2020
        },
        precioAnterior: 18800,
        badges: ["Selección destacada"],
        cuotasSinInteres: 3
    },
    {
        id: 25,
        nombre: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        categoria: "Ficción",
        precio: 24500,
        imagen: "/img/cien-anios-de-soledad.webp",
        descripcion: "La saga cumbre del realismo mágico y la estirpe de los Buendía.",
        sinopsis: "A lo largo de siete generaciones, la familia Buendía vive ascensos, guerras civiles, amores trágicos y milagros cotidianos en el mítico pueblo de Macondo, atrapada en un ciclo ineludible de soledad y destino.",
        stock: 18,
        caracteristicas: {
            editorial: "Sudamericana",
            paginas: 496,
            idioma: "Español",
            isbn: "9789500700177",
            anio: 2021
        },
        badges: ["Más vendido"]
    },
    {
        id: 26,
        nombre: "Rayuela",
        autor: "Julio Cortázar",
        categoria: "Ficción",
        precio: 22000,
        imagen: "/img/rayuela.webp",
        descripcion: "Una contranovela lúdica y revolucionaria para armar y desarmar.",
        sinopsis: "Horacio Oliveira deambula por el París bohemio con La Maga y su club de intelectuales antes de volver a Buenos Aires. La novela propone múltiples órdenes de lectura, dinamitando las reglas narrativas tradicionales.",
        stock: 4,
        caracteristicas: {
            editorial: "Alfaguara",
            paginas: 600,
            idioma: "Español",
            isbn: "9788420437484",
            anio: 2022
        },
        badges: ["Clásico"]
    },
    {
        id: 27,
        nombre: "El túnel",
        autor: "Ernesto Sabato",
        categoria: "Ficción",
        precio: 14500,
        imagen: "/img/el-tunel.webp",
        descripcion: "Una confesión visceral sobre la obsesión, los celos y el aislamiento existencial.",
        sinopsis: "El pintor Juan Pablo Castel narra desde la cárcel los motivos que lo llevaron a asesinar a María Iribarne, la única persona que pareció comprender su arte, atrapado en una espiral destructiva de incomunicación.",
        stock: 9,
        caracteristicas: {
            editorial: "Seix Barral",
            paginas: 160,
            idioma: "Español",
            isbn: "9789507316782",
            anio: 2021
        },
        badges: ["Usado"]
    },
    {
        id: 28,
        nombre: "El Aleph",
        autor: "Jorge Luis Borges",
        categoria: "Ficción",
        precio: 20500,
        imagen: "/img/el-aleph.webp",
        descripcion: "Cuentos sobre la eternidad, el infinito y la multiplicidad del universo.",
        sinopsis: "En el sótano de una casa de la calle Garay, el protagonista encuentra el Aleph: un punto en el espacio que contiene simultáneamente todos los lugares del cosmos vistos desde todos los ángulos sin confusión.",
        stock: 6,
        caracteristicas: {
            editorial: "Debolsillo",
            paginas: 216,
            idioma: "Español",
            isbn: "9789875666481",
            anio: 2023
        },
        badges: ["Nuevo"]
    },
    {
        id: 29,
        nombre: "Crónica de una muerte anunciada",
        autor: "Gabriel García Márquez",
        categoria: "Ficción",
        precio: 16000,
        imagen: "/img/cronica-de-una-muerte-anunciada.webp",
        descripcion: "La reconstrucción periodística y trágica de un homicidio anunciado a voces.",
        sinopsis: "Los hermanos Vicario anuncian a todo el pueblo que matarán a Santiago Nasar para vengar el honor de su hermana. A pesar de que todos conocen la amenaza inminente, una serie de casualidades consuma la tragedia.",
        stock: 13,
        caracteristicas: {
            editorial: "Debolsillo",
            paginas: 144,
            idioma: "Español",
            isbn: "9789875669000",
            anio: 2022
        },
        precioAnterior: 20000,
        badges: ["Selección destacada"],
        cuotasSinInteres: 3
    },
    {
        id: 30,
        nombre: "Crimen y castigo",
        autor: "Fiódor Dostoyevski",
        categoria: "Clásicos",
        precio: 27000,
        imagen: "/img/crimen-y-castigo.webp",
        descripcion: "Una autopsia moral y psicológica del remordimiento y la redención.",
        sinopsis: "Rodión Raskólnikov, un joven estudiante en la miseria de San Petersburgo, formula la teoría del 'hombre extraordinario' y asesina a una vieja usurera. A partir de allí vive un tormento psicológico que lo empuja al abismo.",
        stock: 5,
        caracteristicas: {
            editorial: "Alba",
            paginas: 688,
            idioma: "Español",
            isbn: "9788484284147",
            anio: 2021
        },
        badges: ["Clásico"]
    },
    {
        id: 31,
        nombre: "La metamorfosis",
        autor: "Franz Kafka",
        categoria: "Clásicos",
        precio: 13000,
        imagen: "/img/la-metamorfosis.webp",
        descripcion: "La brutal deshumanización del individuo en el seno de la rutina familiar y laboral.",
        sinopsis: "Gregor Samsa despierta una mañana transformado en un insecto monstruoso. Incapaz de seguir manteniendo económicamente a su familia, pasa a ser visto con desprecio, miedo y una carga intolerable.",
        stock: 22,
        caracteristicas: {
            editorial: "Alianza",
            paginas: 128,
            idioma: "Español",
            isbn: "9788420651347",
            anio: 2020
        },
        badges: ["Más vendido"]
    },
    {
        id: 32,
        nombre: "El extranjero",
        autor: "Albert Camus",
        categoria: "Filosofía",
        precio: 15500,
        imagen: "/img/el-extranjero.webp",
        descripcion: "La obra fundacional del absurdo, la indiferencia y el juicio social.",
        sinopsis: "Meursault recibe la noticia de la muerte de su madre sin mostrar pena ni conmoción. Días después se ve involucrado en un tiroteo en una playa argelina; durante su juicio, su falta de emociones pesará más que el crimen.",
        stock: 8,
        caracteristicas: {
            editorial: "Alianza",
            paginas: 160,
            idioma: "Español",
            isbn: "9788420674254",
            anio: 2022
        },
        badges: ["Nuevo"]
    },
    {
        id: 33,
        nombre: "El retrato de Dorian Gray",
        autor: "Oscar Wilde",
        categoria: "Clásicos",
        precio: 17500,
        imagen: "/img/el-retrato-de-dorian-gray.webp",
        descripcion: "Hedonismo, vanidad y el precio de la eterna juventud exterior.",
        sinopsis: "Fascinado por su propia belleza capturada en un óleo, Dorian Gray formula el deseo de que la pintura envejezca por él. Mientras él conserva una apariencia pura, el retrato carga en secreto con sus perversiones y años.",
        stock: 0,
        caracteristicas: {
            editorial: "Austral",
            paginas: 304,
            idioma: "Español",
            isbn: "9788467034172",
            anio: 2023
        },
        precioAnterior: 21900,
        badges: ["Selección destacada"],
        cuotasSinInteres: 3
    },
    {
        id: 34,
        nombre: "El fin de la eternidad",
        autor: "Isaac Asimov",
        categoria: "Ciencia Ficción",
        precio: 22500,
        imagen: "/img/el-fin-de-la-eternidad.webp",
        descripcion: "Viajes en el tiempo, paradojas de causalidad y el costo de la seguridad humana.",
        sinopsis: "Andrew Harlan integra 'La Eternidad', una organización situada fuera del flujo temporal que ajusta la historia para evitar desastres a la humanidad. Todo cambia cuando se enamora de una mujer del siglo 482.",
        stock: 3,
        caracteristicas: {
            editorial: "Debolsillo",
            paginas: 288,
            idioma: "Español",
            isbn: "9788497594321",
            anio: 2021
        },
        badges: ["Usado"]
    },
    {
        id: 35,
        nombre: "Solaris",
        autor: "Stanislaw Lem",
        categoria: "Ciencia Ficción",
        precio: 24000,
        imagen: "/img/solaris.webp",
        descripcion: "La imposibilidad de comunicarse con una inteligencia verdaderamente alienígena.",
        sinopsis: "El psicólogo Kris Kelvin viaja a la estación orbital sobre el planeta Solaris, cubierto por un océano pensante. Al llegar descubre que la entidad materializa los recuerdos culposos y traumas más íntimos de la tripulación.",
        stock: 5,
        caracteristicas: {
            editorial: "Impedimenta",
            paginas: 296,
            idioma: "Español",
            isbn: "9788415130130",
            anio: 2022
        },
        badges: ["Edición especial"]
    },
    {
        id: 36,
        nombre: "Cántico por Leibowitz",
        autor: "Walter M. Miller Jr.",
        categoria: "Ciencia Ficción",
        precio: 26000,
        imagen: "/img/cantico-por-leibowitz.webp",
        descripcion: "Una orden monástica preserva los restos científicos tras el apocalipsis nuclear.",
        sinopsis: "Tras una devastadora guerra nuclear, una orden religiosa custodia fragmentos de planos y libros técnicos en el desierto durante siglos, presenciando el lento renacimiento de la civilización y su trágica tendencia a repetir errores.",
        stock: 2,
        caracteristicas: {
            editorial: "Minotauro",
            paginas: 384,
            idioma: "Español",
            isbn: "9788445076413",
            anio: 2020
        },
        badges: ["Nuevo"]
    },
    {
        id: 37,
        nombre: "El silencio de los inocentes",
        autor: "Thomas Harris",
        categoria: "Terror",
        precio: 23000,
        imagen: "/img/el-silencio-de-los-inocentes.webp",
        descripcion: "Un duelo de astucia criminal entre una novata del FBI y un psiquiatra caníbal.",
        sinopsis: "Clarice Starling es enviada a entrevistar al brillante psiquiatra y asesino en serie Hannibal Lecter con el fin de obtener pistas sobre 'Buffalo Bill', un maníaco que secuestra y desuella a mujeres jóvenes.",
        stock: 6,
        caracteristicas: {
            editorial: "Debolsillo",
            paginas: 416,
            idioma: "Español",
            isbn: "9789877252013",
            anio: 2022
        },
        badges: ["Más vendido"]
    },
    {
        id: 38,
        nombre: "Misery",
        autor: "Stephen King",
        categoria: "Terror",
        precio: 25000,
        imagen: "/img/misery.webp",
        descripcion: "El encierro de un escritor en manos de su admiradora más despiadada.",
        sinopsis: "Paul Sheldon sufre un violento accidente de auto en una ventisca y es rescatado por Annie Wilkes, su fanática número uno. Al enterarse de que mató a su personaje favorito en su última novela, Annie lo somete a un cautiverio sádico.",
        stock: 4,
        caracteristicas: {
            editorial: "Debolsillo",
            paginas: 400,
            idioma: "Español",
            isbn: "9789877253016",
            anio: 2023
        },
        badges: ["Usado"]
    },
    {
        id: 39,
        nombre: "El perro de los Baskerville",
        autor: "Arthur Conan Doyle",
        categoria: "Policial",
        precio: 16500,
        imagen: "/img/el-perro-de-los-baskerville.webp",
        descripcion: "Una bestia fantasmal asedia a una familia noble en los pantanos de Dartmoor.",
        sinopsis: "Sherlock Holmes y John Watson investigan la muerte de sir Charles Baskerville, rodeada de la leyenda de un sabueso infernal que persigue a los herederos de la mansión en la bruma de los páramos ingleses.",
        stock: 10,
        caracteristicas: {
            editorial: "Alianza",
            paginas: 240,
            idioma: "Español",
            isbn: "9788420650951",
            anio: 2021
        },
        badges: ["Clásico"]
    },
    {
        id: 40,
        nombre: "Asesinato en el Expreso de Oriente",
        autor: "Agatha Christie",
        categoria: "Policial",
        precio: 18500,
        imagen: "/img/asesinato-en-el-expreso-de-oriente.webp",
        descripcion: "Un crimen a puerta cerrada en un tren de lujo varado en la nieve.",
        sinopsis: "Durante una tormenta de nieve que detiene al tren en los Balcanes, un millonario estadounidense aparece apuñalado en su camarote cerrado por dentro. Hércules Poirot interroga a doce pasajeros con coartadas perfectas.",
        stock: 7,
        caracteristicas: {
            editorial: "Booket",
            paginas: 256,
            idioma: "Español",
            isbn: "9788408168256",
            anio: 2023
        },
        badges: ["Más vendido"]
    },
    {
        id: 41,
        nombre: "El largo adiós",
        autor: "Raymond Chandler",
        categoria: "Policial",
        precio: 21500,
        imagen: "/img/el-largo-adios.webp",
        descripcion: "La cumbre del noir americano: amistad, traición y cinismo en Los Ángeles.",
        sinopsis: "El detective privado Philip Marlowe ayuda a cruzar la frontera a Terry Lennox, un amigo involucrado en un caso confuso. Poco después, Lennox aparece muerto y Marlowe se niega a cerrar las preguntas que incomodan al poder.",
        stock: 3,
        caracteristicas: {
            editorial: "Debolsillo",
            paginas: 448,
            idioma: "Español",
            isbn: "9788497593671",
            anio: 2022
        },
        badges: ["Usado"]
    },
    {
        id: 42,
        nombre: "Elantris",
        autor: "Brandon Sanderson",
        categoria: "Fantasía",
        precio: 31000,
        imagen: "/img/elantris.webp",
        descripcion: "La caída de una ciudad de semidioses convertida en un leprosario viviente.",
        sinopsis: "Elantris era la metrópoli más resplandeciente del mundo hasta que una maldición transformó a sus habitantes en criaturas desahuciadas. Raoden, heredero al trono infectado en secreto, es desterrado allí y busca devolverle el orden.",
        stock: 6,
        caracteristicas: {
            editorial: "Nova",
            paginas: 656,
            idioma: "Español",
            isbn: "9788466658935",
            anio: 2021
        },
        badges: ["Nuevo"]
    },
    {
        id: 43,
        nombre: "Nacidos de la bruma: El imperio final",
        autor: "Brandon Sanderson",
        categoria: "Fantasía",
        precio: 33000,
        imagen: "/img/nacidos-de-la-bruma.webp",
        descripcion: "Un robo épico para derrocar a un tirano inmortal que domina el mundo.",
        sinopsis: "En un imperio cubierto de cenizas y brumas perpetuas, el Lord Legislador gobierna con mano de hierro hace mil años. Kelsier, un rebelde con poderes de la alomancia, recluta a una joven huérfana llamada Vin para planear una rebelión.",
        stock: 8,
        caracteristicas: {
            editorial: "Nova",
            paginas: 672,
            idioma: "Español",
            isbn: "9788466658904",
            anio: 2023
        },
        badges: ["Más vendido"],
        cuotasSinInteres: 6
    },
    {
        id: 44,
        nombre: "Guía del autoestopista galáctico",
        autor: "Douglas Adams",
        categoria: "Ciencia Ficción",
        precio: 18000,
        imagen: "/img/guia-del-autoestopista-galactico.webp",
        descripcion: "Humor británico absurdo y aventuras por la galaxia con una toalla al hombro.",
        sinopsis: "Arthur Dent es rescatado de la Tierra minutos antes de que sea demolida por una flota alienígena burócrata para construir una autopista hiperespacial. Con la ayuda de un manual electrónico viaja por un cosmos disparatado.",
        stock: 0,
        caracteristicas: {
            editorial: "Anagrama",
            paginas: 296,
            idioma: "Español",
            isbn: "9788433973108",
            anio: 2020
        },
        precioAnterior: 22500,
        badges: ["Selección destacada"],
        cuotasSinInteres: 3
    },
    {
        id: 45,
        nombre: "Pensar rápido, pensar despacio",
        autor: "Daniel Kahneman",
        categoria: "No Ficción",
        precio: 31500,
        imagen: "/img/pensar-rapido-pensar-despacio.webp",
        descripcion: "Los dos sistemas cognitivos que modelan nuestras elecciones y sesgos.",
        sinopsis: "El premio Nobel Daniel Kahneman explica la pugna entre el Sistema 1 (rápido, intuitivo y automático) y el Sistema 2 (lento, deliberativo y lógico), revelando los sesgos cognitivos sistemáticos que engañan nuestro razonamiento diario.",
        stock: 9,
        caracteristicas: {
            editorial: "Debate",
            paginas: 672,
            idioma: "Español",
            isbn: "9788499922072",
            anio: 2022
        },
        badges: ["Más vendido"]
    },
    {
        id: 46,
        nombre: "Hábitos atómicos",
        autor: "James Clear",
        categoria: "No Ficción",
        precio: 23000,
        imagen: "/img/habitos-atomicos.webp",
        descripcion: "Un método basado en mejoras del 1% para transformar comportamientos diarios.",
        sinopsis: "James Clear desglosa las cuatro leyes del cambio de conducta humana (hacerlo obvio, atractivo, sencillo y satisfactorio), demostrando cómo pequeños hábitos acumulados provocan transformaciones mayúsculas a largo plazo.",
        stock: 17,
        caracteristicas: {
            editorial: "Diana",
            paginas: 336,
            idioma: "Español",
            isbn: "9786070756535",
            anio: 2023
        },
        badges: ["Más vendido"]
    },
    {
        id: 47,
        nombre: "Meditaciones",
        autor: "Marco Aurelio",
        categoria: "Filosofía",
        precio: 14000,
        imagen: "/img/meditaciones.webp",
        descripcion: "El diario íntimo de autodisciplina y fortaleza estoica del emperador filósofo.",
        sinopsis: "Escritas durante campañas militares en las fronteras de Roma, las reflexiones privadas de Marco Aurelio condensan la ética estoica: dominio de las propias pasiones, aceptación de la naturaleza y serenidad ante la adversidad.",
        stock: 11,
        caracteristicas: {
            editorial: "Gredos",
            paginas: 224,
            idioma: "Español",
            isbn: "9788424938673",
            anio: 2022
        },
        badges: ["Nuevo"]
    },
    {
        id: 48,
        nombre: "Cartas a Lucilio",
        autor: "Séneca",
        categoria: "Filosofía",
        precio: 17000,
        imagen: "/img/cartas-a-lucilio.webp",
        descripcion: "Epístolas morales sobre el valor del tiempo, la amistad y la muerte.",
        sinopsis: "Séneca aconseja a su joven amigo Lucilio sobre cómo vivir con serenidad en una sociedad opulenta y corrupta, remarcando la importancia de aprovechar cada hora y cultivar la autosuficiencia espiritual.",
        stock: 2,
        caracteristicas: {
            editorial: "Cátedra",
            paginas: 368,
            idioma: "Español",
            isbn: "9788437637846",
            anio: 2021
        },
        badges: ["Usado"]
    },
    {
        id: 49,
        nombre: "Watchmen",
        autor: "Alan Moore & Dave Gibbons",
        categoria: "Novela Gráfica",
        precio: 39000,
        imagen: "/img/watchmen.webp",
        descripcion: "La deconstrucción definitiva del mito de los superhéroes y la Guerra Fría.",
        sinopsis: "En una versión alternativa de 1985 donde los vigilantes enmascarados han sido proscritos por ley, el asesinato de uno de ellos (El Comediante) desata una conspiración que amenaza con llevar al mundo a una guerra nuclear definitiva.",
        stock: 4,
        caracteristicas: {
            editorial: "DC Comics / Ovni Press",
            paginas: 448,
            idioma: "Español",
            isbn: "9789878191232",
            anio: 2023
        },
        badges: ["Edición especial"]
    },
    {
        id: 50,
        nombre: "Sandman: Preludios y nocturnos",
        autor: "Neil Gaiman",
        categoria: "Novela Gráfica",
        precio: 36000,
        imagen: "/img/sandman.webp",
        descripcion: "El despertar de Morfeo, señor de los sueños, tras décadas de cautiverio.",
        sinopsis: "Capturado por una secta ocultista a principios del siglo XX, Sueño logra escapar tras siete décadas de prisión. Para reconstruir su reino en ruinas, debe viajar por el infierno y el mundo terrenal recuperando sus objetos de poder.",
        stock: 7,
        caracteristicas: {
            editorial: "DC Black Label / Ovni Press",
            paginas: 240,
            idioma: "Español",
            isbn: "9789878190563",
            anio: 2022
        },
        badges: ["Novedad"]
    },
        {
        id: 51,
        nombre: "Mad Max: Fury Road",
        autor: "George Miller",
        categoria: "Ciencia Ficción",
        precio: 18000,
        imagen: "/img/usado-mad-max-fury-road.webp",
        descripcion: "Una persecución a toda velocidad por el desierto en un futuro postapocalíptico.",
        sinopsis: "En un páramo desértico dominado por el tirano Immortan Joe, la emperatriz Furiosa escapa con las esposas del líder a bordo de un camión de guerra. Max, un errante solitario, se une a la huida en una persecución que no da tregua.",
        stock: 1,
        caracteristicas: {
            distribuidora: "Warner Bros. Pictures",
            duracion: "120 min",
            idioma: "Inglés, con subtítulos en español",
            anio: 2015
        },
        badges: ["Usado"]
    },
    {
        id: 52,
        nombre: "Nomadland",
        autor: "Chloé Zhao",
        categoria: "Ficción",
        precio: 15000,
        imagen: "/img/usado-nomadland.webp",
        descripcion: "Una mujer recorre el oeste de Estados Unidos viviendo en su camioneta.",
        sinopsis: "Tras perder su empleo y su pueblo en plena crisis económica, Fern se lanza a la ruta en una camioneta y adopta una vida nómade. En el camino conoce a otros viajeros y descubre otra forma de pertenecer.",
        stock: 1,
        caracteristicas: {
            distribuidora: "Searchlight Pictures",
            duracion: "108 min",
            idioma: "Inglés, con subtítulos en español",
            anio: 2020
        },
        badges: ["Usado"]
    },
    {
        id: 53,
        nombre: "Point Break",
        autor: "Kathryn Bigelow",
        categoria: "Policial",
        precio: 14000,
        imagen: "/img/usado-point-break.webp",
        descripcion: "Un agente del FBI se infiltra en una banda de surfistas sospechosa de robar bancos.",
        sinopsis: "El joven agente Johnny Utah investiga una serie de asaltos a bancos y se infiltra en el mundo del surf para dar con los responsables. Cuanto más se acerca al carismático líder del grupo, más se difuminan los límites entre la ley y la aventura.",
        stock: 1,
        caracteristicas: {
            distribuidora: "20th Century Fox",
            duracion: "122 min",
            idioma: "Inglés, con subtítulos en español",
            anio: 1991
        },
        badges: ["Usado"]
    },
    {
        id: 54,
        nombre: "Cast Away (Náufrago)",
        autor: "Robert Zemeckis",
        categoria: "Ficción",
        precio: 14500,
        imagen: "/img/usado-cast-away.webp",
        descripcion: "Un hombre sobrevive solo en una isla desierta tras un accidente aéreo.",
        sinopsis: "Chuck Noland, ingeniero de una empresa de paquetería, sobrevive a la caída de su avión en el Pacífico y queda varado en una isla deshabitada. Durante años deberá ingeniárselas para sobrevivir y mantener la esperanza de volver a casa.",
        stock: 1,
        caracteristicas: {
            distribuidora: "20th Century Fox / DreamWorks Pictures",
            duracion: "143 min",
            idioma: "Inglés, con subtítulos en español",
            anio: 2000
        },
        badges: ["Usado"]
    },
    {
        id: 55,
        nombre: "Nope",
        autor: "Jordan Peele",
        categoria: "Terror",
        precio: 17000,
        imagen: "/img/usado-nope.webp",
        descripcion: "Dos hermanos criadores de caballos descubren algo inexplicable en el cielo de su rancho.",
        sinopsis: "OJ y Emerald Haywood administran un rancho de caballos para producciones de cine en California. Cuando comienzan a ocurrir sucesos extraños sobre el rancho, deciden captar la evidencia en video, sin imaginar a qué se enfrentan.",
        stock: 1,
        caracteristicas: {
            distribuidora: "Universal Pictures",
            duracion: "131 min",
            idioma: "Inglés, con subtítulos en español",
            anio: 2022
        },
        badges: ["Usado"]
    },
    {
        id: 56,
        nombre: "La mosca (The Fly)",
        autor: "David Cronenberg",
        categoria: "Terror",
        precio: 14000,
        imagen: "/img/usado-the-fly.webp",
        descripcion: "Un científico fusiona su ADN con el de una mosca tras un experimento de teletransportación.",
        sinopsis: "El excéntrico científico Seth Brundle perfecciona unas cabinas de teletransportación y decide probarlas en sí mismo, sin notar que una mosca entró con él. Mientras la periodista Veronica Quaife documenta el proceso, Seth empieza a transformarse de maneras cada vez más perturbadoras.",
        stock: 1,
        caracteristicas: {
            distribuidora: "20th Century Fox",
            duracion: "96 min",
            idioma: "Inglés, con subtítulos en español",
            anio: 1986
        },
        badges: ["Usado"]
    }
];