<script lang="ts" setup>
import { onMounted, ref } from 'vue';

import { listenToScreenWidthChanges } from '@/helpers'

interface ITech {
  src: string,
  width: number,
  smWidth: number,
  height: number,
  smHeight: number,
}


interface Props {
  technologies: ITech[]
  header: string
  description: string
}

defineProps<Props>()



// defineProps<{
//   header: string
//   description: string
//   technologies: string[]
// }>()

const imgSize = ref<'md' | 'sm'>('sm')

onMounted(() => {
  const seIconSize = () => {
    imgSize.value = window.innerWidth > 639 ? 'md' : 'sm'
  }
  listenToScreenWidthChanges(seIconSize, 300);
  seIconSize()

})

const getAlt = (el: string) => {
  return el.split('/').pop()?.split('.')[0];
}

const getTechnologiesStyle = (tech: ITech) => {

  return imgSize.value === 'sm' ?
    {
      height: `39px`
    } :
    {
      height: `48px`
    }

  // if (tech.width) {
  //   const widthOpt = imgSize.value === 'sm' ? 'smWidth' : 'width'
  //   return {
  //     width: `${tech[widthOpt]}px`
  //   }
  // }
  // const heightOpt = imgSize.value === 'sm' ? 'smHeight' : 'height'
  // return {
  //   height: `${tech[heightOpt]}px`
  // }
}


</script>


<template>
  <div class="case-decriprion">
    <div class="case-header">
      {{ header }}
    </div>
    <div
      v-html="description"
      class="case-description"
    >
    </div>
    <div class="case-tech-list">
      <img
        :alt="getAlt(img.src)"
        loading="lazy"
        class="case-tech"
        :style="getTechnologiesStyle(img)"
        v-for="(img, key) in technologies"
        :key="key"
        :src="img.src"
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.case-header {

  font-size: 24px;
  font-weight: 600;
  line-height: 34px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 20px;

  @media (min-width: $md) {
    font-size: 32px;
    font-weight: 600;
    line-height: 45px;
    margin-bottom: 20px;
  }

}

.case-description {

  font-size: 17px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 20px;


  @media (min-width: $md) {
    margin-bottom: 44px;
    font-size: 17px;
  }

  @media (min-width: $xl) {
    font-size: 19px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 60px;

  }

  @media (min-width: $xxl) {
    margin-bottom: 52px;
  }

}

.case-tech-list {
  display: flex;
  gap: 23px;
  align-items: center;

  @media (min-width: $md) {
    gap: 28px;

  }

  @media (min-width: $lg) {}

  @media (min-width: $xl) {}

  @media (min-width: $xxl) {}
}

.case-tech {
  flex: none;
  object-fit: cover;
  // height: 40px;
  // height: initial;
  // max-width: initial;
  // display: block;
  // width: auto;
}
</style>
