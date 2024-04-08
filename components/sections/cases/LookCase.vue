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
        loop
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
  position: absolute;
  top: 0px;
  max-width: initial;
  left: -20px;
  height: 283px;
  object-fit: cover;

  @media (min-width: $md) {
    height: 448px;
    left: -50px;
  }

  @media (min-width: $lg) {
    height: 465px;
    left: -380px;
    top: -29px;


  }

  @media (min-width: $xl) {
    left: -320px;
    top: -20px;

  }

  @media (min-width: $xxl) {
    left: 0px;

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
