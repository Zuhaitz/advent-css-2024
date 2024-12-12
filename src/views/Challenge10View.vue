<script setup>
  import photo1 from "../assets/images/challenge10/amin-alizadeh-p5N7n5W6eK8-unsplash.jpg";
  import photo2 from "../assets/images/challenge10/avel-chuklanov-GNVn_4bC2kk-unsplash.jpg";
  import photo3 from "../assets/images/challenge10/bear-bear-tQwxdyuHi5E-unsplash.jpg";
  import photo4 from "../assets/images/challenge10/jeffrey-buchbinder-aKwozKwSBgA-unsplash.jpg";
  import photo5 from "../assets/images/challenge10/jessica-lewis-thepaintedsquare-xz1ZYspQ9Ts-unsplash.jpg";
  import photo6 from "../assets/images/challenge10/long-ma-hxEAE88Onv0-unsplash.jpg";
  import photo7 from "../assets/images/challenge10/mathias-huysmans-fzNjcI31h3Y-unsplash.jpg";
  import photo8 from "../assets/images/challenge10/morgan-von-gunten-2dWQAI-SPnw-unsplash.jpg";

  const photos = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
  ];
</script>

<template>
  <section class="container">
    <div class="carousel">
      <div v-for="(photo, i) in photos" :key="i" class="carousel__item">
        <img :src="photo" :alt="'cat photo ' + i" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @layer components {
    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 80px;
    }

    .carousel {
      position: relative;
      display: flex;
      flex-direction: row;
      gap: 10px;

      height: 320px;
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      scroll-behavior: smooth;
      scroll-timeline: --carousel;

      background-color: white;

      &__item {
        flex: 0 0 100%;
        scroll-snap-align: center;
        scroll-snap-stop: always;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        aspect-ratio: 1 / 1;
      }
    }

    @media (min-width: 640px) {
      .carousel {
        width: 640px;
        height: 480px;
        padding: 10px 30px;
        border-radius: 20px;

        img {
          border-radius: 20px;
        }
      }
    }
  }
</style>
