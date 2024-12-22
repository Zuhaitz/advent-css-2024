<template>
  <section class="container">
    <h1 class="page-title">17 - CSS Only Brackets</h1>

    <div class="news-sign">
      <h2 class="news-sign__title">Newsletter signup</h2>

      <form @submit.prevent="() => {}" class="news-sign__form">
        <div class="news-sign__inputs">
          <div class="news-sign__input">
            <label for="first">First name</label>
            <input type="text" name="first" id="first" autocomplete="off" />
          </div>
          <div class="news-sign__input">
            <label for="last">Last name</label>
            <input type="text" name="last" id="last" autocomplete="off" />
          </div>
          <div class="news-sign__input">
            <label for="email">Email</label>
            <input type="text" name="email" id="email" autocomplete="off" />
          </div>
        </div>

        <button type="submit" class="news-sign__submit">Sign up</button>
      </form>
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

    .news-sign {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 25px 0;

      color: black;

      background-color: white;
      background-image: url("../assets/images/challenge17/graph-paper.jpeg");
      background-size: 700px;

      &__title {
        margin-bottom: 10px;
        font-size: 2rem;
        text-align: center;
        text-transform: uppercase;
      }

      &__form {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      &__inputs {
        position: relative;
        border: 4px solid black;

        &::before,
        &::after {
          content: "";
          position: absolute;
          top: -17px;

          width: 60px;
          height: 60px;

          background-color: #00f7ff;
          mix-blend-mode: multiply;
        }

        &::before {
          left: -17px;
          clip-path: polygon(
            0% 0%,
            100% 0%,
            100% 25%,
            25% 25%,
            25% 100%,
            0% 100%
          );
        }

        &::after {
          right: -17px;
          clip-path: polygon(
            0% 0%,
            100% 0%,
            100% 100%,
            75% 100%,
            75% 25%,
            0% 25%
          );
        }
      }

      &__input {
        width: 100%;
        display: flex;
        border-bottom: 2px solid black;

        &:last-child {
          border: none;
        }

        label,
        input {
          padding: 5px 10px;
        }

        label {
          width: 7rem;
          text-align: right;
          font-weight: bold;
          text-transform: uppercase;

          border-right: 2px solid black;
        }

        input {
          flex-grow: 1;
          background: transparent;
          border: none;
          outline: none;
        }
      }

      &__submit {
        width: 100%;
        padding: 5px;

        font-weight: bold;
        text-transform: uppercase;

        border: none;
        outline: none;

        background-color: #fbfb20;
        mix-blend-mode: multiply;
      }
    }

    @media (min-width: 640px) {
      .news-sign {
        width: min(600px, 80%);
        padding: 60px;

        border-radius: 2rem;

        &__title {
          font-size: 2.5rem;
          line-height: 2rem;
          text-align: left;
        }

        &__form {
          width: 100%;
          padding: 20px;
        }
      }
    }

    @media (min-width: 1024px) {
      .news-sign {
        width: min(800px, 80%);
        padding: 60px;

        &__title {
          font-size: 3.5rem;
          line-height: 3rem;
          margin-bottom: 20px;
          padding: 0 30px;
          text-align: left;
        }

        &__form {
          padding: 0 100px;
        }

        &__input {
          border-bottom: 3px solid black;

          label,
          input {
            padding: 10px 15px;
            font-size: 1.2rem;
          }

          label {
            width: 9rem;
            text-align: right;
            border-right: 3px solid black;
          }
        }

        &__submit {
          font-size: 1.2rem;
        }
      }
    }
  }
</style>
