<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-0
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span 6
      h1 Estrategias de atracción y experiencia del cliente

    .bg-full-width.bg-fondo-9.mb-0
      .p-4.p-md-5.mb-0
        div.mb-0(data-aos="fade-right")
          h3.position-relative#t_6_1 6.1	Concepto
            img.w-auto.pt-2(src='@/assets/curso/temas/border_title.svg', alt='')

        div.tarjeta-horz.mb-5
          img(src='@/assets/curso/temas/tema6/img_01.png', alt='Imagen decorativa')
          div.texto-tarjeta
            p.mb-0.text-small Se definen como el conjunto de acciones diseñadas para captar la atención de los visitantes y convertirlos en compradores, mediante la creación de experiencias memorables dentro del punto de venta. Estas estrategias buscan generar un ambiente que estimule los sentidos, facilite la decisión de compra y promueva una conexión emocional con la marca. Una experiencia positiva no solo incrementa las probabilidades de compra, sino que también fortalece la lealtad del cliente y su disposición a recomendar el negocio.
        
        separador

        div.mb-0(data-aos="fade-right")
          h3.position-relative#t_6_2 6.2	Tipos y características
            img.w-auto.pt-2(src='@/assets/curso/temas/border_title.svg', alt='')


          p.mb-0 La experiencia del cliente en el punto de venta se construye a partir de diversas estrategias que, aplicadas de manera coherente, influyen en el comportamiento del consumidor, incrementan el tiempo de permanencia y fomentan la fidelización. Estas estrategias abarcan tanto el diseño físico del espacio como el uso de estímulos sensoriales y tecnológicos, así como la interacción humana. A continuación, se presentan los principales tipos y características de las estrategias que contribuyen a una experiencia de compra memorable y efectiva.

    .row.justify-content-center.mb-3
      .col-md-6.col-lg-5.mb-3
        figure
          img(src="@/assets/curso/temas/tema6/img_02.png", alt="").w-auto.mx-auto
      .col-lg-7.mb-3
        LineaTiempoD.color-acento-botones
          p(numero="1" titulo="Diseño del layout") La disposición del mobiliario, estanterías y productos debe guiar de manera fluida el recorrido del cliente, facilitando la exposición y el acceso a los artículos.
          
          p(numero="2" titulo="Zonas calientes y frías") Las zonas calientes son áreas con mayor tráfico y visibilidad, ideales para ubicar productos de alta rotación o promociones. Las zonas frías requieren estrategias para activar su atractivo, como señalización o iluminación específica.

          p(numero="3" titulo="Marketing sensorial") Se emplean estímulos como música ambiental, aromas agradables, colores estratégicos y texturas para crear una atmósfera que estimule positivamente la percepción del cliente (Solomon, 2018).
          
          p(numero="4" titulo="Puntos focales") Son espacios diseñados para captar la atención visual, como exhibiciones temáticas, ofertas destacadas o displays digitales.

          p(numero="5" titulo="Tecnología interactiva") El uso de kioscos digitales, pantallas táctiles o códigos QR mejora la experiencia al ofrecer información adicional y facilitar procesos como la consulta de precios o el autoservicio.

          p(numero="6" titulo="Atención personalizada") El trato amable y el acompañamiento por parte del personal contribuyen a crear una experiencia cercana y confiable.

    separador

    div.mb-0(data-aos="fade-right")
      h3.position-relative#t_6_3 6.3	Planogramas
        img.w-auto.pt-2(src='@/assets/curso/temas/border_title.svg', alt='')

      .bg-full-width.bg-fondo-11.mb-0
        .p-4.p-md-5.mb-0
          .row.justify-content-center.align-items-center
            .col-lg-12.mb-4
              .bloque-texto-g.bloque-texto-g.p-3.p-sm-4.p-md-5.color-secundario.mb-3
                .bloque-texto-g__img(
                  :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img_03.png')})`}"
                )
                .bloque-texto-g__texto.p-4
                  p Un planograma es un esquema visual que muestra cómo deben organizarse los productos en los estantes o exhibidores de un punto de venta para optimizar el espacio, facilitar la compra y aumentar las ventas. Su elaboración implica analizar el comportamiento del consumidor, la rotación de productos y la estrategia comercial del establecimiento. Se diseña teniendo en cuenta aspectos como la altura de los anaqueles, la visibilidad del producto, las zonas calientes y frías, y las categorías de artículos, buscando siempre una presentación atractiva, ordenada y funcional <b>(Levy & Weitz, 2017)</b>.
            
            .col-lg-6.mb-0
              .titulo-sexto.mb-4
                h5 Figura 7. 
                span.text-dark
                  i Ubicación de artículos en estantería

              figure.mb-4
                figure.mb-3
                  img(src='@/assets/curso/temas/tema6/img_04.svg', alt='Texto que describa la imagen')

                figcaption 
                  b Fuente: 
                  | SENA, 2025

      .row.justify-content-center
        .col-lg-10.mb-4
          .titulo-sexto.mb-4
            h5 Tabla 1. 
            span.text-dark
              i Proceso eficaz de creación de planogramas
        
          .tabla-a.color-acento-botones
            table
              caption Fuente: Niazi, 2023
              thead
                tr
                  th.tabla-bg-01.text-white Paso
                  th.tabla-bg-01.text-white Descripción
                  th.tabla-bg-01.text-white Objetivo principal
              tbody
                tr.bg-white
                  td 1. Recopilación de datos de SKU
                  td Se recolectan dimensiones y fotos de cada producto del inventario.
                  td Garantizar precisión y uso eficiente del espacio.
                tr.tabla-bg-02
                  td 2. Registro de equipos y estanterías
                  td Se registran los tipos y tamaños de estanterías y accesorios en la tienda.
                  td Asegurar compatibilidad del planograma con la infraestructura.
                tr.bg-white
                  td 3. Creación del CDT (Categoría/Cliente)
                  td Se analiza el perfil del cliente y su comportamiento por categoría.
                  td Mejorar la ubicación del producto según preferencias del cliente.
                tr.tabla-bg-02
                  td 4. Diseño del planograma con software
                  td Se usa software especializado y se valida con gestores de categoría.
                  td Alinear el diseño con metas comerciales.
                tr.bg-white
                  td 5. Formación del personal en visual merchandising
                  td Se capacita al equipo sobre el uso del software y normas de exhibición.
                  td Asegurar ejecución coherente en tiendas.
                tr.tabla-bg-02
                  td 6. Revisión del rendimiento del planograma
                  td Se analiza el desempeño del planograma usando datos de ventas y métricas.
                  td Realizar ajustes estratégicos basados en resultados.
                tr.bg-white
                  td 7. Plan de comunicación e integración
                  td Se coordina la implementación del planograma entre departamentos.
                  td Facilitar ejecución y actualización efectiva.

      .bg-full-width.bg-fondo-8.mb-0
        .p-4.px-md-5.mb-0

          .row.justify-content-center.align-items-center.mb-0
            .col-md-6.col-lg-4.mb-3.p-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema6/img_04.png', alt='').img400.w-auto.mx-auto
            .col-lg-8.mb-3
              p El uso de herramientas tecnológicas en la creación de planogramas permite una planificación precisa y eficiente del espacio comercial. A través de software especializado, los equipos pueden visualizar, ajustar y validar la ubicación de productos, mejorando tanto la presentación como el impacto en el comportamiento del consumidor.
                  
              .cajon.bg-03.p-4
                p.mb-0 Los planogramas, cuando se aplican de forma estratégica, se convierten en una herramienta clave para mejorar el desempeño del punto de venta, aportando beneficios concretos que impactan tanto en la gestión interna como en la satisfacción del cliente.

            .col-lg-10.mb-4
              .tabla-a.color-acento-botones.mb-3
                table
                  thead
                    tr
                      th.tabla-bg-01.text-white Beneficio
                      th.tabla-bg-01.text-white Impacto esperado
                  tbody
                    tr.bg-white
                      td Mejor colocación del producto
                      td Incremento de ventas del 5 % al 15 %.
                    tr.tabla-bg-02
                      td Optimización del espacio
                      td Aumento de ventas del 5 % al 10 %.
                    tr.bg-white
                      td Experiencia personalizada del cliente
                      td 62 % de consumidores prefieren tiendas con esta característica.
                    tr.tabla-bg-02
                      td Operaciones racionalizadas
                      td Mejora de productividad hasta un 20 %.
                    tr.bg-white
                      td Decisiones basadas en datos
                      td Margen de mejora hasta del 60 %.

            .col-lg-10.mb-0
              .titulo-sexto.mb-4
                h5 Figura 8. 
                span.text-dark
                  i Beneficios de implementar planogramas correctamente

              figure.mb-4
                figure.mb-3
                  img(src='@/assets/curso/temas/tema6/img_05.svg', alt='Texto que describa la imagen')

                figcaption 
                  b Fuente: 
                  | Niazi, 2023

    separador
    
    .bg-full-width.bg-fondo-12.mb-0
      .p-4.p-md-5.mb-0
        div.mb-0(data-aos="fade-right")
          h3.position-relative#t_6_4 6.4 Teoría del color
            img.w-auto.pt-2(src='@/assets/curso/temas/border_title.svg', alt='')

          .row.justify-content-center.align-items-center.mb-0
            .col-md-6.col-lg-4.mb-4.p-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema6/img_06.png', alt='').img400.w-auto.mx-auto
            .col-lg-8.mb-4
              p En el ámbito del marketing y el merchandising, el color es una herramienta estratégica clave que influye directamente en las emociones, decisiones de compra y comportamiento del consumidor. Cada color transmite sensaciones y valores distintos, lo cual permite a las marcas y establecimientos generar atmósferas específicas, reforzar su identidad visual y destacar productos o promociones. 
                  
              .cajon.bg-03.p-4
                p.mb-0 El uso adecuado del color en los espacios comerciales no solo atrae la atención del cliente, sino que también puede mejorar la experiencia de compra, incrementar el tiempo de permanencia en el punto de venta y favorecer la fidelización. Según Kotler y Armstrong (2018), el color, al igual que otros estímulos visuales, tiene un impacto significativo en la percepción del consumidor y en sus decisiones dentro del entorno de compra. A continuación, se presenta una tabla con los principales colores utilizados en merchandising, su impacto psicológico, beneficios y aplicaciones más comunes.

          .row.justify-content-center
            .col-lg-12.mb-0
              .titulo-sexto.mb-4
                h5 Tabla 2. 
                span.text-dark
                  i Uso del color en el merchandising
            
              .tabla-a.color-acento-botones
                table
                  caption Fuente: Solomon, M. R. (2018)
                  thead
                    tr
                      th.tabla-bg-01.text-white Color
                      th.tabla-bg-01.text-white Impacto psicológico
                      th.tabla-bg-01.text-white Beneficios en el punto de venta
                      th.tabla-bg-01.text-white Ejemplos de uso común
                  tbody
                    tr.bg-white
                      td Rojo
                      td Estimula, crea urgencia, llama la atención
                      td Aumenta el deseo de compra, útil en promociones
                      td Señales de descuento, ofertas, zonas de impulso 
                    tr.tabla-bg-02
                      td Azul
                      td Transmite confianza, tranquilidad y profesionalismo
                      td Genera sensación de seguridad, ideal para fidelización
                      td Productos tecnológicos, marcas bancarias
                    tr.bg-white
                      td Amarillo
                      td Alegre, energético, estimula la atención
                      td Aumenta la visibilidad y favorece la retención visual
                      td Áreas infantiles, anuncios llamativos
                    tr.tabla-bg-02
                      td Verde
                      td Asociado con naturaleza, frescura y bienestar
                      td Ideal para productos ecológicos o saludables
                      td Supermercados, negocios verdes, farmacias
                    tr.bg-white
                      td Naranja
                      td Entusiasmo, creatividad, dinamismo
                      td Estimula la acción y el consumo impulsivo
                      td Tiendas deportivas, accesorios
                    tr.tabla-bg-02
                      td Negro
                      td Elegancia, sofisticación
                      td Transmite exclusividad y lujo
                      td Productos premium, vitrinas de moda
                    tr.bg-white
                      td Blanco
                      td Limpieza, pureza, simplicidad
                      td Genera sensación de orden y amplitud
                      td Farmacias, tiendas de tecnología, vitrinas minimalistas
                    tr.tabla-bg-02
                      td Rosa
                      td Sensibilidad, ternura, feminidad
                      td Crea un ambiente acogedor, usado en productos dirigidos a mujeres
                      td Cosméticos, moda femenina
                    tr.bg-white
                      td Morado
                      td Lujo, misterio, creatividad
                      td Potencia productos exclusivos o innovadores
                      td Perfumería, productos de belleza

    separador

    .bg-full-width.bg-fondo-13.mb-0
      .p-4.p-md-5.mb-0
        div.mb-4(data-aos="fade-right")
          h3.position-relative#t_6_5 6.5 Escaparatismo
            img.w-auto.pt-2(src='@/assets/curso/temas/border_title.svg', alt='')

          p.mb-4 El escaparatismo es una herramienta clave en el marketing visual que busca captar la atención del cliente desde el exterior del punto de venta. Uno de sus elementos principales es el diseño visual, que combina aspectos como colores, formas, estilos e iluminación para reflejar la identidad del negocio y atraer al público desde la primera mirada (González, 2019). Se debe tener en cuenta:

          .bg-full-width.bg-color-7.mb-0
            .px-4.px-md-5.mb-0
              .row.justify-content-center.align-items-center.mb-0.p-3
                .col-md-6.col-lg-4.mb-3.mb-lg-0.p-4
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/tema6/img_07.png', alt='').img400.w-auto.mx-auto
                .col-lg-8.mb-3.mb-lg-0
                  SlyderF(columnas="col-12 col-md-6 col-lg-6")
                    .bg-color-white.p-4.h-100.shadow-app
                      img(src='@/assets/curso/temas/tema6/img_08.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                      h5.text-center.mb-4 La tematización
                      p.text-center.text-small Es la creación de conceptos visuales asociados a eventos especiales, temporadas o campañas promocionales. Esto ayuda a generar una conexión emocional con los consumidores y a hacer que la experiencia de compra sea más memorable.
                    
                    .bg-color-white.p-4.h-100.shadow-app
                      img(src='@/assets/curso/temas/tema6/img_09.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                      h5.text-center.mb-4 La iluminación estratégica
                      p.text-center.text-small También cumple un rol crucial, al colocar luz sobre ciertos productos o zonas, se logra resaltar lo más relevante, guiar la mirada del cliente y aumentar la percepción de valor de los artículos exhibidos.

                    .bg-color-white.p-4.h-100.shadow-app
                      img(src='@/assets/curso/temas/tema6/img_10.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                      h5.text-center.mb-4 La buena distribución del espacio
                      p.text-center.text-small En la vitrina evita la saturación visual y permite que el mensaje llegue con claridad. Al equilibrar los elementos, se facilita la lectura del concepto visual y se optimiza el uso del espacio disponible.

                    .bg-color-white.p-4.h-100.shadow-app
                      img(src='@/assets/curso/temas/tema6/img_11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                      h5.text-center.mb-4 La renovación frecuente
                      p.text-center.text-small Adaptándola a fechas clave o a nuevas promociones. Esta actualización mantiene la atención del cliente, crea un sentido de novedad constante y puede motivar visitas recurrentes al establecimiento.
          
                    .bg-color-white.p-4.h-100.shadow-app
                      img(src='@/assets/curso/temas/tema6/img_12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                      h5.text-center.mb-4 El enfoque en productos estratégicos
                      p.text-center.text-small Dentro de la vitrina permite dirigir el interés hacia artículos de alta rotación o con ofertas destacadas, favoreciendo su venta y aprovechando al máximo el espacio de exhibición. 
        
</template>

<script>
export default {
  name: 'Tema6',
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
