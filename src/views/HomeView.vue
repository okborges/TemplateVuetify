<script setup>
import ListagemLongo from '../components/ListagemLongo.vue';

const saldoTotal = '1000';
</script>

<template>
  <v-app>
    <main class="border-x-orange-100 h-full bg-black">
      <h1 class="text-4xl font-bold my-5 text-center">App Little Money Box</h1>
      <h2 class="text-2xl font-bold my-8 text-center">
        Saldo total = ${{ saldoTotal }}
      </h2>

      <section class="grid p-5 text-sm">
        <div>
          <h3 class="text-xl font-bold">
            Meta
            <span class="text-red-800">Longo</span>
            prazo
          </h3>
          <p>Saldo atual | R$138.000,00</p>
          <p>tempo restante | 26 anos</p>
        </div>

        <div>
          <p>Meta | 30 anos |</p>
          <p>R$1.100.000,00</p>
          <span class="text-xs text-orange-400 font-bold"
            >Falta R$ 962.000,00</span
          >
        </div>
      </section>
      <ListagemLongo />
    </main>
    <v-bottom-navigation bg-color="black">
      <v-btn>
        <v-icon>mdi-plus-circle</v-icon>
        <span>adicionar valor</span>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<style lang="scss">
section {
  grid-template-columns: 2fr 1fr;
}
</style>
