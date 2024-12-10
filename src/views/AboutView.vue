<script setup>
  import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <section class="container">
    <h1 class="page_title">About page</h1>
    <p>
      This page shows a collection of exercises that a part of the
      <a href="https://www.adventofcss.com" target="_blank" class="colored-text"
        >Advent CSS 2024</a
      >.
    </p>
    <p>This exercises are meant to help improve and to learn new CSS skills.</p>
    <p>
      This application was made using
      <span class="colored-text">Vue.js</span> and
      <span class="colored-text">Sass</span>.
    </p>

    <p>
      The Github page with all the code can be found in
      <a
        href="https://github.com/Zuhaitz/advent-css-2024"
        target="_blank"
        class="colored-text"
        >here</a
      >.
    </p>

    <p class="thanks">
      Thanks to <span class="colored-text">Amy Dutton</span> for this event :)
    </p>
  </section>
</template>

<style lang="scss" scoped>
  @layer components {
    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 8px;

      p {
        text-align: center;
        text-wrap: balance;
        max-width: min(90%, 1000px);
        font-size: 1.5rem;
      }
    }
    .thanks {
      margin-top: 2rem;
    }
  }
</style>
