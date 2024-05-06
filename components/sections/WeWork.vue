<template>
  <section
    :id="id"
    class="container"
  >
    <h2
      class="visually-hidden"
      v-if="id === 'industries'"
    >
      How we work
    </h2>
    <h2
      class="visually-hidden"
      v-if="id === 'quality'"
    >
      What we do is high-quality
    </h2>


    <WeWorkWithSm
      v-if="id === 'industries' && $viewport.match('sm')"
      :fontControlled="false"
      class="section-header anim-we-work-header"
    ></WeWorkWithSm>

    <WeWorkWith
      v-else-if="id === 'industries'"
      :fontControlled="false"
      class="section-header anim-we-work-header"
    ></WeWorkWith>

    <WeWorkHightQualitySm
      v-if="id === 'quality' && $viewport.match('sm')"
      :fontControlled="false"
      class="section-header anim-we-work-header"
    >
    </WeWorkHightQualitySm>
    <WeWorkHightQuality
      v-else-if="id === 'quality'"
      :fontControlled="false"
      class="section-header anim-we-work-header"
    ></WeWorkHightQuality>





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
          v-html="item.text"
        >

        </div>
        <span
          v-if="(key !== 4 && id === 'quality') || (key !== 3 && id === 'industries')"
          class="row-line"
          :class="`row-line-${key}`"
        ></span>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">

const WeWorkWith = defineAsyncComponent(() => import("@/assets/images/headers/we-work-with.svg"))
const WeWorkWithSm = defineAsyncComponent(() => import("@/assets/images/headers/we-work-with-sm.svg"))


const WeWorkHightQuality = defineAsyncComponent(() => import('@/assets/images/headers/we-work-hight-quality.svg'))

const WeWorkHightQualitySm = defineAsyncComponent(() => import('@/assets/images/headers/we-work-hight-quality-sm.svg'))




interface Props {
  rows: { title: string, text: string }[]
  header: string
  id: string
}
import anime from "animejs";

const props = defineProps<Props>()
const { $viewport } = useNuxtApp()

onMounted(() => {
  const { $gsap } = useNuxtApp()
  // $gsap.timeline({
  //   scrollTrigger: {
  //     trigger: `#${props.id}`,
  //     start: 'top 75%',
  //     end: 'bottom 60%',
  //     toggleActions: 'play none none none',
  //   }
  // })
  //   .from(`#${props.id} .anim-we-work-header`, {
  //     duration: 1,
  //     opacity: 0,
  //   })
  //   .add(function () {
  //     anime({
  //       targets: `#${props.id} .anim-we-work-header path`,
  //       strokeDashoffset: [anime.setDashoffset, 0],
  //       easing: 'easeInOutSine',
  //       duration: 1001,
  //       delay: function (el, i) { return i * 30 },
  //       // direction: 'alternate',
  //       // loop: true
  //     });
  //   }, '<')

  // const distances = ['top 70%', 'top 55%', 'top 30%', 'top 15%']
  // distances.map((distanceItem, idx) => {
  //   const tm1 = $gsap.timeline({
  //     scrollTrigger: {
  //       trigger: `#${props.id} .list-wrapper`,
  //       start: distanceItem,
  //       end: 'bottom 60%',
  //       toggleActions: 'play none none none',
  //     }
  //   })
  //     .from(`#${props.id} .row-title-${idx}`,
  //       {
  //         opacity: 0,
  //         duration: 0.2,
  //         // stagger: 0.4,
  //       }, '<0.3')

  //     .from(`#${props.id} .row-text-${idx}`, {
  //       opacity: 0,
  //       duration: 0.2,
  //       // stagger: 0.4,
  //     }, "<0.1")

  //   if (idx !== 3) {
  //     tm1.from(`#${props.id} .row-line-${idx}`, {
  //       width: '0%',
  //       duration: 2,
  //       // stagger: 0.3,
  //     }, "<-0.5")
  //   }

  // })







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
<style lang="scss" scoped>
.row-line {
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 2px;
  background: rgba(255, 255, 255, 0.3);
}

.section-header {
  // text-transform: uppercase;
  color: transparent;

  display: block;

  @media (min-width: $md) {
    margin: 0 auto;
  }

  @media (min-width: $lg) {}

  @media (min-width: $xl) {}

  @media (min-width: $xxl) {}


  // margin-top: 120px;
  // margin-bottom: 45px;
  // -webkit-text-stroke: 1.5px #fff;
  // font-size: 70px;
  // font-weight: 800;
  // font-style: normal;
  // font-variation-settings:
  //   "wdth" 100;
  // line-height: 77px;
  // letter-spacing: -0.02em;
  // text-align: left;



  // @media (min-width: $lg) {
  //   margin-top: 120px;
  //   font-size: 120px;
  //   line-height: 132px;
  //   text-align: center;
  // }

  // @media (min-width: $xl) {
  //   font-size: 140px;
  //   line-height: 151px;
  //   text-align: center;
  //   margin-top: 140px;
  //   margin-bottom: 65px;

  // }

  // @media (min-width: $xxl) {
  //   margin-top: 145px;
  //   margin-bottom: 45px;


  // }
}

#industries .section-header {
  margin-top: 135px;
  margin-bottom: 60px;
  height: 204px;

  @media (min-width: $md) {
    height: 54px;
    margin-top: 130px;
    margin-bottom: 30px;
  }


  @media (min-width: $lg) {
    height: 94px;
    margin-top: 130px;
    margin-bottom: 40px;
  }


  @media (min-width: $xl) {
    margin-top: 180px;
    margin-bottom: 75px;
    height: 110px;
  }



  @media (min-width: $xxl) {
    margin-top: 150px;
    margin-bottom: 70px;

  }
}

#quality .section-header {
  margin-top: 125px;
  margin-bottom: 40px;
  height: 299px;

  @media (min-width: $md) {
    height: 144px;
    margin-top: 140px;
    margin-bottom: 0px;

  }


  @media (min-width: $lg) {
    height: 254px;
    margin-bottom: 35px;

  }



  @media (min-width: $xl) {
    margin-top: 155px;
    margin-bottom: 65px;
    height: 280px;
  }

}


.row-title {
  //styleName: H2_mobile;

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

    @media (min-width: $lg) {
      padding-bottom: 36px;
    }

    @media (min-width: $xl) {
      padding-bottom: 24px;

    }

    @media (min-width: $xxl) {}
  }
}

.list-wrapper {
  display: flex;
  flex-direction: column;
  gap: 34px;

  @media (min-width: $md) {
    gap: 6px;
  }

  @media (min-width: $xl) {
    gap: 8px;

  }

}
</style>
