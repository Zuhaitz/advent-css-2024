<script setup>
  import CalendarIcon from "@/assets/images/challenge13/CalendarIcon.vue";
  import UserIcon from "@/assets/images/challenge13/UserIcon.vue";
  import FormIcon from "@/assets/images/challenge13/FormIcon.vue";
</script>

<template>
  <section class="container">
    <h1 class="page_title">13 - Three-State Toggle</h1>

    <div class="toggle">
      <button autofocus><CalendarIcon /></button>
      <button><UserIcon /></button>
      <button><FormIcon /></button>
      <span class=""></span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @layer components {
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .toggle {
      position: relative;
      display: flex;

      &::before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 33%;
        height: 100%;

        background-color: #30aa82;
        transition: 9999s transform 0.2s linear;
      }

      button {
        cursor: pointer;
        padding: 10px 20px;
        border: 2px solid #30aa82;
        background-color: transparent;

        &:focus > svg {
          color: white;
        }
      }

      svg {
        color: #30aa82;
      }

      &:has(:nth-child(1):focus)::before {
        transform: translateX(0);
        transition: transform 0.2s linear;
      }
      &:has(:nth-child(2):focus)::before {
        transform: translateX(101%);
        transition: transform 0.2s linear;
      }
      &:has(:nth-child(3):focus)::before {
        transform: translateX(201%);
        transition: transform 0.2s linear;
      }
    }
  }
</style>
