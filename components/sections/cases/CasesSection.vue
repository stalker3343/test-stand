<script
  setup
  lang="ts"
>
import { ref } from "vue";


import LookCase from "./LookCase.vue";
import WordCase from "./WordCase.vue";
import WitmallCase from "./WitmallCase.vue";
import TylerCase from "./TylerCase.vue";

const cases = ref([{
  img: './cases/1.png',
  header: 'LookLook',
  description: `<p>Corporate survey platform with advanced features of marketing research. Survey answers may include audio and video with automatic transcription and translation – the legacy system had issues with scaling all these heavy tasks.</p> <p>We rebuilt the frontend and backend of the platform on the modern technology stack based on Amazon services. As a result, we developed an automatically scaling system that balances the peak loads.</p> `,
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
    text: 'Thanks to Afterlogic.Works’ efforts, the business has grown by 30% in 2021. The team has successfully delivered and managed the project; they follow budgets and use several project management tools, such as Sigma, GitLab, Asana, and Slack. They stand out for their ability to provide solutions.',
  }
}, {


  img: './cases/2.png',
  header: 'Mavenir',
  description: `
    <p>  We helped Mavenir (NYSE: Mavenir Sys) build modern web portals and dashboards servicing millions of subscribers of telco carriers in the USA, Europe and Australia.</p>
    <p>We developed all the webpages, APIs for the servers, video/audio transcoding, as well as implemented localisation for several languages. Also we performed low-level optimization and customization of server infrastructure.</p>
  `,
  technologies: [
    {
      src: './cases/technologies/js.svg',
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
  img: './cases/3.png',
  header: 'SolidNumber',
  description: `SolidNumber - a multifunctional money system made in honor to ease transferring payments for businesses. Besides money-related functions the app provides you with key business information, SMS/Email reminders, automated sales funnels. It is also one of the most cost-effective money transaction tools in the United States. Since it is an online payment and banking system, safety and reliability were the core values during the development of this project. This platform is PCI compliant.`,
  technologies: [
    {
      src: './cases/technologies/node.svg',
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
    company: 'Solid#, USA',
    text: "Afterlogic.Works has proved to be a reliable partner. They've effectively reported errors, changed code, and maintained the client's flagship platform. The team provides valuable insights and suggestions for product improvement. They're a patient team that's comprised of great listeners",
  }

}, {
  img: './cases/4.png',
  header: 'TYLR',
  description: `The service helps increase users' engagement and makes content more accessible for people of all abilities using an AI-powered system. This includes the website widget which enables text conversion to speech on the fly with translation to several languages, and dashboard with the advanced analytics. We also developed a plugin to simplify integration of Tyler with WordPress-powered sites. `,
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
    name: 'Chris Mak',
    position: 'CEO at ',
    company: 'Text-to-speech service, USA',
    text: "The product was delivered on time and as expected. Afterlogic.Works has successfully launched the client's product within the expected budget and timeframe. The team has good management and communication skills. Afterlogic.Works is responsive through email and virtual meetings.",
  }




}])
</script>


<template>
  <section class="section-cases">


    <div class="container">
      <div class="section-wrapper">
        <LookCase
          v-scroll-reveal-left
          :case-item="cases[0]"
        ></LookCase>
        <WordCase
          v-scroll-reveal-right
          :case-item="cases[1]"
        ></WordCase>
        <WitmallCase
          v-scroll-reveal-left
          :case-item="cases[2]"
        ></WitmallCase>
        <TylerCase
          v-scroll-reveal-right
          :case-item="cases[3]"
        ></TylerCase>
      </div>




    </div>
  </section>
</template>

<style
  lang="scss"
  scoped
>
.section-cases {
  margin-top: 120px;
  margin-top: 120px;
  overflow-x: clip;

  @media (min-width: $md) {
    margin-top: 120px;
  }

  @media (min-width: $lg) {
    margin-top: 120px;

  }

  @media (min-width: $xl) {
    margin-top: 130px;
  }

  @media (min-width: $xxl) {
    margin-top: 112px;
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
