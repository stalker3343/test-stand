<script setup lang="ts">

defineProps({
  isLeftImg: {
    type: Boolean,
    required: true
  },

})
</script>


<template>
  <div class="base-case">
    <slot name="img"></slot>

    <div class="info-row">
      <slot name="description"></slot>
    </div>
    <div class="comment-row">
      <slot name="comment"></slot>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.base-case {
  position: relative;
}

.info-row {
  margin-bottom: 90px;

  @media (min-width: $md) {
    margin-bottom: 60px;
  }


  @media (min-width: $lg) {
    margin-bottom: 0px;
    padding: v-bind('isLeftImg ? `0px 0px 0px 0px` : `0px 0px`');
    display: grid;
    max-width: 422px;
    margin-left: v-bind('isLeftImg ? `auto` : `0px`');


    /* grid-template-columns: v-bind('isLeftImg ? `1fr 410px` : `410px 1fr`'); */
  }

  @media (min-width: $xl) {
    padding: 0px;
    max-width: 490px;
    margin-right: v-bind('isLeftImg ? `70px` : `0px`');

  }

  @media (min-width: $xxl) {

    margin-right: v-bind('isLeftImg ? `220px` : `0px`');
    margin-left: v-bind('isLeftImg ? `auto` : `160px`');

  }
}
</style>
