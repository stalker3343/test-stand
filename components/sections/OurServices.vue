<script
  setup
  lang="ts"
>
import { ref } from 'vue';
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
  const { $gsap } = useNuxtApp()
  const animHeaderConfig = {
    opacity: 0,
    duration: 0.8
  }

  // const animTextConfig = {
  //   opacity: 0,
  //   duration: 0.8
  // }

  const headerTextConfig = '<0.2'
  const blockConfig = '<0.4'


  // const animtextConfix = animHeaderConfig
  $gsap.timeline({
    scrollTrigger: {
      trigger: "#services",
      start: 'top 80%',
      end: 'bottom 60%',
      toggleActions: 'play none none reverse'
    }
  })
    .from('.section-header-wrapper', {
      y: 100,
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
    .from('.service-header-0', animHeaderConfig,)
    .from('.service-text-0', animHeaderConfig, headerTextConfig)
    .from('.service-header-1', animHeaderConfig, blockConfig)
    .from('.service-text-1', animHeaderConfig, headerTextConfig)
    .from('.service-header-2', animHeaderConfig, blockConfig)
    .from('.service-text-2', animHeaderConfig, headerTextConfig)
    .from('.service-header-3', animHeaderConfig, blockConfig)
    .from('.service-text-3', animHeaderConfig, headerTextConfig)





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

        <svg
          class="section-header-wrapper"
          viewBox="0 0 108 623"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.45798 210.917C3.14353 203.448 1 194.701 1 184.702C1 173.788 3.37244 163.356 8.11404 153.412L8.41384 152.784L31.0706 161.599L30.7298 162.325C29.0109 165.989 27.5645 169.651 26.3899 173.31C25.2309 176.921 24.6484 180.808 24.6484 184.975C24.6484 191.154 27.1701 195.935 32.2503 199.395L32.2528 199.396C37.3237 202.88 44.401 204.665 53.5664 204.665C63.1085 204.665 70.1278 202.846 74.7481 199.332C79.3296 195.847 81.6641 190.607 81.6641 183.471C81.6641 179.121 81.0588 174.91 79.8493 170.833C78.6266 166.712 77.1542 162.566 75.4318 158.396L75.0038 157.36H99.4453L99.6429 157.807C103.383 166.256 105.244 175.795 105.244 186.411C105.244 201.645 100.821 213.445 91.8775 221.689L91.8759 221.69C82.9413 229.88 70.0862 233.919 53.4297 233.919C42.9904 233.919 33.7812 231.964 25.822 228.031L25.8189 228.029C17.8548 224.047 11.7273 218.341 7.45798 210.917Z"
            stroke="white"
            stroke-width="1.5"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.43555 276.236L2.43555 247.597H103.877V276.236H2.43555Z"
            stroke="white"
            stroke-width="1.5"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.43555 462.589L2.43555 429.095C2.43555 415.446 4.90484 405.074 9.9611 398.098C15.0498 391.078 22.6802 387.603 32.7168 387.603C44.3559 387.603 53.4083 393.197 59.8341 404.235L103.877 374.781L103.877 407.241L67.5098 428.432V434.087H103.877V462.589H2.43555ZM22.875 435.587V429.505C22.875 424.808 23.7446 421.149 25.6038 418.65C27.494 416.109 30.3212 414.878 33.9473 414.878C38.2584 414.878 41.6217 416.102 43.8915 418.669C46.1457 421.219 47.207 424.967 47.207 429.779V435.587H22.875Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.43555 536.625L2.43555 475.789H25.6055L25.6055 508.123H39.8281L39.8281 478.182H62.998L62.998 508.123H80.3652V475.789H103.877V536.625H2.43555Z"
            stroke="white"
            stroke-width="1.5"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.43555 536.836L2.43555 476H25.6055L25.6055 508.334H39.8281L39.8281 478.393H62.998L62.998 508.334H80.3652V476H103.877V536.836H2.43555Z"
            stroke="white"
            stroke-width="1.5"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.43555 143.836L2.43555 83H25.6055L25.6055 115.334H39.8281L39.8281 85.3926H62.998L62.998 115.334H80.3652V83H103.877V143.836H2.43555Z"
            stroke="white"
            stroke-width="1.5"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.0069 61.6874C4.72395 54.8148 2.12695 45.428 2.12695 33.6131C2.12695 23.1495 4.54747 12.4958 9.36945 1.65787L9.66209 1.00012L31.9154 9.82849L31.586 10.5468C27.3262 19.8369 25.2285 27.7919 25.2285 34.4334C25.2285 37.8869 25.8401 40.2342 26.9181 41.6316C28.0236 43.0647 29.3405 43.7323 30.9043 43.7323C32.5653 43.7323 34.1198 42.897 35.5719 41.0192C36.3032 40.0504 37.3704 38.2129 38.7817 35.4586C40.1871 32.7159 41.9134 29.1048 43.9615 24.6218C47.8543 15.9664 52.0878 9.8616 56.7029 6.42239C61.2796 2.93226 67.0309 1.21274 73.9023 1.21274C80.2341 1.21274 85.8928 2.82117 90.8545 6.05097L90.8572 6.05276C95.7764 9.28536 99.6 13.9376 102.339 19.9731L102.341 19.9775C105.036 26.0175 106.371 33.0756 106.371 41.1327C106.371 47.8162 105.914 53.4523 104.989 58.0292L104.988 58.0363C104.016 62.6146 102.354 67.3647 100.009 72.2854L99.8054 72.7127H74.0415L74.6023 71.6203C77.2213 66.5177 79.2756 61.2127 80.7657 55.7046C82.2108 50.1941 82.9277 45.156 82.9277 40.5858C82.9277 36.6343 82.2492 33.8913 81.0252 32.2151C79.7431 30.5218 78.1586 29.7147 76.2266 29.7147C75.0114 29.7147 73.9911 30.0552 73.1305 30.7203L73.1156 30.7318L73.1002 30.7425C72.1692 31.3901 71.1853 32.5033 70.1643 34.1458L70.1594 34.1537C69.1476 35.7374 67.03 40.0992 63.7857 47.319L63.7843 47.3219C60.8098 53.866 57.905 58.8363 55.0605 62.1936L55.0572 62.1976C52.2107 65.5106 48.9322 67.9968 45.2218 69.6406L45.2145 69.6439C41.4999 71.2425 37.1334 72.0291 32.1348 72.0291C22.7201 72.0291 15.3127 68.5895 10.0069 61.6874Z"
            stroke="white"
            stroke-width="1.5"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.0069 610.687C4.72395 603.815 2.12695 594.428 2.12695 582.613C2.12695 572.149 4.54747 561.496 9.36945 550.658L9.66209 550L31.9154 558.828L31.586 559.547C27.3262 568.837 25.2285 576.792 25.2285 583.433C25.2285 586.887 25.8401 589.234 26.9181 590.632C28.0236 592.065 29.3405 592.732 30.9043 592.732C32.5653 592.732 34.1198 591.897 35.5719 590.019C36.3032 589.05 37.3704 587.213 38.7817 584.459C40.1871 581.716 41.9134 578.105 43.9615 573.622C47.8543 564.966 52.0878 558.862 56.7029 555.422C61.2796 551.932 67.0309 550.213 73.9023 550.213C80.2341 550.213 85.8928 551.821 90.8545 555.051L90.8572 555.053C95.7764 558.285 99.6 562.938 102.339 568.973L102.341 568.977C105.036 575.018 106.371 582.076 106.371 590.133C106.371 596.816 105.914 602.452 104.989 607.029L104.988 607.036C104.016 611.615 102.354 616.365 100.009 621.285L99.8054 621.713H74.0415L74.6023 620.62C77.2213 615.518 79.2756 610.213 80.7657 604.705C82.2108 599.194 82.9277 594.156 82.9277 589.586C82.9277 585.634 82.2492 582.891 81.0252 581.215C79.7431 579.522 78.1586 578.715 76.2266 578.715C75.0114 578.715 73.9911 579.055 73.1305 579.72L73.1156 579.732L73.1002 579.742C72.1692 580.39 71.1853 581.503 70.1643 583.146L70.1594 583.154C69.1476 584.737 67.03 589.099 63.7857 596.319L63.7843 596.322C60.8098 602.866 57.905 607.836 55.0605 611.194L55.0572 611.198C52.2107 614.511 48.9322 616.997 45.2218 618.641L45.2145 618.644C41.4999 620.243 37.1334 621.029 32.1348 621.029C22.7201 621.029 15.3127 617.59 10.0069 610.687Z"
            stroke="white"
            stroke-width="1.5"
          />
          <path
            d="M103.627 348.5V317L4.12695 284V314L72.627 332.5L4.12695 351V381L103.627 348.5Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>

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
  width: 110px;
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
