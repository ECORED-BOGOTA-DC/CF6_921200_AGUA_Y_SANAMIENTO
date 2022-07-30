export default {
  global: {
    componenteFormativo: 'Manipular sistemas de potabilización',
    descripcionCurso:
      'El proceso de potabilización de agua involucra el uso de unidades que mediante la aplicación de principios físicos y químicos permite remover del agua aquellos elementos indeseables, que pueden generar a simple vista un rechazo por parte de los usuarios o incluso representar algunos tipos de riesgo para la salud de estos. Es así como en el presente componente se llevará a cabo una revisión de los temas asociados con la operación de unidades de potabilización, manejo de insumos químicos y control de calidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Reflexión sobre la importancia del agua',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Operación de unidades de potabilización',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Principales conceptos asociados al sistema de potabilización',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Procesos y operaciones unitarias',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Instrumentos y equipos para el control de procesos de potabilización',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Objetivos de la instrumentación y el control en la planta de tratamiento',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Instrumentación primaria',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Válvulas, motobombas y tableros eléctricos en el proceso de potabilización',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Bombas',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Sustancias químicas para el tratamiento de agua',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo:
              'Equipos para la dosificación de insumos en la potabilización',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Tratamiento de lodos y olores ofensivos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Tratamiento de lodos',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Olores ofensivos',
            hash: 't_4_2',
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
      tema: 'Agua potable.',
      referencia:
        'Canal CNC Valledupar. (2019). Manaure y González con la peor agua potable en el Cesar. [Archivo de video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=e3Rlv1hW9yc',
    },
    {
      tema:
        'Aspectos generales de los sistemas de agua potable y saneamiento básico.',
      referencia:
        'Ministerio de Vivienda. 2010. Reglamento técnico del sector de agua y saneamiento. Título A Aspectos generales de los sistemas de agua potable y saneamiento básico.',
      tipo: 'Libro',
      descarga:
        'https://minvivienda.gov.co/sites/default/files/documentos/010710_ras_titulo_a_.pdf ',
    },
    {
      tema: 'Sistemas de acueducto.',
      referencia:
        'Ministerio de Vivienda. 2010. Reglamento técnico del sector de agua y saneamiento. Titulo B. Sistemas de acueducto.',
      tipo: 'Libro',
      descarga:
        'https://www.minvivienda.gov.co/sites/default/files/documentos/titulob-030714.pdf',
    },
    {
      tema: 'Potabilización de agua.',
      referencia:
        'Ministerio de Vivienda. 2010. Reglamento técnico del sector de agua y saneamiento. Titulo C. Potabilización de agua. ',
      tipo: 'Libro',
      descarga:
        'https://www.catorce6.com/images/legal/Titulo_C_Potabilizacion.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Ablandamiento',
      significado:
        'Remoción de la dureza (calcio y/o magnesio) del agua (Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico: TÍTULO C. Sistemas de Potabilización / Vargas Liévano, Armando (Ed.). Bogotá, D.C. Colombia, Ministerio de Ambiente, Vivienda y Desarrollo Territorial. 2010.)',
    },
    {
      termino: 'Agua cruda',
      significado:
        'Es el agua natural que no ha sido sometida a proceso de tratamiento para su potabilización. (Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico: TÍTULO C. Sistemas de Potabilización / Vargas Liévano, Armando (Ed.). Bogotá, D.C. Colombia, Ministerio de Ambiente, Vivienda y Desarrollo Territorial. 2010.)',
    },
    {
      termino: 'Agua potable o agua para consumo humano',
      significado:
        'Es aquella que, por cumplir las características físicas, químicas y microbiológicas, en las condiciones señaladas en el Decreto 1575 de 2007 del Ministerio de la Protección Social y demás normas que lo reglamentan, es apta para consumo humano. Se utiliza en bebida directa, en la preparación de alimentos o en la higiene personal. (Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico: TÍTULO C. Sistemas de Potabilización / Vargas Liévano, Armando (Ed.). Bogotá, D.C. Colombia, Ministerio de Ambiente, Vivienda y Desarrollo Territorial. 2010.)',
    },
    {
      termino: 'Calidad del agua',
      significado:
        'Es el resultado de comparar las características físicas, químicas y microbiológicas encontradas en el agua, con el contenido de las normas que regulan la materia. (Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico: TÍTULO C. Sistemas de Potabilización / Vargas Liévano, Armando (Ed.). Bogotá, D.C. Colombia, Ministerio de Ambiente, Vivienda y Desarrollo Territorial. 2010.)',
    },
    {
      termino: 'Cloración',
      significado:
        'Aplicación de cloro al agua, generalmente para desinfectar o para oxidar compuestos indeseables. (Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico: TÍTULO C. Sistemas de Potabilización / Vargas Liévano, Armando (Ed.). Bogotá, D.C. Colombia, Ministerio de Ambiente, Vivienda y Desarrollo Territorial. 2010.)',
    },
    {
      termino: 'Desarenador',
      significado:
        'Componente destinado a la remoción de las arenas y sólidos que están en suspensión en el agua, mediante un proceso de sedimentación. (Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico: TÍTULO C. Sistemas de Potabilización / Vargas Liévano, Armando (Ed.). Bogotá, D.C. Colombia, Ministerio de Ambiente, Vivienda y Desarrollo Territorial. 2010.)',
    },
    {
      termino: 'Filtración',
      significado:
        'Proceso mediante el cual se remueven las partículas suspendidas y coloidales del agua al hacerlas pasar a través de un medio poroso. (Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico: TÍTULO C. Sistemas de Potabilización / Vargas Liévano, Armando (Ed.). Bogotá, D.C. Colombia, Ministerio de Ambiente, Vivienda y Desarrollo Territorial. 2010.)',
    },
    {
      termino: 'Pérdida de carga',
      significado:
        'Disminución de la energía de un fluido debido a la resistencia que encuentra a su paso o pérdida de nivel. (Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico: TÍTULO C. Sistemas de Potabilización / Vargas Liévano, Armando (Ed.). Bogotá, D.C. Colombia, Ministerio de Ambiente, Vivienda y Desarrollo Territorial. 2010.)',
    },
    {
      termino: 'pH óptimo',
      significado:
        'Valor de pH que produce la máxima eficiencia de remoción en un proceso determinado (Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico: TÍTULO C. Sistemas de Potabilización / Vargas Liévano, Armando (Ed.). Bogotá, D.C. Colombia, Ministerio de Ambiente, Vivienda y Desarrollo Territorial. 2010.)',
    },
    {
      termino: 'Planta de tratamiento o de potabilización',
      significado:
        'Conjunto de obras, equipos, materiales y personal necesarios para efectuar los procesos que permitan cumplir con las normas de calidad del agua potable. (Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico: TÍTULO C. Sistemas de Potabilización / Vargas Liévano, Armando (Ed.). Bogotá, D.C. Colombia, Ministerio de Ambiente, Vivienda y Desarrollo Territorial. 2010.)',
    },
    {
      termino: 'Turbiedad',
      significado:
        'Propiedad óptica del agua basada en la medida de luz reflejada dispersada por las partículas en suspensión (Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico: TÍTULO C. Sistemas de Potabilización / Vargas Liévano, Armando (Ed.). Bogotá, D.C. Colombia, Ministerio de Ambiente, Vivienda y Desarrollo Territorial. 2010.). ',
    },
  ],
  referencias: [
    {
      referencia:
        'Aguas de occidente (s.f). Preguntas frecuentes sobre la calidad del agua en los sistemas operados por aguas regionales EPM S.A. E.S.P ',
      link: '',
    },
    {
      referencia:
        'Canal CNC Valledupar. (2019). Manaure y González con la peor agua potable en el Cesar. [Archivo de video]. ',
      link: 'https://www.youtube.com/watch?v=e3Rlv1hW9yc',
    },
    {
      referencia:
        'Marin G., Rafael. (s.f) Características físicas, químicas y biológicas de las aguas. Córdoba.',
      link: '',
    },
    {
      referencia:
        'Ministerio de desarrollo económico. (2010). Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico [RAS]. título A.',
      link: '',
    },
    {
      referencia:
        'Ministerio de desarrollo económico. (2010). Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico [RAS]. título B.',
      link: '',
    },
    {
      referencia:
        'Ministerio de desarrollo económico. (2010). Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico [RAS]. título C.',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Sandra Patricia  Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora Metodológica y Pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
      },
      {
        nombre: 'Sergio Arturo Medina Castillo',
        cargo: 'Diseñador Instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
      },
      {
        nombre: 'Javier Ricardo Luna Pineda',
        cargo: 'Diseñador Instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
      },
      {
        nombre: 'Silvia Milena Sequeda Cardenas',
        cargo: 'Evaluador Instruccional',
        centro: 'Centro de diseño y metrologia - Regional Distrito Capital ',
      },
      {
        nombre: 'Jesus Ricardo Arias Munevar',
        cargo: 'Instructor Ambiental',
        centro: 'Centro de gestión industrial - Regional Distrito Capital ',
      },
      {
        nombre: 'Lubin Andrés Hernández Sanabria',
        cargo: 'Instructor Ambiental',
        centro: 'Centro de gestión industrial - Regional Distrito Capital ',
      },
      {
        nombre: 'Xiomara Becerra Aldana',
        cargo: 'Instructora Ambiental',
        centro: 'Centro de gestión industrial - Regional Distrito Capital ',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Diana Carolina Acevedo Barón',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional - Tolima',
      },
      {
        nombre: 'Marcia Elizabeth Solano Alvarez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Mayra Alejandra Alvarez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
