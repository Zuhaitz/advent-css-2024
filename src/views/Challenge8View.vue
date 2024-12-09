<script setup>
  import arrowDown from "../assets/images/challenge8/arrow-down.svg";
</script>

<template>
  <section class="container">
    <div>
      <img :src="arrowDown" alt="arrow down" />
      <p>Scroll down</p>
      <img :src="arrowDown" alt="arrow down" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @layer components {
    header {
      position: sticky;
      top: 0;
      background-color: #1e1e1e;
    }

    .container {
      height: 120vh;
    }
  }
</style>
