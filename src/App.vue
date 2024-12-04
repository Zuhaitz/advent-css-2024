<script setup>
  import { RouterLink, RouterView } from "vue-router";
  import logo from "./assets/logo.svg";
</script>

<template>
  <header>
    <div class="page-name">
      <img :src="logo" alt="logo" />
      <p>Advent <span class="colored-text">CSS</span> 2024</p>
    </div>
    <nav>
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/about" class="nav-link">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
  $accent-color: #30aa82;

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
    }
  }
</style>
