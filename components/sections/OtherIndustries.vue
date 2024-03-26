<script
  setup
  lang="ts"
>
import { ref } from 'vue';

const tags = ref(['RETAIL', 'FOODTECH', 'EVENTS', 'E-COMMERCE', 'FINTECH', 'TRAVEL', 'HEALTHCARE', 'EDTECH', 'LOGISTICS'])
</script>

<template>
  <div
    v-scroll-reveal
    class="container"
  >
    <h2 class="section-header">Other industries:</h2>
    <div class="tags-wrapper">
      <div
        class="tag-item"
        v-for="(item, idx) in tags"
        :key="idx"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>


<style
  scoped
  lang="scss"
>
.tags-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 9px;
  column-gap: 10px;

  @media (min-width: $md) {
    gap: 20px;
  }

  @media (min-width: $lg) {}

  @media (min-width: $xl) {}

  @media (min-width: $xxl) {}
}

.tag-item {
  font-family: "Onest", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.01em;

  padding: 7px 23px 7px 23px;
  border-radius: 77.02px;
  border: 2px;
  display: flex;
  background: rgba(255, 255, 255, 0.04);
  border: 2px solid rgba(255, 255, 255, 0.3);

  @media (min-width: $md) {
    font-family: "Onest", sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0.01em;
    text-align: left;

  }

  @media (min-width: $lg) {}

  @media (min-width: $xl) {}

  @media (min-width: $xxl) {}
}

.section-header {
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: center;
  margin-bottom: 35px;
  margin-top: 45px;

  @media (min-width: $md) {
    margin-top: 15px;
    font-size: 24px;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: 0px;
    text-align: center;
    margin-bottom: 30px;
  }


  @media (min-width: $lg) {
    margin-top: 55px;

  }


  @media (min-width: $xl) {
    margin-top: 40px;
  }

  @media (min-width: $xxl) {
    margin-top: 55px;

  }

}
</style>
