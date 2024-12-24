<script setup>
  import githubLogo from "@/assets/icons/github-logo.svg";
</script>

<template>
  <section class="container">
    <div class="frosty-nav">
      <button>Home</button>
      <button>Get Started</button>
      <button>Documentation</button>
      <button>Blog</button>
      <button>Demo</button>
      <div>
        <img :src="githubLogo" alt="github logo" />
      </div>
    </div>
    <h1 class="page-title">20 - Frosted glass effect</h1>
  </section>
</template>

<style lang="scss" scoped>
  @layer components {
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      height: 120vh;
      padding-top: 30px;

      background-image: url("../assets/images/challenge20/background.jpg");
      background-size: cover;
      background-position: top;
    }

    .frosty-nav {
      width: 90%;
      position: sticky;
      top: 20px;

      display: flex;
      justify-content: space-evenly;
      padding: 8px;

      border-radius: 10rem;
      border: 2px solid #8ba19f;

      background-color: rgba(139, 161, 159, 0.15);
      backdrop-filter: blur(5px);

      button {
        display: none;

        font-size: 18px;
        font-weight: bold;
        line-height: 22px;

        color: white;
        background: none;
        border: none;

        &:nth-child(1),
        &:nth-child(2) {
          display: block;
        }
      }

      div > img {
        width: 32px;
        height: 32px;
        object-fit: contain;
        aspect-ratio: 1 / 1;
      }
    }

    @media (min-width: 768px) {
      .page-title {
        font-size: 3rem;
      }

      .frosty-nav {
        width: auto;
        padding: 8px 36px;
        gap: 40px;

        button {
          display: block;
        }
      }
    }

    @media (min-width: 1024px) {
      .page-title {
        font-size: 4rem;
      }
    }
  }
</style>
