<template>
  <div
    ref="navigation"
    class="overlay"
  >
    <div class="menu-inner">
      <ul class="menu-list">
        <li
          v-scroll-to="'#services'"
          @click="onLinkClick('#services')"
          class="menu-item"
        >
          Services
        </li>
        <li
          v-scroll-to="'#industries'"
          @click="onLinkClick('#industries')"
          class="menu-item"
        >
          Industries</li>
        <li
          v-scroll-to="'#blog'"
          @click="onLinkClick('#blog')"
          class="menu-item"
        >
          Blog
        </li>
      </ul>
      <BaseButton
        class="action-btn"
        height="74px"
        block
      >
        Get in touch
      </BaseButton>

      <div class="menu-contacts">
        <a
          class="contact-link"
          href="mailto:works@afterlogic.com"
        >
          works@afterlogic.com
        </a>
        <a
          class="contact-link"
          href="tel:+14155130152"
        >
          +1 415 513 0152
        </a>
      </div>

      <div class="social-links">
        <!-- <a class="social-link-item" href="http://">
          <BaseIcon :size="48" name="twitter"></BaseIcon>
        </a> -->

        <a
          target="_blank"
          class="social-link-item"
          href="https://www.facebook.com/Afterlogic.Works"
        >
          <BaseIcon
            :size="48"
            name="facebook"
          ></BaseIcon>
        </a>
        <a
          target="_blank"
          class="social-link-item"
          href="https://afterlogic.medium.com/"
        >
          <BaseIcon
            :size="48"
            name="medium"
          ></BaseIcon>
        </a>
        <a
          target="_blank"
          class="social-link-item"
          href="https://linkedin.com/company/afterlogic-works"
        >
          <BaseIcon
            :size="48"
            name="linkedin"
          ></BaseIcon>
        </a>
        <!-- <a class="social-link-item" href="http://">
          <BaseIcon :size="48" name="youtube"></BaseIcon>
        </a> -->
      </div>


    </div>
  </div>
</template>

<script lang="ts">
import BaseIcon from '@/ui/BaseIcon.vue'

import BaseButton from '@/ui/BaseButton.vue'

export default {
  components: {
    BaseButton,
    BaseIcon
  },
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },

  watch: {
    value(value) {
      if (value) {
        const elem = this.$refs.navigation as HTMLElement
        elem.style.height = 'calc(100vh - 82px)';
        document.body.classList.add('fix-scroll');
      } else {
        const elem = this.$refs.navigation as HTMLElement
        elem.style.height = '0%'
        document.body.classList.remove('fix-scroll');
      }
      // this.$store.commit('changeNoScroll', {
      //   item: 'menu',
      //   bool: value
      // })
    }
  },
  methods: {
    onLinkClick(route: string) {
      this.$emit('close');
      console.log("🚀 ~ onLinkClick ~ scrollTo:", route)

      // @ts-ignore
      // this.$scrollTo(route)
    }
  }

}
</script>

<style lang="scss" scoped>
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
}

.action-btn {
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

.overlay {
  height: 0%;
  width: 100vw;
  position: fixed;
  z-index: 100;
  top: 82px;
  bottom: 0;
  left: 0;
  background-color: white;
  overflow-x: hidden;
  transition: height 0.5s;


}
</style>
