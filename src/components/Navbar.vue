<script setup>
  import { RouterLink } from "vue-router";
  import logo from "../assets/logo.svg";
  import leftArrowIcon from "../assets/icons/arrow-small-left.svg";

  defineProps({
    previous: { type: Object, default: null },
    next: { type: Object, default: null },
  });
</script>

<template>
  <header>
    <div v-if="!previous" class="page-name">
      <img :src="logo" alt="logo" />
      <p>Advent <span class="colored-text">CSS</span> 2024</p>
    </div>
    <RouterLink v-else :to="previous.path" class="left-link" draggable="false">
      <img :src="leftArrowIcon" alt="left icon" />
      <p>{{ previous.title }}</p>
    </RouterLink>

    <nav>
      <RouterLink to="/" class="nav-link" draggable="false">Home</RouterLink>
      <RouterLink to="/about" class="nav-link" draggable="false"
        >About</RouterLink
      >
    </nav>

    <RouterLink
      v-if="next"
      :to="next.path"
      class="right-link"
      draggable="false"
    >
      <p>{{ next.title }}</p>
      <img :src="leftArrowIcon" alt="left icon" />
    </RouterLink>
  </header>
</template>

<style lang="scss" scoped>
  $accent-color: #30aa82;
  $background-color: #1e1e1e;
  $background-color-focus: #363636;

  @layer base {
    header {
      position: relative;
      border-bottom: 2px solid $accent-color;
      margin-bottom: 1rem;
    }

    nav {
      display: flex;
      justify-content: center;

      width: 100%;
    }
  }

  @layer components {
    .page-name {
      position: absolute;
      left: 20px;
      top: 0;
      display: flex;
      align-items: center;
      gap: 8px;

      height: 100%;

      img {
        display: none;
        width: 30px;
      }

      p {
        display: none;
        font-size: 1.5rem;

        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */
      }
    }

    .left-link,
    .right-link {
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);

      display: flex;
      align-items: center;
      gap: 8px;

      padding: 5px;
      height: fit-content;

      text-decoration: none;

      img {
        width: 30px;
      }

      p {
        display: none;
        font-size: 1.5rem;
        max-width: 350px;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */
      }

      &:hover {
        border-radius: 100%;
        background: $background-color-focus;
      }
    }

    .right-link {
      position: absolute;
      left: auto;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);

      img {
        transform: scaleX(-1);
      }
    }

    .nav-link {
      display: flex;
      align-items: center;
      gap: 5px;
      height: 50px;
      padding: 10px 20px;

      font-weight: bold;
      font-size: 1.2rem;
      text-decoration: none;

      -webkit-user-select: none; /* Safari */
      -ms-user-select: none; /* IE 10 and IE 11 */
      user-select: none; /* Standard syntax */

      &:hover {
        background-color: $accent-color;
      }
    }

    @media (min-width: 768px) {
      .page-name > img {
        display: block;
      }
    }

    @media (min-width: 1024px) {
      .page-name > p {
        display: block;
      }

      .left-link {
        padding-right: 10px;

        p {
          display: block;
        }

        &:hover {
          border-radius: 0.5rem;
        }
      }

      .right-link {
        padding-left: 10px;

        p {
          display: block;
        }

        &:hover {
          border-radius: 0.5rem;
        }
      }
    }
  }
</style>
