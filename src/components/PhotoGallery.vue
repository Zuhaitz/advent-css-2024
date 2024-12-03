<script setup>
  defineProps({ photos: Array });
</script>

<template>
  <div class="gallery">
    <div v-for="(photo, i) in photos" :key="i">
      <img :src="photo" :alt="`Photo ${i}`" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @layer base {
    div:has(> img) {
      overflow: hidden;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0.5rem;
    }
  }

  @layer components {
    .gallery {
      display: grid;
      gap: 1rem;

      // width: 568px;
      height: 360px;
      padding: 1rem;
      border-radius: 0.5rem;
      background-color: white;

      &:has(div:nth-child(2)) {
        grid-template-columns: repeat(2, 1fr);
      }

      &:has(div:nth-child(3)) {
        :nth-child(3) {
          grid-column: span 2;
        }
      }

      &:has(div:nth-child(4)) {
        :nth-child(3),
        :nth-child(4) {
          grid-column: span 1;
        }
      }

      &:has(div:nth-child(5)) {
        grid-template-columns: repeat(6, 1fr);

        :nth-child(1),
        :nth-child(2) {
          grid-column: span 3;
        }

        :nth-child(3),
        :nth-child(4),
        :nth-child(5) {
          grid-column: span 2;
        }
      }

      &:has(div:nth-child(6)) {
        :nth-child(5) {
          position: relative;

          &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 0.5rem;
            background-color: black;
            opacity: 0.2;
          }

          &::after {
            content: "+21";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 2.5rem;
            font-weight: bold;
          }
        }
      }

      & > div:nth-child(n + 6) {
        display: none;
      }
    }
  }
</style>
