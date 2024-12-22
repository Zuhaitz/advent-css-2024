<template>
  <section class="container">
    <h1 class="page-title">18 - Skeleton Loading Image</h1>

    <div class="skeleton">
      <div class="skeleton__avatar"></div>
      <div class="skeleton__data">
        <p></p>
        <p></p>
      </div>

      <div class="skeleton__content"></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @layer components {
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
        background-color: #d9d9d9;
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
          background-color: #d9d9d9;

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
        background-color: #d9d9d9;

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
