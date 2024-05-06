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
  top: -40px;
  max-width: initial;
  left: -80px;
  height: 420px;

  @media (min-width: $md) {
    height: 560px;
    left: -90px;
    top: -35px;


  }

  @media (min-width: $lg) {
    height: 586px;
    left: -180px;
    top: -60px;

  }

  @media (min-width: $xl) {
    top: -60px;
    left: -270px;

    height: 740px;
  }

  @media (min-width: $xxl) {
    left: -80px;
    top: -160px;
    height: 855px;
  }

}


.witmall-case-feedback {

  @media (min-width: $lg) {
    padding-top: 70px;

  }

  @media (min-width: $xl) {
    padding-top: 105px;
  }

  @media (min-width: $xxl) {
    padding-top: 120px;
  }
}

.witmall-case {
  padding-top: calc(359px + 50px);

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
