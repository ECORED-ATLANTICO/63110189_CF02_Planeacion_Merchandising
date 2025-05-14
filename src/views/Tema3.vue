<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Objetivos de <em>merchandising</em>



    .bg-full-width.bg-fondo-5.mb-0
      .p-4.p-md-5.mb-0
        .row.justify-content-center.align-items-center
          .col-lg-12.mb-3
            .bloque-texto-g.bloque-texto-g.p-3.p-sm-4.p-md-5.color-secundario
              .bloque-texto-g__img(
                :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img_01.png')})`}"
              )
              .bloque-texto-g__texto.p-4
                p El merchandising es una herramienta estratégica que busca aumentar la rentabilidad del punto de venta mediante la adecuada presentación del producto y el diseño de experiencias atractivas para el consumidor. Su enfoque no solo es visual, sino también sensorial, psicológico y comercial, por lo que sus objetivos deben ser definidos con precisión para generar impacto en los resultados del negocio (Chebat & Morrin, 2007).


          separador

          div.mb-5(data-aos="fade-right")
            h3.position-relative#t_3_1 3.1	Concepto
              img.w-auto.pt-2(src='@/assets/curso/temas/border_title.svg', alt='')
        
          .col-lg-9.mb-3
            .bloque-texto-b
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                p.mb-0
                  b El merchandising puede definirse como el conjunto de acciones orientadas a estimular la compra en el punto de venta, mediante la disposición, presentación y ambientación de los productos de forma estratégica.” 
                p.text-right 
                  <br> (Kotler & Keller, 2016).
                i.fas.fa-quote-right

          .row.align-items-start
            .col-lg-5.mb-3
              p No se limita a colocar productos en estanterías; implica diseñar una experiencia visual y sensorial que motive al cliente, influya en su decisión de compra y refuerce la identidad de marca.

              figure
                img(src="@/assets/curso/temas/tema3/img_02.png", alt="").mb-4
            .col-lg-7.mb-3
              LineaTiempoD.color-acento-botones
                p(numero="1" titulo="Incrementar las ventas por impulso") Se busca estimular compras no planeadas mediante una disposición estratégica de productos atractivos en zonas de alto tránsito, como cajas o pasillos principales.
                
                p(numero="2" titulo="Aumentar el tiempo al interior del punto de venta") Al prolongar el tiempo de permanencia del cliente, se aumenta la probabilidad de que vea más productos y realice compras adicionales.
                
                p(numero="3" titulo="Mejorar la presentación del producto") El uso de exhibiciones limpias, organizadas y atractivas visualmente resalta los beneficios del producto, generando mayor interés y deseo de compra.
                
                p(numero="4" titulo="Facilitar la rotación del inventario") Mediante una disposición adecuada y promociones dirigidas, se favorece la venta de productos rezagados o con menor rotación, optimizando el inventario.
                p(numero="5" titulo="Reforzar la imagen de marca") El ambiente del punto de venta, el diseño, los colores y la coherencia visual contribuyen a fortalecer el reconocimiento y la percepción positiva de la marca.
                p(numero="6" titulo="Orientar al cliente en su trayectoria en proceso de compra") La señalización, distribución del espacio y categorías claras ayudan al cliente a encontrar lo que busca, haciendo más eficiente y satisfactoria su experiencia de compra.

            .col-lg-12            
              .cajon.bg-02.p-4
                p.mb-0 El logro de estos objetivos está directamente relacionado con una buena planeación y ejecución en el punto de venta, lo cual requiere entender tanto las necesidades del cliente como las posibilidades del entorno físico y digital.

    .row.justify-content-center(data-aos="zoom-in")
      .col-lg-12.mb-4
        .titulo-sexto.mb-4
          h5 Figura 3. 
          span
            i Objetivos del <em>merchandising</em>

        figure.mb-4
    
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure.mb-3
                img(src='@/assets/curso/temas/tema3/img_03.svg', alt='Texto que describa la imagen')

              figcaption 
                b Fuente: 
                | SENA, 2025
                
            
            .tarjeta.bg_01_tarjeta.p-2(x="8%" y="72%" numero="+")
              .row
                h5 01
                p Incrementar las ventas por impulso.
            .tarjeta.bg_01_tarjeta.p-2(x="25.5%" y="72%" numero="+")
              .row
                h5 02
                p Aumentar el tiempo al interior del punto de venta.

            .tarjeta.bg_01_tarjeta.p-2(x="41.5%" y="72%" numero="+")
              .row
                h5 03
                p Mejorar la presentación del producto.

            .tarjeta.bg_01_tarjeta.p-2(x="58.5%" y="72%" numero="+")
              .row
                h5 04
                p Facilitar la rotación del inventario.

            .tarjeta.bg_01_tarjeta.p-2(x="75.5%" y="72%" numero="+")
              .row
                h5 05
                p Reforzar la imagen de marca.

            .tarjeta.bg_01_tarjeta.p-2(x="92.5%" y="72%" numero="+")
              .row
                h5 06
                p Orientar al cliente en su trayectoria en proceso de compra

    separador

    div
      div.mb-5(data-aos="fade-right")
        h3.position-relative#t_3_2 3.2	Tipos y características
          img.w-auto.pt-2(src='@/assets/curso/temas/border_title.svg', alt='')

        p.mb-3 Existen distintos tipos de merchandising, clasificados según su función y aplicación. Seguidamente se presenta una tabla con los principales tipos:
        .row
          .col-md-12.col-sm-12.mx-auto
            .tarjeta.bg_azul.mb-5.p-3
              .tarjeta.p-2
                SlyderA(tipo="b")
                  .row.justify-content-center.align-items-center.my-lg-4
                    
                    .col-md-12.col-lg-5
                      figure
                        img(src='@/assets/curso/temas/tema3/img_04.png', alt='Imagen Decorativa')
                    .col-md-12.col-lg-7.mb-4.mb-md-0
                      p 
                        strong Visual
                      p
                      | Características 
                      ul.lista-ul.mb-3
                        li 
                          i.fas.fa-check-circle.bg-color-9
                          | Se enfoca en la presentación estética y atractiva del producto y el entorno.
                      p
                      | Aplicación en punto de venta 
                      ul.lista-ul.mb-3
                        li 
                          i.fas.fa-check-circle.bg-color-9
                          | Exhibiciones llamativas, uso de colores, iluminación, vitrinas.


                  .row.justify-content-center.align-items-center.my-lg-4
                    
                    .col-md-12.col-lg-5
                      figure
                        img(src='@/assets/curso/temas/tema3/img_05.png', alt='Imagen Decorativa')
                    .col-md-12.col-lg-7.mb-4.mb-md-0
                      p 
                        strong Seductor
                      p
                      | Características 
                      ul.lista-ul.mb-3
                        li 
                          i.fas.fa-check-circle.bg-color-9
                          | Utiliza estímulos sensoriales y emocionales para generar deseo de compra.
                      p
                      | Aplicación en punto de venta 
                      ul.lista-ul.mb-3
                        li 
                          i.fas.fa-check-circle.bg-color-9
                          | Aromas, música, degustaciones, marketing sensorial


                  .row.justify-content-center.align-items-center.my-lg-4
                    
                    .col-md-12.col-lg-5
                      figure
                        img(src='@/assets/curso/temas/tema3/img_06.png', alt='Imagen Decorativa')
                    .col-md-12.col-lg-7.mb-4.mb-md-0
                      p 
                        strong Estratégico
                      p
                      | Características 
                      ul.lista-ul.mb-3
                        li 
                          i.fas.fa-check-circle.bg-color-9
                          | Se basa en datos y análisis para tomar decisiones de ubicación y promoción de productos.
                      p
                      | Aplicación en punto de venta 
                      ul.lista-ul.mb-3
                        li 
                          i.fas.fa-check-circle.bg-color-9
                          | Planogramas, rotación de categorías, zonas calientes y frías.


                  .row.justify-content-center.align-items-center.my-lg-4
                    
                    .col-md-12.col-lg-5
                      figure
                        img(src='@/assets/curso/temas/tema3/img_07.png', alt='Imagen Decorativa')
                    .col-md-12.col-lg-7.mb-4.mb-md-0
                      p 
                        strong Digital
                      p
                      | Características 
                      ul.lista-ul.mb-3
                        li 
                          i.fas.fa-check-circle.bg-color-9
                          | Emplea el uso de tecnología para mejorar la experiencia del comprador.
                      p
                      | Aplicación en punto de venta 
                      ul.lista-ul.mb-3
                        li 
                          i.fas.fa-check-circle.bg-color-9
                          | Pantallas interactivas, códigos QR, Apps de realidad aumentada.


                  .row.justify-content-center.align-items-center.my-lg-4
                    
                    .col-md-12.col-lg-5
                      figure
                        img(src='@/assets/curso/temas/tema3/img_08.png', alt='Imagen Decorativa')
                    .col-md-12.col-lg-7.mb-4.mb-md-0
                      p 
                        strong Promocional
                      p
                      | Características 
                      ul.lista-ul.mb-3
                        li 
                          i.fas.fa-check-circle.bg-color-9
                          | Apoya campañas o lanzamientos específicos mediante ofertas o material POP.
                      p
                      | Aplicación en punto de venta 
                      ul.lista-ul.mb-3
                        li 
                          i.fas.fa-check-circle.bg-color-9
                          | Stands temporales, material gráfico, regalos por compra.

        .col-lg-12.mb-2            
          .cajon.bg-03.p-4
            p.mb-0 Cada tipo de <em>merchandising</em> responde a un objetivo particular. Por ejemplo, el <em>merchandising</em> visual busca captar la atención inicial del cliente, mientras que el estratégico tiene como finalidad aumentar la eficiencia del punto de venta basándose en el comportamiento del consumidor.

    separador

    div.mb-0(data-aos="fade-right")
      h3.position-relative#t_3_3 3.3 Técnicas de fijación
        img.w-auto.pt-2(src='@/assets/curso/temas/border_title.svg', alt='')
      

      div.tarjeta-horz.mb-4(data-aos="flip-up")
        img(src='@/assets/curso/temas/tema3/img_09.png', alt='Imagen decorativa')
        div.texto-tarjeta
          p.mb-0 Las técnicas de fijación de <em>merchandising</em> son estrategias puntuales que buscan posicionar el producto en la mente del consumidor, fomentar la compra y generar una experiencia diferenciadora. Estas técnicas están ligadas a cómo se muestra, organiza y destaca el producto dentro del espacio físico o digital. Seguidamente se presentan algunas de las técnicas más utilizadas:

          
      .bg-full-width.bg-fondo-6.mb-0(data-aos="fade-right")
        .p-4.p-md-5.mb-0
          .row
            .col-md-6.col-sm-6.col-lg-4.mx-auto
              figure
                img(src='@/assets/curso/temas/tema3/img_10.png', alt='Imagen Decorativa')
        
            .col-md-12.col-sm-12.col-lg-8.mx-auto
              .tarjeta.bg_azul.mb-5.p-3
                .tarjeta.p-2
                  SlyderA(tipo="b")
                    .row.justify-content-center.align-items-center.my-lg-4
                      
                      .col-md-12.col-lg-10.mb-4.mb-md-0
                        p 
                          strong Zonas calientes y frías
                        p Identificación de áreas con mayor o menor tráfico dentro del local.
                        ul.lista-ul.mb-3
                          li 
                            i.fas.fa-check-circle.bg-color-9
                            | Ejemplo
                        p
                        | Ubicar los productos de rotación alta en zonas calientes.

                    .row.justify-content-center.align-items-center.my-lg-4
                      
                      .col-md-12.col-lg-10.mb-4.mb-md-0
                        p 
                          strong Exhibición por niveles
                        p Colocación de productos a diferentes alturas para influir en la atención.
                        ul.lista-ul.mb-3
                          li 
                            i.fas.fa-check-circle.bg-color-9
                            | Ejemplo
                        p
                        | Productos más rentables al nivel de los ojos.


                    .row.justify-content-center.align-items-center.my-lg-4
                      
                      .col-md-12.col-lg-10.mb-4.mb-md-0
                        p 
                          strong Cross merchandising
                        p Agrupación de productos complementarios para estimular compras adicionales.
                        ul.lista-ul.mb-3
                          li 
                            i.fas.fa-check-circle.bg-color-9
                            | Ejemplo
                        p
                        | Salsas junto a verduras.


                    .row.justify-content-center.align-items-center.my-lg-4
                      
                      .col-md-12.col-lg-10.mb-4.mb-md-0
                        p 
                          strong Señalización efectiva
                        p Uso de carteles, etiquetas y guías visuales para facilitar la navegación.
                        ul.lista-ul.mb-3
                          li 
                            i.fas.fa-check-circle.bg-color-9
                            | Ejemplo
                        p
                        | Carteles con precios y flechas direccionales.


                    .row.justify-content-center.align-items-center.my-lg-4
                      
                      .col-md-12.col-lg-10.mb-4.mb-md-0
                        p 
                          strong Merchandising estacional
                        p Adaptación en el punto de venta a campañas, festividades y fechas especiales.
                        ul.lista-ul.mb-3
                          li 
                            i.fas.fa-check-circle.bg-color-9
                            | Ejemplo
                        p
                        | Decoraciones navideñas o promociones del Día de la Madre.

            .col-lg-12            
              .cajon.bg-02.p-4
                p.mb-0 Estas técnicas ayudan a maximizar el impacto visual y comercial de cada categoría de producto, incentivando decisiones de compra rápidas y positivas. Además, permiten personalizar la experiencia del cliente según contextos temporales, emocionales o culturales.




        
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
