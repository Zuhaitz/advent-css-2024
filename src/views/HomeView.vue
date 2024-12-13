<script setup>
  import Navbar from "@/components/Navbar.vue";
  import PageLink from "@/components/PageLink.vue";
  import { pageLinks } from "@/utils/pagesInfo";
</script>

<template>
  <div class="page">
    <PageLink v-for="page in pageLinks" :key="page.id" v-bind="page" />
  </div>
</template>

<style lang="scss" scoped>
  @layer components {
    .page {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      align-items: center;
      gap: 1.5rem 2rem;

      height: 100%;
      padding: 10px 30px;
    }

    @media (min-width: 1024px) {
      .page {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
      }
    }
  }
</style>
