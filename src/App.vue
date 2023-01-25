<template>
  <div>
    <h3>Olá Mundo!</h3>
    <p>O Valor é: {{ meuValor }}</p>
    <button @click="aumentar()">Aumentar</button>
  </div>
</template>

<script>
  export default {
    computed: {
      meuValor: function() {
        return this.$store.state.valor
      }
    },
    methods: {
      aumentar: function() {
        return this.$store.commit('incrementar')
      },
    },
  }
</script>