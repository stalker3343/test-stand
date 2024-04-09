<script setup lang="ts">
import BaseCase from "./BaseCase.vue";
import CaseDescription from "./CaseDescription.vue";
import CaseFeedback from "./CaseFeedback.vue";

defineProps({
  caseItem: {
    type: Object,
    required: true
  },

})
</script>


<template>
  <BaseCase
    class="witmall-case"
    :is-left-img="true"
  >
    <template #img>
      <video
        class="base-image"
        autoplay
        loop
        muted
        playsinline
      >
        <source
          src="https://rotato.netlify.app/alpha-demo/movie-hevc.mov"
          type='video/mp4; codecs="hvc1"'
        >
        <source
          :src="caseItem.video"
          type="video/webm"
        >
      </video>

      <!-- <img
        class="base-image"
        :src="caseItem.img"
        alt=""
      > -->
    </template>
    <template #description>
      <CaseDescription
        class="witmall-case-description"
        :header="caseItem.header"
        :description="caseItem.description"
        :technologies="caseItem.technologies"
      ></CaseDescription>
    </template>
    <template #comment>
      <CaseFeedback
        class="witmall-case-feedback"
        v-bind="caseItem.comment"
      ></CaseFeedback>
    </template>
  </BaseCase>
</template>

<style lang="scss" scoped>
.witmall-case-description {


  @media (min-width: $lg) {
    margin-bottom: 45px;
  }

  @media (min-width: $xl) {}

  @media (min-width: $xxl) {}
}

.base-image {
  z-index: 10;

  position: absolute;
  top: 3px;
  max-width: initial;
  left: 0px;
  height: 355px;

  @media (min-width: $md) {
    height: 501px;
  }

  @media (min-width: $lg) {
    height: 476px;
    left: -140px;
    top: 30px;

  }

  @media (min-width: $xl) {
    top: 15px;
    left: -190px;

    height: 570px;
  }

  @media (min-width: $xxl) {
    top: 5px;
    left: 0px;
  }

}

.witmall-case {
  padding-top: calc(359px + 80px);

  @media (min-width: $md) {
    padding-top: calc(501px + 60px);
  }

  @media (min-width: $lg) {
    padding: 0px;
    padding-top: 10px;
  }

  @media (min-width: $xl) {
    padding-top: 0px;
  }

  @media (min-width: $xxl) {}

}
</style>
