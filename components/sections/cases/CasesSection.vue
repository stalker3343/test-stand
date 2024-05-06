<script setup lang="ts">
import { ref } from "vue";


import LookCase from "./LookCase.vue";
import MavenirCase from "./MavenirCase.vue";
import SolidCase from "./SolidCase.vue";
import TylerCase from "./TylerCase.vue";


const cases = ref([{
  video: './cases/video/look',
  header: 'LookLook',
  description: `<p style="margin-bottom: 16px">Leading corporate survey platform with advanced features of marketing research. They reached out to us for assistance as their legacy system had issues with scaling performance.</p> <p>We rebuilt the frontend and backend of the platform on the modern technology stack based on Amazon services. As a result, we developed an automatically scaling system that balances the peak loads.</p> `,
  technologies: [
    {
      src: './cases/technologies/node.svg',
      width: 57,
      smWidth: 43,
    }, {
      src: './cases/technologies/nuxt.svg',
      width: 102,
      smWidth: 77,
    }, {
      src: './cases/technologies/vue.svg',
      width: 57,
      smWidth: 43,
    }, {
      src: './cases/technologies/aws.svg',
      width: 42,
      smWidth: 31,
    }
  ],


  comment: {
    name: 'Malinda Sanna',
    position: 'CEO at ',
    company: 'LookLook, USA',
    text: '  Thanks to Afterlogic.Works’ efforts, the business has grown by 30%. The team has successfully delivered and managed the project; they follow budgets, they stand out for their ability to provide solutions.',
  }
}, {

  header: 'Mavenir',
  description: `Mavenir is an international company globally recognized as an innovator and industry leader in cellular communications. We helped them build modern web portals and dashboards servicing millions of subscribers of telco carriers in the USA, Europe and Australia.`,
  video: './cases/video/mavenir',


  technologies: [
    {
      src: './cases/technologies/javascript.svg',
      width: 57,
      smWidth: 45,
    }, {
      src: './cases/technologies/vue.svg',
      width: 57,
      smWidth: 45,
    }, {
      src: './cases/technologies/php.svg',
      width: 57,
      smWidth: 45,
    }, {
      src: './cases/technologies/ldap.svg',
      width: 55,
      smWidth: 44,
    }, {
      src: './cases/technologies/hostfix.svg',
      width: 55,
      smWidth: 44,
    }
  ], comment: {
    name: 'Sergey Buravov',
    position: 'Senior Project Manager at ',
    company: 'Mavenir',
    text: "Afterlogic.Works's ability to provide on-site and online support and maintenance for up to 24x7 level is also the important factor for us, helping us build and run the platforms which serve hundreds of millions of people worldwide.",
  }

}, {
  header: 'TYLR',
  video: './cases/video/tyler',

  description: `The service helps increase users' engagement and makes content more accessible for people of all abilities using an AI-powered system. This includes the website widget which enables text conversion to speech on the fly with translation to several languages, and dashboard with the advanced analytics. We also developed a plugin to simplify integration of TYLR with WordPress-powered sites.`,
  technologies: [
    {
      src: './cases/technologies/next.svg',
      width: 90,
      smWidth: 75,

    }, {
      src: './cases/technologies/node.svg',
      width: 57,
      smWidth: 48,
    }, {
      src: './cases/technologies/react.svg',
      width: 102,
      smWidth: 86,
    }, {
      src: './cases/technologies/aws.svg',
      width: 42,
      smWidth: 35,
    }
  ], comment: {
    // Chris Mak
    name: 'Chris Mak',
    position: 'CEO at ',
    company: 'TYLR, USA',
    text: "The product was delivered on time and as expected. Afterlogic.Works has successfully launched the product within the expected budget and timeframe. The team has good management and communication skills. Afterlogic.Works is responsive through email and virtual meetings.",
  }




}, {
  header: 'Solid#',
  description: `Solid# is a multi-functional system made to simplify transferring payments for businesses. Besides payment-related functions the app provides key business information, SMS/Email reminders, automated sales funnels. We're asked to take on the development of the existing system and extend its functionality in many ways. Since it is an online payment and banking system, safety and reliability were the core values during the development of this project. This platform is PCI compliant.`,

  video: './cases/video/solid',


  technologies: [
    {
      src: './cases/technologies/node.svg',
      width: 57,
      smWidth: 45,
    },
    {
      src: './cases/technologies/php.svg',
      width: 57,
      smWidth: 45,
    },
    {
      src: './cases/technologies/vue.svg',
      width: 57,
      smWidth: 45,
    },
    {
      src: './cases/technologies/redis.svg',
      height: 38,
      smHeight: 32,
    }
  ],
  comment: {
    name: 'Adam Campbell',
    position: 'CEO at ',
    company: 'Solid Number, USA',
    text: "Afterlogic.Works has proved to be a reliable partner. The team provides valuable insights and suggestions for product improvement. They're a patient team that's comprised of great listeners.",
  }

}])


