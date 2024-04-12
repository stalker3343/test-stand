<template>
  <section class="how-we-work">
    <div class="container">

      <HowWeWorkSm
        v-if="$viewport.match('sm')"
        :fontControlled="false"
        class="how-work-section-header"
      ></HowWeWorkSm>
      <HowWeWork
        v-else
        :fontControlled="false"
        class="how-work-section-header"
      ></HowWeWork>
      <!-- <h2 class="how-work-section-header">How we work</h2> -->
      <div class="block-content">
        <p class="we-work-descr">We respect Agile and Scrum.</p>
        <p class="we-work-descr">We send you regular reports to keep you on track.</p>
        <p class="we-work-descr">We're always here to hear you, be it phone, email, Slack, and other IMs.</p>
      </div>
      <div class="steps-list">
        <template
          v-for="(item, idx) in steps"
          :key="idx"
        >
          <div
            class="step-item"
            :class="[`${item.class}`, `step-item-${idx}`]"
          >
            <component
              :fontControlled="false"
              class="step-img"
              :is="item.id"
            />

            <!-- <img
              class="step-img"
              :src="item.img"
            > -->
            <div class="step-title">
              {{ item.name }}
            </div>
          </div>
          <img
            class="arrow-step arrow-step_mobile"
            v-if="idx !== steps.length - 1"
            src="/how-we-work/step-arrow.svg"
            alt=""
          >
          <StepArrowDescUp
            :fontControlled="false"
            class="arrow-step arrow-step_desctop"
            :class="`arrow-step-${idx}`"
            v-if="idx !== steps.length - 1"
          ></StepArrowDescUp>
          <!-- <img
            class="arrow-step arrow-step_desctop"
            v-if="idx !== steps.length - 1"
            src="/how-we-work/step-arrow-desc.svg"
            alt=""
          > -->


        </template>
      </div>
    </div>
  </section>

</template>

<script setup lang="ts">
import StepArrowDesc from "@/assets/images/how-we-work/step-arrow-desc.svg?skipsvgo"

import StepArrowDescUp from "@/assets/images/how-we-work/step-arrow-desc-up.svg?skipsvgo"

const HowWeWork = defineAsyncComponent(() => import('@/assets/images/headers/how-we-work.svg'))
const HowWeWorkSm = defineAsyncComponent(() => import('@/assets/images/headers/how-we-work-sm.svg'))



// const getIcon = (id: string | number) => defineAsyncComponent(() => import(`@/assets/images/how-we-work/${id}.svg`));

import First from '@/assets/images/how-we-work/1.svg?skipsvgo';
import Second from '@/assets/images/how-we-work/2.svg?skipsvgo';
import Thirth from '@/assets/images/how-we-work/3.svg?skipsvgo';
import Fourth from '@/assets/images/how-we-work/4.svg?skipsvgo';
import Fifth from '@/assets/images/how-we-work/5.svg?skipsvgo';
import Six from '@/assets/images/how-we-work/6.svg?skipsvgo';
import Seven from '@/assets/images/how-we-work/7.svg?skipsvgo';


import anime from "animejs";

import { ref } from 'vue';
const { $viewport } = useNuxtApp()

const steps = [{
  name: 'Analysis',
  img: './how-we-work/1.svg',
  id: First
}, {
  name: 'Mapping',
  img: './how-we-work/2.svg',
  id: Second
}, {
  name: 'Wireframing',
  img: './how-we-work/3.svg',
  id: Thirth
}, {
  name: 'UI design',
  img: './how-we-work/4.svg',
  id: Fourth
}, {
  name: 'Development',
  img: './how-we-work/5.svg',
  id: Fifth
}, {
  class: 'quality-assurance',
  name: 'Quality assurance',
  img: './how-we-work/6.svg',
  id: Six
}, {
  name: 'Release',
  img: './how-we-work/7.svg',
  id: Seven
}]

