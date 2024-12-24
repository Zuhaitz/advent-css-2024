<template>
  <section class="container">
    <h1 class="page-title">18 - Skeleton Loading Image</h1>

    <div class="flex-center">
      <div class="skeleton blink">
        <div class="skeleton__avatar"></div>
        <div class="skeleton__data">
          <p></p>
          <p></p>
        </div>

        <div class="skeleton__content"></div>
      </div>

      <div class="skeleton shimmer">
        <div class="skeleton__avatar"></div>
        <div class="skeleton__data">
          <p></p>
          <p></p>
        </div>

        <div class="skeleton__content"></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  $background-color: #d9d9d9;

  @layer components {
    @keyframes blink-animation {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0.4;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes shimmer-animation {
      to {
        background-position-x: -50%;
      }
    }

    .blink > div {
      animation: blink-animation 3s infinite linear;
    }

    .shimmer {
      .skeleton__avatar,
      .skeleton__data > p,
      .skeleton__content {
        background: linear-gradient(
          to right,
          $background-color 40%,
          white 50%,
          $background-color 60%
        );
        background-size: 300%;
        background-position-x: 100%;

        animation: shimmer-animation 3s infinite linear;
      }
    }

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }

    .skeleton {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;

      width: min(600px, 80%);
      height: 420px;
      padding: 10px;

      border-radius: 1rem;
      background-color: white;

      &__avatar {
        width: 124px;
        min-height: 124px;
        background-color: $background-color;
        border-radius: 100%;

        grid-area: avatar;
      }

      &__data {
        display: flex;
        flex-direction: column;
        gap: 6px;
        width: 100%;

        grid-area: data;

        p {
          height: 25px;
          border-radius: 6px;
          background-color: $background-color;

          &:first-child {
            height: 55px;
          }

          &:last-child {
            margin-bottom: 10px;
          }
        }
      }

      &__content {
        width: 100%;
        height: 100%;
        flex-grow: 1;
        border-radius: 10px;
        background-color: $background-color;

        grid-area: content;
      }
    }

    @media (min-width: 640px) {
      .skeleton {
        display: grid;
        gap: 42px;
        grid-template-areas:
          "avatar data"
          "content content";

        padding: 30px;

        grid-template-columns: min-content 1fr;
        grid-template-rows: auto 1fr;

        align-items: center;
      }
    }
  }
</style>
