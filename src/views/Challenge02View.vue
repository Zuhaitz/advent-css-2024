<script setup>
  import checkboxIcon from "../assets/images/challenge02/check.svg";
</script>

<template>
  <section class="container">
    <h1 class="page_title">2 - CSS Only Toggle</h1>
    <label for="toggle" class="toggle">
      <input type="checkbox" name="toggle" id="toggle" class="toggle__input" />
      <div class="toggle__track">
        <span class="toggle__ball">
          <img :src="checkboxIcon" alt="checkbox" draggable="false" />
        </span>
      </div>
    </label>
  </section>
</template>

<style lang="scss" scoped>
  $toggle-ball-size: 16px * 5;
  $track-height: $toggle-ball-size + $toggle-ball-size * 0.25;
  $track-width: $toggle-ball-size * 2.5;
  $green: #02ff94;
  $gray: #7d7d7d;

  $speed: 0.3s;

  @layer components {
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 20px;
    }

    .toggle {
      cursor: pointer;

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
        background-color: #7d7d7d;
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
        transition: transform $speed ease-in-out;

        border-radius: 100%;
        background-color: black;

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
        background-color: $green;

        .toggle__ball {
          transform: translate($track-width - $track-height, -50%);

          img {
            opacity: 1;
          }
        }
      }
    }
  }
</style>
