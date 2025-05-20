<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este componente formativo desarrolla conceptos fundamentales sobre toma de decisiones, <em>merchandising</em>, objetivos, metas, comportamiento del consumidor y estrategias comerciales. A través de definiciones claras, tipos, características y técnicas, se busca fortalecer competencias clave en la gestión del punto de venta, optimizando la atracción y experiencia en el punto de venta y la presentación del producto, con enfoque técnico y aplicación práctica en entornos comerciales. 
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Flujograma que describe el componente formativo “Atracción y experiencia en el punto de venta”, desarrolla conceptos fundamentales sobre toma de decisiones, merchandising, objetivos, metas, comportamiento del consumidor y estrategias comerciales. A través de definiciones claras, tipos, características y técnicas, se busca fortalecer competencias clave en la gestión del punto de venta, optimizando la atracción y experiencia en el punto de venta y la presentación del producto, con enfoque técnico y aplicación práctica en entornos comerciales.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
