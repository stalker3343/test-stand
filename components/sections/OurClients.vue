<script setup lang="ts">
import { listenToScreenWidthChanges } from '@/helpers'

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

import { onMounted, ref } from 'vue';

const allLinks = ['./clients/natro.svg', './clients/cellcom.svg', './clients/solid.svg', './clients/mavenir.svg', './clients/sprk-gct.svg', './clients/router.svg', './clients/locaweb.svg', './clients/netcore.svg', './clients/gallery.svg', './clients/informatik.svg']
const items = ref(
  allLinks.slice(0, 6).map((el, idx) => ({
    id: idx,
    img: el,
    height: {
      sm: 30,
      md: 30,
      lg: 30,
      xl: 34,
      xxl: 48,
    }
  }))
)

const getAlt = (el: string) => {
  return el.split('/').pop()?.split('.')[0];
}

const offsetWIdth = ref(0)
const container = ref<HTMLInputElement | null>(null)
const imgSize = ref<'sm' | 'md' | "lg" | 'xl' | 'xxl'>('sm')
// 
let stopInter: NodeJS.Timeout | null = null;
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
  const containerWisth = container.value?.getBoundingClientRect().width || 0
  offsetWIdth.value = (window.innerWidth - containerWisth) / 2
  const { $gsap } = useNuxtApp()



  const displayedIndexes = [0, 1, 2, 3, 4, 5]
  const notDisplayedIndexes = [6, 7, 8, 9]
  setTimeout(() => {
    stopInter = setInterval(() => {

      let swapFromArrIdx = getRandomInt(0, 5)
      let swapToArrIdx = getRandomInt(0, 3)
      // 4 -> 8


      let swapFromSrcIdx = displayedIndexes[swapFromArrIdx]
      let swapToSrcIdx = notDisplayedIndexes[swapToArrIdx]


      if (swapToSrcIdx === 4 && swapFromSrcIdx !== 8) {
        swapFromArrIdx = displayedIndexes.findIndex(el => el === 8)
        swapFromSrcIdx = 8
      }
      if (swapToSrcIdx === 8 && swapFromSrcIdx !== 4) {
        swapFromArrIdx = displayedIndexes.findIndex(el => el === 4)
        swapFromSrcIdx = 4
      }
      if (swapToSrcIdx !== 8 && swapFromSrcIdx === 4) {
        swapToArrIdx = notDisplayedIndexes.findIndex(el => el === 8)
        swapToSrcIdx = 8
      }
      if (swapToSrcIdx !== 4 && swapFromSrcIdx === 8) {
        swapToArrIdx = notDisplayedIndexes.findIndex(el => el === 4)
        swapToSrcIdx = 4
      }

      displayedIndexes[swapFromArrIdx] = swapToSrcIdx;
      notDisplayedIndexes[swapToArrIdx] = swapFromSrcIdx;




      const item = `.item-${swapFromArrIdx}`
      const itemToSrc = allLinks[swapToSrcIdx]
      $gsap.timeline()
        .to(item, {
          scale: 0.5,
          opacity: 0,
          duration: 0.2
        }).add(function () {
          items.value[swapFromArrIdx].img = itemToSrc
        }, '<0.1').to(item, {
          scale: 1,
          opacity: 1,
          duration: 0.2
        }, "+=0.2")

    }, 3000)
  }, 2000)

})

</script>

<template>
  <section class="clients">
    <div class="container">
      <h2
        ref="container"
        class="clients-header"
      >
        Some of our clients
      </h2>


      <!-- <div
      id="supermarquee"
      class="ticker-row-text"
    /> -->
      <div class="gallery">
        <div
          v-for="item in items"
          :key="item.id"
          class="item"
          :class="`item-${item.id}`"
        >
          <img
            :style="{
              height: `${item.height[imgSize]}px`
            }"
            class="item-img"
            :alt="getAlt(item.img)"
            :src="item.img"
          />
        </div>
        <div
          :style="{ left: `-${offsetWIdth / 2}px` }"
          class="mouse"
        >
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
<style scoped lang="scss">
@keyframes scroll-down-pulse {
  from {
    /* transform: translateY(-8px); */
    opacity: .3;
  }

  50% {
    /* transform: translateY(8px); */
    opacity: 1;
  }

  to {
    /* transform: translateY(-8px); */
    opacity: .3;
  }
}

.mouse {

  display: none;


  @media (min-width: $xl) {
    position: absolute;
    transform: translateX(-50%);
    /* top: 33%; */
    /* left: -60px; */
    bottom: 17px;
    border: 2px solid #FFFFFF;
    width: 16px;
    height: 32px;
    border-radius: 15px;
    animation: scroll-down-pulse 1s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;
  }
}

.mouse:before {
  display: none;
  content: '';
  box-sizing: border-box;
  width: 0;
  height: 25%;
  border-right: 2px solid #FFFFFF;
  position: absolute;
  top: .3rem;
  left: 54%;
  margin-left: -1px;

  @media (min-width: $xl) {
    display: block;
  }

}

.mouse:after {
  content: '';
  display: none;
  width: .5rem;
  height: .5rem;
  border-right: 2px solid #FFFFFF;
  border-bottom: 2px solid #FFFFFF;
  position: absolute;
  bottom: -1rem;
  left: 60%;
  margin-left: -.325rem;
  transform: rotate(45deg);



  @media (min-width: $xl) {
    display: block;

  }


}



.clients {
  margin-top: 78px;
  text-align: center;

  @media (min-width: $md) {
    margin-top: 75px;

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
  //styleName: H4;
  font-size: 24px;
  font-weight: 700;
  line-height: 33.6px;
  text-align: center;


  text-align: center;
  color: white;
  margin-bottom: 25px;

  @media (min-width: $md) {

    font-size: 24px;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: 0px;
    text-align: center;
    margin-bottom: 25px;


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
  position: relative;
  /*  */

  /* overflow-x: auto; */

  /* display: grid; */
  /* grid-template-columns: repeat(3, 1fr); */
  /* grid-template-rows: masonry; */

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  // grid-template-columns: 1fr 1fr;
  // flex-wrap: wrap;
  // justify-content: center;
  /*  justify-content: space-between;*/
  row-gap: 25px;
  column-gap: 30px;
  /* column-gap: 62px; */
  /* padding: 0px 20px; */

  @media (min-width: $md) {

    /* gap: 10px; */
  }

  @media (min-width: $lg) {
    // display: flex;
    // row-gap: 0px;
    // column-gap: 0px;
    // justify-content: space-between;


  }

  @media (min-width: $xl) {
    display: flex;
    justify-content: space-between;
    // display: grid;
    // grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

  }

  @media (min-width: $xxl) {}
}

.item {
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item-img {}
</style>