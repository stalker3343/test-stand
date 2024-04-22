<script setup lang="ts">
import { ref } from 'vue';
import anime from "animejs";
import ServicesHeader from "@/assets/images/headers/services.svg"


const services = ref([{
  header: 'Web Development',
  text: 'We offer pixel-perfect, adaptive and reliable web applications for your business. Our certified senior and mid-level dev experts use modern technologies to deliver back-end and front-end solutions.'
}, {
  header: 'Mobile Development',
  text: 'At Afterlogic.Works, we develop iOS/Android cross-platform mobile apps written in Flutter along with the server backend if required.'
}, {
  header: 'Outstaffing / Team Augmentation',
  text: 'Hire dedicated backend, frontend, mobile, QA experts on a full-time or time-and-material basis as an extension of your team. Leveraging the renowned expertise and cost-effectiveness of Eastern and Central European developers, we offer you the ones who would be the best match for your project. All the engineers are fluent in English.'
}, {
  header: 'Rescuing Troubled Projects',
  text: "Deadline is approaching but the project is still on fire with tons of bugs keep popping up? We'll promptly assess the situation and draw up an action plan. Then we carry out onboarding of experienced developers and QA to resolve difficulties in the project and ensure the smooth release."
}])

onMounted(() => {
  const { $gsap } = useNuxtApp()
  const animHeaderConfig = {
    opacity: 0,
    duration: 0.2
  }

  // const animTextConfig = {
  //   opacity: 0,
  //   duration: 0.8
  // }

  const headerTextConfig = '+=0.2'
  // const blockConfig = '+=0.4'


  // const animtextConfix = animHeaderConfig
  $gsap.timeline({
    scrollTrigger: {
      trigger: "#services",
      start: 'top 100%',
      end: 'bottom 60%',
      toggleActions: 'play none none none',
      scrub: true,
      // markers: true,
      once: true

    }
  })

    .from('.service-header', {
      opacity: 0,
      duration: 0.4,
      stagger: 0.3,
    }, '<0.3')
    .from('.sevice-text', {
      opacity: 0,
      duration: 0.4,
      stagger: 0.3,
    }, '<0.1')


  $gsap.timeline({
    scrollTrigger: {
      trigger: "#services",
      start: 'top 80%',
      end: 'bottom 60%',
      toggleActions: 'play none none none',
    }
  })
    .from('.section-header-wrapper', {
      duration: 1,
      opacity: 0,
    })
    .add(function () {
      anime({
        targets: '.section-header-wrapper path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1000,
        delay: function (el, i) { return i * 30 },
        // direction: 'alternate',
        // loop: true
      });
    }, '<')



  // .from('.service-header-1', animHeaderConfig)
  // .from('.service-text-1', animHeaderConfig, headerTextConfig)
  // .from('.service-header-2', animHeaderConfig)
  // .from('.service-text-2', animHeaderConfig, headerTextConfig)
  // .from('.service-header-3', animHeaderConfig)
  // .from('.service-text-3', animHeaderConfig, headerTextConfig)





})
</script>

<template>
  <div
    id="services"
    class="container"
  >
    <section class="section-wrapper">
      <div class="section-header-wrapper">
        <!-- <h2 class="section-header">SERVICES</h2> -->
        <ServicesHeader
          :fontControlled="false"
          class="section-header"
        ></ServicesHeader>


      </div>
      <div class="service-list">
        <div
          v-for="(item, idx) in services"
          :key="idx"
          class="service-item"
        >
          <div
            :class="`service-header-${idx}`"
            class="service-header"
          >
            {{ item.header }}
          </div>
          <div
            :class="`service-text-${idx}`"
            class="sevice-text"
          >
            {{ item.text }}
          </div>
        </div>

      </div>
    </section>
  </div>
</template>
<style scoped lang="scss">
.section-wrapper {
  margin-top: 150px;
  display: grid;
  grid-template-columns: 67px 1fr;
  column-gap: 36px;
  /* padding-left: 103px; */
  position: relative;

  @media (min-width: $md) {
    margin-top: 133px;
    grid-template-columns: 107px 1fr;


  }

  @media (min-width: $lg) {
    margin-top: 125px;
    grid-template-columns: 167px 1fr;
  }

  @media (min-width: $xl) {
    margin-top: 120px;

  }

  @media (min-width: $xxl) {
    margin-top: 125px;

    grid-template-columns: 157px 900px;
    column-gap: 76px;

    justify-content: center;
  }

}

.service-list {
  display: flex;
  flex-direction: column;
  gap: 37px;
  position: relative;

  @media (min-width: $md) {
    gap: 44px;


  }

  @media (min-width: $lg) {}

  @media (min-width: $xl) {
    gap: 41px;

  }

  @media (min-width: $xxl) {}

}

.section-header-wrapper {
  position: relative;
  width: 65px;

  @media (min-width: $md) {}

  @media (min-width: $lg) {
    width: 105px;

  }

  @media (min-width: $xl) {
    width: 110px;

  }

  @media (min-width: $xxl) {}
}

.service-header {
  font-family: "Onest", sans-serif;

  font-size: 24px;
  font-weight: 600;
  line-height: 34px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 10px;

  @media (min-width: $md) {
    font-family: "Onest", sans-serif;

    font-size: 32px;
    font-weight: 600;
    line-height: 45px;
    letter-spacing: 0px;
    text-align: left;
  }
}

.sevice-text {
  font-size: 17px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  max-width: 740px;

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

.section-header {
  /* transform-origin: 180px 180px;
  transform: rotate(270deg); */

  /* transform-origin: left right; */
  /* transform: rotate(270deg); */

  position: absolute;
  top: 1px;
  left: 2px;
  color: transparent;
  // -webkit-text-stroke: 1.5px #fff;
  // font-family: "Open Sans", sans-serif;

  // font-size: 80px;
  // font-weight: 800;
  // font-style: normal;
  // font-variation-settings:
  //   "wdth" 100;
  // line-height: 63px;
  // letter-spacing: -0.02em;
  /* text-align: right; */

  @media (min-width: $lg) {
    font-size: 140px;
    line-height: 210px;
    transform-origin: 283px 334px;

  }

  @media (min-width: $xl) {
    line-height: 154px;
    transform-origin: 298px 323px;
  }

  @media (min-width: $xxl) {
    font-size: 140px;
    line-height: 168px;
  }

}
</style>
