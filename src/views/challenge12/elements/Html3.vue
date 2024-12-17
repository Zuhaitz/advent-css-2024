<template>
  <div id="testimonials-3">
    <!-- TESTIMONIAL 1 -->
    <section>
      <div class="avatar">
        <img src="../images/avatar-1.png" alt="Samantha L" />
      </div>
      <div class="testimonial">
        Advent of CSS was exactly what I needed to level up my design skills.
        Each day's challenge gave me the perfect mix of creativity and
        problem-solving. By Christmas, I felt like a CSS wizard!
      </div>
      <div class="cite">
        <strong>Samantha L.,</strong> <em>Junior Developer</em>
      </div>
    </section>

    <!-- TESTIMONIAL 2 -->
    <section>
      <div class="avatar">
        <img src="../images/avatar-2.png" alt="James T" />
      </div>
      <div class="testimonial">
        I looked forward to every challenge during Advent of CSS! The tasks were
        engaging and varied, making me excited to tackle something new each day.
        My portfolio is shining brighter than ever now.
      </div>
      <div class="cite">
        <strong>James T.,</strong> <em>Aspiring Frontend Developer</em>
      </div>
    </section>

    <!-- TESTIMONIAL 3 -->
    <section>
      <div class="avatar">
        <img src="../images/avatar-3.png" alt="Ryan G" />
      </div>
      <div class="testimonial">
        As someone just starting out in web design, Advent of CSS was incredibly
        approachable. The challenges ranged from beginner-friendly to mildly
        complex, so I always felt like I was learning without being overwhelmed.
      </div>
      <div class="cite"><strong>Ryan G.,</strong> <em>CSS Newbie</em></div>
    </section>

    <!-- TESTIMONIAL 4 -->
    <section>
      <div class="avatar">
        <img
          src="../images/avatar-4.png"
          srcset="../images/avatar-4@2x.png 2x, ../images/avatar-4.png 1ximges
        "
          alt="Elena S"
        />
      </div>
      <div class="testimonial">
        Advent of CSS was the gift I didn’t know I needed. By the end of the
        month, my understanding of layouts, animations, and modern techniques
        had completely transformed. Can't wait for next year!
      </div>
      <div class="cite">
        <strong>Elena S.,</strong> <em>Frontend Developer</em>
      </div>
    </section>
  </div>
</template>

<style scoped>
  @import "../styles/styles.css";

  @layer base {
    .animate__animated {
      --animate-duration: 0.3s;
      --animate-timing-function: ease-in-out;
    }
  }
</style>
