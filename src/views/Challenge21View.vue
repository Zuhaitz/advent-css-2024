<script setup>
  import moonIcon from "../assets/icons/moon.svg";
  import sunIcon from "../assets/icons/sun.svg";
</script>

<template>
  <section class="container">
    <div class="theme-switcher">
      <label for="toggle" class="toggle">
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          class="toggle__input"
        />
        <div class="toggle__track">
          <span class="toggle__ball">
            <img :src="sunIcon" alt="sun icon" id="sun" draggable="false" />
            <img :src="moonIcon" alt="moon icon" id="moon" draggable="false" />
          </span>
        </div>
      </label>
    </div>
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
      display: flex;
      justify-content: center;
      height: 100%;
    }

    .theme-switcher {
      position: relative;
      width: 100%;
      height: 100%;

      background-image: url("@/assets/images/challenge21/background.png");
      background-position: top 50% left 30%;
      background-repeat: no-repeat;

      transition: background-position 0.5s ease-in-out;

      &:has(.toggle__input:checked) {
        background-position: top 50% right 30%;
      }
    }

    .toggle {
      cursor: pointer;
      position: absolute;
      top: 10px;
      left: 10px;

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
          position: absolute;
          // display: none;
          width: 70%;
          object-fit: cover;
          opacity: 0;
          transition: opacity $speed ease-in-out;

          -webkit-user-select: none; /* Safari */
          -ms-user-select: none; /* IE 10 and IE 11 */
          user-select: none; /* Standard syntax */
        }

        #sun {
          opacity: 1;
          transition-delay: calc($speed / 2);
        }

        #moon {
          transition-delay: 0s;
        }
      }

      &__input:checked ~ &__track {
        background-color: $background-night;

        .toggle__ball {
          background-color: $circle-night;
          transform: translate($track-width - $track-height, -50%);

          #moon {
            opacity: 1;
            transition-delay: calc($speed / 2);
          }

          #sun {
            opacity: 0;
            transition-delay: 0s;
          }
        }
      }
    }

    @media (min-width: 640px) {
      .theme-switcher {
        background-position: top 50% left 25%;

        &:has(.toggle__input:checked) {
          background-position: top 50% right 25%;
        }
      }
    }

    @media (min-width: 1024px) {
      .container {
        padding: 20px;
      }

      .theme-switcher {
        width: min(1200px, 90%);

        border-radius: 30px;
        background-position: top 50% left 0%;

        &:has(.toggle__input:checked) {
          background-position: top 50% right 0%;
        }
      }

      .toggle {
        top: 15px;
        left: 15px;
      }
    }
  }
</style>
