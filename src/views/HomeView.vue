<script setup>
  import { RouterLink } from "vue-router";
  import galleryPhoto from "../assets/images/challenge1/photo1.jpg";
</script>

<template>
  <div class="container">
    <RouterLink to="/challenge1" class="project-link">
      <img :src="galleryPhoto" alt="Challenge 1" />
      <p>1 - Gallery</p>
    </RouterLink>
    <RouterLink to="/challenge2" class="project-link">
      <img :src="galleryPhoto" alt="Challenge 1" />
      <p>2 - CSS Only Toggle</p>
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
  @layer components {
    .container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      align-items: center;
      gap: 1rem;

      height: 100%;
      padding: 10px 30px;
    }

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
      .container {
        display: flex;
      }

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
