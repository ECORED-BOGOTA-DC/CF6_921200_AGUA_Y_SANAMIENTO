<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Operación de unidades de potabilización

    .row.justify-content-center
      .col-12.col.md-10.col-lg-10.col-xl-10
        .cajon-b.color-primario.p-3
          p(data-aos="fade-left") Una vez el agua es captada se requiere en función de sus características someterla a una serie de operaciones y procesos unitarios que tienen como objetivo permitir que logre las condiciones necesarias para el uso que se tiene definido, particularmente en el caso de agua para consumo humano, se debe cumplir con las normas que reglamentan el suministro de agua para esta actividad. Así mismo, el proceso de potabilización debe ser complementado con todo un sistema diseñado para su conducción, almacenamiento y distribución, que a su vez debe ser monitoreado a lo largo de este para verificar sus condiciones.
          
          p.m-0(data-aos="fade-left") La potabilización tiene en cuenta diferentes operaciones unitarias que permiten obtener agua potable a partir de la captación de agua cruda. 

    Separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 2.1	Principales conceptos asociados al sistema de potabilización

    p.mb-5(data-aos="fade-right") El sistema de acueducto se encuentra conformado por diferentes etapas que buscan suministrar a la población de manera continua el agua requerida para su consumo y demás actividades que involucren el uso de este recurso. Es así cómo se abordarán, de manera general, los componentes que conforman el sistema de acueducto y la normatividad relacionada con el suministro de agua para consumo humano.

    .row.mb-5(data-aos="fade-right")
      .col-12.col-md-5.col-lg-6
        .tarjeta.color-secundario.p-1
          .row.justify-content-center
            .col-lg-1
              img.img23.d-none.d-lg-block(src='@/assets/curso/tema2/img10.svg')
            .col-lg-10
              h3.m-0.text-white.text.center.ms-4.ms-lg-0 Componentes del sistema de acueducto

    .row.justify-content-center.align-items-center.mb-5         
      .col-lg-10 
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.m_bloque-imgreves.m_bloque-textoreves1(data-aos="flip-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img01.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p En términos generales es posible definir el sistema de acueducto como el conjunto de estructuras que permiten la captación de agua, transporte y distribución a los usuarios, cumpliendo con unas características mínimas para su consumo.
            br
            br
            p El Reglamento técnico del sector de Agua potable y Saneamiento básico [RAS], en su Título B (2010), permite identificar los componentes que enunciaremos a continuación.

    .row.mb-5.align-items-center
      .col-12.col-md-6.col-lg-6.col-sm.mb-5.mb-sm-0
        h4.mb-4 Fuente de abastecimiento de agua:
        ol.lista-ol--cuadro(data-aos="fade-right")
          li 
            .lista-ol--cuadro__vineta
              span 1
            p.ms-2 Consisten en todas las aguas provenientes de cursos o cuerpos superficiales o subterráneos. También pueden considerarse como fuentes, en casos excepcionales, las aguas lluvias y el agua de mar. 
          li 
            .lista-ol--cuadro__vineta
              span 2
            p.ms-2 La selección de la fuente debe realizarse basándose en la calidad del agua, la ocurrencia de eventos de sequía y escogiendo aquella que permita la construcción de una captación económica, segura, confiable y que tenga unas características de acceso, operación y mantenimiento fáciles.
          li 
            .lista-ol--cuadro__vineta
              span 3
            p.ms-2 Además, deben efectuarse estudios con el fin de minimizar los impactos sobre el medio ambiente, el ecosistema y el hábitat natural de diferentes especies, que puedan producir las obras de la captación. 
          li 
            .lista-ol--cuadro__vineta
              span 4
            p.ms-2 En particular, se debe conocer el caudal ecológico en la fuente de agua definido por la autoridad ambiental competente para la estimación de la capacidad utilizable de la fuente.
      .col-12.col-md-6.col-lg-6
        figure.mb-4.mb-md-0
            img(src="@/assets/curso/tema2/img02.svg")(data-aos="fade-left")

    h4.mb-4 Captación:

    p Consiste en estructuras y/o dispositivos que permiten derivar de la fuente el caudal necesario. Los principales sistemas de captación son de aguas superficiales y aguas subterráneas; sin embargo, en los casos en donde la disponibilidad de las fuentes superficiales o subterráneas es limitada, es posible emplear la captación de aguas lluvias, captación por evaporación natural de agua de mar o captación por desalinización de agua de mar.

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-md-5.col-lg-5
        figure.mb-4.mb-md-0
            img(src="@/assets/curso/tema2/img03.svg")(data-aos="fade-right")
      .col-12.col-md-5.col-lg-5
        .tarjeta.color-acento-contenido.p-3(data-aos="fade-left")
          p.mb-4.ms-4 Tal como se revisó en los anteriores contenidos, en la captación de aguas superficiales es posible encontrar diferentes tipos, como:
          ul.lista-ul.ms-4
            li 
              <i class="fas fa-tint" style= "color:#3F97C4 !important;"></i>
              | Toma lateral.
            li 
              <i class="fas fa-tint" style= "color:#3F97C4 !important;"></i>
              | Toma sumergida.
            li 
              <i class="fas fa-tint" style= "color:#3F97C4 !important;"></i>
              | Captación flotante con elevación mecánica.
            li 
              <i class="fas fa-tint" style= "color:#3F97C4 !important;"></i>
              | Captación mixta.
            li 
              <i class="fas fa-tint" style= "color:#3F97C4 !important;"></i>
              | Toma de rejilla.
            li 
              <i class="fas fa-tint" style= "color:#3F97C4 !important;"></i>
              | Presa de derivación.
            li 
              <i class="fas fa-tint" style= "color:#3F97C4 !important;"></i>
              | Cámara de toma directa.
            li 
              <i class="fas fa-tint" style= "color:#3F97C4 !important;"></i>
              | Muelle de toma.

    .row.justify-content-center.mb-5
      .col-12.col-md-10.col-lg-10
        .tarjeta.color-acento-contenido.p-3(data-aos="fade-down")
          p.text-center En el caso de la captación de aguas subterráneas, el agua es bombeada de:
          .row.justify-content-center
            .col-12.col-md-3.col-lg-3
              ul.lista-ul.ms-4
                li 
                  <i class="fas fa-tint" style= "color:#3F97C4 !important;"></i>
                  | Pozos profundos.
            .col-12.col-md-3.col-lg-3
              ul.lista-ul.ms-4
                li 
                  <i class="fas fa-tint" style= "color:#3F97C4 !important;"></i>
                  | Pozos excavados.
            .col-12.col-md-4.col-lg-4
              ul.lista-ul.ms-4
                li 
                  <i class="fas fa-tint" style= "color:#3F97C4 !important;"></i>
                  | Captación de manantiales.
    
    h4.mb-4 Líneas de aducción y conducción: 

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-md-4.col-lg-4.mb-4.mb-md-0
        .tarjeta.tarjeta--azul.p-4(data-aos="fade-right")
          p <b>Las líneas de aducción</b> son los conductos destinados a transportar por gravedad o por bombeo las aguas crudas desde los sitios de captación hasta las plantas de tratamiento, prestando excepcionalmente servicio de suministro de agua cruda a lo largo de su longitud.
      .col-12.col-md-4.col-lg-4
        figure.mb-4.mb-md-0
            img(src="@/assets/curso/tema2/img04.svg")(data-aos="fade-down")
      .col-12.col-md-4.col-lg-4
        .tarjeta.tarjeta--azul.p-5.pb-3(data-aos="fade-left")
          p <b>Las líneas de conducción</b> son aquellas destinadas al transporte de agua tratada desde la planta de tratamiento hasta los tanques de almacenamiento o hasta la red de distribución, generalmente sin entrega de agua en ruta.

    .tarjeta.tarjeta--azul.p-3.bg_color2(data-aos="fade-down").mb-5
      p.ms-3 Adicionalmente, estas líneas constan de una serie de dispositivos entre los que se encuentran desarenadores, válvulas de alivio, válvulas reguladoras, codos, tes, reductores, entre otros.

    h4.mb-4 Planta de potabilización:

    .row.justify-content-end.mb-5
      .col-12.col-md-7.col-lg-7
        figure
            img(src="@/assets/curso/tema2/img05.svg")(data-aos="fade-up")
      .col-12.col-md-3.col-lg-3
        .tarjeta-color.bg_color3.p-5.shadow.p-3.mb-5
          p.m-0 Son el conjunto de estructuras y/o dispositivos que permiten adecuar el agua a los valores establecidos para su uso.

    h4.mb-4 Tanques de almacenamiento y compensación: 

    .row.mb-5
      .col-12.col-md-12.col-lg-12
        .tarjeta-color.bg_color4.p-4.p-md-5.p-lg-5.p-xl-5
          .row.justify-content-center.align-items-center.mb-4.mb-md-0
            .col-12.col-md-6.col-lg-6.col-xl-6(data-aos="fade-right")
              p Son depósitos de agua que tienen la función de almacenar agua y compensar las variaciones que existen entre el caudal de entrada al tanque y el consumo normal de los suscriptores a lo largo del día. 
              p El objetivo primordial de los tanques de compensación es cubrir las necesidades de la demanda de agua en los momentos pico, permitiendo una recuperación del volumen en las horas de bajo consumo para poder suministrar, sin problema, el agua demandada en las horas de máximo consumo.
              p Por otro lado, los tanques de almacenamiento, además de cumplir con la función de compensación, tienen el objetivo de almacenar agua para seguir cubriendo la demanda durante un cierto período de tiempo en caso de alguna falla en la red matriz.
            .col-12.col-md-6.col-lg-6.col-xl-6
              figure
                img(src="@/assets/curso/tema2/img06.svg")(data-aos="fade-left")

    .row.justify-content-center.mb-5
      .col-12.col-md-5.col-lg-5.col-xl-5
        h4.mb-4 Redes de distribución: 
        figure.mb-4
          img(src="@/assets/curso/tema2/img07.svg")(data-aos="fade-right")
        p Las líneas de aducción del acueducto son los conductos destinados a transportar por gravedad o por bombeo las aguas crudas desde los sitios de captación hasta las plantas de tratamiento, prestando excepcionalmente servicio de suministro de agua cruda a lo largo de su longitud. Las líneas de conducción son aquellas destinadas al transporte de agua tratada desde la planta de tratamiento hasta los tanques de almacenamiento o hasta la red de distribución, generalmente sin entrega de agua en ruta.
      .col-12.col-md-5.col-lg-5.col-xl-5
        h4.mb-4 Estación de bombeo: 
        figure.mb-4
          img(src="@/assets/curso/tema2/img08.svg")(data-aos="fade-left")
        p Son un conjunto de estructuras y equipos empleados cuando se requiera elevar el nivel de la línea piezométrica para vencer una diferencia de altura topográfica, las pérdidas por fricción y las pérdidas menores, siempre que las alternativas de ampliación de estaciones existentes y el aprovechamiento de la gravedad no resulten factibles.

    .row.mb-5(data-aos="fade-right")
      .col-12.col-lg-3
        .tarjeta.color-secundario.p-1
          .row.justify-content-center.align-items-center
            .col-lg-1
              img.img23.d-none.d-lg-block(src='@/assets/curso/tema2/img10.svg')
            .col-lg-10
              h3.m-0.text-white.text-center Tipos de agua

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-3.col-lg-3.col-xl-4.mb-4.mb-md-0
        .tarjeta-.bg_color5.p-3.mb-4
          p Continuemos con el estudio de los diferentes tipos de agua, los cuales, el RAS 2000 en su título B, define:
        .row.justify-content-center
          .col-md-9.mb-4.mb-md-0
            .tarjeta-color.bg_color6.p-2.text-center.shadow.p-2.mt-1
              h5 Agua cruda: 
        .tarjeta-color.bg_color7
          .p-4
            p.mt-4 Es el agua natural que no ha sido sometida a proceso de tratamiento para su potabilización.
      .col-12.col-md-3.col-lg-3.col-xl-3.mb-4.mb-md-0
        figure.mb-4
          img.img295.mx-auto(src="@/assets/curso/tema2/img09.svg")(data-aos="fade-down")
      .col-12.col-md-4.col-lg-4.col-xl-5.mb-4.mb-md-0
        .row.justify-content-center
          .col-md-8.mb-4.mb-md-0
            .tarjeta-color.bg_color6.p-2.text-center.shadow.p-3
              h5 Agua potable: 
        .tarjeta-color.bg_color7
          .p-4
            p.m-0.mt-3 Es aquella que, por cumplir las características físicas, químicas y microbiológicas, en las condiciones señaladas en el decreto 1575 de 2007 y demás normas que la reglamenten, es apta para consumo humano. Se utiliza en bebida directa, en la preparación de alimentos o en la higiene personal.
            p.m-0 Las características físicas, químicas, organolépticas y microbiológicas definen si el agua es potable o no, esto depende de los valores que se obtengan en la medición.

    .row.mb-5(data-aos="fade-right")
      .col-12.col-lg-11
        .tarjeta.color-secundario.p-1
          .row.justify-content-center.align-items-center
            .col-lg-1
              img.img23.mx-auto.d-none.d-lg-block(src='@/assets/curso/tema2/img10.svg')
            .col-lg-11
              h3.m-0.text-white.ms-3.ms-lg-0 Características físicas, químicas, organolépticas y microbiológicas del agua cruda y tratada
    
    p.m-0 El agua tiene unas características físicas, químicas, organolépticas y microbiológicas que permiten determinar su calidad. Dependiendo de los valores que se obtengan en la medición de dichas propiedades, se puede establecer si un agua es potable, cruda, tratada, entre otras.
    p.mb-5 De acuerdo con Rafael Marín Galvin en su documento características físicas, químicas y biológicas de las aguas (s.f) , se pueden resaltar las siguientes propiedades:

    h4.mb-4 Características físicas

    p A continuación estudiaremos las características físicas del agua.

    .row(data-aos="fade-right")
      .col-xl-11
        TabsA.color-primario.mb-5
          .tarjeta.color-acento-botones.p-4(titulo="Temperatura")
            .row.align-items-center
              .col-xl-9
                h5.mt-4.mt-xl-0.ms-3 Temperatura:
                p.ms-3 La temperatura de un agua se establece por la absorción de radiación en las capas superiores del líquido. Las variaciones de temperatura afectan a la solubilidad de sales y gases en agua y en general a todas sus propiedades, tanto químicas como microbiología (Marín, R. s.f, p. 3).
              .col-xl-3
                figure
                  img.img200.mx-auto(src='@/assets/curso/tema2/img11.svg', alt='Texto que describa la imagen')
          
          .tarjeta.color-acento-botones.p-4(titulo="Color")
            .row.align-items-center
              .col-xl-8
                h5.mt-4.mt-xl-0.ms-3 Color:
                p.ms-3 El color de un agua se debe a sustancias coloreadas existentes en suspensión o disueltas en ella: materias orgánicas procedentes de la descomposición de vegetales, así como de diversos productos y metabolitos orgánicos que habitualmente se encuentran en ellas (coloraciones amarillentas). Además, la presencia de sales solubles de Fe y Mn (aguas subterráneas y superficiales poco oxigenadas) también produce un cierto color en el agua (Marín, R. s.f, p. 4).
              .col-xl-4
                figure
                  img.img258.mx-auto(src='@/assets/curso/tema2/img12.svg', alt='Texto que describa la imagen')

          .tarjeta.color-acento-botones.p-4(titulo="Olor y sabor")
            .row.align-items-center
              .col-xl-9
                h5.mt-4.mt-xl-0.ms-3 Olor y sabor
                p.ms-3 El agua pura es inodora e insabora, sin embargo, las fuentes de sabores y olores en un agua responden a dos orígenes: naturales y artificiales. Las primeras incluyen gases, sales, compuestos inorgánicos, compuestos orgánicos y compuestos procedentes de la actividad vital de los organismos acuáticos. Los compuestos productores de olor/sabor de origen artificial pueden ser también orgánicos e inorgánicos y están probablemente más definidos, al poder identificarse la fuente concreta productora del problema (Marín, R. s.f. p. 4).
              .col-xl-2
                figure
                  img.img110.mx-auto(src='@/assets/curso/tema2/img13.svg', alt='Texto que describa la imagen')
          
          .tarjeta.color-acento-botones.p-4(titulo="Turbidez-transparencia")
            .row.align-items-center
              .col-xl-9
                h5.mt-4.mt-xl-0.ms-3 Turbidez-transparencia:
                p.ms-3 La presencia de materias en suspensión, arcilla, limos, coloides orgánicos, plancton y organismos microscópicos da lugar a la turbidez en un agua. Estas partículas de dimensiones variables desde 10 nanómetros (nm) hasta 0,1 milímetros (mm) se pueden asociar a tres categorías: minerales, partículas orgánicas húmicas y partículas filamentosas (p.5).
              .col-xl-3
                figure
                  img.img170.mx-auto(src='@/assets/curso/tema2/img14.svg', alt='Texto que describa la imagen')

    h4.mb-4 Características químicas

    p Teniendo claras las características físicas del agua, continuemos con sus características químicas.

    .row.mb-5.mb-md-5.mb-lg-5(data-aos="fade-right")
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario.mb-5.mb-md-0(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor.height_tarjetas-flip
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img15.png')})`}")
            .tarjeta-flip__contenido.p-2.p-xl-3
              p.text-center <b>Residuo seco:</b> el residuo seco indica la cantidad total de sales de un agua: SO42-, HCO3-, Cl-, NO3- y Ca2+, Mg2+, Na+, K+ (p.6).

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario.mb-5.mb-md-0(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor.height_tarjetas-flip
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img16.png')})`}")
            .tarjeta-flip__contenido.p-2.p-xl-3
              p.text-center <b>Conductividad:</b> la conductividad es producida por los electrolitos disueltos en agua y en ella influyen: terreno drenado, composición mineralógica, tiempo de contacto, gases disueltos, pH y todo lo que afecte a la solubilidad de sales (p.6).

      .col-sm-6.col-xl-3.mb-4.mb-sm-0
        .tarjeta.tarjeta-flip.color-primario.mb-5.mb-md-0.height_tarjetas-flip(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor.height_tarjetas-flip
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img17.png')})`}")
            .tarjeta-flip__contenido.p-2.p-xl-3
              p.text-center <b>pH:</b> se debe al equilibrio carbónico y a la actividad vital de los microorganismos acuáticos. Respecto a lo primero, la secuencia de equilibrios de disolución de CO2 en un agua, y la disolución de CO3-2 e insolubilización de HCO3- , determinan el pH de un agua (p.7).

      .col-sm-6.col-xl-3
        .tarjeta.tarjeta-flip.color-primario.mb-5.mb-md-0(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img18.png')})`}")
            .tarjeta-flip__contenido.p-2.p-xl-3
              p.text-center <b>Compuestos de azufre:</b> los principales compuestos azufrados presentes en un agua son: H2S, S2-, SO3, S2O32- y SO42- (p. 10).

    .row.mb-5.mb-md-5.mb-lg-5.justify-content-center(data-aos="fade-left")
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario.mb-5.mb-md-0(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img19.png')})`}")
            .tarjeta-flip__contenido.p-2.p-xl-3
              p.text-center <b>Compuestos orgánicos:</b> las materias orgánicas que puede contener un agua son muy numerosas y variadas, habiéndose aislado más de 1.000 compuestos orgánicos diferentes en un agua mediante técnicas de alto poder de separación (p.19).

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario.mb-5.mb-md-0(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img20.png')})`}")
            .tarjeta-flip__contenido.p-2.p-xl-3
              p.text-center <b>Compuestos fosforados:</b> el P de un agua procede de: disolución de rocas y minerales, lavado de suelos en los que se encuentra como resto de actividades ganaderas o agrícolas y aguas residuales domésticas (los detergentes domésticos –tripolifosfatos- aportan el 50 % del P presente en los vertidos urbanos).

      .col-sm-6.col-xl-3.mb-4.mb-sm-0
        .tarjeta.tarjeta-flip.color-primario.mb-5.mb-md-0(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img21.png')})`}")
            .tarjeta-flip__contenido.p-2.p-xl-3
              p.mb-4.mt-4.text-center <b>Metales en el agua:</b> el agua puede presentar concentraciones de aluminio, antimonio, arsénico, boro, cadmio, cobre, cromo, hierro, manganeso, mercurio, níquel, plomo, sodio, selenio, entre otros.

    h4.mb-4 Características microbiológicas

    figure.mb-5(data-aos="fade") 
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
  

    .row.mb-5(data-aos="fade-right")
      .col-12.col-lg-3
        .tarjeta.color-secundario.p-1
          .row.justify-content-center.align-items-center
            .col-lg-2.width_lg
              img.img23.text-end.d-none.d-lg-block(src='@/assets/curso/tema2/img10.svg')
            .col-lg-9
              h3.m-0.text-white.text-center Agua cruda
    
    p El RAS 2000 en su título B, establece que durante la operación del pozo debe realizarse un muestreo de la calidad del agua cruda según las siguientes disposiciones:

    .row.justify-content-center.mb-5
      .col-12.col-md-4.col-lg-4.col-xl-4
        figure
          img.mx-auto(src='@/assets/curso/tema2/img22.svg')(data-aos="fade-right")
      .col-12.col-md-8.col-lg-8.col-xl-8
        TabsA.color-primario.mb-5(data-aos="fade-left")           
          .tarjeta.color-acento-botones.p-4(titulo="Nivel de complejidad bajo")
            .row.align-items-center
              .col-xl-12
                h4.mt-4.mt-xl-0.ms-3 Nivel de complejidad bajo
                p.ms-3 <b>Para el nivel de complejidad del sistema bajo</b> debe realizarse un muestreo como mínimo cada mes, el cual debe incluir: coliformes totales y fecales y demanda bioquímica de oxígeno (DBO). 
              
          .tarjeta.color-acento-botones.p-4(titulo="Nivel de complejidad medio")
            .row.align-items-center
              .col-xl-12
                h4.mt-4.mt-xl-0.ms-3 Nivel de complejidad medio
                p.ms-3 <b>Para el nivel de complejidad del sistema medio</b> debe realizarse un muestreo como mínimo cada semana, el cual debe incluir: coliformes totales y fecales, demanda bioquímica de oxígeno, sólidos suspendidos totales, pH, alcalinidad y dureza. 

          .tarjeta.color-acento-botones.p-4(titulo="Nivel de complejidad alto y medio alto")
            .row.justify-content-center.align-items-center
              .col-xl-12
                h4.mt-4.mt-xl-0.ms-3 Nivel de complejidad alto y medio alto
                p.ms-3 <b>Para los niveles de complejidad del sistema alto y medio alto</b> debe realizarse un muestreo diario, el cual debe incluir, además de lo exigido en los otros niveles, fluoruros, cloruros, hierro, alcalinidad total y dureza. 

    p Los muestreos para determinar la calidad del agua deben ajustarse a las Normas Técnicas NTC ISO 5667-3, NTC ISO 5667-11, GTC 30 y AWWA A-100, Sección 12. Todos los registros de los resultados de las muestras deben guardarse y tenerse a disposición de la SSPD. 
    p En caso de que la calidad del agua sea inferior a la mínima establecida en las normas ambientales correspondientes, la entidad encargada de la operación debe tomar las medidas de control de contaminación necesarias y adelantar un programa de recuperación del acuífero.
    p El RAS 2000 título B, también especifica que se debe tener seguridad en la calidad de las aguas crudas, para la elección de una fuente superficial el consultor debe realizar el estudio de identificación de posibles fuentes de contaminación, valorar los riesgos y definir si la fuente es apta o no.
    p Se deben considerar las siguientes observaciones: 

    .row.justify-content-center.mb-5
      .col-12.col-md-10.col-lg-10
        .row.justify-content-center
          .col-md-5.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar(data-aos="fade-right")
              img(src='@/assets/curso/tema2/img23.svg' alt='AvatarTop')
              .tarjeta.color-acento-contenido
                .p-4
                  h4.text-center.mt-3 1
                  p.text-center En las captaciones hechas en ríos las aguas tienden a ser turbias, algunas veces coloreadas y en la gran mayoría de los casos reciben la descarga de aguas residuales, tanto domésticas como industriales que se han vertido aguas arriba. Las fuentes que toman aguas de lagos son generalmente más claras que las aguas de ríos, pero también están sujetas a la contaminación. 

          .col-md-5.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar(data-aos="fade-left")
              img(src='@/assets/curso/tema2/img24.svg' alt='AvatarTop')
              .tarjeta.color-acento-contenido
                .p-4
                  h4.text-center.mt-3 2
                  p.text-center Las fuentes de agua localizadas en ríos pequeños y en quebradas de montaña frecuentemente son limpias y puras; en estado natural son apropiadas para el consumo humano. No obstante, estas aguas están fácilmente expuestas a contaminación por acción eventual. Por consiguiente, no pueden considerarse potables a menos que se tomen las medidas apropiadas para su protección: instalación de plantas de tratamiento de agua, vigilancia de la cuenca, colocación de carteles o letreros y/o cercas para impedir la invasión de personas y/o animales. 
      
    .row.justify-content-center.mb-5
      .col-12.col-md-10.col-lg-10
        .row.justify-content-center.mb-54
          .col-md-5.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar(data-aos="fade-right")
              img(src='@/assets/curso/tema2/img25.svg' alt='AvatarTop')
              .tarjeta.color-acento-contenido
                .p-4
                  h4.text-center.mt-3 3
                  p.text-center En todos aquellos casos en que se proyecten lagos artificiales mediante la construcción de embalses, deben tenerse en cuenta las condiciones futuras de la calidad del agua almacenada. 

          .col-md-5.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar(data-aos="fade-left")
              img(src='@/assets/curso/tema2/img26.svg' alt='AvatarTop')
              .tarjeta.color-acento-contenido
                .p-4
                  h4.text-center.mt-3 4
                  p.text-center El consultor debe tener en cuenta el Decreto 1575 de 2007 en lo referente a las características físicas, químicas y microbiológicas del agua y el mapa de riesgo de calidad de agua en todos los casos.

    p.mb-5 Para conocer e identificar todos los lineamientos sobre aguas crudas, lo invitamos a leer el documento “Reglamento técnico del sector de agua y saneamiento. Título B. Sistemas de acueducto”, el cual se encuentra en el material complementario.
    
    .row.mb-4(data-aos="fade-right")
      .col-12.col-lg-3
        .tarjeta.color-secundario.p-1
          .row.justify-content-center.align-items-center
            .col-lg-2.width_lg
              img.img23.d-none.d-lg-block(src='@/assets/curso/tema2/img10.svg')
            .col-lg-9
              h3.m-0.text-white.text-center Agua potable

    p.mb-4 De acuerdo con documento “preguntas frecuentes sobre la calidad del agua en los sistemas operados por aguas regionales EPM SA ESP”, el agua potable es la que cumple con unas condiciones y características que permite ser consumida por la población humana sin producir efectos adversos a la salud. Se utiliza directamente para beber, para preparar los alimentos o en la higiene personal. Estas características se encuentran reguladas en al decreto 1575 de 2007. Este decreto describe que el agua potable o agua para consumo humano, es aquella que, por cumplir las características físicas, químicas y microbiológicas, reglamentadas en las normas de calidad de agua en Colombia, es apta para consumo humano (p. 5).
    p.mb-5 La siguiente tabla presenta el valor máximo aceptable de las características físicas, químicas y microbiológicas del agua para consumo humano.

    .row.justify-content-center
      .col-12.col-md-10.col-lg-10
        .row.justify-content-center
          .col-md-5.col-lg.mb-5.mb-lg-0
            h4.m-0 Tabla 1.
            p Valores máximos aceptables dependiendo de la característica del recurso.
    .row.justify-content-center.mb-5
      .col-12.col-md-12.col-lg-12
        .row.justify-content-center
          .col-md-5.col-lg-5.mb-4.mb-md-0(data-aos="fade-right")
            table
              tr.bg_color_fondo_tr
               th
                 h4.text-center.text-white.mb-0 <b>Resolución 2115 de 2007</b>
            thead
              tr.bg_color_fondo_tr                
                th
                  h4.text-center.text-white.mb-0.mx-4 <b>Características Físicas</b>
                th
                  h4.text-center.text-white.mb-0.mx-4 <b>Valor Máximo Aceptable</b>
            tbody
                tr
                  td.p-0.ps-3 Color aparente
                  td.p-0.ps-3.text-center 15
                tr
                  td.p-0.ps-3 Olor y Sabor
                  td.p-0.ps-3.text-center Aceptable
                tr
                  td.p-0.ps-3 Turbiedad
                  td.p-0.ps-3.text-center 2
            thead
              tr.bg_color_fondo_tr                
                th
                  h4.text-center.text-white.mb-0.mx-4 <b>Características Químicas</b>
                th
                  h4.text-center.text-white.mb-0.mx-4 <b>Valor Máximo Aceptable</b>
            tbody
                tr
                  td.p-0.ps-3 Color residual
                  td.p-0.ps-3.text-center 0.3 a 2.0
                tr
                  td.p-0.ps-3 PH
                  td.p-0.ps-3.text-center 6.5 a 9.0
                tr
                  td.p-0.ps-3 Carbono Orgánico Total
                  td.p-0.ps-3.text-center 5.0
                tr
                  td.p-0.ps-3 Nitritos
                  td.p-0.ps-3.text-center 0.1
                tr
                  td.p-0.ps-3 Nitratos
                  td.p-0.ps-3.text-center 10
                tr
                  td.p-0.ps-3 Alcalinidad Total
                  td.p-0.ps-3.text-center 200
                tr
                  td.p-0.ps-3 Cloruros
                  td.p-0.ps-3.text-center 250
                tr
                  td.p-0.ps-3 Aluminio
                  td.p-0.ps-3.text-center 0.2
                tr
                  td.p-0.ps-3 Dureza Total
                  td.p-0.ps-3.text-center 300
                tr
                  td.p-0.ps-3 Hierro Total
                  td.p-0.ps-3.text-center 0.3
                tr
                  td.p-0.ps-3 Manganeso
                  td.p-0.ps-3.text-center 0.1
                tr
                  td.p-0.ps-3 Sulfatos
                  td.p-0.ps-3.text-center 250
                tr
                  td.p-0.ps-3 Coliformes totales
                  td.p-0.ps-3.text-center 0 UFC/100 cm
                tr
                  td.p-0.ps-3 Coliformes fecales
                  td.p-0.ps-3.text-center 0 UFC/100 cm
                tr
                  td.p-0.ps-3 Mercurio
                  td.p-0.ps-3.text-center 0.001
                tr
                  td.p-0.ps-3 Cianuro libre y disociable
                  td.p-0.ps-3.text-center 0.05
            thead
              tr.bg_color_fondo_tr                
                th
                  h4.text-center.text-white.mb-0 <b>Características Microbiológicas</b>
                th
                  h4.text-center.text-white.mb-0 <b>Valor Máximo Aceptable</b>
            tbody
                tr
                  td.p-0.ps-3 Coliformes Totales
                  td.p-0.ps-3.text-center 0
                tr
                  td.p-0.ps-3 Escherichia col
                  td.p-0.ps-3.text-center 0
                tr
                  td.p-0.ps-3 Mesófilos
                  td.p-0.ps-3.text-center <100
          .col-md-5
            .tarjeta-color.bg_color8.p-5.mb-4(data-aos="fade-left")
              p Para determinar si un agua se puede consumir, se utiliza el Índice de Riesgo de la Calidad del Agua para Consumo Humano (IRCA), que es el grado de riesgo de ocurrencia de enfermedades relacionadas con el no cumplimiento de las características físicas, químicas y microbiológicas del agua para consumo humano. El cálculo de dicho índice debe realizarse a cada una de las muestras de agua potable recolectadas en la red de distribución y posteriormente se determina un índice promedio mensual para el sistema de acueducto (p.6).
            .row.justify-content-end(data-aos="fade-up")
              .col-12.col-md-10.col-lg-10
                p <em>Fuente: Aguas de occidente. (s.f). Preguntas frecuentes sobre la calidad del agua en los sistemas operados por aguas regionales EPM S.A. E.S.P [Tabla] (p.5).</em>

    .row.justify-content-center
      .col-12.col-md-10.col-lg-10
        .row.justify-content-center
          .col-md-5.col-lg.mb-5.mb-lg-0
            h4.m-0 Tabla 2.
            p Niveles de riesgo de acuerdo con clasificación IRCA.
    .row.justify-content-center.mb-5
      .col-12.col-md-12.col-lg-12
        .row.justify-content-center(data-aos="fade-up")
          .col-12.col-md-10
            thead
              tr             
                th
                  h4.text-center.mb-0 Clasificación IRCA (%)
                th
                  h4.text-center.mb-0 Nivel de Riesgo
                th
                  h4.text-center.mb-0 IRCA mensual (Acciones)
            tbody
                tr
                  td.p-0.text-center 80.1 - 100
                  td.p-0.text-center INVIABLE SANITARIAMENTE
                  td.p-3.ps-4 Calificación del Agua como <b><i><u>no apta para consumo humano,</u></i></b> por sobrepasar los valores máximos aceptables de las características físicas, químicas y microbiológicas relacionadas en la resolución y que causan un alto y permanente riesgo para la salud humana. Requiere gestión de la autoridad sanitaria, ambiental y de control.
                tr
                  td.p-0.text-center 35.1 - 80
                  td.p-0.text-center ALTO
                  td.p-3.ps-4 Calificación del Agua como <b><i><u>no apta para consumo humano,</u></i></b> por sobrepasar los valores máximos aceptables de las características físicas, químicas y microbiológicas relacionadas en la resolución y que causan un alto riesgo para la salud humana. requiere gestión directa de vigilancia máxima, especial y detallada por parte de la autoridad sanitaria, ambiental y de control.
                tr
                  td.p-0.text-center 14.1 - 35
                  td.p-0.text-center MEDIO
                  td.p-3.ps-4 Agua <b><i><u>no apta para consumo humano,</u></i></b> por sobrepasar los valores máximos aceptables de las características físicas, químicas y microbiológicas relacionadas en la resolución y que causan un riesgo para la salud humana, el cual es susceptible de disminuir con una gestión directa de la persona presentadora del servicio público de acueducto. 
                tr
                  td.p-0.text-center 5.1 - 14
                  td.p-0.text-center BAJO
                  td.p-3.ps-4 El agua cumple con todos o casi todos los valores máximos aceptables de las características físicas, químicas y microbiológicas relacionadas en la resolución, <b><i><u>permitiendo que el Agua sea apta para consumo humano,</u></i></b> susceptible de mejoramiento.
                tr
                  td.p-0.text-center 0 - 5
                  td.p-0.text-center SIN RIESGO
                  td.p-3.ps-4 Agua es apta para consumo humano, cumple con todos los valores máximos aceptables de las características físicas, químicas y microbiológicas relacionadas en la resolución, <b><i><u>permitiendo que el agua sea apta para el consumo humano.</u></i></b>

    .row.mb-4(data-aos="fade-right")
      .col-12.col-lg-7
        .tarjeta.color-secundario.p-1
          .row.justify-content-center.align-items-center
            .col-lg-1.width2_lg
              img.img23.d-none.d-lg-block(src='@/assets/curso/tema2/img10.svg')
            .col-lg-11
              h3.m-0.text-white.text-center Normatividad para agua potable: conceptos, aplicación

    p.mb-5 Durante los diferentes contenidos se ha recalcado la importancia de conocer, aplicar y cumplir el marco normativo de referencia para el desarrollo de las actividades inherentes a los sistemas de potabilización y saneamiento. A continuación se presenta una relación de las principales normas aplicables en el contexto de agua potable y algunos de sus artículos.

    .row.justify-content-center.mb-4
      .col-12.col-md-8.col-lg-8
        h4.text-center Decreto 1575 de 2007: por el cual se establece el Sistema para la Protección y Control de la Calidad del Agua para Consumo Humano.

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").acordion__cerrado.bg_color-acordion1(data-aos="fade-right")
      .row.justify-content-evenly(titulo="Artículo 1. Objeto y campo de aplicación.")
        .col-md-2.mb-4.mb-md-0
          figure
            img.img88.mx-auto(src='@/assets/curso/tema2/img27.svg', alt='Texto que describa la imagen')     
        .col-md-9
          p.m-0 Objeto. Establecer el sistema para la protección y control de la calidad del agua, con el fin de monitorear, prevenir y controlar los riesgos para la salud humana causados por su consumo, exceptuando el agua envasada.
          p Aplicación. Todas las personas prestadoras que suministren o distribuyan agua para consumo humano, ya sea cruda o tratada, en todo el territorio nacional, independientemente del uso que de ella se haga para otras actividades económicas, a las direcciones territoriales de salud, autoridades ambientales y sanitarias y a los usuarios.    

      div(titulo="Artículo 4. Responsables.")
        .row.justify-content-evenly
          .col-md-2.mb-4.mb-md-0
            figure
              img.img97.mx-auto(src='@/assets/curso/tema2/img28.svg', alt='Texto que describa la imagen')
          .col-md-9
            p La implementación y desarrollo de las actividades de control y calidad del agua para consumo humano, será responsabilidad de los Ministerios de la Protección Social y de Ambiente, Vivienda y Desarrollo Territorial, la Superintendencia de Servicios Públicos Domiciliarios, el Instituto Nacional de Salud, las Direcciones Departamentales Distritales y Municipales de Salud, las personas prestadoras que suministran o distribuyen agua para consumo humano y los usuarios, para lo cual cumplirán las funciones indicadas en los artículos siguientes. 

      div(titulo="Artículo 9. Responsabilidades de las personas prestadoras.")
        .row.justify-content-evenly
          .col-md-2.mb-4.mb-md-0
            figure
              img.img97.mx-auto(src='@/assets/curso/tema2/img29.svg', alt='Texto que describa la imagen')
          .col-md-9
            p.m-0 Realizar el control de las características físicas, químicas y microbiológicas del agua para consumo humano, como también de las características adicionales definidas en el mapa de riesgo o lo exigido por la autoridad sanitaria de la jurisdicción. 
            p.m-0 Lavar y desinfectar antes de la puesta en funcionamiento y como mínimo dos (2) veces al año, los tanques de almacenamiento de aguas tratadas. 
            p.m-0 Lavar y desinfectar, antes de ponerlos en operación y cada vez que se efectúen reparaciones en ellos, los pozos profundos y excavados a mano para captación de agua subterránea, las estructuras de potabilización y las tuberías de distribución de agua para consumo humano.
            p.m-0 Drenar periódicamente en aquellos puntos de la red de distribución que presentan zonas muertas o de baja presión.
            p.m-0 Cuando la persona prestadora que suministra o distribuye agua para consumo humano preste el servicio a través de medios alternos como son carrotanques, pilas públicas y otros, se debe realizar el control de las características físicas, químicas y microbiológicas del agua; como también de las características adicionales definidas en el mapa de riesgo o lo exigido por la autoridad sanitaria de la jurisdicción, según se establezca en la reglamentación del presente decreto. 

    .row.justify-content-center.mb-5
      .col-12.col-md-8.col-lg-8
        h4.text-center Resolución 2115 de 2007: por medio de la cual se señalan características, instrumentos básicos y frecuencias del sistema de control y vigilancia para la calidad del agua para consumo humano.

    .row.justify-content-center.mb-5
      .col-12.col-md-3.col-lg-3.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-color.bg_color9.p-4.h-100
          figure.mb-4
            img.img170.mx-auto(src='@/assets/curso/tema2/img30.svg')
          p.text-center Características físicas y químicas del agua para consumo humano (Valores máximos aceptables).
      .col-12.col-md-7.col-lg-7(data-aos="fade-left")
        .tarjeta-color.bg_color9.p-3.h-100
          p <b>Artículo 11.</b> Características microbiológicas (Valores máximos aceptables).
          p <b>Artículo 14.</b> Cálculo del IRCA.
          p <b>Artículo 15.</b> Clasificación de nivel de riesgo.
          p.m-0 <b>Artículo 21.</b> 
          p Frecuencias y número de muestras de control de la calidad física y química del agua para consumo humano que debe ejercer la persona prestadora.
          p.m-0 <b>Artículo 22.</b> 
          p.m-0 Frecuencias y número de muestras de control de la calidad microbiológica del agua para consumo humano que debe ejercer la persona prestadora.

    h4.mb-4 Resolución 811 de 2008

    p Por medio de la cual se definen los lineamientos a partir de los cuales la autoridad sanitaria y las personas prestadoras, concertadamente definirán en su área de influencia los lugares y puntos de muestreo para el control y la vigilancia de la calidad del agua para consumo humano en la red de distribución.

    .row.justify-content-center(data-aos="fade-right")
      .col-12.col-md-12
        .row.justify-content-center.mb-4
          .col-sm-6.col-lg-4.mb-4.mb-sm-0
            .tarjeta.color-acento-contenido.p-3.h-100
              .row.justify-content-center.align-items-center
                .col-md-3.mb-3.mb-md-0
                  figure
                    img.img56.mx-auto(src='@/assets/curso/tema2/img31.svg')
                .col-md-9
                  p.m-0 <b>Artículo 2.</b>
                  p.m-0 Criterios para puntos de recolección de muestras en red de distribución. 

          .col-sm-6.col-lg-4.mb-4.mb-sm-0
            .tarjeta.color-acento-contenido.p-3.h-100
              .row.justify-content-center.align-items-center
                .col-md-3.mb-3.mb-md-0
                  figure
                    img.img70.mx-auto(src='@/assets/curso/tema2/img32.svg')
                .col-md-9
                  p.m-0 <b>Artículo 3.</b>
                  p.m-0 Número mínimo de puntos de muestreo en la red de distribución.

          .col-sm-6.col-lg-4.mb-4.mb-sm-0
            .tarjeta.color-acento-contenido.p-3.h-100
              .row.justify-content-center.align-items-center
                .col-md-3.mb-3.mb-md-0
                  figure
                    img.img56.mx-auto(src='@/assets/curso/tema2/img33.svg')
                .col-md-9
                  p.m-0 <b>Artículo 4.</b> 
                  p.m-0 Identificación del punto de muestreo.

    Separador 

    .row.mb-4(data-aos="fade-right")
      .col-12.col-lg-5
        .tarjeta.color-secundario.p-1
          .row.justify-content-center.align-items-center
            .col-lg-1.width2_lg
              img.ms-4.img23.d-none.d-lg-block(src='@/assets/curso/tema2/img10.svg')
            .col-lg-11
              h3.m-0.text-white.text-center Procesos y operaciones unitarias
    
    p.mb-5 Los procesos y operaciones unitarias son etapas que incluyen cambios físicos o químicos para realizar el tratamiento del agua cruda, y los procesos que se seleccionan dependen del nivel de complejidad del sistema.

    .row.mb-4(data-aos="fade-right")
      .col-12.col-lg-5
        .tarjeta.color-secundario.p-1
          .row.justify-content-center.align-items-center
            .col-lg-1.width2_lg
              img.ms-4.img23.d-none.d-lg-block(src='@/assets/curso/tema2/img10.svg')
            .col-lg-11
              h3.m-0.text-white.text-center Niveles de complejidad del sistema

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-4.col-lg-4.mb-4.mb-md-0
        figure(data-aos="fade-right")
          img.mx-auto(src='@/assets/curso/tema2/img34.png')
      .col-12.col-md-6.col-lg-6(data-aos="fade-left")
        p.mb-4 Para conocer los procesos y operaciones unitarias que se deben tener en cuenta para la potabilización de agua, el Ministerio de Vivienda en el RAS 2000, título A, define los niveles de complejidad de los sistemas de acuerdo con el número de habitantes en la zona urbana del municipio, su capacidad económica y el grado de exigencia técnica que se requiera para adelantar el proyecto.
        p.mb-4 Para todo el territorio nacional se establecen los siguientes niveles de complejidad:
        ul.lista-ul.mb-4
          li 
            <i class="fas fa-tint" style= "color:#3F97C4 !important;"></i>
            | Bajo.
          li 
            <i class="fas fa-tint" style= "color:#3F97C4 !important;"></i>
            | Medio.
          li 
            <i class="fas fa-tint" style= "color:#3F97C4 !important;"></i>
            | Medio Alto.
          li 
            <i class="fas fa-tint" style= "color:#3F97C4 !important;"></i>
            | Alto. 
        p La siguiente talba nos presenta la asignación del nivel de complejidad de acuerdo al RAS 2000, título A.

    .row.justify-content-center
      .col-12.col-md-10.col-lg-10
        .row.justify-content-center
          .col-md-5.col-lg.mb-5.mb-lg-0
            h4.m-0 Tabla 3.
            p Asignación del nivel de complejidad.
    
    .row.justify-content-center.mb-5
      .col-12.col-md-6.col-lg-6.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-color.bg_color10.p-4.h-100
          h4.text-center Asignación del nivel de complejidad.
          thead
            tr             
              th.border3_tabla3.border4_tabla3
                h4.text-center.mb-0 Nivel de complejidad
              th.border4_tabla3
                h4.text-center.mb-0 Población en la zona urbana (1) (habitantes)
              th.border3_tabla3.border4_tabla3
                h4.text-center.mb-0 Capacidad económica de los usuarios(2)
          tbody
            tr
              td.p-2.text-center.border_tabla3 Bajo
              td.p-2.text-center.border2_tabla3 < 2500
              td.p-2.text-center.border_tabla3 Baja
            tr
              td.p-2.text-center.border3_tabla3 Medio
              td.p-2.text-center 2501 a 12500
              td.p-2.text-center.border3_tabla3 Baja
            tr
              td.p-2.text-center.border_tabla3 Medio Alto
              td.p-2.text-center.border2_tabla3 12501 a 60000
              td.p-2.text-center.border_tabla3 Media 
            tr
              td.p-2.text-center.border3_tabla3.border5_tabla3 Alto
              td.p-2.text-center.border5_tabla3 > 60000
              td.p-2.text-center.border3_tabla3.border5_tabla3 Alta
          
          p.m-0.mt-3 <b>Notas:</b> (1) Proyectado al periodo de diseño, incluida la oblación flotante. 
          p (2) Incluye la capacidad económica de población flotante. Debe ser evaluada según metodología del DNP.
      .col-12.col-md-4.col-lg-4
        .tarjeta-color.bg_color10.p-3.h-100(data-aos="fade-left")
          p Para conocer e identificar los componentes los niveles de complejidad te invitamos a leer el documento “Reglamento técnico del sector de agua y saneamiento. Título A. Aspectos generales de los sistemas de agua potable y saneamiento básico”, que se encuentra en el material complementario. 
          p De acuerdo con el RAS 2000, título C, los procesos que conforman un sistema convencional de potabilización del agua son: captación del agua, remoción de material flotante y sólidos gruesos mediante rejillas, pretratamiento, coagulación, floculación, sedimentación, filtración, desinfección, estabilización y distribución del agua al sistema de redes de acueducto (p.75). 

    .row.justify-content-center.mb-5
      .col-12.col-lg-8
        h4.m-0 Figura 1.
        p.mb-4 <em>Sistema convencional de tratamiento de agua potable.</em>
        figure(data-aos="fade-up-right")
          img.mx-auto(src='@/assets/curso/tema2/img35.svg')

    .row.align-items-center.mb-4
      .col-12.col-lg-2
        .tarjeta.color-secundario.p-1
          .row.justify-content-center.align-items-center
            .col-lg-2.width2_lg
              img.ms-4.img23.d-none.d-lg-block(src='@/assets/curso/tema2/img10.svg')
            .col-lg-10
              h3.m-0.text-white.text-center Rejillas

    .row.justify-content-center.align-items-center.mb-5         
      .col-lg-10 
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="flip-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img36.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p De acuerdo con el RAS 2000, título B, la captación de aguas superficiales a través de rejillas se utiliza especialmente en los ríos de zonas montañosas, los cuales están sujetos a grandes variaciones de caudal entre los períodos de estiaje y los períodos de crecientes máximas. El elemento base del diseño es la rejilla de captación, la cual debe ser proyectada con barras transversales o paralelas a la dirección de la corriente. Los otros tipos de toma también deben tener rejillas, con el fin de limitar la entrada de material flotante hacia las estructuras de captación (p. 70).

    h4.mb-4 Elementos de diseño
    p En todo diseño de rejillas deben contemplarse los siguientes elementos: el caudal correspondiente al nivel de aguas mínimas en el río, el caudal requerido por la población que se va a abastecer y el nivel máximo alcanzado por las aguas durante las crecientes, con un período de retorno mínimo de 20 años. 

    .tarjeta--container.row.mb-5    
      .col-md.tarjeta.color-primario.p-5.mb-4.mb-md-0(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema2/img37.svg', alt='Texto que describa la imagen')
          
        h2.text-center Inclinación de las rejillas:
        p.text-center En el caso de rejillas utilizadas para la captación de aguas superficiales en cursos de agua de zonas montañosas, la rejilla debe estar inclinada entre 10% y 20% hacia la dirección aguas abajo. En el caso de otros tipos de estructuras de captación, las rejillas deben tener una inclinación de 70° a 80° con respecto a la horizontal. 

      .col-md.tarjeta.color.bg_color_fondo_tr.text-white.p-5.mb-4.mb-md-0(data-aos="fade-up")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema2/img38.svg', alt='Texto que describa la imagen')
          
        h2.text-center Separación entre barrotes:
        p.text-center La separación entre barrotes, para el caso de estructuras de captación en ríos con gravas gruesas, debe ser entre 75 mm y 150 mm. Para ríos caracterizados por el transporte de gravas finas, la separación entre barrotes debe ser entre 20 mm y 40 mm.

      .col-md.tarjeta.color-secundario.text-white.p-5.mb-4.mb-md-0(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema2/img39.svg', alt='Texto que describa la imagen')
          
        h2.text-center Ancho de la rejilla:
        p.text-center El ancho de la rejilla debe depender del ancho total de la estructura de captación y el caudal mínimo de la fuente (p.71).
    
    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-12.col-lg-3
        .tarjeta.color-secundario.p-1
          .row.justify-content-center.align-items-center
            .col-lg-2.width2_lg
              img.ms-4.img23.d-none.d-lg-block(src='@/assets/curso/tema2/img10.svg')
            .col-lg-10
              h3.m-0.text-white.text-center Desarenador
    
    p.mb-4 De acuerdo con el RAS 2000, título B, es un componente destinado a la remoción de las arenas y sólidos que están en suspensión en el agua, mediante un proceso de sedimentación. 

    .row.justify-content-center.mb-5
      .col-lg-6
        .cajon.color-secundario.p-3.mb-4(data-aos="fade-right")
          p Este debe instalarse en el primer tramo de la aducción, lo más cerca posible a la captación de agua, de acuerdo con las condiciones topográficas y geológicas de la zona.

          p Preferiblemente, los desarenadores deben ser del tipo autolimpiante. Los desarenadores deben contener canales o pasos directos para su operación mientras se efectúa el mantenimiento (p.83).
      .col-lg-4
        figure(data-aos="fade-left")
          img.img208(src='@/assets/curso/tema2/img40.png')
    
    h4.mb-4 Elementos de diseño

    .row.justify-content-center.mb-5
      .col-12.col-lg-10
        figure(data-aos="fade-up-right")
          img(src='@/assets/curso/tema2/img41.png')

    p.mb-4 Así mismo el RAS 2000, título B, especifica las condiciones que debe tener, las cuales son:

    ol.lista-ol--cuadro.mb-5(data-aos="fade-left")
      li 
        .lista-ol--cuadro__vineta
          span.h3.text-white 1
        p.mb-3 Deben proyectarse los dispositivos de entrada y salida de modo que aseguren una buena distribución transversal del flujo y se reduzca a un mínimo la posibilidad de corto circuito dentro del desarenador. La velocidad de paso en los orificios de la pantalla de entrada será inferior a 0.10 m/s. 
      li 
        .lista-ol--cuadro__vineta
          span.h3.text-white 2
        p.mb-3 La tubería o canal de llegada debe colocarse en el eje longitudinal del desarenador. Igual sucede en el caso de un canal situado aguas arriba del desarenador.
      li 
        .lista-ol--cuadro__vineta
          span.h3.text-white 3
        p.mb-3 En la entrada debe instalarse un dispositivo para distribuir uniformemente el flujo a lo ancho de la sección transversal del desarenador. 
      li 
        .lista-ol--cuadro__vineta
          span.h3.text-white 4
        p.mb-3 El dispositivo de salida debe tener un canal recolector provisto de un vertedero que asegure una distribución uniforme del flujo en toda la sección transversal del desarenador. 
      li 
        .lista-ol--cuadro__vineta
          span.h3.text-white 5
        p.mb-3 El dispositivo de rebose debe tener un vertedero lateral ubicado cerca de la entrada del desarenador. 
      li 
        .lista-ol--cuadro__vineta
          span.h3.text-white 6
        p.mb-3 El dispositivo de limpieza debe ubicarse en el área de almacenamiento. 
      li 
        .lista-ol--cuadro__vineta
          span.h3.text-white 7
        p.mb-3 El desarenador siempre debe ser del tipo autolimpiante. Para esto, la estructura deberá tener tolvas en el fondo con pendiente superior a la inercia del material silíceo para permitir la evacuación hidráulica del material depositado en dichas estructuras. La tubería de desagüe y limpieza del desarenador debe diseñarse para una velocidad no menor a 2 m/s.
      li 
        .lista-ol--cuadro__vineta
          span.h3.text-white 8
        p.mb-3 Las tuberías o canales de rebose y/o limpieza se unirán a una tubería o canal de descarga, los cuales deben tener un diámetro o ancho no menor de 0.25 m y/o una pendiente no menor del 2 %.
      li 
        .lista-ol--cuadro__vineta
          span.h3.text-white 9
        p.mb-3 Debe ubicarse una caja de inspección en la tubería de limpieza adyacente o lo más cerca posible de la descarga de arenas (p.86).

    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-12.col-lg-3
        .tarjeta.color-secundario.p-1
          .row.justify-content-center.align-items-center
            .col-lg-2.width2_lg
              img.ms-4.img23.d-none.d-lg-block(src='@/assets/curso/tema2/img10.svg')
            .col-lg-10
              h3.m-0.text-white.text-center Coagulación

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-7(data-aos="fade-right")
        p El RAS 2000, título C, establece que los procesos que se llevan a cabo en esta etapa del tratamiento del agua potable son la dosificación y la mezcla rápida. 
        p Una vez adicionados los coagulantes y auxiliares de la coagulación deben dispersarse rápida y homogéneamente en el cuerpo de agua, para lo cual deben emplearse las unidades de mezcla rápida. Estos equipos pueden ser hidráulicos o mecánicos.
        p Entre las unidades hidráulicas de mezcla rápida que pueden usarse se encuentran el resalto hidráulico, los vertederos, los mezcladores estáticos y los difusores; entre las unidades mecánicas de mezcla rápida que pueden emplearse se encuentran los mezcladores mecánicos. 
        p Para los niveles de complejidad de sistema bajo y medio, no se recomienda el empleo de mezcladores mecánicos sino hidráulicos.
        p Para garantizar la eficiencia del proceso de coagulación, debe vigilarse la correcta operación de los procesos de dosificación y mezcla rápida. 
      .col-12.col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img42.png')

    p.mb-4 Para garantizar que la coagulación - floculación esté realizándose correctamente, deben verificarse los siguientes parámetros:

    .row.justify-content-center.mb-5(data-aos="flip-down")
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          ol.lista-ol
            li 
              span 1. 
              | La eficiencia de remoción de la turbiedad en el agua decantada o filtrada, si se trata de un tratamiento por filtración directa.
            li 
              span 2. 
              | La eficiencia de remoción del color en el agua decantada o filtrada, o del carbono orgánico total (COT).
            li 
              span 3. 
              | La concentración residual de Al (+++) o Fe (+++) del agua filtrada o efluente de la planta, la cual debe cumplir con los valores máximos aceptables establecidos en el artículo 7º de la Resolución 2115 de 2007, o la norma que la modifique o reemplace.
    
    p De la eficiencia de este proceso dependen los rendimientos de todos los tratamientos posteriores al agua, como la sedimentación, la filtración y la desinfección (p.79).

    p.mb-5 Para identificar todas las condiciones de operación de la coagulación, lo invitamos a leer el documento “Reglamento técnico del sector de agua y saneamiento. Titulo C. Potabilización de agua”, el cual se encuentra en el material complementario.

    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-12.col-lg-3
        .tarjeta.color-secundario.p-1
          .row.justify-content-center.align-items-center
            .col-lg-2.width2_lg
              img.ms-4.img23.d-none.d-lg-block(src='@/assets/curso/tema2/img10.svg')
            .col-lg-10
              h3.m-0.text-white.text-center Floculación

    p.mb-5 El RAS 2000, título C, establece que en el proceso de floculación pueden emplearse los floculadores hidráulicos, mecánicos o hidromecánicos. 

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-6
        .cajon.color-acento-contenido.img506.p-5.mb-4.mb-lg-0(data-aos="fade-right")
          h4 Floculadores hidráulicos
          p Los floculadores hidráulicos utilizan el cambio de dirección de flujo del agua, inducido por diferentes mecanismos, para producir la turbulencia necesaria para promover la formación del floc y derivan su energía de la carga de velocidad que el líquido adquiere en su tránsito por un conducto. Entre los floculadores hidráulicos que pueden ser implementado, se encuentran los de: 
          ol.lista-ol.ms-5.mb-5
            li.m_lista-cajon 
              span a. 
              | Flujo horizontal. 
            li.m_lista-cajon 
              span b. 
              | Flujo vertical.
            li.m_lista-cajon 
              span c. 
              | El floculador Alabama. 
            li.m_lista-cajon 
              span d. 
              | Flujo helicoidal. 
            li.m_lista-cajon 
              span e. 
              | El floculador de lechos porosos. 
      .col-lg-6
        .cajon.color-acento-contenido.img506_2.p-5(data-aos="fade-left")
          h4 Floculadores mecánicos
          p Los floculadores mecánicos son aquellos que requieren de un equipo electromecánico para mover un agitador de paletas o álabes. En el nivel de complejidad del sistema bajo, se deben evitar en lo posible este tipo de floculadores. 
          p Clasificados como floculadores mecánicos, se encuentran: 
          ol.lista-ol
            li 
              span 1. 
              | Giratorios, en donde la agitación se produce por el giro de paletas alrededor de un eje horizontal o vertical. 
            li 
              span 2. 
              | De turbina, en donde la agitación se produce mediante grupos de álabes o turbinas dispuestos a lo largo de un eje horizontal que se instalan en tanques alargados y pueden comunicar un movimiento de rotación a la masa de agua a diferentes velocidades. 
            li 
              span 3. 
              | Reciprocantes, en donde la agitación se produce por desplazamiento vertical hacia arriba y abajo de unas parrillas dentro del agua. 
     
    .cajon.color-acento-contenido.p-5.mb-5(data-aos="fade-up")
      h4 Floculadores hidromecánicos
      p Los floculadores hidromecánicos utilizan la energía hidráulica a la entrada del floculador para mover una turbina de impulso similar a la rueda o turbina Pelton la cual puede girar con baja cabeza hidráulica. Esta rueda transmite su movimiento de rotación a su eje el cual va colocado en posición horizontal, y este a su vez a través de poleas y correas de poliuretano, transmiten su movimiento rotatorio a un agitador de paletas similar al de los floculadores rotatorios convencionales de flujo horizontal. 
      p Se trata de una solución intermedia entre los floculadores mecánicos y los hidráulicos, no consume energía eléctrica pero solamente se adapta a ciertas configuraciones de planta de tratamiento donde se pueda aprovechar el agua en proceso de tratamiento para producir la cabeza hidráulica suficiente para mover la rueda Pelton.

    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-12.col-lg-3
        .tarjeta.color-secundario.p-1
          .row.justify-content-center.align-items-center
            .col-lg-2.width2_lg
              img.ms-4.img23.d-none.d-lg-block(src='@/assets/curso/tema2/img10.svg')
            .col-lg-10
              h3.m-0.text-white.text-center Sedimentador

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-7(data-aos="fade-right")
        p.m-0 El proceso de sedimentación debe realizarse siempre que se tiene que producir coagulación de barrido o por adsorción, para poder remover la turbiedad. 
        p En otros casos es opcional de acuerdo con los ensayos de laboratorio o planta piloto. 

        p La unidad de sedimentación debe constar de: 
        ol.lista-ol--cuadro.mb-5.m_lista2
          li 
            .lista-ol--cuadro__vineta
              span.h3.text-white A
            p.mb-3 Zona de entrada.
          li 
            .lista-ol--cuadro__vineta
              span.h3.text-white B
            p.mb-3 Zona de sedimentación.
          li 
            .lista-ol--cuadro__vineta
              span.h3.text-white C
            p.mb-3 Zona de salida. 
          li 
            .lista-ol--cuadro__vineta
              span.h3.text-white D
            p.mb-3 Zona de recolección de lodos. 
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img43.png')
    
    p Los sedimentadores que pueden emplearse son el de flujo horizontal y flujo vertical. También puede realizarse la sedimentación en unidades con manto de lodos, los que a su vez se dividen en sedimentadores de manto de lodos de suspensión hidráulica y sedimentadores de manto de lodos de suspensión mecánica. Puede además emplearse los sedimentadores de alta tasa.

    p Para los niveles de complejidad de sistema bajo y medio se acepta el empleo del sedimentador de flujo horizontal o de alta tasa. En estos niveles no se aceptan en ningún caso los sedimentadores de manto de lodos, de suspensión mecánica o hidráulica. 

    p.mb-5 Para todos los niveles de complejidad del sistema, deben realizarse estudios de tratabilidad en el laboratorio y/o planta piloto para determinar los parámetros de diseño.    

    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-12.col-lg-3
        .tarjeta.color-secundario.p-1
          .row.justify-content-center.align-items-center
            .col-lg-2.width2_lg
              img.ms-4.img23.d-none.d-lg-block(src='@/assets/curso/tema2/img10.svg')
            .col-lg-10
              h3.m-0.text-white.text-center Filtración

    .row.justify-content-center.align-items-center.mb-5         
      .col-lg-10 
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.m_bloque-imgreves.m_bloque-textoreves(data-aos="flip-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img44.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p El RAS 2000, Título C, establece que en el proceso convencional la filtración puede ser rápida o lenta. La filtración rápida se divide en filtración ascendente o descendente y puede filtrarse por gravedad o por presión. El lavado del medio filtrante puede ser intermitente o continuo. También puede emplearse la filtración lenta sola o con diversas etapas de prefiltración. 
            br
            br
            p El medio filtrante granular convencional puede estar constituido por arena, antracita, arena de alta densidad, granate, ilmenita o carbono activado granular, generalmente dispuesto sobre un lecho de grava. 

    p.mb-5 A continuación, se establecen los principales métodos que pueden emplearse para controlar la tasa de filtración. 
    
    .row.justify-content-center.align-items-center.mb-5         
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img45.svg')
      .col-lg-8(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").acordion__cerrado
          div(titulo="Filtración de tasa constante:")
              p.ms-5 Filtración de tasa constante: es el tipo de control tradicional de los filtros rápidos convencionales. Debe emplearse un controlador variable que mantenga una pérdida de carga total constante al abrirse gradualmente la válvula, a medida que el lecho se colmata. Requiere medida de la pérdida de carga. El controlador puede ser de diafragma operado por contrapeso, de sifón, o de válvula de mariposa operada por un flotador, que mantiene un nivel constante de agua en el filtro, o por sistemas electrónicos.

          div(titulo="Filtración con afluente igualmente distribuido y nivel variable:")
              p.ms-5 Filtración con afluente igualmente distribuido y nivel variable: el caudal debe distribuirse por igual mediante un orificio o vertedero de entrada sobre cada filtro. El vertedero de control debe quedar en un nivel superior al nivel máximo en el filtro. La unidad debe ser bastante profunda para permitir una variación del nivel de por lo menos 2.0 m. Debe introducirse un sistema de disipación de energía a la entrada del flujo para no disturbar el medio filtrante. No requiere medida de la pérdida de carga. 

          div(titulo="Pérdida de carga variable, nivel variable, tasa declinante con vertedero de control:")
              p.ms-5 Pérdida de carga variable, nivel variable, tasa declinante con vertedero de control: el afluente debe entrar al filtro por debajo del nivel de la canaleta de lavado. Debe contar con un vertedero de control, un orificio o una válvula que evite el vaciado del filtro al comienzo de las carreras. No requiere medida de la pérdida de carga.

    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-12.col-lg-3
        .tarjeta.color-secundario.p-1
          .row.justify-content-center.align-items-center
            .col-lg-2.width2_lg
              img.ms-4.img23.d-none.d-lg-block(src='@/assets/curso/tema2/img10.svg')
            .col-lg-10
              h3.m-0.text-white.text-center Desinfección

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7(data-aos="fade-right")
        p El RAS 2000, título C, establece que entre los procesos de desinfección que pueden realizarse está primordialmente la cloración, incluidos sus derivados el dióxido de cloro, los hipocloritos y procedimientos como el de la cloraminación. 
        p Como desinfectantes complementarios se tienen el ozono y los rayos ultravioleta. 
        p Para la desinfección por cloración, deben emplearse tanques de contacto en los niveles de complejidad de sistema medio alto y alto; en los otros niveles es opcional.
        p El tanque debe proporcionar el tiempo necesario que garantice la desinfección del agua. No se recomienda el uso de cloro gaseoso en el nivel de complejidad del sistema bajo. Para este nivel se recomienda el empleo de compuestos en estado sólido o líquido, como: cal clorada, hipoclorito de calcio e hipoclorito de sodio. Todas las recomendaciones que aquí se dan son aplicables a los cuatro niveles de complejidad del sistema, a no ser que se especifique lo contrario.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img46.png')
   
    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-12.col-lg-4
        .tarjeta.color-secundario.p-1
          .row.justify-content-center.align-items-center
            .col-lg-2.width1_lg
              img.ms-4.img23.d-none.d-lg-block(src='@/assets/curso/tema2/img10.svg')
            .col-lg-10
              h3.m-0.text-white.text-center Estabilización y ablandamiento 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img47.png')  
      .col-lg-7(data-aos="fade-left")
        p El RAS 2000, título C, determina que el agua tratada a la salida de la planta no debe presentar propiedades corrosivas con respecto a las tuberías del sistema de distribución y del interior de las viviendas. 
        p El pH del agua debe ser próximo al de saturación. Si es necesario hacer uso de inhibidores que a la vez pueden ayudar a proteger la red de distribución de agua de la formación de biopelículas en su interior, éstos pueden utilizarse si son económicamente factibles.
        p Para proteger las tuberías de los agentes corrosivos presentes puede ajustarse la composición del agua, pH, concentración en iones de calcio y la alcalinidad al valor del equilibrio de saturación del carbonato de calcio para una temperatura del agua dada. El agua ideal debe tener una dureza total entre 40 mg/L y 60 mg/L de equivalente de carbonato de calcio (CaCO3), a un pH y alcalinidad que alcance las condiciones de saturación y una dureza de magnesio de no más que 36 mg/L para minimizar la formación de hidróxido de magnesio a temperaturas elevadas.

    p Por medio del ablandamiento del agua debe reducirse el contenido de minerales disueltos, particularmente calcio y magnesio que son los mayores impulsores de la dureza del agua, otros iones que pueden producir dureza son el hierro, manganeso, estroncio, bario, zinc y aluminio, de cualquier modo, estos iones no están presentes en cantidades significantes. 

    p Los beneficios que deben obtenerse con el ablandamiento del agua son los siguientes: 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5(data-aos="fade-right")
        figure
          img.img505(src='@/assets/curso/tema2/img48.svg')
      .col-lg-5(data-aos="fade-left")
        ol.lista-ol--cuadro.mb-4.margin_top
          li 
            .lista-ol--cuadro__vineta
              span.h3.text-white 1
            p.mb-2 Control del crecimiento biológico.
          li 
            .lista-ol--cuadro__vineta
              span.h3.text-white 2
            p.mb-2 Un ligero grado de remoción de trazas orgánicas. 
          li 
            .lista-ol--cuadro__vineta
              span.h3.text-white 3
            p.mb-2 Economía de jabón y detergentes. 
          li 
            .lista-ol--cuadro__vineta
              span.h3.text-white 4
            p.mb-2 Mejor lavado de ropa y utensilios domésticos.
          li 
            .lista-ol--cuadro__vineta
              span.h3.text-white 5
            p.mb-2 Disminución de incrustaciones en artefactos domésticos. 
          li 
            .lista-ol--cuadro__vineta
              span.h3.text-white 6
            p.mb-2 Mejor cocción y preparación de alimentos. 
          li 
            .lista-ol--cuadro__vineta
              span.h3.text-white 7
            p.mb-2 Si se opera en forma correcta, puede prevenir la corrosión. 
          li 
            .lista-ol--cuadro__vineta
              span.h3.text-white 8
            p.mb-2 Incremento en la eficacia de la filtración. 
        
          

    p Debe utilizarse el proceso de estabilización si es económicamente factible y si la calidad del agua lo permite, en caso contrario debe emplearse otro método que esté comprobado eficientemente para controlar los problemas de corrosión en la red (p.95).





    
          
              
              


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
