<script
  setup
  lang="ts"
>
import { ref } from 'vue';

import { ScrollTrigger } from 'gsap/ScrollTrigger'
import anime from "animejs";

const services = ref([{
  header: 'Web Development',
  text: 'We offer pixel-perfect, adaptive and reliable web applications for your business. Our certified senior and mid-level dev experts use modern technologies to deliver back-end and front-end solutions.'
}, {
  header: 'Mobile Development',
  text: 'At Afterlogic.Works, we develop iOS/Android cross-platform mobile apps written in Flutter along with the server backend if required.'
}, {
  header: 'Outstaffing / Team Augmentation',
  text: 'Hire dedicated backend, frontend, mobile, QA experts on a full-time or time-and-material basis as an extension of your team. All the engineers are fluent in English.'
}, {
  header: 'Rescuing Troubled Projects',
  text: "Deadline is approaching but the project is still on fire with tons of bugs keep popping up? We'll promptly assess the situation and draw up an action plan. Then we carry out onboarding of experienced developers and QA to resolve difficulties in the project and ensure the smooth release."
}])

onMounted(() => {
  ScrollTrigger.create({
    trigger: "#services",
    start: "top top",
    end: "bottom 50%+=100px",
    onEnter: () => {
      anime({
        targets: '.text-logo-one-row ',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function (el, i) { return i * 250 },
        direction: 'alternate',
        loop: true
      });
    },
    onToggle: (self) => console.log("toggled, isActive:", self.isActive),
    onUpdate: (self) => {
      console.log(
        "progress:",
        self.progress.toFixed(3),
        "direction:",
        self.direction,
        "velocity",
        self.getVelocity()
      );
    },
  });


})
</script>

<template>
  <div
    v-scroll-reveal
    id="services"
    class="container"
  >
    <section class="section-wrapper">
      <div class="section-header-wrapper">
        <h2 class="section-header">SERVICES</h2>


      </div>
      <div class="service-list">
        <div
          v-for="(item, idx) in services"
          :key="idx"
          class="service-item"
        >
          <div class="service-header">
            {{ item.header }}
          </div>
          <div class="sevice-text">
            {{ item.text }}
          </div>
        </div>

      </div>
    </section>
  </div>
</template>
<style
  scoped
  lang="scss"
>
.section-wrapper {
  margin-top: 120px;
  display: grid;
  grid-template-columns: 67px 1fr;
  column-gap: 36px;
  /* padding-left: 103px; */
  position: relative;

  @media (min-width: $md) {
    margin-top: 140px;
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
  transform-origin: 180px 180px;
  transform: rotate(270deg);

  /* transform-origin: left right; */
  /* transform: rotate(270deg); */

  position: absolute;
  top: 10px;
  left: 0px;
  color: transparent;
  -webkit-text-stroke: 1.5px #fff;
  font-family: "Open Sans", sans-serif;

  font-size: 80px;
  font-weight: 800;
  font-style: normal;
  font-variation-settings:
    "wdth" 100;
  line-height: 63px;
  letter-spacing: -0.02em;
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
