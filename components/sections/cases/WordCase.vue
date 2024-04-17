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
    class="word-case"
    :is-left-img="false"
  >
    <template #img>
      <video
        class="base-image"
        autoplay
        muted
        playsinline
      >
        <source
          :src="`${caseItem.video}.mp4`"
          type='video/mp4; codecs="hvc1"'
        >
        <source
          :src="`${caseItem.video}.webm`"
          type="video/webm"
        >
      </video>

      <!-- <img
        loading="lazy"
        class="base-image"
        :src="caseItem.img"
        alt=""
      > -->
    </template>
    <template #description>
      <CaseDescription
        class="word-case-description"
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
.word-case-description {


  @media (min-width: $lg) {
    margin-bottom: 105px;
  }

  @media (min-width: $xl) {
    margin-bottom: 80px;

  }

  @media (min-width: $xxl) {}
}

.base-image {
  z-index: 10;

  position: absolute;
  top: -10px;
  left: -30px;
  max-width: initial;
  /* left: -20px; */
  height: 385px;

  @media (min-width: $md) {
    height: 571px;
    top: -30px;
    left: -30px;
  }

  @media (min-width: $lg) {
    height: 566px;
    left: 432px;
    top: -55px;

  }

  @media (min-width: $xl) {
    top: -160px;
    height: 756px;

    left: 480px;

  }

  @media (min-width: $xxl) {
    top: -100px;
    left: 840px;

  }

}

.word-case {
  padding-top: calc(359px + 75px);

  @media (min-width: $md) {
    padding-top: calc(501px + 70px);
  }

  @media (min-width: $lg) {
    padding: 0px;
    padding-top: 50px;
  }

  @media (min-width: $xl) {
    padding-top: 25px;
  }

  @media (min-width: $xxl) {
    padding-top: 20px;

  }
}
</style>
