<template>
  <section class="container">
    <h1 class="page-title">14 - Corner Ribbon</h1>

    <div class="card">
      <h2>This is a card :)</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
        error voluptatum accusamus voluptatem ad eveniet hic exercitationem
        eaque tenetur porro eligendi libero ratione distinctio non, quisquam
        unde aut assumenda fugit!
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non minus
        consectetur in doloribus atque laborum ratione, ex, odio officiis,
        consequatur minima nostrum accusamus officia recusandae provident hic
        repudiandae aliquid quibusdam.
      </p>

      <div class="corner-ribbon">
        <p><span>Open source</span></p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  $dimensions: 100px;
  $ribbon-height: 30px;
  $font-size: 0.5rem;
  $overflow: 10px;
  $green-light: #30aa82;
  $green-dark: #214e2e;

  @layer components {
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }

    .card {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      width: min(900px, 90%);
      // height: 500px;
      padding: 20px 50px;

      border: 3px solid $green-light;
      border-radius: 10px;

      h2 {
        text-align: center;
        font-size: 2rem;
        text-wrap: balance;
      }

      p {
        text-align: center;
      }
    }

    .corner-ribbon {
      position: absolute;
      top: -$overflow;
      right: -$overflow;

      width: $dimensions;
      height: $dimensions;

      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;

      p {
        flex: 0 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;

        width: 150%;
        height: $ribbon-height;
        transform: rotate(45deg) translateY(calc($ribbon-height / -2));

        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        font-size: $font-size;
        letter-spacing: 0.1rem;

        background-color: $green-light;
      }

      &::before,
      &::after {
        content: "";
        position: absolute;
        z-index: -1;
        width: $overflow;
        height: $overflow;
        background-color: $green-dark;
      }

      &::before {
        top: 0;
        left: 0;
      }

      &::after {
        bottom: 0;
        right: 0;
      }
    }

    @media (min-width: 640px) {
      $dimensions: 120px;
      $ribbon-height: 35px;
      $font-size: 0.8rem;
      $overflow: 12px;

      .corner-ribbon {
        top: -$overflow;
        right: -$overflow;

        width: $dimensions;
        height: $dimensions;

        p {
          height: $ribbon-height;
          transform: rotate(45deg) translateY(calc($ribbon-height / -2));
          font-size: $font-size;
        }

        &::before,
        &::after {
          width: $overflow;
          height: $overflow;
        }
      }
    }
  }
</style>
