const productos = [
  {
    id: 1,
    nombre: "Carrot Cake",
    descripcion:
      "Rústica y húmeda, la carrot cake combina dulzura natural y especias suaves. Delicado al paladar, y coronada con una cobertura cremosa que realza su sabor único.",
    imagen: "/media/carrot.jpg",
    destacado: false,
    beneficios: [
      "Dulzura natural gracias a la zanahoria",
      "Cobertura cremosa irresistible",
      "Perfecta para acompañar un té o café",
    ],
    historia:
      "La carrot cake tiene sus orígenes en Europa, donde se usaba zanahoria como endulzante natural en la Edad Media. Con el tiempo, se transformó en un clásico de la repostería moderna.",
    porciones: 12,
  },
  {
    id: 2,
    nombre: "Cookies",
    descripcion: "Crocantes por fuera, suaves por dentro, con chips de chocolate, un clásico para cualquier momento.",
    imagen: "/media/cookies.jpg",
    destacado: false,
    beneficios: [
      "Perfectas para cualquier momento del día",
      "Textura crocante y suave a la vez",
      "Clásicas chips de chocolate",
    ],
    historia:
      "Las cookies surgieron en Estados Unidos en la década de 1930 y se popularizaron gracias a su receta fácil y sabor irresistible.",
    porciones: 8,
  },
  {
    id: 3,
    nombre: "Cheesecake",
    descripcion:
      "Delicada base de galletas crujientes, coronada por un suave y cremoso relleno de queso, con un coulis de frutos rojos frescos que aportan un sutil contraste entre dulzor y acidez.",
    imagen: "/media/chesscake.jpg",
    destacado: true,
    beneficios: ["Sabor suave y cremoso", "Contraste perfecto entre dulce y ácido", "Ideal para celebraciones"],
    historia:
      "El cheesecake tiene raíces en la Antigua Grecia, pero fue en Nueva York donde adquirió su versión más famosa y cremosa.",
    porciones: 12,
  },
  {
    id: 4,
    nombre: "Lemon Pie",
    descripcion:
      "Una base crocante de masa sable, rellena con una crema de limón suave y ácida, coronada con un merengue ligero y esponjoso.",
    imagen: "/media/lemon.jpg", // URL encoded para manejar el espacio
    destacado: false,
    beneficios: ["Refrescante sabor cítrico", "Merengue ligero y aireado", "Postre clásico y elegante"],
    historia:
      "El lemon pie es un clásico anglosajón que conquistó el mundo por su equilibrio entre la acidez del limón y la dulzura del merengue.",
    porciones: 10,
  },
  {
    id: 5,
    nombre: "Rolls de Canela",
    descripcion:
      "Masa tierna y esponjosa enrollada con un relleno de canela y azúcar, cubiertos por un glaseado dulce y suave.",
    imagen: "/media/rolls.jpg",
    destacado: false,
    beneficios: [
      "Aromáticos y dulces",
      "Perfectos para desayunos y meriendas",
      "Textura suave y glaseado irresistible",
    ],
    historia:
      "Los rolls de canela, también conocidos como cinnamon rolls, nacieron en Escandinavia y se volvieron populares en todo el mundo gracias a su sabor cálido y acogedor.",
    porciones: 6,
  },
  {
    id: 6,
    nombre: "Torta Brownie",
    descripcion:
      "Elegante y sofisticada, destaca por su textura suave y cremosa. Es un postre ideal para los amantes del chocolate.",
    imagen: "/media/brownie.jpg",
    destacado: false,
    beneficios: ["Intenso sabor a chocolate", "Textura suave y cremosa", "Postre ideal para los amantes del chocolate"],
    historia:
      "Esta torta es una fusión moderna del clásico brownie con el toque fresco y colorido de los frutos rojos.",
    porciones: 10,
  },
]

export default productos
