<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span 2
      h1 <em>Merchandising</em>

    .bg-full-width.bg-fondo-4.mb-0
      .p-3.p-md-5.mb-0
    
        div.mb-0(data-aos="fade-right")
          h3.position-relative#t_2_1 2.1	Concepto
            img.w-auto.pt-2(src='@/assets/curso/temas/border_title.svg', alt='')
      

          .row.justify-content-center.align-items-center.my-3(data-aos="zoom-in")
            .col-md-5.col-lg-4.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img_01.png', alt='Imagen decorativa')
            .col-lg-8.mb-4
              .bloque-texto-b
                .bloque-texto-b__texto
                  i.fas.fa-quote-left
                  p.mb-0
                    b El <em>merchandising</em> es el conjunto de técnicas aplicadas en el punto de venta con el objetivo de optimizar la presentación de los productos, influir en la decisión de compra del consumidor y maximizar la rentabilidad del negocio. Se fundamenta en principios de marketing, psicología del consumidor y gestión comercial.” 
                  p.text-right 
                    <br>  (Gómez, 2020). 
                  i.fas.fa-quote-right

              p Los principios básicos del merchandising incluyen: visibilidad, accesibilidad, atractivo visual y coherencia con la marca (Solé, 2017).

              separador
          
              div.mb-5(data-aos="fade-right")
                h3.position-relative#t_2_2 2.2	Tipos y características
                  img.w-auto.pt-2(src='@/assets/curso/temas/border_title.svg', alt='')

              .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in")
                .col-lg-12.mb-0
                  p.mb-0 A continuación, se presentan los principales tipos de merchandising utilizados en el punto de venta, clasificados según su función. Cada tipo incluye sus características estructurales y operativas, así como ejemplos prácticos que ilustran su aplicación en contextos reales del comercio minorista.

    .row.justify-content-center.align-items-center.my-3(data-aos="zoom-in")
      TabsC.color-acento-contenido.mb-5
        .py-3.py-md-4(titulo="<em>Merchandising</em> de presentación").p-3
          .row.justify-content-center
            .col-md-6.col-lg-5
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema2/img_02.png', alt='').img400.m-auto
            .col-lg-7.mb-2.mb-lg-0
              div
                h4 <em>Merchandising</em> de presentación
                ul.lista-ul--separador.mb-3
                  li 
                    i.fas.fa-check-circle.bg-color-9
                    | Exhibición visual atractiva: disposición estratégica para captar la atención del cliente.
                  li 
                    i.fas.fa-check-circle.bg-color-9
                    | Ubicación en góndolas: orden lógico y accesible según categorías y hábitos de compra.
                  li 
                    i.fas.fa-check-circle.bg-color-9
                    | Iluminación dirigida: luz focal para destacar productos clave.
                  li 
                    i.fas.fa-check-circle.bg-color-9
                    | Señalización clara y efectiva: indicadores visuales de precios, secciones o promociones.
                  li 
                    i.fas.fa-check-circle.bg-color-9
                    | Colores y ambientación: uso de paletas cromáticas para generar emociones.
                  li 
                    i.fas.fa-check-circle.bg-color-9
                    | Diseño y disposición del mobiliario: mobiliario funcional y estético que mejora el recorrido.
          
          .row.align-items-center
            .col-md-12.col-lg-9.mb-2.mb-lg-0
              h5 Ejemplos
              ul.lista-ul--separador.mb-3
                li 
                  i.fas.fa-check-circle.bg-color-9
                  | Una tienda de ropa organiza sus prendas por color y estación del año, con focos LED sobre las novedades.
                li 
                  i.fas.fa-check-circle.bg-color-9
                  | Un supermercado ubica productos de impulso cerca de la caja registradora.
            .col-md-4.col-lg-2.mb-2.mb-lg-0.mx-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema2/img_03.png', alt='').img400.m-auto.w-auto
              
        .py-3.py-md-4(titulo="<em>Merchandising</em> de gestión").p-3
          .row.justify-content-center
            .col-md-6.col-lg-5
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema2/img_04.png', alt='').img400.m-auto
            .col-lg-7.mb-2.mb-lg-0
              div
                h4 <em>Merchandising</em> de gestión
                ul.lista-ul--separador.mb-3
                  li 
                    i.fas.fa-check-circle.bg-color-9
                    | Administración de inventario: control de entradas y salidas para evitar quiebres o exceso.
                  li 
                    i.fas.fa-check-circle.bg-color-9
                    | Rotación de productos: métodos como PEPS para evitar vencimientos.
                  li 
                    i.fas.fa-check-circle.bg-color-9
                    | Planificación del surtido: selección estratégica de productos según la demanda y temporada.
                  li 
                    i.fas.fa-check-circle.bg-color-9
                    | Coordinación con proveedores: gestión de pedidos, entregas y promociones.
                  li 
                    i.fas.fa-check-circle.bg-color-9
                    | Gestión del espacio: ubicación eficiente de productos según rentabilidad.
                  li 
                    i.fas.fa-check-circle.bg-color-9
                    | Análisis de ventas: uso de datos para optimizar decisiones comerciales.
          
          .row.align-items-center
            .col-md-12.col-lg-9.mb-2.mb-lg-0
              h5 Ejemplos
              ul.lista-ul--separador.mb-2
                li 
                  i.fas.fa-check-circle.bg-color-9
                  | Una droguería revisa semanalmente el inventario y ajusta el pedido a la demanda de medicamentos.
                li 
                  i.fas.fa-check-circle.bg-color-9
                  | Una tienda de conveniencia prioriza productos de alta rotación en los estantes centrales.
            .col-md-4.col-lg-2.mb-2.mb-lg-0.mx-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema2/img_05.png', alt='').img400.m-auto.w-auto


    .row.justify-content-center.my-3(data-aos="zoom-in")
      .col-lg-7
        .tarjeta.tarjeta-bg-03.p-3.bordes-tarjeta
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema1/img_19.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  p.mb-0.text-small Ir al video de apoyo, donde se establece información del tema Introducción al <em>merchandising</em>: 
                .col-sm-auto
                  a.boton.color-acento-botones.text-dark(href="https://www.youtube.com/watch?v=D9O4iU9xSaA" target="_blank")
                    span Enlace
                    i.fas.fa-link
                      


        
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
