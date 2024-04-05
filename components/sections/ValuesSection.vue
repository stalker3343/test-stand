<template>
  <section class="values-section">
    <div class="container">
      <OurValues
        :fontControlled="false"
        class="section-header anim-our-values-header"
      ></OurValues>








      <!-- <h2 class="section-header ">OUR VALUES</h2> -->
      <div class="values-list">
        <div
          v-for="(item, key) in values"
          :key="key"
          class="value-item"
          :class="`value-item-${key}`"
        >
          <div class="value-header">
            {{ item.header }}
          </div>
          <div
            v-html="item.text"
            class="value-text"
          >

          </div>
          <div
            class="value-number"
            :class="`value-number-${key}`"
          >
            {{ key + 1 }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script
  setup
  lang="ts"
>
import { ref } from "vue";
import OurValues from "@/assets/images/headers/our-values.svg?skipsvgo"
import anime from "animejs";

const values = ref([{
  header: 'Process Transparecy',
  text: `
<p>Honest and transparent communication is the stem of our partnerships.</p>  
<p>It ensures there are no surprises on both sides.</p>  
<p>We're always around keeping you on track on all the details of the project.</p>  `,
}, {
  header: 'Client commitment',
  text: `
  <p>We take it personally.</p> 
    <p>We listen, we care.</p> 
    <p>When we work on a project, we see ourselves as your partners rather than mere coders. We share our vision and expertise to ensure the best quality possible.</p>  `,

}, {
  header: 'Talent Retention',
  text: `
  <p>Our main value is our team.</p> 
    <p>We put focus on finding and retention of most talented engineers with which you can be sure – the project is in good hands.</p> `,
}])


onMounted(() => {
  const { $gsap } = useNuxtApp()
  $gsap.timeline({
    scrollTrigger: {
      trigger: `.values-section`,
      start: 'top 75%',
      end: 'bottom 60%',
      toggleActions: 'play none none reverse',
    }
  }).from(`.anim-our-values-header`, {
    y: 100,
    duration: 1,
    opacity: 0,
  })
    .add(function () {
      anime({
        targets: `.anim-our-values-header path`,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1001,
        delay: function (el, i) { return i * 30 },
        // direction: 'alternate',
        // loop: true
      });
    }, '<')
    .from(`.value-number`,
      {
        opacity: 0,
        duration: 0.1,
        stagger: 0.2,
      }, '<0.3')
    .from(`.value-header`,
      {
        opacity: 0,
        duration: 0.1,
        stagger: 0.2,
      }, '<0.2')
    .from(`.value-text`,
      {
        opacity: 0,
        duration: 0.1,
        stagger: 0.2,
      }, '<0.05')





})

</script>
<style
  lang="scss"
  scoped
>
.values-list {
  @media (min-width: $md) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 50px;
  }

  @media (min-width: $lg) {
    column-gap: 40px;

  }

  @media (min-width: $xl) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 40px;
  }

  @media (min-width: $xxl) {}
}

.values-section {
  margin-top: 135px;

  @media (min-width: $md) {
    margin-top: 120px;

  }

  @media (min-width: $lg) {
    margin-top: 80px;

  }

  @media (min-width: $xl) {
    margin-top: 80px;

  }

  @media (min-width: $xxl) {}
}





.value-item {
  position: relative;
  padding: 0px 12px;

  .value-text {
    max-width: 240px;
  }

  @media (min-width: $md) {
    padding: 0px;
  }




  &-0 {
    padding-top: 60px;
    padding-bottom: 0px;



    @media (min-width: $md) {
      padding-top: 120px;
      padding-left: 25px;
    }

    @media (min-width: $lg) {
      padding-top: 120px;
      padding-left: 50px;

      .value-text {
        max-width: 350px;
      }
    }

  }

  &-1 {
    padding-top: 87px;

    @media (min-width: $md) {
      padding-top: 295px;
      padding-bottom: 115px;
    }

    @media (min-width: $lg) {
      padding-left: 0px;

      .value-text {
        max-width: 350px;
      }

    }


  }

  &-2 {
    padding-top: 123px;
    padding-bottom: 100px;

    @media (min-width: $md) {
      padding-top: 0px;
      padding-left: 25px;
    }

    @media (min-width: $lg) {
      padding-top: 0px;
      padding-left: 50px;

      .value-text {
        max-width: 320px;
      }

    }



    @media (min-width: $xxl) {}
  }



  @media (min-width: $xl) {
    padding: 125px 45px;

    .value-text {
      max-width: initial;
    }
  }

  @media (min-width: $xxl) {
    padding: 142px 45px;

  }
}


.value-number {
  font-family: "Onest", sans-serif;

  font-size: 240px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0px;
  text-transform: uppercase;
  color: rgba(127, 218, 255, .2);
  mix-blend-mode: soft-light;
  position: absolute;



  @media (min-width: $md) {
    font-size: 540px;
    font-weight: 400;
    line-height: 540px;
    letter-spacing: 0px;
    text-align: right;
  }

  &-0 {
    top: 90px;
    left: 230px;

    @media (min-width: $md) {
      left: initial;
      font-size: 540px;
      top: -23px;
      right: 0px;
    }

    @media (min-width: $lg) {
      top: -33px;
      right: 143px;
    }

    @media (min-width: $xl) {
      top: -35px;
      right: 75px;
    }

    @media (min-width: $xxl) {
      top: -20px;
      right: 190px;
    }
  }

  &-1 {
    top: 115px;
    left: 180px;

    @media (min-width: $md) {
      font-size: 540px;
      top: 261px;
      left: -21px;
    }

    @media (min-width: $lg) {
      left: -25px;

    }

    @media (min-width: $xl) {
      top: 76px;
      left: 29px;
    }

    @media (min-width: $xxl) {
      top: -20px;
      right: initial;
      left: 103px;
    }
  }

  &-2 {

    top: 187px;
    left: 175px;

    @media (min-width: $md) {
      left: initial;
      font-size: 540px;
      top: -158px;
      right: -66px;
    }

    @media (min-width: $lg) {

      top: -159px;
      right: 111px;
    }

    @media (min-width: $xl) {
      top: -32px;
      left: 20px;
    }

    @media (min-width: $xxl) {
      top: -20px;
      right: 190px;
    }
  }
}


.value-header {
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
    letter-spacing: 0px;
    text-align: left;
    margin-bottom: 25px;
  }

}

.value-text {
  font-size: 17px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;



  @media (min-width: $md) {

    font-size: 19px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;

  }

  @media (min-width: $lg) {}

  @media (min-width: $xl) {}

  @media (min-width: $xxl) {}
}



.section-header {
  color: transparent;
  -webkit-text-stroke: 1.5px #fff;
  font-family: "Open Sans", sans-serif;
  font-variation-settings:
    "wdth" 100;
  font-size: 70px;
  font-weight: 800;
  font-style: normal;

  line-height: 77px;
  letter-spacing: -0.02em;
  margin-bottom: 15px;
  margin: 0 auto;
  display: block;


  @media (min-width: $md) {}

  @media (min-width: $lg) {
    font-size: 120px;
    line-height: 144px;
    text-align: center;
  }

  @media (min-width: $xl) {
    font-size: 140px;
    line-height: 140px;
  }

  @media (min-width: $xxl) {
    line-height: 196px;
  }
}
</style>
