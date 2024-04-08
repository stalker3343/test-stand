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
    class="tyler-case"
    :is-left-img="false"
  >
    <template #img>
      <!-- <img
        class="base-image"
        :src="caseItem.img"
        alt=""
        loading="lazy"
      > -->
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
    </template>
    <template #description>
      <CaseDescription
        class="tyler-case-description"
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
.tyler-case-description {


  @media (min-width: $lg) {
    margin-bottom: 100px;
  }

  @media (min-width: $xl) {
    margin-bottom: 115px;

  }

  @media (min-width: $xxl) {
    margin-bottom: 85px;

  }
}

.base-image {
  position: absolute;
  top: 0px;
  max-width: initial;
  left: 0px;
  height: 275px;

  @media (min-width: $md) {
    height: 388px;
  }

  @media (min-width: $lg) {
    height: 366px;
    left: 432px;
    top: 10px;
  }

  @media (min-width: $xl) {
    top: -30px;
    left: 600px;

    height: 462px;
  }

  @media (min-width: $xxl) {
    top: -30px;
    left: 870px;

  }

}

.tyler-case {
  padding-top: calc(275px + 85px);

  @media (min-width: $md) {
    padding-top: calc(388px + 60px);
  }

  @media (min-width: $lg) {
    padding: 0px;

  }

  @media (min-width: $xl) {}

  @media (min-width: $xxl) {}

}
</style>
