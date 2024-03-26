<template>
  <div>


    <HeaderSection></HeaderSection>
    <OurClients />
    <OurServices></OurServices>
    <WeWork
      header="WE WORK WITH"
      :rows="rowsWeWork"
    ></WeWork>



    <OtherIndustries></OtherIndustries>
    <CasesSection></CasesSection>
    <BlogSection></BlogSection>
    <ValuesSection></ValuesSection>
    <HowWeWork></HowWeWork>
    <WeWork
      header="What we do is high-quality"
      :rows="rowsWeDo"
    ></WeWork>
    <!-- <OurOtherClients></OurOtherClients> -->
    <AppFooter></AppFooter>
    <TestDinamBg></TestDinamBg>
    <ShapesBg> </ShapesBg>



  </div>
</template>
<script
  lang="ts"
  setup
>
import { defineAsyncComponent, ref } from "vue";
// import OurClients from "../components/sections/OurClients.vue";
const OurClients = defineAsyncComponent(() =>
  import('../components/sections/OurClients.vue')
)


import HeaderSection from "../components/sections/HeaderSection.vue";
import OurServices from "../components/sections/OurServices.vue";
import WeWork from "../components/sections/WeWork.vue";
import OtherIndustries from "../components/sections/OtherIndustries.vue";
import CasesSection from "../components/sections/cases/CasesSection.vue";
import BlogSection from "../components/sections/BlogSection.vue";
import ValuesSection from "../components/sections/ValuesSection.vue";
// import OurOtherClients from "../components/sections/OurOtherClients.vue";
import AppFooter from "../components/App/AppFooter.vue";
import TestDinamBg from "../components/TestDinamBg.vue";
import ShapesBg from "../components/ShapesBg.vue";

import HowWeWork from "../components/sections/HowWeWork.vue";

const rowsWeWork = ref([{
  title: 'Small and mid-size businesses',
  text: "We're proficient in building secure, scalable and reliable backends and APIs in Node.js, PHP (Laravel) for web and mobile apps operating in the cloud or on your premises."
}, {
  title: 'Managed Services Providers / System Integrators',
  text: "Extend the capabilities of your development team and strengthen your technical expertise when working on your client's projects. This may include all kinds of integration, deployment, migration, ongoing maintenance, support and so on."
}, {
  title: 'Design agencies',
  text: "Transforming your designs into actual web pages and mobile apps in a pixel-perfect way. We're fluent in WordPress, headless CMSes, Vue.js, React, Flutter. Complex animations included. And yes, we can work white-label."
}, {
  title: 'Startups',
  text: 'Looking for a reliable tech partner to kickstart your idea? Rapid prototype development with quick turnarounds and highly responsive dev team. Also transforming existing MVPs into production-level apps.'
}])


const rowsWeDo = ref([{
  title: 'Code cross-reviews',
  text: `We conduct quality control inspections, where our experienced developers review each other's code to ensure that the decisions made lead to a well-thought, extensible, safe and secure solution.`
}, {
  title: 'Approved by AI',
  text: 'Our development process is backed by cutting-edge AI technologies. AI bot conducts automated analyses of each commit, ensuring high quality of the code and test coverage at every stage of the development.'
}, {
  title: 'Strict coding standards',
  text: 'We write code respecting industry-leading standards. To maintain our code quality and style at a desired level, we also utilize static code analysis tools. Every line of code goes through a meticulous compliance check.'
}, {
  title: 'Continuous development',
  text: 'We integrate automated tests into the development process, detecting and addressing potential issues at early stages. We also employ CI/CD to streamline the delivery of your web or mobile app.'
}])


</script>