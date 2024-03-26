<template>
  <section
    v-scroll-reveal
    class="how-we-work"
  >
    <div class="container">
      <h2 class="how-work-section-header">How we work</h2>
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
            :class="item.class"
          >
            <img
              class="step-img"
              :src="item.img"
            >
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
          <img
            class="arrow-step arrow-step_desctop"
            v-if="idx !== steps.length - 1"
            src="/how-we-work/step-arrow-desc.svg"
            alt=""
          >


        </template>
      </div>
    </div>
  </section>

</template>

<script
  setup
  lang="ts"
>
import { ref } from 'vue';

const steps = ref([{
  name: 'Analysis',
  img: './how-we-work/1.svg'
}, {
  name: 'Mapping',
  img: './how-we-work/2.svg'
}, {
  name: 'Wireframing',
  img: './how-we-work/3.svg'
}, {
  name: 'UI design',
  img: './how-we-work/4.svg'
}, {
  name: 'Development',
  img: './how-we-work/5.svg'
}, {
  class: 'quality-assurance',
  name: 'Quality assurance',
  img: './how-we-work/6.svg'
}, {
  name: 'Release',
  img: './how-we-work/7.svg'
}])
</script>

<style
  scoped
  lang="scss"
>
.quality-assurance {
  width: 150px !important;
}
</style>


<style
  scoped
  lang="scss"
>
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
  font-family: 'Open Sans', sans-serif;
  font-weight: 800;
  font-style: normal;
  font-variation-settings:
    "wdth" 100;
  font-size: 70px;
  line-height: 77px;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 1.5px #fff;
  margin-bottom: 32px;
  letter-spacing: -0.02em;



  @media (min-width: $lg) {
    font-size: 120px;
    line-height: 144px;
    letter-spacing: -0.02em;
  }

  @media (min-width: $xl) {
    font-size: 140px;
    line-height: 154px;
    letter-spacing: -0.02em;
  }

  @media (min-width: $xxl) {
    margin-bottom: 60px;

  }



}

.arrow-step {
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
