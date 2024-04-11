<script lang="ts" setup>
import { toRef } from 'vue';
import { useField } from 'vee-validate';

const props = defineProps({
  as: {
    default: 'input',
    type: String,
  },
  modelValue: {
    type: String,
    default: undefined,
  },
  name: {
    type: String,
    required: true,
  },

})
const name = toRef(props, 'name');

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(name, undefined, {
  initialValue: props.modelValue,
  validateOnValueUpdate: false,
  syncVModel: true,
});

const validationListeners = {
  blur: (evt: Event) => handleBlur(evt, true),
  change: handleChange,
  input: (evt: Event) => handleChange(evt, !!errorMessage.value),
};


</script>

<template>
  <div style="position: relative;">
    <component
      :name="name"
      :value="inputValue"
      class="input-inner"
      :class="errorMessage && 'input-inner_invalid'"
      v-bind="$attrs"
      v-on="validationListeners"
      type="text"
      :is="as"
    >
    </component>
    <p
      class="help-message"
      v-show="errorMessage || meta.valid"
    >
      {{ errorMessage }}
    </p>

    <!-- <input > -->
  </div>
</template>

<style scoped lang="scss">
.input-inner {
  appearance: none;
  background: transparent;
  padding: 16px;
  gap: 10px;
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  font-family: "Onest", sans-serif;

  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 140%;
  color: white;
  width: 100%;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    outline: none;
  }

  &_invalid {
    border: 2px solid #FF7773;

    &::placeholder {
      color: #FFD8D8;
    }

  }
}

.help-message {
  position: absolute;
  left: 17px;
  bottom: -26px;
  font-family: Onest;
  font-size: 14px;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #FFD8D8;
}
</style>
