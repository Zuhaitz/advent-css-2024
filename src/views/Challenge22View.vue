<template>
  <section class="container">
    <h1 class="page-title">22 - Equal Column Layout</h1>

    <ol class="list-products">
      <!-- PRODUCT 1 -->
      <li class="products">
        <img
          src="@/assets/images/challenge22/image-1.png"
          srcset="
            @/assets/images/challenge22/image-1@2x.png 2x,
            @/assets/images/challenge22/image-1.png    1x
          "
          alt="Made in Dutch Oven"
        />
        <h1>Made in Dutch Oven</h1>
        <div>
          <a href="#">Check Price on Made In</a>
        </div>
        <p>
          The Made In blew us away with its nonstick qualities, heat
          distribution, and moisture retention. Plus it's available in several
          beautiful colors. <a href="#">Read More</a>
        </p>
        <h2>Pros</h2>
        <ul class="pros">
          <li>Excellent cooking results</li>
          <li>Comfortable handles</li>
          <li>Affordable</li>
        </ul>
        <h2>Cons</h2>
        <ul class="cons">
          <li>None we could find</li>
        </ul>
      </li>

      <!-- PRODUCT 2 -->
      <li class="products">
        <img
          src="@/assets/images/challenge22/image-2.png"
          srcset="
            @/assets/images/challenge22/image-2@2x.png 2x,
            @/assets/images/challenge22/image-2.png    1x
          "
          alt="Le Creuset Enameled Cast Iron Signature Round Dutch Oven, 5.5 qt., Marseille"
        />
        <h1>
          Le Creuset Enameled Cast Iron Signature Round Dutch Oven, 5.5 qt.,
          Marseille
        </h1>
        <div>
          <a href="#">Check Price on Amazon</a>
          <a href="#">Check Price on Walmart</a>
        </div>
        <p>
          TA long-time favorite, Le Creuset's Dutch oven does not disappoint.
          Note that the slightly larger size means it needs a bit more space
          than others. <a href="#">Read More</a>
        </p>
        <h2>Pros</h2>
        <ul class="pros">
          <li>Large handles</li>
          <li>Excellent cooking results</li>
          <li>A long-time cook's favorite</li>
        </ul>
        <h2>Cons</h2>
        <ul class="cons">
          <li>Large size can crowd out other cookery</li>
        </ul>
      </li>

      <!-- PRODUCT 3 -->
      <li class="products">
        <img
          src="@/assets/images/challenge22/image-3.png"
          srcset="
            @/assets/images/challenge22/image-3@2x.png 2x,
            @/assets/images/challenge22/image-3.png    1x
          "
          alt="Lodge Enameled Cast Iron 6-Quart Dutch Oven"
        />
        <h1>Lodge Enameled Cast Iron 6-Quart Dutch Oven</h1>
        <div>
          <a href="#">Check Price on Amazon</a>
          <a href="#">Check Price on Target</a>
        </div>
        <p>
          This Dutch oven cooks as well as any high-end version and is a great
          buy in any color, as long as you don't mind it's slightly narrow
          bottom. <a href="#">Read More</a>
        </p>
        <h2>Pros</h2>
        <ul class="pros">
          <li>Cleans easily</li>
          <li>Multiple color options</li>
          <li>Scores high in a variety of cooking tests</li>
        </ul>
        <h2>Cons</h2>
        <ul class="cons">
          <li>Smaller-than-average-base</li>
        </ul>
      </li>

      <!-- PRODUCT 4 -->
      <li class="products">
        <img
          src="@/assets/images/challenge22/image-4.png"
          srcset="
            @/assets/images/challenge22/image-4@2x.png 2x,
            @/assets/images/challenge22/image-4.png    1x
          "
          alt="HexClad 5-Quart Dutch Oven"
        />
        <h1>HexClad 5-Quart Dutch Oven</h1>
        <div>
          <a href="#">Check Price on Amazon</a>
        </div>
        <p>
          This stainless steel Dutch oven is lightweight and excels at browning
          and baking bread. However, its lightweight build means cooking results
          can vary. <a href="#">Read More</a>
        </p>
        <h2>Pros</h2>
        <ul class="pros">
          <li>Lightweight</li>
          <li>Even, fast heating</li>
          <li>Dishwasher safe</li>
        </ul>
        <h2>Cons</h2>
        <ul class="cons">
          <li>Baking results sometimes take longer</li>
          <li>Unable to produce fond</li>
        </ul>
      </li>

      <!-- PRODUCT 5 -->
      <li class="products">
        <img
          src="@/assets/images/challenge22/image-5.png"
          srcset="
            @/assets/images/challenge22/image-5@2x.png 2x,
            @/assets/images/challenge22/image-5.png    1x
          "
          alt="Staub Cast Iron 5.5-Quart Round Cocotte"
        />
        <h1>Staub Cast Iron 5.5-Quart Round Cocotte</h1>
        <div>
          <a href="#">Check Price on Amazon</a>
        </div>
        <p>
          Highly rated and a pro with any cooking task you throw at it, the
          Staub Cast Iron Dutch oven is well worth its price...and weight.
          <a href="#">Read More</a>
        </p>
        <h2>Pros</h2>
        <ul class="pros">
          <li>Cleans easily</li>
          <li>Well built, solid</li>
          <li>Cooks evenly</li>
        </ul>
        <h2>Cons</h2>
        <ul class="cons">
          <li>Heavy</li>
        </ul>
      </li>
    </ol>
  </section>
</template>

<style lang="scss" scoped>
  $gray-border: #d6d6d6;
  $red-minus: #ef7b69;
  $navy-blue: #090d3d;

  @layer components {
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
    }

    .list-products {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
      width: 100%;
      padding: 30px 0;

      color: black;
      background-color: white;
    }

    .products {
      place-self: center;

      display: grid;
      grid-template-rows: subgrid;
      grid-row: span 10;
      row-gap: 1rem;

      max-width: 300px;
      padding: 24px 12px;

      border: 2px solid $gray-border;

      counter-increment: item;
      margin-bottom: 5px;

      &:before {
        content: counter(item);
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 72px;
        height: 72px;

        font-size: 48px;
        font-weight: bold;

        color: white;
        background-color: $navy-blue;
      }

      img {
        width: 100%;
        height: auto;
        object-fit: contain;
      }

      h1 {
        text-align: center;
        font-weight: bold;
        font-size: 28px;
        line-height: 32px;
      }

      > div {
        display: flex;
        flex-direction: column;
        gap: 12px;

        a {
          width: 100%;
          // height: fit-content;
          padding: 18px 0;

          text-align: center;
          text-decoration: none;
          font-weight: bold;
          font-size: 22px;
          line-height: 27px;

          border-radius: 12px;
          background-color: $red-minus;
        }
      }

      p {
        font-size: 16px;
        line-height: 24px;

        > a {
          font-weight: bold;
          color: black;
          background-color: white;
        }
      }

      h2 {
        font-weight: bold;
        font-size: 22px;
        line-height: 27px;
      }

      .pros,
      .cons {
        font-size: 16px;
        line-height: 22px;
        list-style: none;

        li {
          display: flex;
          align-items: center;
          gap: 12px;
        }
      }

      .pros > li:before {
        content: url("../assets/images/challenge22/check.svg");
      }

      .cons > li:before {
        content: url("../assets/images/challenge22/minus.svg");
      }
    }
  }
</style>
