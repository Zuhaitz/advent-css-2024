<script setup>
  import PageLink from "@/components/PageLink.vue";
  import { pageLinks } from "@/utils/pageInfo";
</script>

<template>
  <div class="page">
    <PageLink
      v-for="page in pageLinks"
      :key="page.id"
      :number="page.number"
      :title="page.title"
      :thumbnail="page.thumbnail"
    />
  </div>
</template>

<style lang="scss" scoped>
  @layer components {
    .page {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      align-items: center;
      gap: 1rem;

      height: 100%;
      padding: 10px 30px;
    }

    @media (min-width: 1024px) {
      .page {
        display: flex;
      }
    }
  }
</style>
