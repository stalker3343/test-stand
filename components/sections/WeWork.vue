<template>
  <div
    :id="id"
    class="container"
  >
    <WeWorkWith
      :fontControlled="false"
      class="section-header anim-we-work-header"
    ></WeWorkWith>
    <!-- <h2 class="section-header anim-we-work-header">{{ header }}</h2> -->
    <div class="list-wrapper">
      <div
        v-for="(item, key) in rows"
        :key="key"
        class="list-item"
        :class="`list-item-${key}`"
      >
        <div
          class="row-title"
          :class="`row-title-${key}`"
        > {{ item.title }}</div>
        <div
          :class="`row-text-${key}`"
          class="row-text"
        >


          {{ item.text }}
        </div>
        <span
          class="row-line"
          :class="`row-line-${key}`"
        ></span>
      </div>
    </div>
  </div>
</template>
<script
  setup
  lang="ts"
>
import WeWorkWith from "@/assets/images/headers/we-work-with.svg"
interface Props {
  rows: { title: string, text: string }[]
  header: string
  id: string
}
import anime from "animejs";

const props = defineProps<Props>()

onMounted(() => {
  const { $gsap } = useNuxtApp()


  $gsap.timeline({
    scrollTrigger: {
      trigger: `#${props.id}`,
      start: 'top 75%',
      end: 'bottom 60%',
      toggleActions: 'play none none reverse',
    }
  })
    .from(`#${props.id} .anim-we-work-header`, {
      y: 100,
      duration: 1,
      opacity: 0,
    })
    .add(function () {
      anime({
        targets: `#${props.id} .anim-we-work-header path`,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1001,
        delay: function (el, i) { return i * 30 },
        // direction: 'alternate',
        // loop: true
      });
    }, '<')
    .from(`#${props.id} .row-title`,
      {
        opacity: 0,
        duration: 0.2,
        stagger: 0.4,
      }, '<0.3')

    .from(`#${props.id} .row-text`, {
      opacity: 0,
      duration: 0.2,
      stagger: 0.4,
    }, "<0.1")

    .from(`#${props.id} .row-line-0`, {
      width: '0%',
      duration: 2,
      // stagger: 0.3,
    }, "<-0.5")
    .from(`#${props.id} .row-line-1`, {
      width: '0%',
      duration: 1.7,
      // stagger: 0.3,
    }, "<0.3")
    .from(`#${props.id} .row-line-2`, {
      width: '0%',
      duration: 1.3,
      // stagger: 0.3,
    }, "<0.6")
    .from(`#${props.id} .row-line-3`, {
      width: '0%',
      duration: 1,
      // stagger: 0.3,
    }, "<0.3")



  // .from(`#${props.id} .row-title-0`, animHeaderConfig, "<0.2")
  // .from(`#${props.id} .row-text-0`, animHeaderConfig, headerTextConfig)


  // .from(`#${props.id} .row-title-1`, animHeaderConfig, blockConfig)
  // .from(`#${props.id} .row-text-1`, animHeaderConfig, headerTextConfig)


  // .from(`#${props.id} .row-title-2`, animHeaderConfig, blockConfig)
  // .from(`#${props.id} .row-text-2`, animHeaderConfig, headerTextConfig)


  // .from(`#${props.id} .row-title-3`, animHeaderConfig, blockConfig)
  // .from(`#${props.id} .row-text-3`, animHeaderConfig, headerTextConfig)




  // .list - item: not(: last - child): after
})






</script>
<style
  lang="scss"
  scoped
>
.row-line {
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 2px;
  background: rgba(255, 255, 255, 0.3);
}

.section-header {
  text-transform: uppercase;
  margin: 0 auto;
  display: block;
  margin-top: 120px;
  margin-bottom: 45px;
  color: transparent;
  -webkit-text-stroke: 1.5px #fff;
  font-family: "Open Sans", sans-serif;
  font-size: 70px;
  font-weight: 800;
  font-style: normal;
  font-variation-settings:
    "wdth" 100;
  line-height: 77px;
  letter-spacing: -0.02em;
  text-align: left;

  @media (min-width: $md) {

    margin-top: 127px;
    margin-bottom: 20px;

  }

  @media (min-width: $lg) {
    margin-top: 120px;
    font-size: 120px;
    line-height: 132px;
    text-align: center;
  }

  @media (min-width: $xl) {
    /* font-size: 140px; */

    height: 110px;
    line-height: 151px;
    text-align: center;
    margin-top: 140px;
    margin-bottom: 65px;

  }

  @media (min-width: $xxl) {
    margin-top: 145px;
    margin-bottom: 45px;


  }
}

.row-title {
  //styleName: H2_mobile;
  font-family: "Onest", sans-serif;

  font-size: 24px;
  font-weight: 600;
  line-height: 34px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 20px;

  @media (min-width: $md) {
    font-size: 32px;
    line-height: 45px;
    max-width: 400px;
  }

  @media (min-width: $lg) {
    max-width: 1024px;
    margin-bottom: 0px;
  }
}

.row-text {
  font-family: "Onest", sans-serif;

  font-size: 17px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;


  @media (min-width: $md) {}

  @media (min-width: $lg) {

    font-size: 19px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;


  }

  @media (min-width: $xl) {}

  @media (min-width: $xxl) {}
}





.list-item {
  position: relative;

  @media (min-width: $md) {
    padding: 24px;

  }

  @media (min-width: $lg) {
    display: grid;
    grid-template-columns: 400px 490px;
    column-gap: 30px;
  }

  @media (min-width: $xl) {
    grid-template-columns: 380px 490px;
    column-gap: 150px;
  }

  @media (min-width: $xxl) {
    column-gap: 430px;
  }

  &:not(:last-child) {
    padding-bottom: 24px;

    @media (min-width: $md) {

      /* border-bottom: 2px solid rgba(255, 255, 255, 0.3); */
      /* &:after {
        content: '';
        position: absolute;
        bottom: 0px;
        width: 100%;
        height: 2px;
        background: rgba(255, 255, 255, 0.3);
      } */
    }

    @media (min-width: $lg) {}

    @media (min-width: $xl) {}

    @media (min-width: $xxl) {}
  }
}

.list-wrapper {
  display: flex;
  flex-direction: column;
  gap: 34px;

  @media (min-width: $md) {
    gap: 10px;
  }

  @media (min-width: $xl) {
    gap: 8px;

  }

}
</style>