// aTweens = [
// 			TweenMax.from(".how_we_work .stage", 1, {opacity: 0, ease: Power2.easeOut}),
// 			TweenMax.from(".how_we_work .stage1", 1, {left: '-5%', ease: Power2.easeOut}),
// 			TweenMax.from(".how_we_work .stage2", 1, {left: '-20%', ease: Power2.easeOut}),
// 			TweenMax.from(".how_we_work .stage3", 1, {left: '-35%', ease: Power2.easeOut}),
// 			TweenMax.from(".how_we_work .stage4", 1, {left: '-50%', ease: Power2.easeOut}),
// 			TweenMax.from(".how_we_work .stage5", 1, {left: '-65%', ease: Power2.easeOut}),
// 			TweenMax.from(".how_we_work .stage6", 1, {left: '-80%', ease: Power2.easeOut})
// 		];

// .step-item-0
onMounted(() => {
  const { $gsap } = useNuxtApp()
  $gsap.timeline({
    scrollTrigger: {
      trigger: `.how-we-work`,
      start: 'top 75%',
      end: 'bottom 60%',
      toggleActions: 'play none none reverse',
    }
  })
    // .set(".step-item", { opacity: 0 }, 1)
    .from(`.how-work-section-header`, {
      duration: 1,
      opacity: 0,
    })
    .add(function () {
      anime({
        targets: `.how-work-section-header path`,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1001,
        delay: function (el, i) { return i * 30 },
        // direction: 'alternate',
        // loop: true
      });
    }, '<')
    .from(`.block-content`,
      {
        opacity: 0,
        duration: 1.0,
      }, '<0.5')
    .add(function () {
      const step = -160;
      $gsap.to(`.step-item`,
        {
          opacity: 1,
          duration: 0.7,
          stagger: 0.3
        })
      $gsap.to('.arrow-step',
        {
          scaleY: 1,
          scaleX: 1,

          // opacity: 1,
          duration: 0.8,
          stagger: 0.14
        })

      // $gsap.from(`.step-img`,
      //   {
      //     opacity: 0,
      //     // x: -100,
      //     duration: 0.1,
      //     stagger: 1,
      //   })

      anime({
        targets: `.step-img path`,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 800,
        delay: function (el, i) { return i * 22 },
      })


      $gsap.from([`.step-item-0`, '.arrow-step-0'],
        {
          x: step * 2,
          duration: 1.7,
        })

      $gsap.from([`.step-item-1`, '.arrow-step-1'],
        {
          x: step * 3,
          duration: 1.7,
        })
      $gsap.from([`.step-item-2`, '.arrow-step-2'],
        {
          x: step * 4,
          duration: 1.7,
        })
      $gsap.from([`.step-item-3`, '.arrow-step-3'],
        {
          x: step * 5,
          duration: 1.7,
        })
      $gsap.from([`.step-item-4`, '.arrow-step-4'],
        {
          x: step * 6,
          duration: 1.7,
        })
      $gsap.from([`.step-item-5`, '.arrow-step-5'],
        {
          x: step * 7,
          duration: 1.7,
        })
      $gsap.from([`.step-item-6`, '.arrow-step-6'],
        {
          x: step * 8,
          duration: 1.7,
        })

    }, '<')



  // .from(`.step-title`,
  //   {
  //     opacity: 0,
  //     x: -100,
  //     duration: 0.3,
  //     stagger: 0.7,
  //   }, '<0.2')
  // .from(`.step-img`,
  //   {
  //     opacity: 0,
  //     // x: -100,
  //     duration: 0.5,
  //     stagger: 1,
  //   }, '<0.05')
  // .add(function () {
  //   anime({
  //     targets: `.step-img path`,
  //     strokeDashoffset: [anime.setDashoffset, 0],
  //     easing: 'easeInOutSine',
  //     duration: 150,
  //     delay: function (el, i) { return i * 15 },

  //   });
  // }, '<')
  // .from(`.arrow-step_desctop`,
  //   {
  //     opacity: 0,
  //     x: -100,
  //     duration: 0.05,
  //     stagger: 0.7,
  //   }, '<0.05')
  // .add(function () {
  //   anime({
  //     targets: `.arrow-step_desctop path`,
  //     strokeDashoffset: [anime.setDashoffset, 0],
  //     easing: 'easeInOutSine',
  //     duration: 600,
  //     delay: function (el, i) { return i * 20 },
  //     // direction: 'alternate',
  //     // loop: true
  //   });
  // }, '<')







})


