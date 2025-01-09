<template>
  <section class="container">
    <h1 class="page-title">23 - Animated Hamburger Menu</h1>

    <label for="burger" class="burger">
      <input type="checkbox" name="burger" id="burger" class="burger__input" />
      <div class="burger__line"></div>
    </label>
  </section>
</template>

<style lang="scss" scoped>
  $transition-duration: 0.3s;

  @layer components {
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .burger {
      cursor: pointer;
      position: relative;
      width: 75px;
      height: 75px;

      // To hide checkbox
      &__input {
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
      }

      &::before,
      &::after,
      &__line {
        content: "";
        position: absolute;
        width: 100%;
        height: 0.5rem;
        background-color: white;
      }

      &::before {
        top: 15%;
        transition: all $transition-duration ease-in-out;
      }

      &::after {
        bottom: 15%;
        transition: all $transition-duration ease-in-out;
      }

      &__line {
        transform: translateY(50%);
        bottom: 50%;
        transition: opacity calc($transition-duration / 2) ease-in-out;
        transition-delay: calc($transition-duration / 2);
      }

      &:has(&__input:checked) > &__line {
        opacity: 0;
        transition-delay: 0s;
      }

      &:has(&__input:checked)::before {
        top: 50%;
        transform: translateY(-50%) rotate(-135deg);
      }

      &:has(&__input:checked)::after {
        bottom: 50%;
        transform: translateY(50%) rotate(135deg);
      }
    }
  }
</style>
