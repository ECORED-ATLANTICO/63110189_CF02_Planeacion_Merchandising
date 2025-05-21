<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Toma de decisiones

    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in")
      .col-lg-12
        img.mx-auto(src='@/assets/curso/temas/tema1/img_01.png', alt='')

    separador
    
    .bg-full-width.bg-fondo-1
      .p-4.p-md-5
        div.mb-5(data-aos="fade-right").titulo-segundo.color-secundario
          h3.position-relative#t_1_1 1.1	Concepto
      
        .col-lg-12
          .bloque-texto-g.bloque-texto-g.p-3.p-sm-4.p-md-5.color-secundario
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img_02.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p Se define como el proceso mediante el cual una persona, equipo o entidad selecciona una opción entre varias posibles, con el fin de resolver un problema, aprovechar una oportunidad o alcanzar un objetivo. En el ámbito comercial, las decisiones deben ser oportunas, fundamentadas en datos y coherentes con la estrategia global de la empresa (Kotler & Keller, 2016).

      separador

      .p-4.p-md-5
        div.mb-5(data-aos="fade-right").titulo-segundo.color-secundario
          h3.position-relative#t_1_2 1.2	Importancia
          

        .row.justify-content-center.align-items-center.my-3(data-aos="zoom-in")
          .col-lg-4.col-md-8.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img_03.png', alt='Imagen decorativa')
          .col-lg-8.mb-4
            .bloque-texto-b.mb-3
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                p.mb-0
                  b La toma de decisiones es un proceso central en cualquier entorno comercial. En el punto de venta, cada decisión —desde la ubicación de un producto hasta la iluminación, el sonido o el tipo de mobiliario— impacta directamente en la percepción del cliente y, por tanto, en las ventas. Comprender este proceso es clave para diseñar experiencias coherentes y alineadas con los objetivos del negocio.” 
                p.text-right 
                  <br>  (Solomon, 2018). 
                i.fas.fa-quote-right

            p La toma de decisiones es una de las habilidades más poderosas dentro del mundo del mercadeo. En un punto de venta, decidir no es simplemente elegir entre alternativas, es construir una experiencia intencionada para el cliente. Cada elección, desde dónde ubicar un producto, qué tipo de mobiliario usar, cómo iluminar un espacio o qué aromas utilizar. Todo esto tiene un efecto directo en la forma en que las personas perciben y reaccionan ante la oferta comercial.

        .col-lg-12.mb-3            
          .cajon.bg-02.p-4
            p.mb-0 Decidir con criterio permite crear ambientes que invitan a comprar, generan recordación y fortalecen el vínculo con la marca. Por eso, entender cómo tomar decisiones acertadas es fundamental para lograr objetivos de venta y posicionamiento.

    .row.justify-content-center(data-aos="zoom-in")
      .col-lg-10.mb-4
        .titulo-sexto.mb-4
          h5 Figura 1. 
          span.text-dark Importancia  de la toma de decisiones en el punto de venta

        figure
          ImagenInfografica.color-acento-botones.figura1
            template(v-slot:imagen)
              figure.mb-3
                img(src='@/assets/curso/temas/tema1/img_04.svg', alt='La figura enuncia la importancia de la toma de decisiones en el punto de venta, pues desarrolla habilidad esencial en mercadeo, construye experiencias intencionadas, cada decisión cuenta, produce un impacto en el comportamiento del cliente, crea ambientes estratégicos y favorece el logro de objetivos.')

              figcaption 
                b Fuente: 
                | SENA, 2025
                
            .tarjeta.color-acento-botones.p-3(x="22%" y="23%" numero="+")
              .h5.mb-2 01
              p Desarrolla la habilidad esencial en mercadeo.
                
            .tarjeta.color-acento-botones.p-3(x="0.5%" y="57%" numero="+")
              .h5.mb-2 02
              p Construye experiencias intencionadas.
                
            .tarjeta.color-acento-botones.p-3(x="77.5%" y="23%" numero="+")
              .h5.mb-2 03
              p Cada decisión cuenta.

            .tarjeta.color-acento-botones.p-3(x="28.2%" y="86%" numero="+")
              .h5.mb-2 04
              p Impacto en el comportamiento del cliente.

            .tarjeta.color-acento-botones.p-3(x="71.5%" y="86%" numero="+")
              .h5.mb-2 05
              p Crea ambientes estratégicos.

            .tarjeta.color-acento-botones.p-3(x="99.5%" y="56%" numero="+")
              .h5.mb-2 06
              p Favorece el logro de los objetivos.

    separador

    div
      div.mb-5(data-aos="fade-right").titulo-segundo.color-secundario
        h3.position-relative#t_1_3 1.3	Pasos

      div.tarjeta-horz.mb-3
        img(src='@/assets/curso/temas/tema1/img_05.png', alt='Imagen decorativa')
        div.texto-tarjeta
          p.mb-0 Seguidamente se presentan las etapas del proceso decisorio, adaptadas al contexto del punto de venta.



    .bg-full-width.bg-fondo-2.mb-0
      .p-4.p-md-3
        .row.justify-content-center(data-aos="zoom-in")
          .col-md-12.col-lg-10.mb-0
            PasosA.color-acento-contenido.mb-5(tipo="n")
              .row(numero="1" titulo="Planear").align-items-center
                .col-lg
                  h3 Identificación del problema u oportunidad
                  p Se detecta una situación que requiere intervención: baja rotación de productos, baja afluencia de clientes, oportunidad de aumentar ventas, etc.
                .col-auto
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/tema1/img_06.png', alt='').img125

              .row.align-items-center.ordenar_tarjeta_pasos
                .col-auto
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/tema1/img_07.png', alt='').img125
                .col-lg
                  h3 Recolección y análisis de información
                  p.text-left Se recopilan datos relevantes: comportamiento de compra, preferencias de clientes, ventas por producto, tráfico en el local, entre otros.

              .row.align-items-center
                .col-lg
                  h3 Formulación de alternativas
                  p Se plantean diferentes opciones: cambiar distribución de productos, realizar promociones, rediseñar exhibidores, ajustar precios, etc.
                .col-auto
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/tema1/img_08.png', alt='').img125

              .row.align-items-center.ordenar_tarjeta_pasos
                .col-auto
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/tema1/img_09.png', alt='').img125
                .col-lg.text-left
                  h3.text-left Evaluación de alternativas
                  p.text-left Se analizan pros y contras de cada opción, considerando costos, tiempos, impacto, viabilidad y coherencia con la estrategia del negocio.

              .row.align-items-center
                .col-lg
                  h3.text-left Selección de la mejor alternativa
                  p.text-left Se escoge la opción más adecuada para alcanzar el objetivo propuesto, buscando siempre el mayor beneficio posible con el menor riesgo.
                .col-auto
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/tema1/img_10.png', alt='').img125
    
              .row.align-items-center.ordenar_tarjeta_pasos
                .col-auto
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/tema1/img_11.png', alt='').img125
                .col-lg
                  h3.text-left Implementación
                  p.text-left Se lleva a cabo la decisión tomada: cambio físico del <em>layout</em>, ejecución de campañas, señalización, entre otros.

              .row.align-items-center
                .col-lg
                  h3.text-left Evaluación de resultados
                  p.text-left Se mide el impacto de la decisión: aumento en ventas, mejora en la experiencia del cliente, incremento en visitas al punto de venta, etc.
                .col-auto
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/tema1/img_13_1.png', alt='').img125

    .row.justify-content-center.align-items-center.my-3.ordenar_div(data-aos="zoom-in")
      .col-lg-4.col-md-8.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img_13.png', alt='Imagen decorativa')
      .col-lg-8.mb-4.arriba
        p Estas etapas coinciden con los modelos propuestos por autores como Robbins y Coulter (2021), quienes destacan que una decisión bien estructurada implica identificar problemas con claridad, evaluar la información disponible y actuar con base en criterios objetivos. Además, es fundamental que todo proceso de toma de decisiones esté guiado por principios éticos, ya que cada acción tomada en el punto de venta puede afectar no solo los resultados del negocio, sino también la experiencia y el respeto hacia los clientes, colaboradores y la comunidad en general.


    .tabla-a.color-acento-botones
      .titulo-sexto.mb-4
        h5 Tabla 1. 
        span.text-dark
          i Etapas del proceso de decisión
      table
        caption Fuente: Kotler, P., &amp; Keller, K. L. (2016)
        thead
          tr
            th.tabla-bg-01.text-white Tipo de decisión
            th.tabla-bg-01.text-white Ejemplo en punto de venta
            th.tabla-bg-01.text-white Frecuencia
        tbody
          tr.bg-white
            td Operativas
            td Reposición de productos en estantería, atención al cliente.
            td Diarias o semanales
          tr.tabla-bg-02
            td Tácticas
            td Cambios de <em>layout</em>, ajustes de precios, promociones.
            td Mensuales
          tr.bg-white
            td Estratégicas
            td Remodelación del punto de venta, implementación de CRM.
            td Anuales o por ciclo de negocio

    .bg-full-width.bg-fondo-3
      .p-4.p-md-5
        .row.justify-content-center.my-3(data-aos="zoom-in")
          .col-lg-12.mb-4
            .titulo-sexto.mb-4
              h5 Figura 2. 
              span.text-dark Herramientas de apoyo en la toma de decisiones

            figure.mb-4
        
              ImagenInfografica.color-acento-botones
                template(v-slot:imagen)
                  figure.mb-3
                    img(src='@/assets/curso/temas/tema1/img_14.svg', alt='La figura describe las herramientas disponibles como apoyo en la toma de decisiones como lo son el análisis DOFA, estudios de comportamiento del consumidor, mapas de calor, e indicadores de gestión (KPI).')

                  figcaption 
                    b Fuente: 
                    | SENA, 2025
                    
                
                .tarjeta.bg_01_tarjeta.p-2(x="18.5%" y="55%" numero="+")
                  .row
                    .col-lg-4
                      img.w-75(src='@/assets/curso/temas/tema1/img_15.svg', alt='Imagen decorativa')
                    .col-lg-8
                      h5 Debilidades
                      p Limitaciones internas
                .tarjeta.bg_01_tarjeta.p-2(x="18.5%" y="64%" numero="+")
                  .row
                    .col-lg-4
                      img.w-75(src='@/assets/curso/temas/tema1/img_15.svg', alt='Imagen decorativa')
                    .col-lg-8
                      h5 Oportunidades
                      p Posibilidades de crecimiento
                .tarjeta.bg_01_tarjeta.p-2(x="18.5%" y="72%" numero="+")
                  .row
                    .col-lg-4
                      img.w-75(src='@/assets/curso/temas/tema1/img_15.svg', alt='Imagen decorativa')
                    .col-lg-8
                      h5 Fortalezas
                      p Ventajas competitivas
                .tarjeta.bg_01_tarjeta.p-2(x="18.5%" y="81%" numero="+")
                  .row
                    .col-lg-4
                      img.w-75(src='@/assets/curso/temas/tema1/img_15.svg', alt='Imagen decorativa')
                    .col-lg-8
                      h5 Amenazas
                      p Desafíos del mercado

                .tarjeta.bg_01_tarjeta.p-2(x="45.2%" y="55%" numero="+")
                  .row
                    .col-lg-4
                      img.w-75(src='@/assets/curso/temas/tema1/img_16.svg', alt='Imagen decorativa')
                    .col-lg-8
                      h5 Hábitos
                      p Frecuencia de compra
                .tarjeta.bg_01_tarjeta.p-2(x="45.2%" y="64%" numero="+")
                  .row
                    .col-lg-4
                      img.w-75(src='@/assets/curso/temas/tema1/img_16.svg', alt='Imagen decorativa')
                    .col-lg-8
                      h5 Preferencias
                      p Productos favoritos
                .tarjeta.bg_01_tarjeta.p-2(x="45.2%" y="74%" numero="+")
                  .row
                    .col-lg-4
                      img.w-75(src='@/assets/curso/temas/tema1/img_16.svg', alt='Imagen decorativa')
                    .col-lg-8
                      h5 Tiempos de permanencia
                      p Tiempos en el punto de venta

                .tarjeta.bg_01_tarjeta.p-2(x="71.5%" y="56.5%" numero="+")
                  .row
                    .col-lg-4
                      img.w-75(src='@/assets/curso/temas/tema1/img_17.svg', alt='Imagen decorativa')
                    .col-lg-8
                      h5 Zonas más transitadas
                      p Limitaciones internas
                .tarjeta.bg_01_tarjeta.p-2(x="71.5%" y="70%" numero="+")
                  .row
                    .col-lg-4
                      img.w-75(src='@/assets/curso/temas/tema1/img_17.svg', alt='Imagen decorativa')
                    .col-lg-8
                      h5 Optimización de espacio
                      p Mejora en la disposición del producto

                .tarjeta.bg_01_tarjeta.p-2(x="98.2%" y="57%" numero="+")
                  .row
                    .col-lg-4
                      img.w-75(src='@/assets/curso/temas/tema1/img_18.svg', alt='Imagen decorativa')
                    .col-lg-8
                      h5 Rotación del inventario
                      p Velocidad de venta
                .tarjeta.bg_01_tarjeta.p-2(x="98.2%" y="68%" numero="+")
                  .row
                    .col-lg-4
                      img.w-75(src='@/assets/curso/temas/tema1/img_18.svg', alt='Imagen decorativa')
                    .col-lg-8
                      h5 <em>Ticket</em> promedio
                      p Gastos por cliente
                .tarjeta.bg_01_tarjeta.p-2(x="98.2%" y="79%" numero="+")
                  .row
                    .col-lg-4
                      img.w-75(src='@/assets/curso/temas/tema1/img_18.svg', alt='Imagen decorativa')
                    .col-lg-8
                      h5 Coversión de visitantes
                      p Porcentaje de compras realizadas


        .row.justify-content-center.my-3(data-aos="zoom-in")
          .col-lg-7
            .tarjeta.tarjeta-bg-03.p-3.bordes-tarjeta
              .row.justify-content-around.align-items-center
                .col-auto
                  img(src="@/assets/curso/temas/tema1/img_19.svg").img65
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0.text-white
                      p.mb-0.text-small Ir al video de apoyo, donde se establece información del tema toma de decisiones: 
                    .col-sm-auto
                      a.boton.color-acento-botones.text-dark(href="https://www.youtube.com/watch?v=J5JP7YxPqAw" target="_blank")
                        span Enlace
                        i.fas.fa-link
                      


        
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
