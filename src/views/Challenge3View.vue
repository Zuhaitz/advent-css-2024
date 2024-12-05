<template>
  <section class="container">
    <h1 class="page_title">3 - CSS Only Tooltip</h1>
    <div class="box flex-center">
      <p class="text">My text <span class="text__tooltip">Tooltip</span></p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  $text-size: 2rem;

  @layer components {
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: max(50vh, 400px);
    }

    .box {
      height: 100%;
    }

    .text {
      position: relative;

      font-size: $text-size;
      text-decoration: underline;
      text-decoration-style: dotted;
      cursor: default;

      span {
        display: none;
        position: absolute;
        top: -130%;
        left: 50%;
        transform: translateX(-50%);
        padding: calc($text-size/3) calc($text-size/2);

        font-size: calc($text-size * 0.8);

        border-radius: 0.5rem;
        color: #1e1e1e;
        background-color: white;

        &::before {
          content: "";
          display: block;
          position: absolute;
          left: 50%;
          bottom: -10px;
          transform: translateX(-50%);

          width: 0;
          height: 0;

          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 10px solid white;
        }
      }

      &:hover > span {
        display: block;
      }
    }
  }
</style>
