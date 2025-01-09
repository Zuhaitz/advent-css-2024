<template>
  <section class="container">
    <h1 class="page-title">24 - Stacked Cards</h1>
    <div class="card-stack">
      <div class="card-stack__images">
        <img
          src="../assets/images/challenge24/GRAND-TETON.png"
          alt="grand teton card"
        />
        <img src="../assets/images/challenge24/ACADIA.png" alt="acadia card" />
        <img
          src="../assets/images/challenge24/YOSEMITE.png"
          alt="yosemite card"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  $card-height: 320px;

  @layer components {
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .card-stack {
      width: 100%;
      height: $card-height;
      timeline-scope: --scroll-timeline;

      &__images {
        display: flex;
        flex-direction: column;
        align-items: center;

        height: 100%;
        width: 100%;

        overflow-y: scroll;
        scroll-snap-type: y mandatory;
        scroll-behavior: smooth;
        scroll-padding: 0;
        scroll-timeline: --scroll-timeline y;

        //Remove scroll bar
        ::-webkit-scrollbar {
          display: none;
        }
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */

        img {
          position: sticky;
          top: 0;
          height: $card-height;
          width: auto;
          object-fit: contain;

          scroll-snap-align: center;
          scroll-snap-stop: always;
          scroll-margin: -5px;

          view-timeline: --throw;

          animation: throw-animation both ease-in-out;
          animation-timeline: --throw;
          animation-range: entry 25%;

          &:nth-child(1) {
            transform: rotate(-2.27deg);
          }
          &:nth-child(2) {
            transform: rotate(2.67deg);
          }
          &:nth-child(3) {
            transform: rotate(0deg);
          }
        }
      }
    }

    @keyframes throw-animation {
      from {
        // transform: rotateZ(-30deg);
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @media (min-width: 640px) {
      $card-height: 480px;

      .card-stack {
        height: $card-height;

        &__images > img {
          height: $card-height;
        }
      }
    }

    @media (min-width: 768px) {
      $card-height: 700px;

      .card-stack {
        height: $card-height;

        &__images > img {
          height: $card-height;
        }
      }
    }
  }
</style>
