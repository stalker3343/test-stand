<template>
  <main>


    <HeaderSection></HeaderSection>
    <OurClients />


    <OurServices></OurServices>
    <WeWork
      id="industries"
      header="WE WORK WITH"
      :rows="rowsWeWork"
    ></WeWork>

    <OtherIndustries></OtherIndustries>
    <CasesSection></CasesSection>
    <BlogSection></BlogSection>
    <ValuesSection></ValuesSection>
    <HowWeWork></HowWeWork>
    <WeWork
      id="quality"
      header="What we do is high-quality"
      :rows="rowsWeDo"
    ></WeWork>
    <!-- <OurOtherClients></OurOtherClients> -->
    <ShapesBg></ShapesBg>


  </main>
  <AppFooter></AppFooter>

</template>
<script lang="ts" setup>
import { defineAsyncComponent, ref } from "vue";
// import OurClients from "../components/sections/OurClients.vue";
const OurClients = defineAsyncComponent(() =>
  import('../components/sections/OurClients.vue')
)

const AppFooter = defineAsyncComponent(() => import('../components/App/AppFooter.vue'))


import HeaderSection from "../components/sections/HeaderSection.vue";
import OurServices from "../components/sections/OurServices.vue";
import WeWork from "../components/sections/WeWork.vue";
import OtherIndustries from "../components/sections/OtherIndustries.vue";
import CasesSection from "../components/sections/cases/CasesSection.vue";
import BlogSection from "../components/sections/BlogSection.vue";
import ValuesSection from "../components/sections/ValuesSection.vue";
// import OurOtherClients from "../components/sections/OurOtherClients.vue";
// import AppFooter from "../components/App/AppFooter.vue";
import TestDinamBg from "../components/TestDinamBg.vue";
import ShapesBg from "../components/ShapesBg.vue";
import anime from "animejs";

import HowWeWork from "../components/sections/HowWeWork.vue";

const rowsWeWork = ref([{
  title: 'Small and mid-size businesses',
  text: "<p> Creating affordable web and mobile solutions for SMBs across the world for more than 12 years.</p> <p>We both develop applications from scratch and adapt legacy ones to your actual requirements.</p>"
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
  title: 'In QA we trust',
  text: `<p>Before going live, any changes in the project being developed undergo the meticulous testing process.</p>
  <p>In our company, it's performed by dedicated QA engineers which report back any issues found and won't let them reach production server or app.</p>`
}, {
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

const appWrapper = ref<HTMLInputElement | null>(null)
onMounted(() => {
  const { $gsap } = useNuxtApp()
  const wrapper = document.querySelector('.app-wrapper')
  wrapper?.classList.remove("app-wrapper-hidden");
  document.body.classList.remove('loading');

  $gsap.timeline()
    .from(['.anim-logo', '.menu-list', '.call-to-action'], {
      stagger: 0.1,
      y: -200,
      duration: 0.5,
      ease: "back.out(1.25)",
    })
    .from('.text-logo-one-row', {
      opacity: 0,
      y: 30,
    }, '<0.2')

    .add(function () {
      anime({
        targets: '.text-logo-one-row path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1000,
        delay: function (el, i) { return i * 30 },
        // direction: 'alternate',
        // loop: true
      });

    }, '<')

    .to('.company-description li', {
      clipPath: 'polygon(-20px 0%, 100% 0, 100% 100%, -20px 100%)',
      stagger: 0.2,
      duration: 0.8
    }, '<0.3')
    .from('.company-description', {
      opacity: 0,
      y: 30,
    }, '<0.1')
    .from('.badges-list a', {
      duration: 0.6,
      opacity: 0,
      stagger: {
        from: "end",
        amount: 0.15,
        // y: 11
      }
    }, '<0.3')
    .from('.contact-btn', {
      opacity: 0,
      y: 30,
    }, '<0.5')
    .from('.clients-header', {
      duration: 0.3,
      opacity: 0,
      y: 5
    }, '<0.2')
    .from('.item', {
      duration: 0.3,
      opacity: 0,
      stagger: {
        from: "start",
        amount: 0.3,
        // y: 5
      }
    }, '<0.2')
    .set(".mouse", { display: 'flex' }, '<1')







})


</script>
