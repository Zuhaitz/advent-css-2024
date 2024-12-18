<script setup>
  import CalendarIcon from "@/assets/images/challenge13/CalendarIcon.vue";
  import UserIcon from "@/assets/images/challenge13/UserIcon.vue";
  import FormIcon from "@/assets/images/challenge13/FormIcon.vue";
</script>

<template>
  <section class="container">
    <h1 class="page_title">13 - Three-State Toggle</h1>

    <div class="toggle">
      <div class="toggle__option">
        <input
          type="radio"
          id="calendar"
          name="section"
          value="calendar"
          checked
        />
        <label for="calendar"><CalendarIcon /></label>
      </div>

      <div class="toggle__option">
        <input type="radio" id="user" name="section" value="user" />
        <label for="user"><UserIcon /></label>
      </div>

      <div class="toggle__option">
        <input type="radio" id="form" name="section" value="form" />
        <label for="form"><FormIcon /></label>
      </div>
      <span class=""></span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @layer components {
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .toggle {
      position: relative;
      display: flex;

      &::before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 33%;
        height: 100%;

        background-color: #30aa82;
        transition: transform 0.2s linear;
      }

      &__option {
        display: flex;

        input {
          display: none;

          &:checked ~ label > svg {
            color: white;
          }
        }

        label {
          cursor: pointer;
          padding: 10px 20px;
          border: 2px solid #30aa82;
          background-color: transparent;
        }
      }

      svg {
        color: #30aa82;
        transition: color 0.1s linear;
      }

      &:has(:nth-child(1) > input:checked)::before {
        transform: translateX(0);
      }
      &:has(:nth-child(2) > input:checked)::before {
        transform: translateX(101%);
      }
      &:has(:nth-child(3) > input:checked)::before {
        transform: translateX(201%);
      }
    }
  }
</style>
