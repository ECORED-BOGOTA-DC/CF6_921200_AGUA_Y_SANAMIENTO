<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Instrumentos y equipos para el control de procesos de potabilización
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 3.1	Objetivos de la instrumentación y el control en la planta de tratamiento

    p De acuerdo con el RAS 2000, título C, la planta de tratamiento debe ser analizada como un proceso total para el diseño del sistema de instrumentación y control, el cual debe aplicar instrumentos para visualización, registro y control, que deben permitir lograr los siguientes objetivos: 

    .bg8.p-5.rounded-3.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-12(data-aos="fade-down")
          h4 1. Operación segura de la planta. 
          ul.lista-ul.mb-4.ms-0.ms-lg-3
            li.m_bottom-4 
              <i class="fas fa-tint" style= "color:#3F97C4 !important;"></i>
              | Mantener las variables de procesos dentro de los límites seguros de operación. 
            li.m_bottom-4 
              <i class="fas fa-tint" style= "color:#3F97C4 !important;"></i>
              | Detección de situaciones peligrosas. 
            li.m_bottom-4 
              <i class="fas fa-tint" style= "color:#3F97C4 !important;"></i>
              | Prevención de procedimientos peligrosos de operación. 
            li.m_bottom-4 
              <i class="fas fa-tint" style= "color:#3F97C4 !important;"></i>
              | Anticiparse a condiciones particulares de operación por medio del conocimiento oportuno de parámetros que incidirán en la operación de la planta. 
            li.m_bottom-4 
              <i class="fas fa-tint" style= "color:#3F97C4 !important;"></i>                  
              | Producción de archivos históricos de datos de operación de la planta que permitan análisis o estudios posteriores tendientes a optimizar el proceso. 
    
    .row.align-items-center
      .col-lg-12
        .row.justify-content-start.align-items-center(data-aos="flip-down")
          .col-lg-4
            .bg8-2.p-4.rounded-3.mb-4
              .row
                .col-lg-12(data-aos="fade-down")
                  h4 2. Tasa de producción.
                  ul.lista-ul.mb-4.ms-0.ms-lg-3
                    li.m_bottom-4 
                      <i class="fas fa-tint" style= "color:#3F97C4 !important;"></i>
                      | Mantener la disponibilidad y confiabilidad del servicio.
                    li.m_bottom-4 
                      <i class="fas fa-tint" style= "color:#3F97C4 !important;"></i>
                      | Controlar el volumen de producción de agua de acuerdo con la oferta y a la demanda. Registro permanente de los caudales afluentes y efluentes. 
          .col-lg-4    
            .bg8-2.p-4.mb-4.height_tar1-t3
              .row
                .col-lg-12(data-aos="fade-down")
                  h4 3. Calidad del producto. 
                  ul.lista-ul.mb-4.ms-0.ms-lg-3
                    li.m_bottom-4 
                      <i class="fas fa-tint" style= "color:#3F97C4 !important;"></i>
                      |  Mantener la composición del efluente de la planta dentro de los estándares de calidad especificados. 
          .col-lg-4
            .bg8-2.p-4.mb-4.height_tar1-t3
              .row
                .col-lg-12(data-aos="fade-down")
                  h4 4. Costos de operación de la planta. 
                  ul.lista-ul.mb-4.ms-0.ms-lg-3
                    li.m_bottom-4 
                      <i class="fas fa-tint" style= "color:#3F97C4 !important;"></i>
                      |  Costos de operación de la planta al menor costo posible, respetando las normas de calidad (p.130).
    
    Separador

    .bg_fondo-t3
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 3.2	Instrumentación primaria

      p Es la tecnología que permite medir magnitudes físicas y convertirlas en señales eléctricas, neumáticas o hidráulicas para transmitirla a elementos de control final.

      .row.mb-5(data-aos="fade-right")
        .col-lg-3
          .tarjeta.color-secundario.p-1
            .row.justify-content-center.align-items-center
              .col-lg-1
                img.img23.d-none.d-lg-block(src='@/assets/curso/tema2/img10.svg')
              .col-lg-10
                h3.m-0.text-white.text-center Analizadores

      p Son dispositivos que permiten realizar la medición de variables físicas, algunas de estas variables son:

      .row.align-items-center.mb-5
        .col-lg-4.mb-4.mb-lg-0
          figure(data-aos="fade-right")
            img(src='@/assets/curso/tema3/img02.png')
        .col-md-8(data-aos="fade-left")
          LineaTiempoD.color-primario
            .row(numero="1" titulo="Cloro residual:")
              .col-md-4.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema3/img03.png', alt='Texto que describa la imagen')
              .col-md-8
                p Existen diferentes tipos de analizadores: el amperimétrico, el voltamétrico, el polarográfico, el potenciométrico y el colorimétrico, unos miden solo cloro total, otro cloro libre y/o combinado como el amperimétrico. 
            
            .row(numero="2" titulo="pH:")
              .col-md-4.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema3/img04.png', alt='Texto que describa la imagen')
              .col-md-8
                p El medidor de pH incluye un electrodo de proceso y un electrodo combinado para referencia. Debe considerarse como el parámetro más importante para caracterizar y controlar los procesos de tratamiento, por lo cual debe disponerse de un sistema de medida del pH eficiente y que sea capaz de detectar pequeñas variaciones. 
            
            .row(numero="3" titulo="Turbiedad:")
              .col-md-4.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema3/img05.png', alt='Texto que describa la imagen')
              .col-md-8
                p La medición continua de la turbiedad por la falta de transparencia del agua debido a la presencia de partículas extrañas debe realizarse por medio de analizadores amperimétricos de turbiedad tal como el equipo o Unidad Nefelométrica de Turbiedad (UNT); otros son los analizadores ópticos que deben usarse cuando se tienen concentraciones medias de sólidos. Debe tenerse en cuenta que la unidad de medición actual es la UNT. Cuando se trata de evaluar pequeños valores de turbiedad es preferible el uso de turbidímetros de diseminación.

            .row(numero="4" titulo="Aluminio residual:")
              .col-md-4.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema3/img06.png', alt='Texto que describa la imagen')
              .col-md-8
                p El aluminio residual es una variable importante que debe determinarse en las plantas de tratamiento por los presuntos efectos sobre la salud humana (enfermedades renales) que produce el mantener altos contenidos de aluminio en la red de distribución y los problemas de corrosión de las tuberías. 

            .row(numero="5" titulo="Monitor de corriente de reestabilización:")
              .col-md-4.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema3/img07.png', alt='Texto que describa la imagen')
              .col-md-8
                p Pueden utilizarse Streaming Current Monitors (SCM) los cuales son monitores de corriente de reestabilización de los coloides presentes en el agua para evaluar en continuo el resultado de la adición de un coagulante sobre partículas coloidales durante el proceso de coagulación. Este resultado se caracteriza por la medición de una corriente electrocinética generada entre dos electrodos en una muestra de agua cruda a la cual se le añadió un coagulante. Esta corriente es generada por el reacomodamiento de los iones que se han extraído de las partículas adsorbidas sobre las paredes de una celda de medición.

      .row.align-items-center.mb-4.mb-lg-0(data-aos="fade-right")
        .col-lg-3.col-xl-4.col-xxl-3
          .tarjeta.color-secundario.p-1
            .row.justify-content-center.align-items-center
              .col-lg-2.width2_lg
                img.ms-4.img23.d-none.d-lg-block(src='@/assets/curso/tema2/img10.svg')
              .col-lg-10
                h3.m-0.text-white.text-center Medidores de flujo

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-7(data-aos="fade-right")
          p Para la medición del caudal debe hacerse uso de medidores según sea el tipo de caudal volumétrico o másico deseado. 	 
          p Debe adquirirse el conocimiento básico de los tipos de fluxómetros volumétricos disponibles para realizar la mejor elección, entre los cuales se encuentran fluxómetros magnéticos, ultrasónicos, de turbina, medidores venturi y flujo de tubo, canaleta Parshall y vertederos, los cuales determinan el caudal directamente (desplazamiento) o indirectamente por deducción (presión diferencial, área variable, velocidad, fuerza, tensión inducida, torbellino). Las mediciones de caudal másico deben efectuarse a partir de una medida volumétrica compensándola para las variaciones de densidad del fluido o determinando directamente la caudal masa aprovechando características medibles de la masa del fluido.
        .col-lg-5(data-aos="fade-left")
          figure
            img(src='@/assets/curso/tema3/img08.png')
    
      .row.align-items-center.mb-4(data-aos="fade-right")
        .col-lg-3.col-xl-4.col-xxl-3
          .tarjeta.color-secundario.p-1
            .row.justify-content-center.align-items-center
              .col-lg-2.width1_lg
                img.ms-4.img23.d-none.d-lg-block(src='@/assets/curso/tema2/img10.svg')
              .col-lg-10
                h3.m-0.text-white.text-center Medidores de nivel 
      
      p.mb-5 La medición del nivel debe ser muy cuidadosa para asegurar el funcionamiento correcto de cada proceso y obtener el balance adecuado de materias primas o del efluente de la planta.

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5.mb-4.mb-lg-5(data-aos="fade-right")
          figure
            img(src='@/assets/curso/tema3/img09.png')  
        .col-lg-7.mb-0.mb-lg-5(data-aos="fade-left")
          p.m-0 Debe diferenciarse entre los medidores de nivel de líquidos y de sólidos de acuerdo con tipo de proceso, éstos últimos se utilizan principalmente en el manejo de lodos. 
          p Debe tenerse el respectivo conocimiento de los tipos de medidores de nivel, entre los cuales deben encontrarse los que miden directamente la altura del líquido sobre una línea de referencia, medidores de presión hidrostática, dispositivos que miden el desplazamiento producido en un flotador por el propio líquido contenido en el tanque del proceso y los medidores que aprovechan las características eléctricas del líquido.
          p En los niveles de complejidad del sistema bajo y medio es conveniente utilizar medidores como la sonda, cinta y plomada, nivel de cristal e instrumentos de flotador. 
          p En los niveles de complejidad del sistema medio alto y alto es conveniente utilizar medidores manómetricos, de membrana, de presión diferencial de diafragma, de desplazamiento a barra de torsión, conductivos, capacitivos, ultrasónicos y de radiación.

      .row.align-items-center(data-aos="fade-right")
        .col-lg-3.col-xl-4.col-xxl-3
          .tarjeta.color-secundario.p-1
            .row.justify-content-center.align-items-center
              .col-lg-2.width1_lg
                img.ms-4.img23.d-none.d-lg-block(src='@/assets/curso/tema2/img10.svg')
              .col-lg-10
                h3.m-0.text-white.text-center Medidores de presión

      .row.justify-content-center
        .col-lg-10      
          .bg9.p-5.mb-4
            .row.justify-content-center.align-items-center
              .col-lg-5(data-aos="fade-down")
                p Los instrumentos de presión deben estar sujetos a los siguientes grupos: mecánicos, neumáticos, electromecánicos y electrónicos. Es conveniente utilizar medidores manométricos, de presión diferencial de diafragma, capacitivos y ultrasónicos. Deben aplicarse medidores de presión a líneas o procesos que se encuentren encerrados tales como sistemas de distribución de aire comprimido, líneas de descarga de bombas y tanques, para esta finalidad se encuentran los manómetros, tubos manométricos Bourdon, el elemento en espiral, el helicoidal, fuelles, medidores de presión diferencial de diafragma, medidores capacitivos y ultrasónicos.
              .col-lg-7(data-aos="fade-down")
                figure
                  img(src='@/assets/curso/tema3/img10.png') 
      
      .row.justify-content-center.mb-5
        .col-lg-6
          .row.align-items-center.mb-4
            .col-12.col-lg-6
              .tarjeta.color-secundario.p-1
                .row.justify-content-center.align-items-center
                  .col-lg-2.width1_lg
                    img.ms-4.img23.d-none.d-lg-block(src='@/assets/curso/tema2/img10.svg')
                  .col-lg-10
                    h3.m-0.text-white.text-center Transmisores      
          .row
            .col-lg-12
              .bg10.p-5.mb-4
                .row.justify-content-center.align-items-center
                  .col-lg-12(data-aos="fade-down")
                    figure.mb-4
                      img(src='@/assets/curso/tema3/img11.png') 
                    p El sistema de transmisión de señales debe sujetarse a las características propias de la planta, el nivel de complejidad del sistema y el tipo de señal a transmitir. 
        
        .col-lg-6
          .row.align-items-center.mb-4
            .col-12.col-lg-6
              .tarjeta.color-secundario.p-1
                .row.justify-content-center.align-items-center
                  .col-lg-2.width1_lg
                    img.ms-4.img23.d-none.d-lg-block(src='@/assets/curso/tema2/img10.svg')
                  .col-lg-10
                    h3.m-0.text-white.text-center Controladores      
          .row
            .col-lg-12
              .bg10.p-5.mb-4
                .row.justify-content-center.align-items-center
                  .col-lg-12(data-aos="fade-down")
                    figure.mb-4
                      img(src='@/assets/curso/tema3/img12.png') 
                    p Estos dispositivos deben comparar la variable controlada con el valor deseado y ejercer una acción correctiva de acuerdo con la desviación. La variable controlada la pueden recibir directamente, como controladores locales o bien indirectamente en forma de señal neumática o electrónica procedente de un transmisor. 
      
      .row.align-items-center.mb-5(data-aos="fade-right")
        .col-12.col-lg-4
          .tarjeta.color-secundario.p-1
            .row.justify-content-center.align-items-center
              .col-lg-2.width1_lg
                img.ms-4.img23.d-none.d-lg-block(src='@/assets/curso/tema2/img10.svg')
              .col-lg-10
                h3.m-0.text-white.text-center Elementos de control final

      .row.mb-5
        .col-lg-12
          .bg11.p-5
            p Después de los instrumentos de sensibilidad son necesarios los sistemas de control final, los cuales deben permitir manipular y cambiar las condiciones del proceso para mantenerlas dentro del campo de medida deseado, estos elementos reciben la señal del controlador y modifica el caudal del fluido o agente de control. 
            .row.align-items-center
              .col-lg-5(data-aos="fade-right")
                figure.mb-4
                  img(src='@/assets/curso/tema3/img13.png') 
              .col-lg-6(data-aos="fade-left")
                h4.m-0 a. Actuadores eléctricos.
                p Deben usarse estos dispositivos para controlar la posición de válvulas y compuertas que ajustan el caudal dentro de un proceso de control continuo o discreto. 
                h4.m-0 b. Actuadores hidráulicos y neumáticos.
                p Los usos que deben darse a estos actuadores son similares a los actuadores eléctricos con la diferencia de que estos operan en una forma diferente, lo cual se ve reflejado en los costos de operación. 
                h4.m-0 c. Motores de velocidad variable.
                p El tipo de motor debe escogerse de acuerdo con las condiciones de trabajo a las cuales se va a someter, la disponibilidad de espacio y la disponibilidad económica de la planta. La velocidad debe adecuarse para las condiciones del proceso particular. 

            h4.m-0 d. Válvulas de control.
            p.m-0 Deben tenerse válvulas como elementos de control final para regular o limitar la variable controlable.
            p.mb-4 Para la selección de la válvula deben analizarse las siguientes condiciones: 

            ul.lista-ul.ms-0.ms-lg-4(data-aos="fade-right")
              li.m_bottom 
                i.fas.fa-angle-right
                | El tipo de válvula debe ser compatible con el medio en el cual se va a utilizar. 
              li.m_bottom 
                i.fas.fa-angle-right
                | Debe acoplarse a las caídas de presión que se presentan en el sistema. 
              li.m_bottom 
                i.fas.fa-angle-right
                | La rapidez y facilidad para ser operada en momentos críticos. 
              li.m_bottom 
                i.fas.fa-angle-right
                | Los requerimientos de presión y temperatura en la válvula. 
              li.m_bottom 
                i.fas.fa-angle-right
                | Compatibilidad del cuerpo y material de la válvula con el fluido del proceso.
              li.m_bottom 
                i.fas.fa-angle-right
                | Tipo de conexión realizada entre la válvula y la tubería del proceso. Entre los diferentes tipos de válvulas deben acondicionarse principalmente las siguientes: Válvulas de globo, Válvulas de mariposa, Válvulas de bola, Válvulas de diafragma, Válvulas tapón.

      .row.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-3.col-xl-4.col-xxl-3
          .tarjeta.color-secundario.p-1
            .row.justify-content-center.align-items-center
              .col-lg-2.width1_lg
                img.ms-4.img23.d-none.d-lg-block(src='@/assets/curso/tema2/img10.svg')
              .col-lg-10
                h3.m-0.text-white.text-center Sistemas de registro

      p.mb-5 La información recogida por los instrumentos debe clasificarse dentro de una de las siguientes categorías: 

      .tarjeta--container.row.mb-5 
        .col-md.tarjeta.color-primario.p-5.mb-4.mb-md-0(data-aos="fade-right")
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/tema3/img14.svg', alt='Texto que describa la imagen')
            
          h2.text-center Datos de proceso:
          p.text-center Debe mantenerse la operación de la planta dentro de los límites aceptables y alertar al personal de la planta cuando estos parámetros se encuentran fuera de las condiciones límite. 

        .col-md.tarjeta.color.bg_color_fondo_tr.text-white.p-5.mb-4.mb-md-0(data-aos="fade-up")
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/tema3/img15.svg', alt='Texto que describa la imagen')
            
          h2.text-center Información técnica: 
          p.text-center Debe utilizarse para proveer mejoras, tratando de optimizar cada sistema de tratamiento para aumentar el nivel de eficiencia y disminuir costos. 

        .col-md.tarjeta.color-secundario.text-white.p-5.mb-4.mb-md-0(data-aos="fade-left")
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/tema3/img16.svg', alt='Texto que describa la imagen')
            
          h2.text-center Datos históricos: 
          p.text-center Deben determinar inclinaciones de términos a largo plazo con énfasis en la calidad tanto de la planta como del efluente y optimización de la planta, lo cual incide en planeaciones futuras. 

      .row
        .col-lg-12
          figure
            img.img186(src='@/assets/curso/tema3/img17.svg')
      
      Separador
    
    .bg_fondo2-t3
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 3.3	Válvulas, motobombas y tableros eléctricos en el proceso de potabilización

      p.mb-5 El RAS 2000, título B, define que las válvulas deben cumplir con ciertas especificaciones entre los cuales se encuentran las descritas a continuación.

      .row.mb-5(data-aos="fade-right")
        .col-lg-4
          .tarjeta.color-secundario.p-1
            .row.justify-content-center.align-items-center
              .col-lg-1
                img.img23.d-none.d-lg-block(src='@/assets/curso/tema2/img10.svg')
              .col-lg-10
                h3.m-0.text-white.text-center Materiales para las válvulas

      .row.justify-content-center
        .col-lg-5(data-aos="fade-right")
          p El diseño debe asegurar que los materiales con los cuales se construyen las válvulas, tanto en su cuerpo como en su mecanismo de cierre, cumplan con todas las especificaciones técnicas reconocidas tanto a nivel nacional como internacional, en función de las características del agua, tales como el grado de agresividad y otros, así como de las presiones de servicio más los factores de seguridad requeridos. 
          p Estas especificaciones para los materiales deben seguir lo establecido en las Normas Técnicas Colombianas NTC, las normas ASTM, las normas ISO o las normas DIN correspondientes para cada tipo de válvula. Los revestimientos internos para las válvulas y sus mecanismos deben ajustarse a las Normas Técnicas Colombianas correspondientes o a la Norma AWWA C550. 
        .col-lg-3(data-aos="fade-left")
          figure
            img.img-t.mx-auto.mb-4.mb-lg-0(src='@/assets/curso/tema3/img18.svg')

      .row.mb-5(data-aos="fade-right")
        .col-12.col-lg-3
          .tarjeta.color-secundario.p-1
            .row.justify-content-center.align-items-center
              .col-lg-1
                img.img23.d-none.d-lg-block(src='@/assets/curso/tema2/img10.svg')
              .col-lg-10
                h3.m-0.text-white.text-center Cajas para válvulas

      p.mb-5 En todo proyecto de diseño de una conducción nueva o de la ampliación de una conducción existente que incluya válvulas, se debe especificar para cada válvula las dimensiones de las respectivas cajas u obras civiles, de tal manera que se permita el acceso para labores de operación y mantenimiento por parte del personal de la persona prestadora del servicio de acueducto.
    
    .row.mb-5(data-aos="fade-right")
      .col-12.col-lg-3
        .tarjeta.color-secundario.p-1
          .row.justify-content-center.align-items-center
            .col-lg-1
              img.img23.d-none.d-lg-block(src='@/assets/curso/tema2/img10.svg')
            .col-lg-10
              h3.m-0.text-white.text-center Tipos de válvula
    
    .row.mb-5
      .col-lg-12
        .bg12.p-5
          .row
            .col-lg-2(data-aos="fade-up")
              figure.mb-4
                img.img-t.mx-auto(src='@/assets/curso/tema3/img19.svg') 
            .col-lg-10(data-aos="fade-left")
              h4 Válvulas de corte o cierre:
              p.m-0 Deben localizarse al comienzo de la línea de conducción y al final de ésta si la presión es mayor que 50 m.c.a. Para todos los niveles de complejidad del sistema, se debe hacer un estudio de los transientes hidráulicos ocasionados por la operación de las válvulas en el sistema y el diseño debe incluir recomendaciones sobre su operación.
              p.m-0 En aquellos casos en que la tubería presenta grandes desniveles debido a la topografía del terreno, se debe verificar que para la condición del cierre de una válvula de corte. 
              p.m-0 Las válvulas de cierre o corte deben cumplir con las correspondientes normas técnicas colombianas y si estas no existen con las Normas Técnicas American <em>Water Works Association</em> [AWWA], <em>American Society for Testing and Materials</em> [ASTM], <em>Deutsches Institut für Normung</em> [DIN], <em>International Organization for Standardization</em> [ISO], <em>American Petroleum Institute</em> [API] o cualquier otra norma de reconocimiento internacional equivalente, previa aprobación del Ministerio de Ambiente Vivienda y Desarrollo Territorial, para el caso de los niveles de complejidad del sistema bajo y medio o de la persona prestadora del servicio para los niveles de complejidad del sistema medio alto y alto. 
              p.mb-4 La tabla 4 establece algunas de las normas técnicas nacionales e internacionales para diferentes tipos de válvulas de corte. 

              p.m-0 <b>Tabla 4.</b> <em>Normas técnicas aplicables a válvulas de corte.</em>
              thead
                tr.bg_color_fondo_tr                
                  th
                    h4.text-center.text-white.mb-0.mx-4 <b>Tipos de válvula</b>
                  th
                    h4.text-center.text-white.mb-0.mx-4 <b>Norma Técnica NTC</b>
                  th
                    h4.text-white.mb-0.mx-4 <b>Otras normas</b>
              tbody
                tr
                  td.p-2.ps-3 Válvulas de mariposa
                  td.p-2.ps-3.text-center NTC 2193
                  td.p-2.ps-3 AWWA C504
                tr
                  td.p-2.ps-3 Válvulas esféricas
                  td
                  td.p-2.ps-3 ANSI B. 16.10 /  AWWA C. 507
                tr
                  td.p-2.ps-3 Válvulas de flujo anular
                  td
                  td.p-2.ps-3 AWWA C207 / AWWA C550 / ANSI B.16.34

          p.m-0.mt-5(data-aos="fade-up") Adicionalmente, el diseño debe evaluar la necesidad de instalar válvulas de corte intermedias a lo largo de la línea de conducción en sistemas de gravedad.
          p(data-aos="fade-up") El diámetro de la válvula debe seleccionarse igual al diámetro de las tuberías de conducción y debe verificarse para evitar problemas de cavitación en el caso de que se tengan flujos con altas velocidades. 
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7(data-aos="fade-right")
        h4 Válvulas de ventosa
        p.m-0 En los puntos altos de la línea de conducción deben colocarse ventosas con el fin de facilitar la salida del aire que eventualmente se acumula en la conducción durante su funcionamiento o cuando se procede a su llenado o vaciado. 
        p De igual forma, cuando la tubería tenga una pendiente constante se debe colocar una válvula ventosa cada 300 m. 
        p Dichos dispositivos deben permitir también la entrada automática de aire durante las operaciones de descarga de la tubería o cuando el caudal de agua se disminuye por causa de una rotura, de maniobras o de paradas en el flujo de la tubería. 
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img20.png')
    
    p.mb-5 El diseño debe tener en cuenta los siguientes aspectos:   

    .bg_slyder.p-4.mb-5(data-aos="fade-left")
      SlyderE(indicadores="derecha")
        .row.justify-content-center
          .col-lg-10
            ol.lista-ol--cuadro.lista-ol--separador.Lista_t1-2
              li
                .lista-ol--cuadro__vineta
                  span.t_num_lista-t3 1
                p.m_block Podrá utilizarse una ventosa única para atender la entrada y la salida de aire, siempre y cuando dicho dispositivo sea capaz de atender ambas funciones. 
              li 
                .lista-ol--cuadro__vineta
                  span.t_num_lista-t3 2
                p.m_block Preferiblemente las válvulas de ventosa deben ser bridadas según las especificaciones de la norma AWWA y con cuerpo fundido en hierro dúctil. Para los niveles de complejidad del sistema bajo y medio se pueden utilizar válvulas de ventosa roscada; para los niveles de complejidad del sistema medio alto y alto, el uso de las válvulas de ventosa roscada deberá contar con la aprobación previa de la persona prestadora del servicio de acueducto. Tipo de válvula. 
              li
                .lista-ol--cuadro__vineta
                  span.t_num_lista-t3 3
                p.m_block Cuando en la conducción se encuentre una válvula de línea, debe existir una ventosa aguas arriba o aguas abajo, dependiendo de la pendiente para la aireación durante el llenado y descarga de ésta. 
              li

        .row.justify-content-center
          .col-lg-11
            ol.lista-ol--cuadro.lista-ol--separador.Lista_t1-2              
              li 
                .lista-ol--cuadro__vineta
                  span.t_num_lista-t3 4
                p.m_block Las ventosas tendrán los siguientes diámetros mínimos: para tuberías con diámetro interno real menor o igual que 100 mm, el diámetro mínimo será de 50 mm. Para tuberías con diámetro interno real mayor que 100 mm, el diámetro mínimo de las ventosas será de 75 mm. En caso de que el diseño hidráulico incluya ventosas con diámetros inferiores a los antes establecidos, éste deberá ser aprobado por la persona prestadora del servicio.  
              li
                .lista-ol--cuadro__vineta
                  span.t_num_lista-t3 5
                p.m_block El diseño del diámetro y ubicación de las válvulas de ventosa debe realizarse de forma integrada con el de las válvulas de purga. 
              li 
                .lista-ol--cuadro__vineta
                  span.t_num_lista-t3 6
                p.m_block Toda válvula de ventosa debe poder aislarse de la tubería principal por medio de una válvula de corte.  
              li
                .lista-ol--cuadro__vineta
                  span.t_num_lista-t3 7
                p.m_block Cada ventosa debe estar protegida por una cámara de inspección accesible, con su respectivo drenaje de aguas y los respiraderos necesarios para garantizar el flujo de aire y estar completamente asegurada. 
              li 
        
        .row.justify-content-center
          .col-lg-10
            ol.lista-ol--cuadro.lista-ol--separador.Lista_t1-2 
              li
                .lista-ol--cuadro__vineta
                  span.t_num_lista-t3 8
                p.m_block Los dispositivos de entrada de aire deben localizarse de tal modo que no se introduzca agua extraña al sistema. Los dispositivos previstos deben instalarse de tal manera que sus aperturas se sitúen por lo menos un metro (1.0 m) por encima del nivel máximo de agua que pudiera acumularse en el sitio de la ventosa. 
              li 
                .lista-ol--cuadro__vineta
                  span.t_num_lista-t3 9
                p.m_block Deben disponerse puntos intermedios para la entrada de aire en la tubería cuando la línea piezométrica correspondiente a la carga de un tramo del conducto durante operaciones de mantenimiento y/o reparación, se sitúe por debajo de éste, de forma tal que cause problemas de discontinuidad en la columna líquida o problemas de posible colapso de la tubería por aplastamiento. 
              li 
                .lista-ol--cuadro__vineta
                  span.t_num_lista-t3 10
                p.m_block Como dispositivos automáticos para la entrada o salida de aire de las líneas de conducción pueden utilizarse los siguientes: ventosas de doble efecto para la descarga del aire acumulado durante el llenado y durante la operación normal de la conducción y para la entrada en las operaciones de descarga de agua. Tubos verticales o chimeneas cuando su extremidad superior pueda situarse por encima de la línea piezométrica máxima para la entrada de aire.  
              li

        .row.justify-content-center
          .col-lg-10
            ol.lista-ol--cuadro.lista-ol--separador.Lista_t1-2              
              li
                .lista-ol--cuadro__vineta
                  span.t_num_lista-t3 11
                p.m_block En el caso que exista una válvula intermedia en la conducción, ésta debe estar dotada de un paso lateral (by pass) de tal manera que permita el flujo de aire hacia la ventosa. Este paso lateral debe estar dotado de su propia válvula de corte y se debe utilizar cuando: 
                  span La válvula intermedia se localiza en tramos descendentes de la tubería y su apertura no puede realizarse sin causar perjuicios a la estructura.
                  span La válvula intermedia sea del tipo compuerta y la presión en el punto en que estuviese instalada cause un empuje superior a 20 KN. 
              li 
                .lista-ol--cuadro__vineta
                  span.t_num_lista-t3 12
                p.m_block Las válvulas de ventosa deben cumplir con normas técnicas nacionales e internacionales, tales como la Norma Técnica Colombiana correspondiente, la Norma AWWA C512, fabricadas bajo normas internacionales, de reconocimiento internacional, que le aplique y se demuestra mediante certificado de producto. 
              li 
                .lista-ol--cuadro__vineta
                  span.t_num_lista-t3 13
                p.m_block La localización de las válvulas de ventosa a lo largo de la conducción y su dimensionamiento debe considerar los requerimientos de evacuación de aire presentados durante las operaciones de llenado de las tuberías que conformen la conducción o la red de conducciones, analizando la posibilidad de bloqueo del flujo. 
              li              

    h4 Válvulas de purga o desagüe:
    p.mb-4 En los puntos bajos de la tubería de conducción o cada 350 m, deben colocarse válvulas de desagüe o de limpieza. En estos casos deben tenerse en cuenta los siguientes aspectos:

    .row.justify-content-center
      .col-lg-5.mb-4.mb-lg-5(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img21.png')  
      .col-lg-7.mb-0.mb-lg-5(data-aos="fade-left")
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span.h3.text-white 1
            p.mb-3 La descarga debe permitir la eliminación total del agua contenida en la tubería de conducción.  
          li 
            .lista-ol--cuadro__vineta
              span.h3.text-white 2
            p.mb-3 Se recomienda que el diámetro de la tubería de desagüe esté entre 1/3 y 1/4 del diámetro de la tubería principal, con un mínimo de 100 mm para tuberías mayores que 100 mm. Para diámetros menores debe adoptarse el mismo diámetro de la tubería principal. 
          li 
            .lista-ol--cuadro__vineta
              span.h3.text-white 3
            p.mb-3 El diseño de las válvulas de purga debe realizarse de forma integrada con el de las válvulas de ventosa. 
          li 
            .lista-ol--cuadro__vineta
              span.h3.text-white 4
            p.mb-3 Cada válvula debe estar protegida con una cámara de inspección accesible con su respectivo drenaje.
          li 
            .lista-ol--cuadro__vineta
              span.h3.text-white 5
            p.mb-3 Si la velocidad de salida de la válvula de purga es mayor que 3 m/s, debe colocarse una estructura de disipación de energía.  
          
    ol.lista-ol--cuadro.mb-5(data-aos="fade-right")
      li 
        .lista-ol--cuadro__vineta
          span.h3.text-white 6
        p.mb-3 Si la velocidad de salida de la válvula de purga es mayor que 3 m/s, debe hacerse un estudio de cavitación. 
      li 
        .lista-ol--cuadro__vineta
          span.h3.text-white 7
        p.mb-3 El dimensionamiento de la descarga debe realizarse teniendo en cuenta los siguientes puntos:  

      ol.lista-ol.ms-5.mb-5
        li.m_lista-cajon 
          span a) 
          p.mb-3 La obtención de una velocidad mínima que sea compatible con la remoción del material sedimentado y las biopelículas en el interior de la tubería, durante por lo menos el primer minuto de descarga. 
        li.m_lista-cajon 
          span b) 
          p.mb-3 Que el tiempo máximo para descarga sea impuesto por las condiciones de operación. 
        li.m_lista-cajon 
          span c) 
          p.mb-3 El caudal máximo permitido por el sistema de recepción del agua descargada.
        
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").bg_color-acordion.acordion__cerrado(data-aos="fade-left")
      .row.justify-content-center(titulo="Válvulas de cheque:")
        .col-md-8.mb-4.mb-md-0
          p En el caso que la línea de aducción o de conducción corresponda a la línea de impulsión de un bombeo, el diseño debe contemplar el uso de válvulas de cheque o retención con el fin de evitar el retroceso del agua, con el consiguiente vaciado del conducto y sus posibles daños en las bombas o aplastamiento de la tubería. Las válvulas de cheque sencillas o de doble acción deben cumplir con lo establecido en las Normas Técnicas Colombianas correspondientes o en su defecto con las Normas AWWA, C508, AWWA C515, o cualquier otra norma de reconocimiento internacional equivalente. 
          p <em>Ilustración 42https://www.shutterstock.com/es/image-photo/check-valve-on-white-background-inserted-460412647</em>
          p El uso de las válvulas de cheque en el diseño deberá contar con la aprobación previa de la persona prestadora del servicio. En el caso que las válvulas de cheque estén fabricadas utilizando aleaciones de cobre, estas deben cumplir con la Norma Técnica Colombiana NTC 1762.
        .col-md-3
          figure
            img.img-t.mx-auto(src='@/assets/curso/tema3/img23.png')
      
      .row.justify-content-center(titulo="Válvulas de protección contra golpe de ariete:")
        .col-md-8.mb-4.mb-md-0
          p Este tipo de válvulas deben instalarse en tuberías de aducción por bombeo, sometidas a riesgos de sobrepresiones por golpe de ariete, sobre la línea de impulsión, con el fin de proteger las bombas y las tuberías correspondientes. Podrán utilizarse válvulas de alivio de presión, caso en el cual, éstas deben estar especificadas según normas técnicas nacionales o internacionales, de reconocimiento internacional, tales como la NTC correspondiente, la Norma AWWA C 506, o normas ISO y EN. 
        .col-md-3
          figure
            img.img-t.mx-auto(src='@/assets/curso/tema3/img24.png')
      
      .row.justify-content-center(titulo="Válvulas de flujo o paso anular:")
        .col-md-8.mb-4.mb-md-0
          p Las válvulas de flujo o paso anular se utilizan para la regulación de caudales y pueden tener o no regulación de presión. Las válvulas con regulación de presión cuentan con dispositivos para reducir la presión a la entrada de los tanques de almacenamiento y/o compensación. 
          p Las válvulas sin regulación de presión no tienen ese tipo de dispositivos y son utilizadas en puntos intermedios de las conducciones o en entradas a tanques con presiones bajas, siempre y cuando el flujo <b>sea unidireccional.</b> 
          p Estas válvulas deben tener un obturador interior en forma de émbolo que se mueva axial y perpendicularmente al asiento, para dejar un paso anular al agua en cualquier posición.
          p El diseño del sistema obturador debe ser tal que pueda desplazarse el émbolo sin problemas ante una posible incrustación de sólidos en el órgano disipador.
        .col-md-3
          figure
            img.img-t.mx-auto(src='@/assets/curso/tema3/img25.png')
      
      .row.justify-content-center(titulo="Válvulas de cono o chorro hueco:")
        .col-md-8.mb-4.mb-md-0
          p Para el caso de las estructuras de descarga de las líneas de conducción, con el objeto de vaciar la tubería o producir las velocidades necesarias para el desprendimiento de biopelículas o de depósitos inorgánicos al interior de la tubería en operaciones de lavado, el diseño debe contemplar la instalación de válvulas de cono o chorro hueco acompañadas de sus correspondientes estructuras de disipación de energía y canales de descarga a los cuerpos receptores. 
          p Este tipo de válvulas son generalmente usadas para descargar el agua de forma superficial a los canales y/o cuerpos receptores. Sin embargo, pueden ser instaladas bajo tierra cuando el nivel de agua, en la zona aguas abajo, se encuentre por encima del nivel de instalación de la válvula. 
          p En este caso se debe tener una estructura de disipación para airear el flujo y evitar inestabilidades hidráulicas. Para determinar el tamaño de las válvulas se deben tener en cuenta dos factores: el caudal máximo de descarga y la mínima altura disponible en la entrada de la válvula. 
          p En caso de que las válvulas de cono o chorro hueco tengan la posibilidad de descargar en forma sumergida, bajo cualquier condición de operación, el diseño debe tener en cuenta la posibilidad de ocurrencia de cavitación y, por consiguiente, debe plantear las medidas de protección necesarias. 
        .col-md-3
          figure
            img.img-t.mx-auto(src='@/assets/curso/tema3/img22.png')
    
    Separador

    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 3.4 Bombas

    .row.justify-content-center
      .col-lg-5.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img21.png')  
      .col-lg-7(data-aos="fade-right")
        .row.mb-4.mb-lg-3
          .col-12.col-lg-5
            .tarjeta.color-secundario.p-1
              .row.justify-content-center.align-items-center
                .col-lg-1.width_lg
                  img.img23.d-none.d-lg-block(src='@/assets/curso/tema2/img10.svg')
                .col-lg-10
                  h3.m-0.text-white.text-center Número de bombas
        p El número de bombas en la estación de bombeo debe definirse desde la etapa de diseño de acuerdo con la capacidad requerida, las etapas de desarrollo y la energía disponible. 
        .row.justify-content-center.bg_color-cajon2.t-bg_color-cajon2(data-aos="fade-left")
          .col-lg-9
            .cajon-b.color-primario.p-2.mb-4
              p.mb-0 El número de bombas debe estar sujeto a una evaluación económica. De todas formas, el número mínimo de bombas es dos, cada una con una capacidad igual al caudal de diseño de la estación de bombeo. 
                br
                br
                p.mb-4 Cuando el número de bombas sea mayor que dos, la capacidad debe distribuirse equitativamente entre ellas. Además, deben preverse unidades de reserva del mismo tipo. 
              p Cuando se requieran tres o más bombas, debe colocarse una unidad adicional como reserva por cada tres bombas empleadas.  

    .row.mb-4(data-aos="fade-right")
      .col-12.col-lg-3
        .tarjeta.color-secundario.p-1
          .row.justify-content-center.align-items-center
            .col-lg-1.width_lg
              img.img23.d-none.d-lg-block(src='@/assets/curso/tema2/img10.svg')
            .col-lg-10
              h3.m-0.text-white.text-center Tipo de bombas

    p Desde la etapa de diseño, las bombas deben seleccionarse de forma tal que se obtenga la capacidad y la altura dinámica requeridas, establecidas por el punto de operación el cual debe determinarse de acuerdo con las curvas características del sistema de bombeo y del sistema de tuberías de impulsión. 

    p.mb-5 El dimensionamiento y la selección del tipo de bombas debe realizarse en conjunto con la tubería de impulsión y con el tanque de almacenamiento de aguas abajo, buscando siempre la condición de costo mínimo, incluyendo los costos iniciales, los costos de construcción, de operación, de expansión y de mantenimiento. 

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-9
        .bg13.p-4
          p.m-0.text-center Adicionalmente deben tenerse en cuenta las Norma Técnica NTC 1775 y las normas AWWA E 101. 
          p.m-0.text-center El diseño debe tener en cuenta los siguientes criterios para la selección del tipo de bombas: 

    .row.justify-content-center
      .col-lg-8(data-aos="fade-right")
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span.h3.text-white 1
            | El espacio requerido para la instalación de las bombas dentro de la estación de bombeo.   
          li 
            .lista-ol--cuadro__vineta
              span.h3.text-white 2
            | La forma de operación prevista de las bombas, en serie o en paralelo. 
          li 
            .lista-ol--cuadro__vineta
              span.h3.text-white 3
            | La variación en los niveles máximo y mínimo en el pozo de succión y en la descarga. 
          li 
            .lista-ol--cuadro__vineta
              span.h3.text-white 4
            | La variación de los caudales bajo las diferentes condiciones de operación hidráulica de la estación de bombeo. 
          li 
            .lista-ol--cuadro__vineta
              span.h3.text-white 5
            | El tiempo de operación de las bombas.  
          li 
            .lista-ol--cuadro__vineta
              span.h3.text-white 6
            | La compatibilidad con otros equipos de bombeo existentes en el municipio. 
          li 
            .lista-ol--cuadro__vineta
              span.h3.text-white 7
            | El nivel del ruido generado por la operación de las bombas.
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img27.png')  

    .row.mb-5(data-aos="fade-right")
      .col-lg-4
        .tarjeta.color-secundario.p-1
          .row.justify-content-center.align-items-center
            .col-lg-1.width_lg
              img.img23.d-none.d-lg-block(src='@/assets/curso/tema2/img10.svg')
            .col-lg-10
              h3.m-0.text-white.text-center Materiales de las bombas

    .row.justify-content-center.align-items-center.mb-5         
      .col-lg-10 
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.m_bloque-imgreves.m_bloque-textoreves1(data-aos="flip-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/img28.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Los materiales de las bombas incluyendo los impulsores, las carcasas y otros componentes, deben ser seleccionados de acuerdo con las características del agua que va a bombearse y teniendo en cuenta la temperatura, la conductividad, la capacidad de corrosión y sólidos en suspensión. 
            br
            br
            p El material de las bombas y de los diferentes componentes debe resistir los efectos de corrosión que el agua pueda causar en ellos. Se pueden utilizar materiales como: hierro fundido, acero inoxidable, acero al carbón, acero fundido y hierro dúctil. Para los accesorios de la bomba se puede usar latón y bronce. Todos los materiales utilizados deben estar certificados por normas técnicas nacionales o internacionales.

    Separador

    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 3.5	Sustancias químicas para el tratamiento de agua

    .bg9.p-4.mb-5(data-aos="fade-up-left")
      .row.justify-content-evenly.align-items-center
        .col-lg-5
          p De acuerdo con el RAS 2000, título C, las sustancias químicas para el tratamiento de aguas más utilizadas son los coagulantes. 
          p <em>Ilustración 50https://www.shutterstock.com/es/image-photo/water-treatment-process-rapid-sand-filter-313610030</em>
          p Los coagulantes que pueden emplearse son los coagulantes metálicos y los polímeros orgánicos e inorgánicos. 
        .col-lg-4
          figure
          img(src='@/assets/curso/tema3/img29.png')  

    .row.mb-5(data-aos="fade-right")
      .col-lg-3.col-xl-4.col-xxl-3
        .tarjeta.color-secundario.p-1
          .row.justify-content-center.align-items-center
            .col-lg-1.width_lg
              img.img23.d-none.d-lg-block(src='@/assets/curso/tema2/img10.svg')
            .col-lg-10
              h3.m-0.text-white.text-center Coagulantes metálicos

    .row.justify-content-center.mb-5
      .col-lg-5(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img30.png')
      .col-lg-5(data-aos="fade-left")
        p Son de dos tipos: sales de aluminio o sales de hierro. Los coagulantes con sales de aluminio son el sulfato de aluminio, sulfato de aluminio amoniacal, aluminato de sodio y el policloruro de aluminio. Se recomienda el uso de este último para el tratamiento de aguas blandas y turbias, previa la ejecución de ensayos para la selección de coagulantes. Los coagulantes con sales de hierro son el cloruro férrico, el sulfato férrico y el sulfato ferroso. Para la dosificación en la coagulación por adsorción-neutralización debe tenerse en cuenta la relación estequiométrica entre la dosis del coagulante y la concentración de los coloides, ya que una sobredosis conduce a una reestabilización de las partículas. Para aguas con bajo nivel de alcalinidad, se recomienda aumentar el pH añadiendo hidróxido de calcio (Ca(OH)2). 

    .row.mb-4(data-aos="fade-right")
      .col-lg-2.col-xl-3.col-xxl-2
        .tarjeta.color-secundario.p-1
          .row.justify-content-center.align-items-center
            .col-lg-1.width_lg
              img.img23.d-none.d-lg-block(src='@/assets/curso/tema2/img10.svg')
            .col-lg-10
              h3.m-0.text-white.text-center Polímeros
    
    p.m-0 Se pueden emplear los polímeros de hierro (III) y aluminio (III) como coagulantes. 
    p.m-0 Entre los polímeros orgánicos o polielectrolitos que se pueden emplear están los polímeros naturales y los sintéticos. Entre los primeros están los derivados del almidón, la celulosa y los materiales proteicos. Para la aplicación de los coagulantes sintéticos debe solicitarse la aprobación del Ministerio de Salud y Protección Social o verificar que haya sido aprobado su uso en el tratamiento del agua potable por la Comunidad Europea, por Estados Unidos o por Canadá. 
    p En la operación, la velocidad de agitación debe ser menor, ya que altas velocidades pueden llegar a romper las largas cadenas poliméricas; por tanto, debe mantenerse una mezcla uniforme y se debe evitar la ruptura de los puentes formados entre polímeros y coloides. Para su empleo se recomienda la realización de ensayos de jarras en rangos amplios de dosificaciones y de bajas velocidades para determinar la dosificación óptima.

    p En caso de emplearse los polielectrolitos debe tenerse en cuenta los siguientes aspectos: 

    figure.mb-5(data-aos="fade-down")
      img(src='@/assets/curso/tema3/img38.svg')

    .row.mb-4(data-aos="fade-right")
      .col-12.col-lg-3
        .tarjeta.color-secundario.p-1
          .row.justify-content-center.align-items-center
            .col-lg-1.width_lg
              img.img23.d-none.d-lg-block(src='@/assets/curso/tema2/img10.svg')
            .col-lg-10
              h3.m-0.text-white.text-center Productos auxiliares

    .row.justify-content-center.align-items-center.mb-5         
      .col-lg-10 
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="flip-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/img31.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Pueden adicionarse como auxiliares de la coagulación, de la floculación y de la filtración, si en los ensayos de laboratorio se ha determinado que es conveniente. En su selección, deben escogerse productos auxiliares que no vayan a tener efectos adversos sobre la calidad del agua tratada. Pueden emplearse sustancias auxiliares de la coagulación para lograr el pH óptimo de coagulación. Un caso de éxito es el almidón.
    
    Separador

    #t_3_6.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 3.6 Equipos para dosificación de insumos en la potabilización

    .row.justify-content-center.align-items-center.mb-5         
      .col-lg-10 
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.m_bloque-imgreves.m_bloque-textoreves(data-aos="flip-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/img32.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p El RAS 2000, título C, establece que, de acuerdo con las características de los productos químicos disponibles en el mercado, pueden emplearse dosificadores en seco o en solución.
            br
            br 
    
    h4 Dosificadores en seco
    p Deben emplearse para la aplicación de sustancias químicas en polvo o en forma granular. Los dosificadores pueden ser volumétricos o gravimétricos.   

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").acordion__cerrado.bg_color-acordion1(data-aos="fade-right")
      .row.justify-content-center(titulo="Volumétricos:")
        .col-lg-11
          p En este tipo de dosificadores la dosis requerida debe determinarse midiendo el volumen de material que libera una superficie que se desplaza a velocidad constante. Los dosificadores más utilizados son la válvula alveolar, el disco giratorio, el cilindro giratorio, el plato oscilante y de tornillo. El disco giratorio se recomienda para dosificar sulfato de aluminio, cal, carbonato de sodio o de calcio. Debe proveerse de agua de buena calidad para la preparación de la solución, lo mismo que una adecuada mezcla. 
      
      .row.justify-content-center(titulo="Gravimétricos:")
        .col-lg-11
          p La cantidad de producto químico dosificado debe medirse pesando el material que descarga en una determinada unidad de tiempo, o con base en una pérdida de peso constante del material depositado en la tolva. Los dosificadores más empleados son la de correa transportadora y la de pérdida de peso. Para el empleo de dosificadores en seco deben tenerse en cuenta los siguientes aspectos:
          ul.lista-ul
            li 
              ul 
                li 
                  i.lista-ul__vineta
                  | Los productos químicos dosificados en seco deben ser disueltos en agua antes de su aplicación. 
                li 
                  i.lista-ul__vineta
                  | Deben preverse tolvas de acumulación con dosificadores cuya capacidad sea de 8 a 12 horas de aplicación continua del producto químico a su máxima capacidad de descarga. 
      
    h4 Dosificadores en solución
    p.mb-5 Deben usarse para dosificar por vía húmeda o para dosificar líquidos. Pueden ser de dos tipos: por bombeo y por gravedad.

    .row.justify-content-center
      .col-lg-5.mb-4.mb-lg-5(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img33.png')  
      .col-lg-7.mb-0.mb-lg-5(data-aos="fade-left")
        p.mb-4 <b>Sistemas por bombeo:</b> se pueden emplear las bombas de pistón y de diafragma. La bomba dosificadora de pistón es muy precisa, pero debe emplearse con precaución en el caso de productos abrasivos o muy corrosivos.
        p La bomba dosificadora de diafragma es accionada hidráulicamente, debe utilizarse para líquidos corrosivos, tóxicos, abrasivos, viscosos; puede estar provista de membrana simple o doble. Constan de los siguientes componentes: 
        ul.lista-ul.mb-4
          li.m_bottom 
            i.lista-ul__vineta
            | Tanques de solución.
          li.m_bottom 
            i.lista-ul__vineta
            | Tanque de almacenamiento.
          li.m_bottom 
            i.lista-ul__vineta
            | Bombas dosificadoras. 
        p.m-0 <b>Sistemas por gravedad:</b> pueden emplearse los de carga constante y los de carga regulable. En los de carga constante debe mantenerse una carga constante de agua sobre un orificio para obtener un caudal de dosificación constante. 
        p.mb-4 El caudal debe calibrarse a la salida mediante una válvula. Este sistema debe constar de:
        ul.lista-ul
          li.m_bottom 
            i.lista-ul__vineta
            | Un tanque de solución.
          li.m_bottom 
            i.lista-ul__vineta
            | Un tanque dosificador que puede ser de orificio regulable o fijo.
          li.m_bottom 
            i.lista-ul__vineta
            | Un dispositivo de medida. 

    .row.justify-content-center(data-aos="fade-up-right")
      .col-lg-10
        .cajon.color-acento-contenido.p-4.mb-5
          p.m_block.mx-4 Para la preparación de soluciones o suspensiones en tanques, debe contarse con dos unidades con capacidad para funcionar al menos durante 8 a 12 horas, con la dosis media.

    h4 Aplicadores de Cal
    p.mb-5 La Cal puede aplicarse ya sea en solución concentrada teniendo en cuenta la temperatura de apagado de la cal viva, o en suspensión como cal apagada. Los saturadores de cal pueden emplearse para producir una solución saturada de hidróxido de calcio, Ca (OH)2. Este equipo consta de un tanque donde se deposita la cal que debe ser disuelta. El agua debe introducirse en la cal por el fondo del tanque, y la solución saturada debe colectarse en la superficie libre mediante canaletas, o en la proximidad a la superficie. 

    h4.mb-4 Selección del dosificador
    .row.justify-content-center.align-items-center
      .col-lg-7.mb-4.mb-lg-5(data-aos="fade-right")
        p.mb-4 En la selección del tipo de dosificador se deben tener en cuenta los siguientes aspectos: 
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span.h3.text-white a
            p.mb-3 La precisión requerida, la confiabilidad para aplicar siempre la dosis predeterminada, el tipo de producto por dosificar y el rango de caudal de trabajo máximo y mínimo.   
          li 
            .lista-ol--cuadro__vineta
              span.h3.text-white b
            p.mb-3 Factores técnicos y económicos. 
          li 
            .lista-ol--cuadro__vineta
              span.h3.text-white c
            p.mb-3 Los dosificadores deben tener una capacidad para dosificar por lo menos, la dosis que cubra las condiciones más desfavorables del agua por tratar. d. Deben conseguirse en el mercado las piezas de repuestos para el tipo de dosificador seleccionado. e. Para los niveles de complejidad de sistema bajo y medio deben preferirse los dosificadores con control manual; para los niveles de complejidad de sistema medio alto y alto el control puede ser automático, pero debe estar diseñado para permitir su manejo manual en caso de daño o emergencia y tener por lo menos dos unidades de dosificación. 
      .col-lg-5.mb-4.mb-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img34.png')  

    .row.mb-4(data-aos="fade-right")
      .col-12.col-lg-5.col-xl-6.col-xxl-5
        .tarjeta.color-secundario.p-1
          .row.justify-content-center.align-items-center
            .col-lg-1.width_lg
              img.img23.d-none.d-lg-block(src='@/assets/curso/tema2/img10.svg')
            .col-lg-10
              h3.m-0.text-white.text-center Ensayos de tratabilidad: concepto, métodos
        
    p.mb-4 El RAS 2000, título C, define los estudios de tratabilidad como una serie de ensayos de laboratorio o en planta piloto, realizados por lo menos a dos tipos de aguas crudas, uno representativo de aguas en condiciones de verano y otro de condiciones de invierno, bien sea en laboratorio, usando equipos para prueba de jarras con modificaciones para asegurar la calidad de los datos a obtener, o bien sea realizados en planta piloto. 
    p.mb-5 Con los estudios o ensayos de tratabilidad se obtienen los parámetros reales con los cuales se debe diseñar, optimizar, evaluar y operar una planta de tratamiento. Diferentes ensayos de tratabilidad de las aguas para su potabilización, entre otros está:

    .row.justify-content-center.mb-5
      .col-lg-5(data-aos="fade-right")
        p La caracterización del agua cruda a tratar debe realizarse sobre muestras representativas de por lo menos un ciclo hidrológico anual, con el fin de analizar todas las posibles calidades de agua cruda que se puedan presentar históricamente durante ese periodo; es decir, cambios en la turbiedad, color, características microbiológicas, demanda de cloro, temperatura, pH, alcalinidad, contenido de algas, hierro y manganeso, cambios en el sabor y olor, entre otros. De no ser esto posible, acudir a registros históricos de calidades de agua existentes en corporaciones regionales, secretarías de salud y sistemas que se abastezcan de las mismas fuentes.
        p Uno de los ensayos más comunes es el ensayo de jarras, que permite determinar variables dentro de los procesos de coagulación y floculación, el RAS 2000, título C, establece: los ensayos que se pueden determinar de acuerdo con el proceso de tratamiento de agua son:
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img35.png')

    .row.justify-content-around.justify-content-center.mb-4.mb-xl-3
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img36.png')
      .col-10.col-lg-6.col-xl-6.col-xxl-6.bg_color-tarslyder-t4
        .tarjeta.tarjeta--azul.p-4.mb-5.shadow-sm.h-100(data-aos="fade-left")   
          SlyderA
            div
              .row.justify-content-center.mb-4
                .col-lg-3.mb
                  img.img-t.mx-auto(src='@/assets/curso/tema3/img39.svg' alt='AvatarTop')  
              h3.mb-4.mb-xl-4.mb-xxl-4.text-center 1. Para la caracterización de las aguas crudas a tratar:           
              .row.justify-content-end.align-items-center
                .col-6.col-lg-5
                  ol.lista-ol.ms-2.ms-lg-5
                    li.m_bottom-2
                      span a) 
                      p Turbiedad.
                    li.m_bottom-2
                      span b) 
                      p Color.
                    li.m_bottom-2
                      span c) 
                      p pH.
                    li.m_bottom-2
                      span d) 
                      p Alcalinidad.
                    li.m_bottom-2
                      span e) 
                      p Temperatura.
                    li.m_bottom-2
                      span f) 
                      p Conductividad.
                .col-6.col-lg-5
                  ol.lista-ol.ms-4.ms-lg-0
                    li.m_bottom-2
                      span g) 
                      p Hierro.
                    li.m_bottom-2
                      span h) 
                      p Cloruros.
                    li.m_bottom-2
                      span i) 
                      p Sulfatos.
                    li.m_bottom-2
                      span j) 
                      p Nitratos.
                    li.m_bottom-2
                      span k) 
                      p Dureza.        
            div
              .row.justify-content-center.mb-3
                .col-lg-3
                  img.img-t.mx-auto(src='@/assets/curso/tema3/img40.svg' alt='AvatarTop')              
              h3.mb-3.mb-xl-4.mb-xxl-4.text-center 2. Para coagulación y mezcla rápida: 
              .row.justify-content-center.align-items-lg-center
                .col-lg-7
                  ol.lista-ol.ms-0.ms-lg-4
                    li.m_bottom-3
                      span a) 
                      p Dosis óptima de coagulante.
                    li.m_bottom-3
                      span b) 
                      p Necesidad y dosis de alcalinizante o cal primaria. 
                    li.m_bottom-3
                      span c) 
                      p Secuencia de aplicación de coagulante y alcalinizante. 
                    li.m_bottom-3
                      span d) 
                      p Necesidad y dosis de ayudantes de coagulación o uso de polímeros. 
                .col-lg-5
                  ol.lista-ol.ms-0.ms-lg-0
                    li.m_bottom-3
                      span e) 
                      p Gradiente hidráulico y tiempo de mezcla. 
                    li.m_bottom-3
                      span f) 
                      p El pH óptimo de coagulación. 
                    li.m_bottom-3
                      span g) 
                      p concentración óptima del coagulante a utilizar.
            div                                                
              .row.justify-content-center.mb-3
                .col-lg-3
                  img.img-t.mx-auto(src='@/assets/curso/tema3/img41.svg' alt='AvatarTop')
              h3.mb-4.text-center 3. Para floculación: 
              .row.justify-content-center
                .col-lg-8.col-xl-9.col-xxl-8
                  ol.lista-ol.ms-4.ms-lg-5
                    li.m_bottom-2
                      span a) 
                      p Gradientes y tiempos óptimos. 
                    li.m_bottom-2
                      span b) 
                      p Tiempo total de floculación. 
                    li.mb-5
                      span c) 
                      p Secuencia decreciente del gradiente y tiempos de aplicación. 
            div
              .row.justify-content-center.mb-3
                .col-lg-3
                  img.img-t.mx-auto(src='@/assets/curso/tema3/img42.svg' alt='AvatarTop')
              h3.mb-4.text-center 4. Para decantación: 
              .row.justify-content-center
                .col-lg-8
                  ol.lista-ol.ms-2.ms-lg-5
                    li
                      span a) 
                      p Velocidades de sedimentación de partículas floculadas.
                    li
                      span b) 
                      p cargas superficiales por aplicar y turbiedad. remanente con cada una de ellas.  
            div      
              .row.justify-content-center.mb-3
                .col-lg-3
                  img.img-t.mx-auto(src='@/assets/curso/tema3/img43.svg' alt='AvatarTop')
              h3.mb-5.text-center 5. Para filtración:  
              .row.justify-content-center
                .col-lg-5
                  ol.lista-ol.ms-5.ms-lg-4
                    li.m_bottom-2
                      span a) 
                      p Índice de filtrabilidad. 
                    li.m_bottom-2
                      span b) 
                      p Remoción esperada. 
                    li.mb-5
                      span c) 
                      p Carrera de filtración. 
            div
              .row.justify-content-center.mb-3
                .col-lg-3
                  img.img-t.mx-auto(src='@/assets/curso/tema3/img44.svg' alt='AvatarTop')
              h3.mb-5.text-center 6. Para desinfección: 
              .row.justify-content-center
                .col-lg-6.col-xl-7.col-xxl-6
                  ol.lista-ol.ms-4.ms-lg-5
                    li.m_bottom-2
                      span a) 
                      p Demanda de cloro.  
                    li.m_bottom-2
                      span b) 
                      p Dosis de cloro a aplicar al agua filtrada.  
                    li.mb-5
                      span c) 
                      p Tiempo de retención.  
            div
              .row.justify-content-center.mb-3
                .col-lg-3
                  img.img-t.mx-auto(src='@/assets/curso/tema3/img45.svg' alt='AvatarTop')
              h3.mb-5.text-center 7. Para estabilización: 
              .row.justify-content-center
                .col-lg-7.col-xl-8.col-xxl-7
                  ol.lista-ol.ms-2.ms-lg-5
                    li.m_bottom-2
                      span a) 
                      p Índice de agresividad del agua. 
                    li.m_bottom-2
                      span b) 
                      p Saturación. 
                    li.mb-5
                      span c) 
                      p Dosis de alcalinizante o de cal secundaria para ajuste del pH. 
            div
              .row.justify-content-center.mb-3
                .col-lg-3
                  img.img-t.mx-auto(src='@/assets/curso/tema3/img46.svg' alt='AvatarTop')
              h3.mb-5.text-center 8. Para ablandamiento:
              .row.justify-content-center
                .col-lg-6.col-xl-7.col-xxl-6
                  ol.lista-ol.ms-5
                    li.m_bottom-2
                      span a) 
                      p Dosis de cal soda. 
                    li.mb-5
                      span b) 
                      p Efectividad de zeolitas. 
            div
              .row.justify-content-center.mb-3
                .col-lg-3
                  img.img-t.mx-auto(src='@/assets/curso/tema3/img47.svg' alt='AvatarTop')
              h3.mb-5.text-center 9. Para filtración directa: 
              .row.justify-content-center
                .col-lg-8.col-xl-9.col-xxl-8
                  ol.lista-ol.ms-4.ms-lg-5
                    li.m_bottom-2
                      span a) 
                      p Dosis de coagulantes o ayudantes. 
                    li.mb-5
                      span b) 
                      p Remoción en filtración.



</template>

<script>
export default {
  name: 'Tema3',
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
