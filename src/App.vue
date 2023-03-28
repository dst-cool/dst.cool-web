<script setup>
import { RouterView } from "vue-router";

import Hearder from "./components/Hearder.vue";
import Footer from "./components/Footer.vue";
import LoadingMoblie from "./components/LoadingMoblie.vue";
import LoadingWeb from "./components/LoadingWeb.vue";

import mobile from "is-mobile";

const isMobile = mobile();
</script>

<template>
  <LoadingMoblie v-if="isMobile" />
  <LoadingWeb v-if="!isMobile" />

  <main class="main">
    <Hearder />

    <RouterView />

    <Footer />
  </main>
</template>

<style scoped>
.main {
  min-height: 100vh;
  padding: 0 1rem;

  @apply flex flex-col  justify-start  items-center;
}
</style>
