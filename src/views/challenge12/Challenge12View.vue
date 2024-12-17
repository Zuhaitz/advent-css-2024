<script setup>
  import { defineAsyncComponent, shallowRef } from "vue";
  const html1 = defineAsyncComponent(() => import("./elements/Html1.vue"));
  const html2 = defineAsyncComponent(() => import("./elements/Html2.vue"));
  const html3 = defineAsyncComponent(() => import("./elements/Html3.vue"));
  const html4 = defineAsyncComponent(() => import("./elements/Html4.vue"));

  // Remove performance warning
  const html = shallowRef(html1);

  const handleHtml = (cmp) => (html.value = cmp);
</script>

<template>
  <section class="container">
    <h1 class="page_title">12 - Same HTML, Different CSS</h1>

    <div class="style-buttons">
      <button @click="handleHtml(html1)">Style 1</button>
      <button @click="handleHtml(html2)">Style 2</button>
      <button @click="handleHtml(html3)">Style 3</button>
      <button @click="handleHtml(html4)">Style 4</button>
    </div>

    <Transition
      :enter-active-class="$route.meta.enterClass"
      :leave-active-class="$route.meta.leaveClass"
      mode="out-in"
    >
      <component :is="html" />
    </Transition>
  </section>
</template>

<style lang="scss" scoped>
  @layer components {
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .highlight {
      background-color: #30aa82;
    }

    .style-buttons {
      display: flex;
      gap: 2px;
      margin-bottom: 2rem;
      background-color: #30aa82;

      button {
        cursor: pointer;
        padding: 10px;
        font-size: 1rem;
        font-weight: bold;
        color: white;
        background-color: transparent;
        border: none;
        background-color: #1e1e1e;

        transition: background-color 0.1s linear, color 0.1s linear;

        &:hover {
          color: #1e1e1e;
          background-color: #30aa82;
        }
      }
    }

    @media (min-width: 640px) {
      .style-buttons {
        display: flex;
        gap: 1.5rem;
        background-color: transparent;

        button {
          cursor: pointer;
          padding: 10px 30px;
          font-size: 1.2rem;

          border-radius: 10rem;
          border: 4px solid #30aa82;
        }
      }
    }
  }
</style>
