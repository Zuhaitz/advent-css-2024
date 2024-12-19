<template>
  <section class="container">
    <h1 class="page-title">15 - Highlight Text</h1>

    <p>
      <span class="highlighted-text">
        Candy cane jingle sleigh reindeer sparkle gingerbread.
      </span>
    </p>
  </section>
</template>

<style lang="scss" scoped>
  $green-light: #30aa82;
  $green-dark: #214e2e;

  @layer components {
    @property --gradient-percentage {
      syntax: "<percentage>";
      initial-value: 30%;
      inherits: false;
    }

    @keyframes grow {
      from {
        --gradient-percentage: 30%;
      }
      to {
        --gradient-percentage: 100%;
      }
    }

    @keyframes shrink {
      from {
        --gradient-percentage: 100%;
      }
      to {
        --gradient-percentage: 30%;
      }
    }

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }

    p {
      cursor: default;
      width: min(800px, 80%);

      &:hover > .highlighted-text {
        animation: grow 0.2s ease-in-out;
        animation-fill-mode: forwards;
      }
    }

    .highlighted-text {
      font-size: 2rem;
      color: white;
      padding: 0 10px;

      animation: shrink 0.2s ease-in-out;

      background: linear-gradient(
        to top,
        $green-dark var(--gradient-percentage),
        transparent 10%
      );
      -webkit-box-decoration-break: clone;
      box-decoration-break: clone;
    }

    @media (min-width: 640px) {
      .highlighted-text {
        font-size: 3rem;
      }
    }
  }
</style>
