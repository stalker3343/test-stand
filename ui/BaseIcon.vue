<template>
  <svg :key="spriteHref" :class="['b-icon']" :data-testid="`${name}-icon`" role="img" :height="size" :width="size"
    v-bind="$attrs">
    <use :href="spriteHref" />
  </svg>
</template>

<script lang="ts">
import iconsPath from '/sprite.svg'

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 24
    },
  },
  computed: {
    spriteHref() {
      return `${iconsPath}#${this.name}`
    }
  }
}
</script>

<style lang="scss">
.gl-icon {
  fill: currentColor;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
