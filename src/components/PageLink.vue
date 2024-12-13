<script setup>
  import { RouterLink } from "vue-router";

  defineProps({
    path: String,
    number: Number,
    title: String,
    thumbnail: String,
  });
</script>

<template>
  <RouterLink :to="path" class="project-link" draggable="false">
    <img :src="thumbnail" :alt="'Challenge ' + number" draggable="false" />
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
      border-radius: 1rem;
      outline: 4px solid white;
      outline-offset: 4px;
      transition: outline 0.2s ease-in-out;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        aspect-ratio: 1 / 1;
        transition: transform 0.2s ease-in-out;
      }

      p {
        position: absolute;
        bottom: -30%;
        width: 100%;
        padding: 8px 15px;
        background-color: rgba(0, 0, 0, 0.5);

        transition: all 0.2s ease-in-out;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        user-select: none;
      }

      &:hover {
        outline-color: #30aa82;

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
        flex: 1 1 20%;

        img {
          aspect-ratio: 16 / 9;
        }
      }
    }
  }
</style>