</script>

<style scoped lang="scss">
.quality-assurance {
  width: 150px !important;
}
</style>


<style scoped lang="scss">
.how-we-work {
  margin-top: 100px;

  @media (min-width: $md) {
    margin-top: 100px;
  }

  @media (min-width: $xl) {
    margin-top: 130px;

  }

  @media (min-width: $xxl) {
    margin-top: 20px;

  }

}

.how-work-section-header {
  // font-family: 'Open Sans', sans-serif;
  // font-weight: 800;
  // font-style: normal;
  // font-variation-settings:
  //   "wdth" 100;
  // font-size: 70px;
  // line-height: 77px;
  // text-transform: uppercase;
  color: transparent;
  // -webkit-text-stroke: 1.5px #fff;
  // margin-bottom: 32px;
  // letter-spacing: -0.02em;

  margin-top: 12px;
  margin-bottom: 35px;
  height: 130px;

  @media (min-width: $md) {
    height: 50px;

    margin-top: 80px;
    margin-bottom: 30px;
  }


  @media (min-width: $lg) {
    height: 90px;
    margin-top: 30px;

    font-size: 120px;
    line-height: 144px;
    letter-spacing: -0.02em;
  }

  @media (min-width: $xl) {
    height: 110px;
    font-size: 140px;
    line-height: 154px;
    letter-spacing: -0.02em;
  }

  @media (min-width: $xxl) {
    margin-bottom: 60px;

  }



}

.arrow-step {
  // opacity: 0;
  transform: scale(0.5, 0);

  @media (min-width: $md) {
    height: 160px;
  }

  @media (min-width: $lg) {}

  @media (min-width: $xl) {
    height: 240px;

  }

  @media (min-width: $xxl) {}

  &_desctop {
    display: none;

    @media (min-width: $xl) {
      display: block;
    }
  }

  &_mobile {


    @media (min-width: $xl) {
      display: none;
    }

    @media (min-width: $xxl) {}
  }
}

.we-work-descr {
  font-family: 'Onest', sans-serif;
  font-size: 17px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #DDF1FF;


  @media (min-width: $md) {
    font-size: 17px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;


  }

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

.block-content {
  margin-bottom: 28px;
  max-width: 450px;

  @media (min-width: $md) {
    margin-bottom: 70px;

  }

  @media (min-width: $xl) {
    margin-bottom: 70px;

  }

  @media (min-width: $xxl) {}
}

.steps-list {
  overflow-y: auto;
  // overflow-y: scroll;
  display: flex;
  // 
  gap: 10px;

  @media (min-width: $md) {
    gap: 28px;
  }



  @media (min-width: $lg) {
    overflow-y: initial;
    gap: 30px;
    row-gap: 40px;
    flex-wrap: wrap;
  }


  @media (min-width: $xl) {
    flex-wrap: nowrap;
    gap: 4px;
    justify-content: center;


  }

  @media (min-width: $xxl) {
    gap: 40px;

  }

}



.step-item {
  flex: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 120px;
  opacity: 0;
}

.step-title {
  font-family: 'Onest', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 140%;
  color: #FFFFFF;

}

.step-img {
  width: 48px;
  margin-bottom: 24px;

  @media (min-width: $md) {}

  @media (min-width: $lg) {
    width: 64px;

  }

  @media (min-width: $xl) {}

  @media (min-width: $xxl) {}
}
</style>
