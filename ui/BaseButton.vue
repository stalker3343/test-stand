<script lang="ts" setup>
defineOptions({
  inheritAttrs: false
})
defineProps({
  block: {
    default: false,
    type: Boolean,
  },
  color: {
    default: 'transparent', // primary
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false,

  },
  // bgColor: {
  //   default: 'white',
  //   type: String,
  // },
  // textColor: {
  //   default: '#0097EC',
  //   type: String,
  // },
  height: {
    default: '64px',
    type: String,
  }

})



</script>

<template>
  <button
    :disabled="disabled"
    class="base-button"
    :style="{
      height: height
    }"
    :class="{
      'base-button_block': block,
      'base-button_disabled': disabled,
      [`base-button_${color}`]: true
    }"
    v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.base-button {
  appearance: none;
  /* Property 1=Default */

  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;


  font-family: "Onest", sans-serif;

  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 140%;
  letter-spacing: 0.01em;

  cursor: pointer;

  border: 2px solid #FFFFFF;
  border-radius: 48px;






  &_block {
    width: 100%;
  }

  &_transparent {
    background: rgba(255, 255, 255, 0.08);
    color: white;

    &:hover {
      transition: all .2s ease-out;
      background-color: #FFFFFF;
      color: #0097EC;
    }
  }

  &_disabled {
    background: #FFFFFF;
    opacity: 20%;
    color: #000000;
    cursor: default;
    // &.base-button_white {
    //   &:hover {
    //     transition: all .2s ease-out;

    //     background-color: white;
    //     color: #0097EC;
    //   }
    // }

    // &.base-button_primary {
    //   &:hover {
    //     transition: all .2s ease-out;

    //     background-color: #0097EC;
    //     color: white;
    //   }
    // }

  }

  &_primary {


    background: rgba(0, 151, 236, 0.1);
    border: 4px solid #0097EC;
    color: #0097EC;


    &:hover {
      background: #0097EC;
      color: white;
    }
  }


}
</style>
