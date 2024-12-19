<template>
  <section class="container">
    <h1 class="page_title">14 - Corner Ribbon</h1>
    <div class="corner-ribbon"><p>Open source</p></div>

    <div class="card">
      <div class="corner-ribbon"><p>Open source</p></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  $dimensions: 100px;
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
      width: min(800px, 90%);
      height: 500px;
      border: 3px solid $green-light;
      overflow: hidden;
    }

    .corner-ribbon {
      position: absolute;
      top: 0;
      right: 0;
      width: $dimensions;
      height: $dimensions;
      overflow: hidden;

      p {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);

        padding: 5px;
        width: 200%;

        font-size: 0.5rem;
        text-align: center;
        text-transform: uppercase;

        background-color: $green-light;
      }
    }
  }
</style>
