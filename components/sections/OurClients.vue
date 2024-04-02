<script
  setup
  lang="ts"
>
// @ts-ignore
// import SuperMarquee from 'sp-supermarquee'// import { Marquee, loop } from 'dynamic-marquee'
import { listenToScreenWidthChanges } from '@/helpers'



import { onMounted, ref } from 'vue';
const items = ref([{
  img: './clients/natro.svg',
  height: {
    sm: 24,
    md: 24,
    lg: 13.49,
    xl: 17.14,
    xxl: 24,
  }
}, {
  img: './clients/locaweb.svg',
  height: {
    sm: 24,
    md: 24,
    lg: 13.49,
    xl: 17.14,
    xxl: 24,
  }
}, {
  img: './clients/cellcom.svg',
  height: {
    sm: 24,
    md: 24,
    lg: 13.49,
    xl: 17.14,
    xxl: 24,
  }
}, {
  img: './clients/solid.svg',
  height: {
    sm: 24,
    md: 24,
    lg: 13.49,
    xl: 17.14,
    xxl: 24,
  }
}, {
  img: './clients/gallery.svg',
  height: {
    sm: 24,
    md: 28.5,
    lg: 16.01,
    xl: 20.36,
    xxl: 28.5,
  }
}, {
  img: './clients/netcore.svg',
  height: {
    sm: 24,
    md: 24,
    lg: 13.49,
    xl: 17.14,
    xxl: 24,
  }
}, {
  img: './clients/GCT.svg',
  height: {
    sm: 24,
    md: 24,
    lg: 13.49,
    xl: 17.14,
    xxl: 24,
  }
}, {
  img: './clients/Mavenir.svg',
  height: {
    sm: 24,
    md: 24,
    lg: 13.49,
    xl: 17.14,
    xxl: 24,
  }
}, {
  img: './clients/spark.svg',
  height: {
    sm: 24,
    md: 24,
    lg: 13.49,
    xl: 17.14,
    xxl: 24,
  }
}, {
  img: './clients/Algau.svg',
  height: {
    sm: 24,
    md: 24,
    lg: 13.49,
    xl: 17.14,
    xxl: 24,
  }
}, {
  img: './clients/private.svg',
  height: {
    sm: 24,
    md: 24,
    lg: 13.49,
    xl: 17.14,
    xxl: 24,
  }
}])
const imgSize = ref<'sm' | 'md' | "lg" | 'xl' | 'xxl'>('sm')
// 
onMounted(() => {
  const getIconSize = () => {
    if (window.innerWidth >= 1920) return 'xxl'

    if (window.innerWidth >= 1440) return 'xl'

    if (window.innerWidth >= 1024) return 'lg'
    if (window.innerWidth >= 640) return 'md'
    if (window.innerWidth >= 340) return 'sm'
    // if (window.innerWidth > ) return ''
    return 'sm'
  }
  const seIconSize = () => {
    imgSize.value = getIconSize()
  }
  listenToScreenWidthChanges(seIconSize, 300);
  seIconSize()

})


// onMounted(() => {
//   const sm = new SuperMarquee(document.getElementById('supermarquee'), {
//     "license": "BEFC87AE-065E44C8-A867C836-9856C754",
//     content: items.value.map(el => `<div class="our-clients-img-wrapper"><img src='${el.img}' class="our-clients-img"  /></div>`).join('')
//   })
// })


</script>

<template>
  <section class="clients">
    <div class="container">
      <div class="clients-header">Some of our clients</div>


      <!-- <div
      id="supermarquee"
      class="ticker-row-text"
    /> -->
      <div class="gallery">
        <div
          v-for="(item, idx) in items"
          :key="idx"
          class="item"
        >
          <img
            :style="{
            height: `${item.height[imgSize]}px`
          }"
            class="item-img"
            alt=""
            :src="item.img"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.our-clients-img-wrapper {
  width: 77px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 40px;

  @media (min-width: $md) {
    width: 150px;

  }
}

.our-clients-img {
  object-fit: cover;
}
</style>
<style
  scoped
  lang="scss"
>
.clients {
  margin-top: 78px;
  text-align: center;

  @media (min-width: $md) {
    margin-top: 85px;

  }

  @media (min-width: $lg) {
    margin-top: 55px;
  }

  @media (min-width: $xl) {
    margin-top: 80px;
  }



  @media (min-width: $xxl) {
    margin-top: 75px;
  }
}

.clients-header {
  font-family: "Onest", sans-serif;

  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: center;
  color: white;
  margin-bottom: 25px;

  @media (min-width: $md) {

    font-size: 24px;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: 0px;
    text-align: center;
    margin-bottom: 40px;


  }

  @media (min-width: $lg) {
    text-align: left;
    margin-bottom: 20px;

  }

  @media (min-width: $xl) {
    margin-bottom: 40px;

  }

  @media (min-width: $xxl) {}

}

.gallery {
  /*  */

  /* overflow-x: auto; */

  /* display: grid; */
  /* grid-template-columns: repeat(3, 1fr); */
  /* grid-template-rows: masonry; */

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /*  justify-content: space-between;*/
  row-gap: 30px;
  column-gap: 24px;
  /* column-gap: 62px; */
  /* padding: 0px 20px; */

  @media (min-width: $md) {
    /* gap: 10px; */
  }

  @media (min-width: $lg) {
    row-gap: 0px;
    column-gap: 0px;
    justify-content: space-between;


  }

  @media (min-width: $xl) {}

  @media (min-width: $xxl) {}
}

.item {
  flex: none;
  display: flex;
  align-items: center;
}

.item-img {}
</style>