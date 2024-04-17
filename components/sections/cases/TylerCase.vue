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
  z-index: 10;

  position: absolute;
  top: -30px;
  max-width: initial;
  left: -45px;
  height: 375px;

  @media (min-width: $md) {
    height: 598px;
    top: -90px;
    left: -105px;


  }

  @media (min-width: $lg) {
    height: 526px;
    left: 392px;
    top: -30px;
  }

  @media (min-width: $xl) {
    top: -140px;
    left: 410px;

    height: 762px;
  }

  @media (min-width: $xxl) {
    top: -100px;
    left: 795px;

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
