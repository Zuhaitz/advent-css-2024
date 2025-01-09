<template>
  <section class="container">
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
  $margin: 50px;

  @layer components {
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .card-stack {
      width: 100%;
      height: calc($card-height + $margin * 2);
      timeline-scope: --scroll-timeline;

      &__images {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: $margin;

        height: 100%;
        width: 100%;
        padding-bottom: $margin;

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
          top: $margin;
          height: $card-height;
          width: auto;
          object-fit: contain;

          scroll-snap-align: center;
          scroll-snap-stop: always;

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
        // transform: rotate(-30deg);
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
</style>
