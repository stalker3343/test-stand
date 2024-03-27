<script
  lang="ts"
  setup
>
// import { RouterView } from 'vue-router'
import AppHeader from './components/App/AppHeader.vue'
import HomeView from '@/views/HomeView.vue'
import Lenis from '@studio-freight/lenis'


onMounted(() => {
  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    console.log(e)
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
})

</script>


<template>
  <div class="app-wrapper">

    <!-- <video
      poster="/video-poster.png"
      disablePictureInPicture
      loop
      muted
      autoplay
      playsinline
      class="background-video"
      src="/Video_Works_HD.mp4"
    ></video> -->
    <AppHeader></AppHeader>
    <HomeView></HomeView>
    <!-- <RouterView /> -->
  </div>
</template>

<style scoped>
.app-wrapper {
  position: relative;
}

.background-video {
  position: fixed;
  width: 100%;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  height: 100lvh;
  object-fit: cover;
  z-index: -1;
  filter: opacity(.7);

}
</style>
