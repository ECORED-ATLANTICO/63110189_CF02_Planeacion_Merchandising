export default {
  global: {
    Name: 'Atracción y experiencia en el punto de venta',
    Description:
      'El componente busca fortalecer competencias para captar clientes y mejorar su experiencia mediante estrategias de <em>merchandising</em>, análisis del comportamiento del consumidor y toma de decisiones comerciales. Incluye descripciones de herramientas visuales, sensoriales y de gestión del surtido, orientadas a entornos reales de venta, con apoyo en recursos didácticos del ecosistema SENA y enfoque práctico. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Toma de decisiones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Importancia ',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Pasos',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: '<em>Merchandising</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos y características',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Objetivos de <em>merchandising</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos y características',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Técnicas de fijación',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Metas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Características de las metas',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos de metas en el contexto del punto de venta  ',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Ejemplos de metas',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Comportamiento del consumidor',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Factores ',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Tipos y características',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Estrategias del <em>merchandising</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Concepto',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Tipos y características',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Planogramas',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Teoría del color',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Escaparatismo',
            hash: 't_6_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/260101050_CFA2_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Toma de decisiones',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Toma de decisiones [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=J5JP7YxPqAw',
    },
    {
      tema: '<em>Merchandising</em>',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Introducción al <em>merchandising</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=D9O4iU9xSaA',
    },
    {
      tema: 'Objetivos de <em>merchandising</em>',
      referencia:
        'Caroling Flórez. (2017). Manual de <em>visual merchandising</em>. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=DM2N3XrZl0Q',
    },
    {
      tema: 'Estrategias del <em>merchandising</em>',
      referencia:
        'Liliana BG. (2021, 5 de octubre). ¿Para qué sirve la planimetría en el <em>merchandising</em>? [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=8pNtNOzgu3c&ab_channel=LilianaBG',
    },
  ],

  glosario: [
    {
      termino: '<em>Benchmarking</em>',
      significado:
        'Proceso de comparación de prácticas y resultados con los de empresas líderes para mejorar el desempeño propio.',
    },
    {
      termino: 'Cliente',
      significado:
        'Persona o entidad que adquiere bienes o servicios a cambio de una compensación económica.',
    },
    {
      termino: 'Comportamiento del consumidor',
      significado:
        'Conjunto de decisiones, hábitos y motivaciones que influyen en la compra de productos o servicios.',
    },
    {
      termino: 'Estrategia',
      significado:
        'Conjunto de acciones planificadas para alcanzar objetivos específicos en un contexto competitivo.',
    },
    {
      termino: 'Experiencia del cliente',
      significado:
        'Percepción total que tiene un consumidor sobre una marca durante toda su relación con ella.',
    },
    {
      termino: '<em>Layout</em>',
      significado:
        'Distribución física del mobiliario y productos dentro del punto de venta.',
    },
    {
      termino: '<em>Marketing</em>',
      significado:
        'Conjunto de técnicas y estudios para mejorar la comercialización de productos o servicios.',
    },
    {
      termino: '<em>Marketing</em> sensorial',
      significado:
        'Estrategia que utiliza los sentidos para generar emociones y asociaciones positivas en los clientes.',
    },
    {
      termino: '<em>Merchandising</em>',
      significado:
        'Técnicas utilizadas en el punto de venta para influir en la decisión de compra del consumidor.',
    },
    {
      termino: 'Metas',
      significado:
        'Resultados específicos que se esperan alcanzar como parte de un objetivo general.',
    },
    {
      termino: '<em>Neuromarketing</em>',
      significado:
        'Aplicación de conocimientos de neurociencia al <em>marketing</em> para entender mejor el comportamiento del consumidor.',
    },
    {
      termino: 'Objetivo',
      significado:
        'Resultado deseado que se pretende alcanzar mediante acciones planificadas.',
    },
    {
      termino: 'Punto de venta',
      significado:
        'Lugar físico o virtual donde se realiza la venta de bienes o servicios.',
    },
    {
      termino: 'Publicidad',
      significado:
        'Comunicación dirigida a influir en las decisiones de compra mediante medios visuales, auditivos o digitales.',
    },
    {
      termino: 'Segmentación',
      significado:
        'Proceso de dividir el mercado en grupos homogéneos para personalizar estrategias de <em>marketing.</em>',
    },
    {
      termino: '<em>SKU</em>',
      significado:
        'Código único que identifica cada referencia o presentación de un producto en inventario.',
    },
    {
      termino: '<em>Visual merchandising</em>',
      significado:
        'Estrategia visual para presentar productos en el punto de venta de forma atractiva y funcional.',
    },
  ],
  referencias: [
    {
      referencia:
        'Chiavenato, I. (2011). Administración: teoría, proceso y práctica. McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Gómez, A. (2020). <em>Merchandising</em>: estrategias para el punto de venta. Editorial <em>Marketing</em> y Ventas.',
      link: '',
    },
    {
      referencia:
        'González, J. L. (2019). <em>Merchandising</em> y promoción en el punto de venta. ESIC Editorial.',
      link: '',
    },
    {
      referencia:
        'Kotler, P. & Armstrong, G. (2017). Fundamentos de <em>marketing</em>. Pearson.',
      link: '',
    },
    {
      referencia:
        'Kotler, P. & Keller, K. (2016). Dirección de <em>marketing</em>. Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Lamb, C., Hair, J. & McDaniel, C. (2011). <em>Marketing. Cengage Learning.</em>',
      link: '',
    },
    {
      referencia:
        'Peñaloza, L. (2019). <em>Marketing</em> experiencial: más allá del producto y del servicio. Editorial Ecoe.',
      link: '',
    },
    {
      referencia:
        'Robbins, S. P. & Coulter, M. (2018). Administración. Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Sánchez, L. (2019). Gestión comercial aplicada. Ediciones SENA.',
      link: '',
    },
    {
      referencia:
        'Schiffman, L. G. & Kanuk, L. L. (2010). Comportamiento del consumidor. Pearson.',
      link: '',
    },
    {
      referencia:
        'Solé, C. (2017). <em>Merchandising:</em> cómo aumentar la rentabilidad en el punto de venta. Profit Editorial.',
      link: '',
    },
    {
      referencia:
        'Solomon, M. (2018). Comportamiento del consumidor: comprando, poseyendo y siendo. Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Niazi, R. (2023). Proceso eficaz de creación de planogramas: Cómo optimizar la planificación de su espacio comercial. Quant Retail.',
      link: 'https://www.quantretail.com/automatic-planogram-updates',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mario Morales',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios -Regional Atlántico',
        },
        {
          nombre: 'Heydy Cristina Gonzalez Garcia',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios -Regional Atlántico',
        },
        {
          nombre: 'Jair Coll',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios -Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Antonio Vecino Valero',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios -Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios -Regional Atlántico',
        },
        {
          nombre: 'Nelson Ivan Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios -Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Maria Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios -Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios -Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios -Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adie Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios -Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
