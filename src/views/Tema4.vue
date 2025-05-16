<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-0
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span 4
      h1 Metas en el punto de venta

    .bg-full-width.bg-fondo-7.mb-0
      .p-4.p-md-5.mb-0
        .row.justify-content-center.align-items-center.my-3(data-aos="zoom-in")
          .col-lg-12.col-md-8.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/img_01.png', alt='Imagen decorativa')
          .col-lg-10.mb-4
            .bloque-texto-b
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                p.mb-0
                  b Las metas representan los resultados específicos y cuantificables que se desean alcanzar dentro del marco de los objetivos planteados para la atracción y experiencia del cliente en el punto de venta. Mientras los objetivos definen la dirección estratégica general, las metas descomponen esa dirección en resultados medibles a corto, mediano o largo plazo. En este sentido, las metas actúan como indicadores de desempeño, permitiendo evaluar la efectividad de las acciones de merchandising y experiencia del cliente en el entorno comercial.” 
                p.text-right 
                  <br> (Kotler & Keller, 2016). 
                i.fas.fa-quote-right

    separador

    div.mb-0(data-aos="fade-right")
      h3.position-relative#t_4_1 4.1	Concepto
        img.w-auto.pt-2.mb-4(src='@/assets/curso/temas/border_title.svg', alt='')

      .row.justify-content-center.align-items-center
        .col-lg-12.mb-4
          .bloque-texto-g.bloque-texto-g.p-3.p-sm-4.p-md-5.color-secundario.mb-3
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img_02.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p Las metas deben cumplir con las características SMART, un acrónimo que resume los criterios fundamentales para su formulación:

        .col-md-12.col-lg-10.mb-4
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/tema4/img_03.svg', alt='').img400.m-auto.w-auto.mb-3


        .col-lg-10.mb-4
          .titulo-sexto.mb-4
            h5 Figura 4. 
            span.text-dark
              i Metas <em>SMART</em>

          figure.mb-4
            figure.mb-3
              img(src='@/assets/curso/temas/tema4/img_04.svg', alt='Texto que describa la imagen')

            figcaption 
              b Fuente: 
              | SENA, 2025
    separador

    div.mb-0(data-aos="fade-right")
      h3.position-relative#t_4_2 4.2	Tipos de metas en el punto de venta
        img.w-auto.pt-2(src='@/assets/curso/temas/border_title.svg', alt='')

      p.mb-2 Las metas se clasifican de acuerdo con su orientación estratégica en:

      .bg-full-width.bg-fondo-8.mb-0
        .p-4.px-md-5.mb-0

          .bg-full-width.bg-color-7.mb-0
            .px-4.px-md-5.mb-0
              .row.justify-content-center.align-items-center.mb-0.p-3
                .col-md-6.col-lg-4.mb-3.mb-lg-0.p-4
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/tema4/img_05.png', alt='').img400.w-auto.mx-auto
                .col-lg-8.mb-3.mb-lg-0
                  SlyderF(columnas="col-12 col-md-6 col-lg-4")
                    .bg-color-white.p-4.h-100.shadow-app
                      img(src='@/assets/curso/temas/tema4/img_06.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                      h5.text-center.mb-4 Comerciales
                      p.text-center.text-small Relacionadas con el volumen de ventas, ingresos, rentabilidad o crecimiento del ticket promedio.
                    .bg-color-white.p-4.h-100.shadow-app
                      img(src='@/assets/curso/temas/tema4/img_07.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                      h5.text-center.mb-4 Operativas
                      p.text-center.text-small Afines a procesos internos, como optimizar espacios, el reponer de manera eficiente del inventario o su control.

                    .bg-color-white.p-4.h-100.shadow-app
                      img(src='@/assets/curso/temas/tema4/img_08.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                      h5.text-center.mb-4 De marketing

                      p.text-center.text-small Dirigidas a posicionamiento de marca, recordación publicitaria, incremento de tráfico en tienda.

                    .bg-color-white.p-4.h-100.shadow-app
                      img(src='@/assets/curso/temas/tema4/img_09.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                      h5.text-center.mb-4 De experiencia
                      p.text-center.text-small Dirigidas a la satisfacción del cliente, tiempo de permanencia, tasa de conversión y proceso de fidelización.
          
          .row.justify-content-center.align-items-center.my-3(data-aos="zoom-in")
            .col-lg-8.mb-4
              .bloque-texto-b
                .bloque-texto-b__texto
                  i.fas.fa-quote-left
                  p.mb-0
                    b El establecimiento de metas precisas permite al equipo comercial focalizar esfuerzos, asignar recursos de forma eficiente y diseñar planes de acción alineados con los resultados esperados. Además, facilita la toma de decisiones basada en indicadores clave de rendimiento (KPI), permitiendo una gestión proactiva y orientada al logro.” 
                  p.text-right 
                    <br> (Chiavenato, 2011).
                  i.fas.fa-quote-right
            .col-lg-4.mb-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema4/img_11.png', alt='').img400

          p.mb-4 Como lo señalan Lamb, Hair y McDaniel (2019), las metas proporcionan una referencia fundamental para evaluar el desempeño y motivar al equipo, dado que fomentan el sentido de propósito y dirección compartida en la organización.  

          .row.justify-content-center.align-items-center.my-3(data-aos="zoom-in")
            .col-lg-12.mb-4
              .titulo-sexto.mb-4
                h5 Figura 5. 
                span.text-dark
                  i Importancia de metas claras

              figure.mb-4
                figure.mb-3
                  img(src='@/assets/curso/temas/tema4/img_10.svg', alt='Texto que describa la imagen')

                figcaption 
                  b Fuente: 
                  | SENA, 2025

    separator

    div.mb-0(data-aos="fade-right")
      h3.position-relative#t_4_3 4.3 Ejemplos de metas
        img.w-auto.pt-2.mb-4(src='@/assets/curso/temas/border_title.svg', alt='')

      .row.justify-content-center.align-items-center.ordenar_div
        .col-md-6.col-lg-4
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/tema4/img_12.png', alt='').img400.m-auto
        .col-lg-8.mb-2.mb-lg-0.arriba
          div
            ul.lista-ul--separador.mb-3
              li 
                i.fas.fa-check-circle.bg-color-9
                | Aumentar la venta de productos propios, logrando que más personas los compren durante los primeros tres meses del año.
              li 
                i.fas.fa-check-circle.bg-color-9
                | Hacer que más clientes visiten la tienda los fines de semana, usando estrategias que activen sus sentidos como música, aromas o iluminación llamativa.
              li 
                i.fas.fa-check-circle.bg-color-9
                | Mejorar la experiencia del cliente para que, al final del semestre, den buenas calificaciones en las encuestas de satisfacción.
              li 
                i.fas.fa-check-circle.bg-color-9
                | Organizar mejor el trabajo en tienda para reponer los productos en las estanterías más rápido antes de que termine el año.

</template>

<script>
export default {
  name: 'Tema4',
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
