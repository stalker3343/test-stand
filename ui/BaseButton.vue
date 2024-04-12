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
    default: 'white', // primary
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

  border-radius: 48px;

  font-family: "Onest", sans-serif;

  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0.01em;

  border: none;
  cursor: pointer;

  &_block {
    width: 100%;
  }

  &_white {
    background-color: white;
    color: #0097EC;

    &:hover {
      transition: all .2s ease-out;

      background-color: #0097EC;
      color: white;
    }
  }

  &_disabled {
    opacity: 20%;
    cursor: default;

    &.base-button_white {
      &:hover {
        transition: all .2s ease-out;

        background-color: white;
        color: #0097EC;
      }
    }

    &.base-button_primary {
      &:hover {
        transition: all .2s ease-out;

        background-color: #0097EC;
        color: white;
      }
    }

  }

  &_primary {
    background-color: #0097EC;
    color: white;

    &:hover {
      background-color: white;
      color: #0097EC;
    }
  }


}
</style>
