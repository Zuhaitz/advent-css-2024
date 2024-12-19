<template>
  <section class="container">
    <h1 class="page-title">9 - Button with a Gradient Border</h1>
    <button class="gradient-button">
      <span>CSS Rocks!</span>
    </button>
  </section>
</template>

<style lang="scss" scoped>
  $Yellow: #f4bb44;
  $Pink: #e0367c;
  $Purple: #6762d2;
  $Blue: #6ed3fa;
  $background: #1e1e1e;

  @layer components {
    @property --gradient-angle {
      syntax: "<angle>";
      initial-value: 90deg;
      inherits: false;
    }

    @keyframes rotate {
      from {
        --gradient-angle: 90deg;
      }
      to {
        --gradient-angle: 450deg;
      }
    }

    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 80px;
    }

    .gradient-button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.25rem;

      outline: none;
      border: none;
      border-radius: 100rem;

      color: white;
      background-image: linear-gradient(
        var(--gradient-angle),
        $Yellow,
        $Pink,
        $Purple,
        $Blue
      );

      animation: rotate 4s linear infinite normal;
      animation-play-state: paused;

      span {
        width: 100%;
        height: 100%;
        padding: 20px 60px;

        font-size: 1.5rem;

        border-radius: 100rem;
        background-color: $background;

        transition: font-size 0.1s linear;
      }

      &:hover {
        animation-play-state: running;
        padding: 6px;

        span {
          font-size: 2rem;
        }
      }
    }
  }
</style>
