<script setup>
  import moonIcon from "../assets/icons/moon.svg";
  import sunIcon from "../assets/icons/sun.svg";
</script>

<template>
  <section class="container">
    <label for="toggle" class="toggle">
      <input type="checkbox" name="toggle" id="toggle" class="toggle__input" />
      <div class="toggle__track">
        <span class="toggle__ball">
          <img :src="moonIcon" alt="checkbox" draggable="false" />
        </span>
      </div>
    </label>
  </section>
</template>

<style lang="scss" scoped>
  $toggle-ball-size: 16px * 2;
  $track-height: $toggle-ball-size + $toggle-ball-size * 0.25;
  $track-width: $toggle-ball-size * 2.5;

  $background-day: #3f112b;
  $circle-day: #f17159;
  $background-night: #1a163b;
  $circle-night: #a7c2de;

  $speed: 0.3s;

  @layer components {
    .container {
      position: relative;
      height: 100%;
      background-image: url("@/assets/images/challenge21/background.png");
      background-position: top 50% left 30%;
      background-repeat: no-repeat;

      transition: background-position 0.5s ease-in-out;
    }

    .toggle {
      cursor: pointer;
      position: absolute;
      top: 5px;
      left: 5px;

      // To hide checkbox
      &__input {
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
      }

      &__track {
        position: relative;
        width: $track-width;
        height: $track-height;
        background-color: $background-day;
        border-radius: 100px;
        transition: background 0.2s linear;
      }

      &__ball {
        position: absolute;
        top: $track-height * 0.5;
        left: $toggle-ball-size * 0.125;

        display: flex;
        align-items: center;
        justify-content: center;

        width: $toggle-ball-size;
        height: $toggle-ball-size;
        transform: translateY(-50%);
        transition: transform $speed ease-in-out, background 0.2s linear;

        border-radius: 100%;
        background-color: $circle-day;

        img {
          width: 70%;
          object-fit: cover;
          opacity: 0;
          transition: opacity $speed ease-in-out;

          -webkit-user-select: none; /* Safari */
          -ms-user-select: none; /* IE 10 and IE 11 */
          user-select: none; /* Standard syntax */
        }
      }

      &__input:checked ~ &__track {
        background-color: $background-night;

        .toggle__ball {
          background-color: $circle-night;
          transform: translate($track-width - $track-height, -50%);

          img {
            opacity: 1;
          }
        }
      }
    }

    @media (min-width: 640px) {
      .container {
        // background-position: top 50% right 30%;
      }
    }
  }
</style>
