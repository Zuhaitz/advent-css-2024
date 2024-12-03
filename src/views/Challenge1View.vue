<script setup>
  import photo1 from "../assets/images/challenge1/photo1.jpg";
  import photo2 from "../assets/images/challenge1/photo2.jpg";
  import photo3 from "../assets/images/challenge1/photo3.jpg";
  import photo4 from "../assets/images/challenge1/photo4.jpg";
  import photo5 from "../assets/images/challenge1/photo5.jpg";

  import PhotoGallery from "../components/PhotoGallery.vue";
</script>

<template>
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
      grid-template-columns: repeat(auto-fit, minmax(568px, 1fr));
      gap: 1rem;

      height: 100%;
      padding: 30px;
    }
  }
</style>
