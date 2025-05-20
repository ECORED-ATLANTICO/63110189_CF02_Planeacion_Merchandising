<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-0
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bg-full-width.bg-fondo-14.mb-0
      .p-4.p-md-5.mb-0
        .row.justify-content-center.my-3
          .col-lg-4.col-md-8.align-content-center
            figure
              img.my-3(src='@/assets/curso/temas/intro/img01.png', alt='Imagen decorativa')
          .col-lg-8
            p El componente formativo 
              b “Atracción y experiencia en el punto de venta” 
              | aborda la importancia del entorno competitivo en el comercio actual, donde el punto de venta se consolida como un espacio estratégico que conecta emociones, decisiones de compra e identidad de marca. Más que un lugar de transacción, este se convierte en un escenario clave para influir en la percepción del consumidor, fortalecer la imagen de marca y construir relaciones a largo plazo.
            .bloque-texto-b
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                p.mb-0
                  b Elementos como el diseño del espacio, el comportamiento del consumidor y las técnicas de <em>merchandising</em> son fundamentales para crear experiencias memorables y diferenciadoras.
                p.text-right 
                  <br> Kotler & Keller, (2016). 
                i.fas.fa-quote-right
      
        .row.justify-content-center.my-3
          .col-lg-8
            p Se brindan herramientas conceptuales y prácticas que permiten implementar estrategias efectivas capaces de captar la atención, influir en las decisiones de compra y fomentar la fidelización. Además, se fomenta una perspectiva crítica e innovadora mediante la integración de principios como el <em>neuromarketing</em>, el <em>marketing</em> sensorial, el análisis estratégico y las tecnologías emergentes. 
            .bloque-texto-b
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                p.mb-0 
                  b Estos aspectos optimizan la interacción entre el consumidor y el punto de venta físico, adaptándose a las dinámicas del mercado y a las demandas del entorno comercial actual.
                p.text-right 
                  <br> Sánchez, (2019).
                i.fas.fa-quote-right
          
          .col-lg-4.col-md-8.align-content-center
            figure
              img.my-3(src='@/assets/curso/temas/intro/img02.png', alt='Imagen decorativa')
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/MGVBwD8a0RE?si=R4IHWYgmUlfQVQot" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Nota: Sena (2024).   
    
</template>

<script>
export default {
  name: 'Introduccion',
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
