<template>
  <section class="container">
    <h1 class="page-title">11 - Vertical Text with Outline</h1>
    <div class="merry">
      <h2 class="merry__title">Merry <span>Ipsum</span></h2>
      <div>
        <p>
          Candy cane jingle sleigh reindeer sparkle gingerbread. Holly wreath
          cozy snowflake mistletoe frosty cheer stockings joy. Tinsel lights
          evergreen cocoa yuletide twinkling carols glow. Snowman festive bells
          chimney Santa Claus warm wishes. Icicles cookies Rudolph gift wrapping
          merry elves. Deck the halls Noel laughter peppermint marshmallows
          hearth. Nutcracker fireplace holly berry cocoa sleigh bells cheer.
        </p>

        <p>
          Twinkling garland sugarplum stockings merry frosty glow. Snowflake
          sparkle reindeer cozy mittens Santa Claus cheer. Candy cane wishes
          holly wreath evergreen sleigh bells. Gingerbread elves cocoa
          peppermint laughter twinkling lights. Mistletoe chimneys warm cocoa
          carols bells Noel. Icicles glitter joy snowman marshmallows Christmas
          tree. Deck the halls with tinsel, cheer, and nutcrackers galore.
        </p>

        <p>
          Reindeer jingle frosty sparkle Santa Claus mistletoe. Sleigh bells
          candy cane chimney holly berry marshmallows glow. Noel warmth
          sugarplum snowman evergreen twinkling lights. Cozy cocoa peppermint
          wreaths gingerbread carols joy. Icicles nutcracker stockings reindeer
          chimney bells laughter. Holly fireplace snowflakes decked halls of
          yuletide splendor. Garland merry wishes frost-covered gifts by the
          hearth.
        </p>

        <p>
          Yuletide gingerbread stockings snowman glow warm cocoa mittens. Sleigh
          bells sparkle evergreen peppermint laughter marshmallows cheer.
          Icicles wreaths chimney twinkling mistletoe holly joy. Tinsel
          nutcracker garland sugarplum cozy Christmas wishes. Candy canes Santa
          Claus frosty decked halls festive lights. Rudolph sleigh reindeer
          snowflake warmth Noel by the fire. Chimneys glow with carols,
          stockings, and yuletide sparkle.
        </p>

        <p>
          Tinsel glitter snowman peppermint holly evergreen jingle cocoa.
          Sugarplum mittens sleigh bells frosty marshmallows twinkling carols.
          Santa Claus gifts mistletoe chimney nutcracker joy. Icicles cozy
          warmth by the hearth, decked halls. Reindeer Rudolph gingerbread
          festive candy cane garland glow. Holly wreaths cheer stockings glow
          with Christmas joy. Noel merry yuletide lights sparkle with holiday
          magic.
        </p>

        <p>
          Sleigh sparkle peppermint reindeer snowman stockings tinsel glow.
          Chimney frosty warmth cocoa laughter wreaths mistletoe cheer. Garland
          Santa Claus gingerbread bells carols nutcracker holly. Icicles
          sugarplum lights Rudolph festive fireplace joy. Snowflakes candy cane
          sparkle cozy decked halls with laughter. Warm wishes Noel glow by the
          evergreen-covered hearth. Cheer fills the air, with twinkling lights
          and marshmallows.
        </p>

        <p>
          Snowflake tinsel Santa Claus joy stockings sleigh bells mistletoe.
          Icicles Rudolph frosty sparkle cocoa wreaths gingerbread laughter.
          Peppermint chimney evergreen sugarplum garland marshmallows cheer.
          Festive reindeer glow Noel twinkling lights by the fire. Snowman cozy
          warmth fills the air with Christmas magic. Holly berry nutcracker
          sleigh gifts jingle joy. Deck the halls in yuletide splendor with
          cheer.
        </p>

        <p>
          Rudolph frosty candy canes peppermint tinsel stockings marshmallows
          glow. Sleigh bells twinkling mistletoe chimney garland wreaths holly.
          Santa Claus sugarplum nutcracker fireplace evergreen cheer joy. Warmth
          by the hearth with cozy cocoa and laughter. Icicles snowflakes
          reindeer sparkle gingerbread festive lights. Decked halls of Noel
          jingle with the magic of Christmas. Sleigh rides and carols bring joy
          to yuletide hearts.
        </p>

        <p>
          Evergreen twinkling snowflakes stockings candy canes mistletoe glow.
          Cozy fireplace cheer fills the air with Santa Claus magic. Garland
          wreaths sugarplum gingerbread sleigh bells festive laughter. Icicles
          sparkle Rudolph snowman holly berry joy by the hearth. Warm cocoa
          marshmallows peppermint chimney nutcracker Noel. Tinsel frosty sleigh
          lights twinkle in holiday splendor. Reindeer bring gifts as the season
          fills hearts with warmth.
        </p>

        <p>
          Twinkling lights garland wreaths candy canes stockings mistletoe joy.
          Snowman frosty cocoa laughter warm hearths decked halls. Santa Claus
          sparkle gingerbread sleigh bells Rudolph nutcracker cheer. Icicles
          glow reindeer sugarplum marshmallows cozy evergreen. Noel festive
          tinsel carols holly wreaths twinkling lights. Chimney warmth fills the
          air with Christmas magic and laughter. Decked halls glisten with
          yuletide splendor and holiday glow.
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Public+Sans:ital,wght@0,100..900;1,100..900&family=Roboto&family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap");

  @layer components {
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .merry {
      display: grid;
      width: 90%;
      grid-template-columns: 30% 70%;

      &__title,
      &__title > span {
        text-transform: uppercase;
        font-family: "Public Sans", sans-serif;
        font-style: bold;

        user-select: none;
      }

      &__title {
        margin-right: 4rem;

        font-size: 3rem;
        text-align: right;
        writing-mode: vertical-rl;
        transform: rotate(180deg);

        color: #1e1e1e;
        -webkit-text-stroke: 3px red;
      }

      p {
        text-align: center;
        margin-bottom: 2rem;
      }
    }

    @media (min-width: 640px) {
      .merry {
        width: min(1000px, 80%);

        &__title {
          display: flex;
          justify-content: center;
          flex-direction: column;
          margin-right: 4rem;

          font-size: 7rem;
          line-height: 6rem;
        }

        p {
          text-align: left;
        }
      }
    }

    @media (min-width: 1024px) {
      .merry {
        &__title {
          font-size: 10rem;
          line-height: 9rem;
        }
      }
    }
  }
</style>
