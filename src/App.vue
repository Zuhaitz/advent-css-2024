<script setup>
  import { RouterLink, RouterView } from "vue-router";
  import logo from "./assets/logo.svg";
</script>

<template>
  <header>
    <div class="page-name">
      <img :src="logo" alt="logo" />
      <p>Advent CSS 2024</p>
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

  header {
    position: relative;
    // padding: 15px;

    border-bottom: 2px solid $accent-color;

    // background-color: aqua;
  }

  .page-name {
    position: absolute;
    left: 20px;
    top: 0;
    display: flex;
    align-items: center;
    gap: 8px;

    height: 100%;

    img {
      width: 30px;
    }

    p {
      font-size: 1.5rem;
    }
  }

  nav {
    display: flex;
    justify-content: center;

    width: 100%;
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

    &:hover {
      background-color: $accent-color;
    }
  }
</style>
