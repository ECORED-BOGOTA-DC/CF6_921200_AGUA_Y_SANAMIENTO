<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Reflexión sobre la importancia del agua


    .bg_fondo1-t1.mb-5
      .row.justify-content-between.align-items-center
        .col-12.col-md-4.col-lg-4
          figure.mb-4.mb-md-0
            img(src="@/assets/curso/tema1/img03.png")(data-aos="fade-left")
        .col-12.col-md-8.col-lg-8(data-aos="fade-up")
          .bg_tarjeta-t1
            .row.justify-content-end
              .col-12.col-md-11.col-lg-11
                p.mt-3 Es importane comprender que el agua es un recurso natural esencial para la vida, gracias a los sistemas de potabilización y distribución es posible contar con este recurso en nuestros hogares y diferentes lugares en los que se desarrollen actividades que involucren su uso en diferentes actividades; sin embargo, aún existen lugares en los que el agua no es de fácil acceso o la disponible no cumple con las condiciones para el consumo humano.
                p Como actividad de reflexión te invitamos a observar el vídeo “Manaure y González con la peor agua potable en el César”, el cual se encuentra en el material complementario.



      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
