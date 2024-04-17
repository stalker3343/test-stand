<script lang="ts" setup>
import { ref } from 'vue';
// import AppMobileMenu from './AppMobileMenu.vue'
import AppMobileMenuRight from './AppMobileMenuRight.vue'


const isModalOpen = ref(false)
const isRightModalOpen = ref(false)
const onToggleMenu = () => {
  // isModalOpen.value = !isModalOpen.value
  isRightModalOpen.value = !isRightModalOpen.value
}
</script>
<template>
  <div class="header-wrapper">


    <div class="container">
      <header class="header">
        <a
          class="anim-logo"
          href="/"
        >
          <img
            src="/logo.svg"
            alt="Company Logo"
            class="company-logo"
          />
        </a>
        <button
          class="burger"
          @click="onToggleMenu"
          :class="{ 'active': isModalOpen || isRightModalOpen }"
        ></button>
        <nav class="menu-section">
          <ul class="menu-list">
            <li
              v-scroll-to="'#services'"
              class="menu-item"
            >Services</li>
            <li
              v-scroll-to="'#industries'"
              class="menu-item"
            >Industries</li>
            <li
              v-scroll-to="'#blog'"
              class="menu-item"
            >Blog</li>
          </ul>
          <button
            v-scroll-to="'#footer-form'"
            class="call-to-action"
          >
            Book a call</button>
        </nav>
      </header>
      <AppMobileMenu
        @close="isModalOpen = false"
        :value="isModalOpen"
      ></AppMobileMenu>
      <AppMobileMenuRight v-model="isRightModalOpen"></AppMobileMenuRight>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-wrapper {
  // position: sticky;
  top: 0px;
  z-index: 100;
  // background: #02acfb;


  @media (min-width: $lg) {
    position: initial;
  }

}

.burger {
  display: flex;
  outline: none;
  height: 30px;
  width: 32px;
  border: 0px;
  padding: 0px;
  background: transparent;
  transition: all 250ms ease-out;
  position: relative;
  cursor: pointer;

  @media (min-width: $md) {
    margin-right: 20px;
  }


  @media (min-width: $xl) {
    display: none;
  }
}

.burger:before,
.burger:after {
  content: '';
  width: 32px;
  height: 3px;
  position: absolute;
  background: white;
  transition: all 250ms ease-out;
  will-change: transform;
  top: 50%;
  /* transform: translateY(-50%); */
}

.burger:before {
  transform: translateY(calc(-50% - 6px));
}

.burger:after {
  transform: translateY(calc(-50% + 6px));
}

// line transition

.active.burger:before {
  transform: translateY(0) rotate(45deg);
}

.active.burger:after {
  transform: translateY(0) rotate(-45deg);
}


.header {
  height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: $xl) {
    height: 81px;

  }

  @media (min-width: $xxl) {}
}

.company-logo {
  width: 148px;


}

.menu-section {

  display: none;

  @media (min-width: $xl) {
    display: flex;
    align-items: center;
    gap: 33px;
  }

  @media (min-width: $xxl) {}


}

.menu-list {
  list-style: none;
  display: flex;
  gap: 25px;
  padding: 0;
  margin: 0;
}

.menu-item {
  font-family: "Onest", sans-serif;
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 22.4px;
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0px;
    left: 0;
    transition: all .1s ease-out;

    background-color: white;
  }


  &:hover {
    &::after {
      opacity: 1;
    }
  }
}

.call-to-action {


  background: rgba(255, 255, 255, 0.08);
  border: 2px solid #FFFFFF;
  border-radius: 48px;




  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0.02em;
  font-family: "Onest", sans-serif;
  color: white;
  padding: 12px 24px;
  cursor: pointer;






  &:hover {
    background: #FFFFFF;

    color: #0097EC
  }
}
</style>