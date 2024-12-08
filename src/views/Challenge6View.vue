<template>
  <div class="progress-bar"></div>

  <section class="container">
    <h1 class="page_title">Scroll Indicator</h1>

    <p v-for="i in 5" :key="i">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nemo commodi
      facere, fugit delectus quisquam accusantium voluptatum, deserunt odit
      corrupti iste? Optio asperiores odio alias reprehenderit ut,
      exercitationem minima ad?Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Aperiam officiis quaerat tempora, nam, nihil ratione
      repellendus dicta velit quae itaque sequi atque fuga odit odio, maxime id
      deserunt ducimus aut. Lorem ipsum dolor sit, amet consectetur adipisicing
      elit. Excepturi dolor illo pariatur laboriosam animi fugit et consectetur
      ullam? Facilis at reiciendis blanditiis accusamus odit pariatur et
      doloribus omnis ad doloremque. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Nihil laborum neque possimus magnam iure, aspernatur
      nostrum. Aut magni voluptatibus, eaque ea maiores esse voluptas! Velit
      aliquid quisquam odit iure obcaecati?
    </p>
  </section>
</template>

<style lang="scss" scoped>
  @layer components {
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;

      padding: 20px;

      background: inherit;
      background-color: #1e1e1e;

      scroll-timeline: --scroll-timeline block;

      p {
        text-align: center;
        font-size: 1.5rem;
        width: min(90%, 1024px);
      }
    }

    .progress-bar {
      position: fixed;
      z-index: 10;
      top: 0;
      height: 4px;
      transform-origin: left;
      background-color: #30aa82;

      animation: progress auto linear;
      animation-timeline: scroll(root block);
    }

    @keyframes progress {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }
  }
</style>
