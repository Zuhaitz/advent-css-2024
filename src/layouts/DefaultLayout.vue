<template>
  <Navbar :previous="$route.meta.previous" :next="$route.meta.next" />
  <RouterView v-slot="{ Component }">
    <Transition
      :enter-active-class="$route.meta.enterClass"
      :leave-active-class="$route.meta.leaveClass"
      mode="out-in"
    >
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<script setup>
  import Navbar from "@/components/Navbar.vue";
</script>

<style lang="scss" scoped>
  @layer base {
    .animate__animated {
      --animate-duration: 0.3s;
      --animate-timing-function: ease-in-out;
    }
  }
</style>
