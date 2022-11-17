<script setup>
const cards = [
  {
    nome: 'apartamento',
    saldoAtual: '48.000,00',
    tempoRestante: '26',
    meta: '30',
    valor: '800.000,00',
    restante: '752.000,00',
  },
  {
    nome: 'apartamento',
    saldoAtual: '90.000,00',
    tempoRestante: '6',
    meta: '8',
    valor: '300.000,00',
    restante: '210.000,00',
  },
];
</script>
<template>
  <ul>
    <li class="grid p-2 text-sm" v-for="(card, index) in cards" :key="index">
      <div>
        <h3 class="text-xl font-bold">{{ card.nome }}</h3>
        <p>Saldo atual | R${{ card.saldoAtual }}</p>
        <p>tempo restante | {{ card.tempoRestante }} anos</p>
      </div>

      <div>
        <p>Meta | {{ card.meta }} anos |</p>
        <p>R${{ card.valor }}</p>
        <span class="text-xs text-orange-400 font-bold"
          >Falta R${{ card.restante }}</span
        >
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  border-left: 3px solid #991b1b;
  li {
    grid-template-columns: 2fr 1fr;
  }
}
</style>
