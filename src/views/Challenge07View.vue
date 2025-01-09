<template>
  <section class="container">
    <h1 class="page-title">7 - Animated Label</h1>
    <div class="form_input">
      <input
        type="email"
        id="email"
        name="email"
        novalidate
        autocomplete="off"
      />
      <label for="email">Email Address</label>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  $input-width: 800px;
  $font-size: 2rem;
  $label-size: 1.5rem;

  @layer components {
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    .form_input {
      display: flex;
      flex-direction: row-reverse;
      position: relative;
      width: min(800px, 80%);
      padding: 10px;
      border-radius: 1rem;
      border: 2px solid #214e2e;
      background-color: #1e1e1e;

      label {
        position: absolute;
        top: 50%;
        left: 20px;
        transform: translateY(-50%);
        padding: 0 10px;

        transition: all 0.1s linear;

        background-color: #1e1e1e;
      }

      input {
        width: 100%;

        outline: none;
        border: none;
        color: white;
        background-color: #1e1e1e;
      }

      &:has(input:focus) {
        border-color: #30aa82;
      }

      :has(input:invalid) {
        border-color: #aa3059;
      }

      input:focus + label {
        top: 0;
        font-size: 1rem;
        font-weight: bold;
        color: #30aa82;
      }
    }

    @media (min-width: 768px) {
      .form_input {
        padding: 10px 20px;
        border: 3px solid #214e2e;

        label {
          font-size: $label-size;
        }

        input {
          font-size: $font-size;
        }
      }
    }
  }
</style>
