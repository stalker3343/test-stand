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
  left: -90px;
  height: 455px;

  @media (min-width: $md) {
    height: 680px;
    left: -130px;
    top: -46px;


  }

  @media (min-width: $lg) {
    height: 626px;
    left: -320px;
    top: -60px;

  }

  @media (min-width: $xl) {
    top: -90px;
    left: -320px;

    height: 670px;
  }

  @media (min-width: $xxl) {
    left: -30px;
    top: -40px;
    height: 645px;
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
