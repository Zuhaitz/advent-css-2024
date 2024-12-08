<template>
  <section class="container">
    <h1 class="page_title">Scroll up to Reveal the Footer</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolore eos
      culpa natus? Necessitatibus eligendi amet corporis, recusandae, eum
      impedit vel, unde voluptatem expedita sequi in optio. Voluptas, adipisci
      laboriosam.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ad minus
      libero dolore provident, aut quia id architecto incidunt laboriosam,
      dolorem dolor eligendi tenetur facere tempora? Est nemo et cumque.
    </p>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
      distinctio deleniti? Perspiciatis eos, placeat earum fuga quia quibusdam
      animi totam doloremque hic nisi ipsam, quisquam quaerat quis quas odio!
      Molestiae.
    </p>
  </section>

  <footer class="footer">
    <p>Copyright &copy; 2024. All Rights Reserved</p>
    <p>Disclaimers. Privacy Policy. Terms & Conditions</p>
  </footer>
</template>

<style lang="scss" scoped>
  @layer components {
    .container {
      position: relative;
      z-index: 1;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;

      min-height: 100vh;
      padding: 20px;

      background: inherit;
      background-color: #1e1e1e;

      p {
        text-align: center;
        font-size: 1.5rem;
        width: min(90%, 1024px);
      }
    }

    .footer {
      position: sticky;
      bottom: 0;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 30px;

      text-align: center;
      text-wrap: balance;

      background-color: #30aa82;
    }
  }
</style>
