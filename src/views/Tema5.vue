<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Comportamiento del consumidor

    .row.justify-content-center.align-items-center
      .col-lg-12.mb-3
        .bloque-texto-g.bloque-texto-g.p-3.p-sm-4.p-md-5.color-secundario
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img_01.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Comprender cómo actúan los consumidores dentro del establecimiento comercial es una herramienta estratégica esencial para cualquier negocio que aspire a influir en sus decisiones de compra de forma efectiva. Este análisis permite identificar patrones, preferencias y motivaciones que llevan a una persona a optar por un producto o servicio determinado, así como los estímulos que más inciden en su conducta.

    separador

    .bg-full-width.bg-fondo-9.mb-0
      .p-4.p-md-5.mb-0
        div.mb-0(data-aos="fade-right").titulo-segundo.color-secundario
          h3.position-relative#t_5_1 5.1	Factores
      
          .row.justify-content-center.align-items-center.mb-3
            .col-lg-8.mb-3
              .bloque-texto-b
                .bloque-texto-b__texto
                  i.fas.fa-quote-left
                  p.mb-0
                    b Según Kotler y Keller (2016), La experiencia de compra no solo se ve afectada por la necesidad del consumidor, sino también por factores del entorno como la disposición de los productos, el ambiente físico y las interacciones con el personal.” 
                  i.fas.fa-quote-right
            .col-lg-4.mb-3
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema5/img_02.png', alt='').img400

            .col-lg-12.mb-3
              p.mb-0 Elementos sensoriales como la música, la iluminación o los aromas pueden generar emociones que inciden directamente en la percepción del producto y en la decisión final del cliente <b>(Solomon, 2018)</b>.

          .row.justify-content-center.align-items-center.mb-4
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/temas/tema5/img_03.png", alt="").w-auto.mx-auto
            .col-lg-7.mb-3
              p.mb-0 El comportamiento del consumidor está influenciado por una combinación dinámica de factores internos y externos. En el plano interno se encuentran las características personales —edad, nivel educativo, estilo de vida— y procesos psicológicos como la percepción, la motivación y las actitudes <b>(Schiffman & Wisenblit, 2019)</b>. En cuanto a los factores externos, destacan las influencias sociales (familia, amigos, referentes culturales), las condiciones económicas y el entorno inmediato donde ocurre la compra. Para <b>Blackwell, Miniard y Engel (2006)</b>, entender estas variables permite a las empresas adaptar su oferta a las expectativas del público, mejorar la experiencia de compra y fomentar la fidelidad hacia la marca. En entornos reales como supermercados, tiendas por departamentos o negocios de barrio, aplicar este conocimiento puede marcar la diferencia entre una venta ocasional y una relación duradera con el cliente <b>(SENA, s.f.)</b>.
              
          .row.justify-content-center.align-items-center
            .col-lg-12
              .titulo-con-imagen.mb-0(data-aos="fade-right")
                .titulo-con-imagen__fondo
                  img.titulo-con-imagen__imagen(src="@/assets/curso/temas/tema5/icon_01.svg" alt="")
                  h3.titulo-con-imagen__texto Condicionantes del comportamiento de los consumidores

    .row.justify-content-center.align-items-center.my-3(data-aos="zoom-in")
      TabsC.color-acento-contenido.mb-3
        .py-3.py-md-4(titulo="Personales").p-4
          .row.justify-content-center
            .col-md-6.col-lg-5
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema5/img_04.png', alt='').w-auto.mx-auto
            .col-lg-7.mb-2.mb-lg-0
              div
                h4.mb-3 Personales
                p Incluyen características individuales como la edad, el género, el nivel educativo, la ocupación y el estilo de vida. Estos factores determinan cuales son las preferencias, las necesidades y frecuencias de compra de cada persona.
                .tarjeta.p-2.fondo_blanco_bordes.p-2
                  ul.lista-ul--separador.mb-3
                    li 
                      i.fas.fa-check-circle.bg-color-9
                      | <b>Ejemplo</b>: una madre joven con poco tiempo disponible prefiere supermercados con servicio de entrega a domicilio y productos listos para consumir.

        .py-3.py-md-4(titulo="Psicologícos").p-3
          .row.justify-content-center
            .col-md-6.col-lg-5
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema5/img_05.png', alt='').w-auto.mx-auto
            .col-lg-7.mb-2.mb-lg-0
              div
                h4.mb-3 Psicológicos
                p Comprenden procesos internos como la percepción, la motivación, las emociones y el aprendizaje. Por ejemplo, un consumidor motivado por el ahorro buscará promociones, mientras que otro, motivado por la exclusividad, priorizará productos de alta gama.
                .tarjeta.p-2.fondo_blanco_bordes
                  ul.lista-ul--separador.mb-3
                    li 
                      i.fas.fa-check-circle.bg-color-9
                      | <b>Ejemplo</b>: un cliente que percibe un empaque elegante como señal de calidad está dispuesto a pagar más por el producto, aunque sea similar a otro más económico.

        .py-3.py-md-4(titulo="Sociales").p-3
          .row.justify-content-center
            .col-md-6.col-lg-5
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema5/img_06.png', alt='').w-auto.mx-auto
            .col-lg-7.mb-2.mb-lg-0
              div
                h4.mb-3 Sociales
                p El entorno social del consumidor, como su familia, cultura, clase social y grupos de referencia, también influye significativamente. Las recomendaciones de conocidos o las normas culturales pueden orientar la elección de marcas o productos.
                .tarjeta.p-2.fondo_blanco_bordes
                  ul.lista-ul--separador.mb-3
                    li 
                      i.fas.fa-check-circle.bg-color-9
                      | <b>Ejemplo</b>: un adolescente compra zapatillas de una marca reconocida porque sus amigos también las usan y las consideran modernas.

        .py-3.py-md-4(titulo="Situacionales").p-3
          .row.justify-content-center
            .col-md-6.col-lg-5
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema5/img_07.png', alt='').w-auto.mx-auto
            .col-lg-7.mb-2.mb-lg-0
              div
                h4.mb-3 Situacionales
                p Factores como el tiempo disponible para comprar, los estímulos sensoriales del punto de venta (música, aromas, iluminación) y la ambientación del local afectan directamente la conducta del cliente en el lugar.
                .tarjeta.p-2.fondo_blanco_bordes
                  ul.lista-ul--separador.mb-3
                    li 
                      i.fas.fa-check-circle.bg-color-9
                      | <b>Ejemplo</b>: un cliente que entra a una tienda con aroma a café recién hecho y música suave se siente cómodo y permanece más tiempo explorando los productos.

    separador
          
    .bg-full-width.bg-fondo-10.mb-0
      .p-4.p-md-5.mb-0
        div.mb-0(data-aos="fade-right").titulo-segundo.color-secundario
          h3.position-relative#t_5_2 5.2	Tipos y características
        
          div.tarjeta-horz.mb-5
            img(src='@/assets/curso/temas/tema5/img_08.png', alt='Imagen decorativa')
            div.texto-tarjeta
              p.mb-0.text-small En el estudio del comportamiento del consumidor, identificar las distintas formas en que las personas abordan sus decisiones de compra, permite a las empresas diseñar estrategias más efectivas de <em>marketing</em> y ventas. A continuación, se presenta la clasificación de los principales tipos de comportamiento de compra observados en los consumidores, describiendo las características clave que los distinguen y permiten entender mejor sus motivaciones al momento de adquirir un producto o servicio.

          .row.justify-content-center
            .col-xl-3.col-lg-6.col-md-6.col-11.mb-4.mb-xl-0
              .crd_hover_txt(data-aos="flip-left")
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/temas/tema5/img_09.png", alt="alt")
                .crd_hover_txt--body.text-white
                  h4.mb-3.text-center Impulsivo
                  p.mb-0 El cliente realiza una compra sin haberla planificado, guiado por un estímulo momentáneo.

            .col-xl-3.col-lg-6.col-md-6.col-11.mb-4.mb-xl-0
              .crd_hover_txt(data-aos="flip-left")
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/temas/tema5/img_10.png", alt="alt")
                .crd_hover_txt--body.text-white
                  h4.mb-3.text-center Planificado
                  p.mb-0 El consumidor llega al establecimiento con una intención clara de compra, basada en una necesidad identificada previamente.

            .col-xl-3.col-lg-6.col-md-6.col-11.mb-4.mb-xl-0
              .crd_hover_txt(data-aos="flip-left")
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/temas/tema5/img_11.png", alt="alt")
                .crd_hover_txt--body.text-white
                  h4.mb-3.text-center Exploratorio
                  p.mb-0 Se da cuando el cliente recorre el local sin una intención concreta, con disposición a descubrir novedades o promociones.

            .col-xl-3.col-lg-6.col-md-6.col-11.mb-4.mb-xl-0
              .crd_hover_txt(data-aos="flip-left")
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/temas/tema5/img_12.png", alt="alt")
                .crd_hover_txt--body.text-white
                  h4.mb-3.text-center Comparativo
                  p.mb-0 El consumidor evalúa diferentes opciones, marcas o precios antes de tomar la decisión de compra.

        
</template>

<script>
export default {
  name: 'Tema5',
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