onMounted(() => {
  const { $gsap } = useNuxtApp()
  const cases = ['.looker-case', '.tyler-case', '.witmall-case', '.word-case']

  const createTimelines = () => {
    return cases.map((caseClass, idx) => {

      $gsap.timeline({
        scrollTrigger: {
          trigger: caseClass,
          start: 'top 75%',
          end: 'bottom 60%',
          toggleActions: 'play none none none',

        }
      })
        .from(`${caseClass} .case-header`, {
          opacity: 0,
          duration: 0.2,
          x: idx % 2 === 0 ? -20 : 20,
        }, "<0.2")
        .from(`${caseClass} .case-description`, {
          opacity: 0,
          duration: 0.2,
          x: idx % 2 === 0 ? -20 : 20,
        }, "<0.1")
        .from(`${caseClass} .base-image`, {
          opacity: 0,
          duration: 0.8,
          x: idx % 2 === 0 ? -40 : 40,
        })

      $gsap.timeline({
        scrollTrigger: {
          trigger: caseClass,
          start: 'top 50%',
          end: 'bottom 90%',
          toggleActions: 'play none none none',
        }
      })
        .from(`${caseClass} .case-tech`, {
          duration: 0.3,
          opacity: 0,
          stagger: {
            from: idx % 2 === 0 ? "start" : "end",
            amount: 0.3,
            // y: 5
          }
        }, "<0.2")


      $gsap.timeline({
        scrollTrigger: {
          trigger: caseClass,
          start: 'top 30%',
          end: 'bottom 60%',
          toggleActions: 'play none none none',

        }
      })
        .from(`${caseClass} .feedback-name`, {
          opacity: 0,
          duration: 0.1,
        }, "<0.5")
        .from(`${caseClass} .feedback-position-wrapper`, {
          opacity: 0,
          duration: 0.1,
        }, "<0.05")
        .from(`${caseClass} .feedback-description`, {
          opacity: 0,
          duration: 0.4,
        }, "<0.1")


      // .from('.tag-item', {
      //   duration: 0.6,
      //   opacity: 0,
      //   y: 5,
      //   stagger: {
      //     from: "start",
      //     amount: 0.6,
      //   }
      // }, '<0.2')
    })
  }


  createTimelines()
  // cases.forEach((caseClass, idx) => {
  //   ScrollTrigger.create({
  //     trigger: caseClass,
  //     start: 'top 80%',
  //     end: 'bottom 60%',
  //     toggleActions: 'play none none reverse',
  //     animation: timeLines[idx]
  //   });
  // })

})



</script>


<template>
  <section class="section-cases">
    <h2 class="visually-hidden">Cases</h2>


    <div class="container">
      <div class="section-wrapper">
        <LookCase :case-item="cases[0]"></LookCase>
        <MavenirCase :case-item="cases[1]"></MavenirCase>
        <TylerCase :case-item="cases[2]"></TylerCase>
        <SolidCase :case-item="cases[3]"></SolidCase>
      </div>




    </div>
  </section>
</template>

<style lang="scss" scoped>
.section-cases {
  margin-top: 120px;
  margin-top: 120px;
  overflow-x: clip;

  @media (min-width: $md) {
    margin-top: 120px;
  }

  @media (min-width: $lg) {
    margin-top: 160px;

  }

  @media (min-width: $xl) {
    margin-top: 190px;
  }

  @media (min-width: $xxl) {
    margin-top: 185px;
  }
}

.section-wrapper {
  display: flex;
  flex-direction: column;
  gap: 120px;

  @media (min-width: $lg) {
    gap: 120px;
  }

  @media (min-width: $xl) {
    gap: 120px;
  }


  @media (min-width: $xxl) {
    gap: 130px;

  }

}
</style>
