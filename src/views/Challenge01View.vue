<script setup>
  import Navbar from "@/components/Navbar.vue";
  import photo1 from "../assets/images/challenge01/photo1.jpg";
  import photo2 from "../assets/images/challenge01/photo2.jpg";
  import photo3 from "../assets/images/challenge01/photo3.jpg";
  import photo4 from "../assets/images/challenge01/photo4.jpg";
  import photo5 from "../assets/images/challenge01/photo5.jpg";

  import PhotoGallery from "../components/PhotoGallery.vue";
</script>

<template>
  <Navbar :next="{ path: '/challenge2', title: '2 - CSS Only Toggle' }" />

  <section class="container">
    <PhotoGallery :photos="[photo1, photo2, photo3, photo4, photo5, photo5]" />
    <PhotoGallery :photos="[photo1, photo2, photo3, photo4, photo5]" />
    <PhotoGallery :photos="[photo1, photo2, photo3, photo4]" />
    <PhotoGallery :photos="[photo1, photo2, photo3]" />
    <PhotoGallery :photos="[photo1, photo2]" />
    <PhotoGallery :photos="[photo1]" />
  </section>
</template>

<style lang="scss" scoped>
  @layer components {
    .container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 1rem;

      height: 100%;
      padding: 30px;
    }

    @media (min-width: 1024px) {
      .container {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
</style>
