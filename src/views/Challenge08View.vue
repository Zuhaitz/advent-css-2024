<script setup>
  import Navbar from "@/components/Navbar.vue";
  import arrowDown from "../assets/images/challenge08/arrow-down.svg";
</script>

<template>
  <Navbar :previous="$route.meta.previous" :next="$route.meta.next" />

  <section class="container">
    <div class="sign">
      <img :src="arrowDown" alt="arrow down" />
      <p>Scroll down</p>
      <img :src="arrowDown" alt="arrow down" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @layer components {
    @keyframes appear {
      to {
        transform: translateY(0);
      }
    }

    header {
      position: sticky;
      top: 0;
      background-color: #1e1e1e;
      transform: translateY(-100%);

      animation: appear auto linear;
      animation-timeline: scroll(root block);
      animation-range: entry 0% cover 40%;
      animation-fill-mode: both;
    }

    .container {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
    }

    .sign {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      p {
        font-size: 2rem;
        text-align: center;
      }
    }
  }
</style>
