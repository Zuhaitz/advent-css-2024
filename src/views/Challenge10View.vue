<script setup>
  import photo1 from "../assets/images/challenge10/amin-alizadeh-p5N7n5W6eK8-unsplash.jpg";
  import photo2 from "../assets/images/challenge10/avel-chuklanov-GNVn_4bC2kk-unsplash.jpg";
  import photo3 from "../assets/images/challenge10/bear-bear-tQwxdyuHi5E-unsplash.jpg";
  import photo4 from "../assets/images/challenge10/jeffrey-buchbinder-aKwozKwSBgA-unsplash.jpg";
  import photo5 from "../assets/images/challenge10/jessica-lewis-thepaintedsquare-xz1ZYspQ9Ts-unsplash.jpg";
  import photo6 from "../assets/images/challenge10/long-ma-hxEAE88Onv0-unsplash.jpg";
  import photo7 from "../assets/images/challenge10/mathias-huysmans-fzNjcI31h3Y-unsplash.jpg";
  import photo8 from "../assets/images/challenge10/morgan-von-gunten-2dWQAI-SPnw-unsplash.jpg";

  import arrowIcon from "../assets/icons/arrow-small-left.svg";

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

  const goRight = () => {
    document.getElementById("carousel__images").scrollBy(200, 0);
  };
  const goLeft = () => {
    document.getElementById("carousel__images").scrollBy(-200, 0);
  };
</script>

<template>
  <section class="container">
    <h1 class="page_title">10 - Horizontal Scroller with Scroll Snap</h1>

    <div class="carousel">
      <div id="carousel__images" class="carousel__images">
        <div v-for="(photo, i) in photos" :key="i" class="carousel__item">
          <img :src="photo" :alt="'cat photo ' + i" draggable="false" />
        </div>
      </div>

      <div class="carousel__buttons">
        <button @click="goLeft" class="carousel__button">
          <img :src="arrowIcon" alt="" />
        </button>
        <button
          @click="goRight"
          class="carousel__button carousel__button--right"
        >
          <img :src="arrowIcon" alt="" />
        </button>
      </div>

      <div class="carousel__progress"></div>
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
      gap: 10px;
    }

    .carousel {
      position: relative;
      overflow: hidden;

      background-color: #1e1e1e;
      timeline-scope: --scroll-timeline;

      &__images {
        position: relative;
        display: flex;
        flex-direction: row;
        gap: 10px;

        anchor-name: --carousel-images;

        width: 100%;
        height: 320px;

        overflow-x: scroll;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        scroll-timeline: --scroll-timeline x;

        //Remove scroll bar
        ::-webkit-scrollbar {
          display: none;
        }
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
      }

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

      &__buttons {
        position: absolute;
        right: 0;
        bottom: 50%;
        transform: translateY(50%);

        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;

        pointer-events: none;
      }

      &__button {
        height: 100%;
        width: 50px;

        cursor: pointer;
        margin: 0;
        padding: 0;
        outline: none;
        border: none;
        background-color: transparent;

        pointer-events: all;

        background-image: linear-gradient(to right, #1e1e1e 0%, transparent);

        img {
          height: 100%;
          width: 100%;
          object-fit: contain;
        }

        &--right {
          transform: rotate(180deg);
        }
      }

      &__progress {
        height: 10px;
        transform-origin: left;
        background-color: #30aa82;

        animation: progress auto linear;
        animation-timeline: --scroll-timeline;
      }
    }

    @keyframes progress {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }

    @media (min-width: 640px) {
      .carousel {
        width: 640px;
        // border-radius: 20px;

        &__images {
          height: 480px;
          padding: 10px 30px;
          margin-bottom: 10px;
        }

        img {
          border-radius: 20px;

          animation: progress auto linear;
          animation-range: entry 0% cover 40%;
          animation-timeline: --view;
        }

        &__progress {
          border-radius: 10rem;
        }
      }
    }

    @media (min-width: 1024px) {
      .carousel {
        width: 800px;

        &__buttons {
          display: flex;
        }
      }
    }
  }
</style>
