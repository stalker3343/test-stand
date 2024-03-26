<template>
  <div>
    <transition name="dialog-transition" appear>
      <div v-if="modelValue" class="modal" role="dialog">
        <div class="modal-inner">
          <div class="menu-inner">
            <div class="menu-list">
              <li @click="onLinkClick('#services')" class="menu-item">Services</li>
              <li @click="onLinkClick('#industries')" class="menu-item">Industries</li>
              <li @click="onLinkClick('#blog')" class="menu-item">Blog</li>
            </div>
            <BaseButton @click="onLinkClick('#footer-form')" class="action-btn" height="74px" color="primary" block>
              Get in touch
            </BaseButton>

            <div class="menu-contacts">
              <a class="contact-link" href="mailto:works@afterlogic.com">
                works@afterlogic.com
              </a>
              <a class="contact-link" href="tel:+14155130152">
                +1 415 513 0152
              </a>
            </div>

            <div class="social-links">
              <!-- <a class="social-link-item" href="http://">
                <BaseIcon :size="48" name="twitter"></BaseIcon>
              </a> -->

              <a target="_blank" class="social-link-item" href="https://www.facebook.com/Afterlogic.Works">
                <BaseIcon :size="48" name="facebook"></BaseIcon>
              </a>
              <a target="_blank" class="social-link-item" href="https://afterlogic.medium.com/">
                <BaseIcon :size="48" name="medium"></BaseIcon>
              </a>
              <a target="_blank" class="social-link-item" href="https://linkedin.com/company/afterlogic-works">
                <BaseIcon :size="48" name="linkedin"></BaseIcon>
              </a>
              <!-- <a class="social-link-item" href="http://">
                <BaseIcon :size="48" name="youtube"></BaseIcon>
              </a> -->
            </div>


          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
// import { useFixedScroll } from "@/composables/useFixedScroll";
import BaseIcon from '@/ui/BaseIcon.vue'

import BaseButton from '@/ui/BaseButton.vue'
export default {
  components: {
    BaseButton,
    BaseIcon
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  setup() {
    // const { setFixedScroll } = useFixedScroll();
    // return {
    //   setFixedScroll,
    // };
  },
  watch: {
    modelValue() {
      if (this.modelValue) {
        document.body.classList.add('fix-scroll');
      } else {
        document.body.classList.remove('fix-scroll');
      }
      // this.setFixedScroll(this.modelValue);
    },
  },

  mounted() {
    document.addEventListener("keydown", this.closeOnEsc);
  },

  beforeUnmount() {
    document.removeEventListener("keydown", this.closeOnEsc);
  },
  methods: {
    hide() {
      this.$emit("update:modelValue", false);
    },

    closeOnEsc(e: KeyboardEvent) {
      if (e.keyCode !== 27) {
        return;
      }
      this.hide();
    },
    onLinkClick(route: string) {
      this.hide();
      // @ts-ignore
      this.$scrollTo(route)
    }
  },
};
</script>

<style lang="scss" scoped>
.modal-inner {
  overflow-y: auto;
  // height: 100%;
}

.modal {
  overflow-y: auto;
  width: 100vw;
  // height: 100vh;

  position: fixed;
  top: 86px;
  right: 0;
  bottom: 0;
  left: 0;


  z-index: 400;
  background: white;

  // @media (min-width: $md) {
  //   width: 100vw;
  // }
}

.base-modal-inner {
  //  -ms-overflow-style: none;
  //     scrollbar-width: none;
  background: var(--b-background-white);
  padding: 16px;
  margin: 16px;
  overflow-y: auto;
  // max-height: 90%;
  border-radius: 15px;

  @media (min-width: $lg) {
    padding: 36px;
  }

  // &::-webkit-scrollbar {
  //   display: none;
  // }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  @media (min-width: $lg) {
    margin-bottom: 48px;
  }
}

.modal-header-title {
  display: flex;
  align-items: center;
  color: var(--b-blue-900);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  @media (min-width: $lg) {
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 36px;
  }
}

.dialog-transition {

  &-enter-active,
  &-leave-active {
    transition: transform 0.3s ease;
    pointer-events: none !important;
  }

  &-enter-from,
  &-leave-to {
    transform: translateX(100%);

    // transform: scale(0.5);
    // opacity: 0;
  }

  // &-enter-to,
  // &-leave {
  //   opacity: 1;
  // }
}

.app-sider-transition {
  // &-enter-active,
  // &-leave-active {
  //     transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  // }

  &-move {
    transition: transform 0.1s;
  }

  &-enter {
    transform: translateX(100%);
  }

  &-leave,
  &-leave-to {
    opacity: 0;
    transform: translateX(100%);
  }
}



/////////////////////// START COPY
.social-links {
  max-width: 239px;
  margin: 0 auto;
  margin-top: 56px;
  display: flex;
  justify-content: space-between;

  @media (min-width: $md) {}

  @media (min-width: $lg) {}

  @media (min-width: $xl) {}

  @media (min-width: $xxl) {}
}

.social-link-item {
  color: rgba(0, 151, 236, 1);
}


.contact-link {
  position: relative;
  display: block;
  font-family: "Onest", sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 34px;
  letter-spacing: 0em;
  text-align: left;
  color: inherit;
  text-decoration: none;

  &:after {
    content: '';
    position: absolute;
    height: 3px;
    width: 100%;
    bottom: -2px;
    left: 0px;
    background: rgba(0, 151, 236, .4);

  }
}

.menu-contacts {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-top: 40px;

  @media (min-width: $md) {
    flex-direction: row;
    justify-content: center;
  }

  @media (min-width: $lg) {}

  @media (min-width: $xl) {}

  @media (min-width: $xxl) {}
}

.action-btn {
  max-width: 640px;
  margin: 0 auto;
  margin-top: 80px;

}

.menu-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.menu-item {


  display: flex;
  align-items: center;
  height: 74px;
  border-bottom: 1px solid rgba(0, 151, 236, 0.2);

  font-family: "Onest", sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: 0.01em;
  text-align: left;


}

.menu-inner {
  padding: 24px 20px;
  padding-bottom: 40px;
  color: #0097EC;
}
</style>
