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
    class="looker-case"
    :is-left-img="true"
  >
    <template #img>

      <video
        class="base-image"
        lazy
        autoplay
        muted
      >
        <!-- <source
          src="https://rotato.netlify.app/alpha-demo/movie-hevc.mov"
          type='video/mp4; codecs="hvc1"'
        > -->
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
        class="looker-case-description"
        :header="caseItem.header"
        :description="caseItem.description"
        :technologies="caseItem.technologies"
      ></CaseDescription>
    </template>
    <template #comment>
      <CaseFeedback v-bind="caseItem.comment"></CaseFeedback>
    </template>
  </BaseCase>
</template>

<style lang="scss" scoped>
.looker-case-description {


  @media (min-width: $lg) {
    margin-bottom: 160px;
  }

  @media (min-width: $xl) {
    margin-bottom: 80px;

  }

  @media (min-width: $xxl) {}
}

.base-image {
  z-index: 10;
  position: absolute;
  top: -30px;
  max-width: initial;
  left: -75px;
  height: 393px;
  object-fit: cover;

  @media (min-width: $md) {
    top: -40px;

    height: 608px;
    left: -120px;
  }

  @media (min-width: $lg) {
    height: 665px;
    left: -395px;
    top: -92px;


  }

  @media (min-width: $xl) {
    left: -345px;
    top: -80px;

  }

  @media (min-width: $xxl) {
    left: -70px;
    top: -40px;
    height: 665px;


  }
}

.looker-case {
  padding-top: 360px;

  @media (min-width: $md) {
    padding-top: calc(448px + 60px);
  }

  @media (min-width: $lg) {
    padding: 0px;
  }

  @media (min-width: $xl) {}

  @media (min-width: $xxl) {}
}
</style>
