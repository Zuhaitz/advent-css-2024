<script setup>
  import { RouterLink } from "vue-router";

  defineProps({
    number: Number,
    title: String,
    thumbnail: String,
  });
</script>

<template>
  <RouterLink :to="'/challenge' + number" class="project-link">
    <img :src="thumbnail" :alt="'Challenge ' + number" />
    <p>{{ title }}</p>
  </RouterLink>
</template>

<style lang="scss" scoped>
  @layer components {
    .project-link {
      position: relative;
      // max-width: 240px;
      height: 240px;

      overflow: hidden;
      border-radius: 0.5rem;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        aspect-ratio: 1 / 1;
        transition: all 0.2s ease-in-out;
      }

      p {
        position: absolute;
        bottom: -30%;
        width: 100%;
        padding: 5px 10px;
        background-color: rgba(0, 0, 0, 0.5);

        transition: all 0.2s ease-in-out;
      }

      &:hover {
        img {
          transform: scale(1.1);
        }
        p {
          bottom: 0;
        }
      }
    }

    @media (min-width: 1024px) {
      .project-link {
        max-width: 320px;
        height: 180px;

        img {
          aspect-ratio: 16 / 9;
        }
      }
    }
  }
</style>
