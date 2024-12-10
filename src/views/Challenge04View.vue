<script setup>
  import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <Navbar />

  <section class="container">
    <h1 class="heading"><span>Heading</span></h1>
  </section>
</template>

<style lang="scss" scoped>
  $text-size: 2rem;

  @layer components {
    .container {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    .heading {
      font-size: $text-size;
      font-weight: bold;
      text-align: center;

      width: 100%;
      max-width: min(80%, 1000px);

      background: linear-gradient(
        transparent 0%,
        transparent 49%,
        #ffffff 50%,
        #ffffff 51%,
        transparent 52%,
        transparent 100%
      );

      span {
        padding: 0 calc($text-size * 0.5);
        background-color: #1e1e1e;
      }

      // &:before {
      //   content: "";
      //   display: block;
      //   border-top: solid 1px white;
      //   width: 100%;
      //   height: 1px;
      //   position: absolute;
      //   top: 50%;
      //   z-index: 1;
      // }
    }

    @media (min-width: 768px) {
      .heading {
        font-size: calc($text-size * 2);
        span {
          padding: 0 $text-size;
        }
      }
    }
  }
</style>
