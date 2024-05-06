<script lang="ts" setup>
import BaseInput from '@/ui/BaseInput.vue'
import BaseButton from '@/ui/BaseButton.vue'
import SuccessBlock from '@/components/sections/Footer/SuccessBlock.vue'

import BaseIcon from '@/ui/BaseIcon.vue'
import { useForm } from 'vee-validate';
import { object, string } from 'yup';
import { toTypedSchema } from '@vee-validate/yup';
import { ref } from 'vue';
// import anime from "animejs";

const anime = () => {

}

const formSendSucess = ref(false)
const formError = ref('')

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: toTypedSchema(
    object({
      phone: string().required().label('Phone').default(''),
      email: string().required().email().label('Email').default(''),
      name: string().required().label('Name').default(''),
      description: string().label('Description').default(''),
    }),
  ),
});
const runtimeConfig = useRuntimeConfig()



const onSubmit = handleSubmit((values) => {
  return new Promise(resolve => {
    formError.value = ''
    grecaptcha.ready(() => {

      grecaptcha.execute(runtimeConfig.public.VITE_CAPTCHA_CLIENT, { action: 'submit' })
        .then(async (token) => {
          if (window.gtag) {
            window.gtag('event', 'Confirm', { 'event_category': 'Button' });
          }

          interface Map {
            [key: string]: string
          }

          const reqBody: Map = {
            'name': values.name,
            'email': values.email,
            'phone': values.phone,
            'message': values.description,
            'ajax': '1',
            'recaptcha': token,
            'action': 'task.send'
          }
          let formData = new FormData();

          for (let key in reqBody) {
            formData.append(key, reqBody[key]);
          }
          try {
            const res = await (await fetch('/', { method: 'POST', body: formData })).json()
            if (res && res.result) {
              formSendSucess.value = true
            } else {
              formError.value = `Error while sending. ${res.error} Try again`
            }
          } catch (error) {
            formError.value = 'Error while sending. Try again'
          } finally {
            resolve(true)

          }
        })
    })
  })

}, () => {
  formError.value = ''

})

onMounted(() => {
  const { $gsap } = useNuxtApp()


  $gsap.timeline({
    scrollTrigger: {
      trigger: `.footer-section`,
      start: 'top 75%',
      end: 'bottom 60%',
      toggleActions: 'play none none none',

    }
  })
    .from(`.footer-main-text`, {
      duration: 1,
      opacity: 0,
    })
    .add(function () {
      anime({
        targets: `.footer-main-text path`,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1001,
        delay: function (el, i) { return i * 30 },
        // direction: 'alternate',
        // loop: true
      });
    }, '<')

  $gsap.timeline({
    scrollTrigger: {
      trigger: `.main-footer-wrapper`,
      start: 'top 75%',
      end: 'bottom 60%',
      toggleActions: 'play none none none',
    }
  })
    .from(`.anim-contact-link`, {
      duration: 0.1,
      opacity: 0,
      stagger: {
        amount: 0.2,
        // y: 5
      }
    })
    // .from(`.anim-footer-phone`, {
    //   duration: 0.1,
    //   opacity: 0,
    // }, '<0.1')
    .from(".adress-item", {
      duration: 0.1,
      opacity: 0,
      stagger: {
        amount: 0.2,
        // y: 5
      }
    }, '<0.3')
    .from(".social-link-item", {
      duration: 0.2,
      opacity: 0,
      stagger: {
        amount: 0.3,
      }
    }, '<0.2')
    .from(".free-consalt", {
      duration: 0.1,
      opacity: 0,
    })
    .from(".anim-input-item", {
      duration: 0.1,
      opacity: 0,
      stagger: {
        amount: 0.3,
      }
    }, "<0.1")
    .from(".anim-footer-send-btn", {
      duration: 0.1,
      opacity: 0,
    }, "<0.5")








})



const { $viewport } = useNuxtApp()
const LetsTalkSm = defineAsyncComponent(() => import('@/assets/images/headers/footer/sm.svg?skipsvgo'))
const LetsTalkMd = defineAsyncComponent(() => import('@/assets/images/headers/footer/md.svg?skipsvgo'))
const LetsTalkLg = defineAsyncComponent(() => import('@/assets/images/headers/footer/lg.svg?skipsvgo'))
const LetsTalkXl = defineAsyncComponent(() => import('@/assets/images/headers/footer/xl.svg?skipsvgo'))
const LetsTalkXXl = defineAsyncComponent(() => import('@/assets/images/headers/footer/xxl.svg?skipsvgo'))

</script>

<template>
  <footer class="footer-section">
    <div class="container">
      <LetsTalkSm
        v-if="$viewport.match('sm')"
        class="footer-main-text"
        :fontControlled="false"
      ></LetsTalkSm>
      <LetsTalkMd
        v-else-if="$viewport.match('md')"
        class="footer-main-text"
        :fontControlled="false"
      ></LetsTalkMd>
      <LetsTalkLg
        v-else-if="$viewport.match('lg')"
        class="footer-main-text"
        :fontControlled="false"
      ></LetsTalkLg>
      <LetsTalkXl
        v-else-if="$viewport.match('xl')"
        class="footer-main-text"
        :fontControlled="false"
      ></LetsTalkXl>
      <LetsTalkXXl
        v-else="$viewport.match('xxl')"
        class="footer-main-text"
        :fontControlled="false"
      ></LetsTalkXXl>
      <!-- <LetsTalk
        class="footer-main-text"
        :fontControlled="false"
      ></LetsTalk> -->
      <!-- <div class="footer-main-text">
        READY TO TAKE THE NEXT STEP ?
        <span class="main-text-accent">
          Let’s Talk !
        </span>
      </div> -->

      <div class="main-footer-wrapper">
        <div
          v-if="formSendSucess"
          class="footer-form"
        >
          <p class="free-consalt">
            Book a free consultation with tech experts.
          </p>
          <SuccessBlock></SuccessBlock>
        </div>
        <form
          v-else
          id="footer-form"
          method="POST"
          @submit="onSubmit"
          class="footer-form"
        >
          <p class="free-consalt">
            Book a free consultation with tech experts.
          </p>
          <div>
            <BaseInput
              type="text"
              class="anim-input-item footer-input"
              placeholder="Your name"
              name="name"
            ></BaseInput>
            <div class="two-input-row">
              <BaseInput
                type="text"
                class="anim-input-item footer-input"
                placeholder="Contact phone number"
                name="phone"
              ></BaseInput>
              <BaseInput
                type="text"
                class="anim-input-item footer-input"
                placeholder="Email"
                name="email"
              ></BaseInput>
            </div>

            <BaseInput
              name="description"
              style="resize: none"
              as="textarea"
              placeholder="Tell us about your project"
              class="anim-input-item anim-textarea"
            >
            </BaseInput>
          </div>
          <div>
            <!-- <button class="anim-footer-send-btn">
              Book a call
            </button> -->
            <BaseButton
              class="anim-footer-send-btn"
              :disabled="isSubmitting"
              block
            >
              Send a request
            </BaseButton>
            <div
              class="error-msg"
              v-if="formError"
            >
              {{ formError }}
            </div>
          </div>


        </form>

        <div class="contacts-and-social-wrapper">

          <address class="footer-contacts">
            <a
              class="contact-link anim-contact-link anim-footer-email"
              href="mailto:works@afterlogic.com"
            >
              works@afterlogic.com
            </a>
            <a
              class="contact-link anim-contact-link anim-footer-phone"
              href="tel:+14155130152"
            >
              +1 415 513 0152
            </a>
          </address>
          <div class="addres-and-social-wrapper">



            <address class="footer-addres-links">
              <div class="adress-item">
                <BaseIcon
                  :width="12"
                  name="map-pin"
                ></BaseIcon>
                <div class="addres-text">
                  3411 Silverside Road, Tatnall Building, Suite 104, Wilmington, DE 19810 USA
                </div>
              </div>
              <div class="adress-item">
                <BaseIcon
                  :width="12"
                  name="map-pin"
                ></BaseIcon>
                <div class="addres-text">
                  90 Tsarigradsko Shose blvd, 1784, Sofia, Bulgaria
                </div>
              </div>
            </address>

            <address class="social-links">
              <!-- <a class="social-link-item" href="http://">
                <BaseIcon :size="48" name="twitter"></BaseIcon>
              </a> -->
              <a
                aria-label="Facebook link"
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
                aria-label="Medium link"
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
                aria-label="Linkedin link"
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
            </address>
          </div>
        </div>
      </div>

    </div>
    <!-- <div class="hidden-row-for-anim"></div> -->
  </footer>
</template>

<style scoped lang="scss">
.two-input-row {
  display: grid;


  @media (min-width: $md) {}

  @media (min-width: $lg) {
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
  }

  @media (min-width: $xl) {}

  @media (min-width: $xxl) {}

}

.footer-section {
  position: relative;
}

.hidden-row-for-anim {
  position: absolute;
  width: 100%;
  height: 30px;
  top: -10px;
  background: red;
}

.main-footer-wrapper {
  @media (min-width: $md) {}

  @media (min-width: $lg) {
    display: grid;
    grid-template-columns: 1fr 604px;
    column-gap: 20px;

  }

  @media (min-width: $xl) {
    grid-template-columns: 1fr 749px;

  }

  @media (min-width: $xxl) {
    grid-template-columns: 1fr 1230px;

  }
}

.error-msg {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #FFD8D8;
}

.addres-and-social-wrapper {
  @media (min-width: $md) {
    padding-top: 15px;

  }

  @media (min-width: $lg) {
    padding-top: 0px;
    padding-bottom: 10px;

  }

  @media (min-width: $xl) {}

  @media (min-width: $xxl) {}
}

.contacts-and-social-wrapper {
  @media (min-width: $md) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 72px;

  }

  @media (min-width: $lg) {
    // grid-template-columns: 1fr;
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    // align-items: flex-start;


  }

  @media (min-width: $xl) {}

  @media (min-width: $xxl) {}
}

.social-links {
  font-style: normal;
  display: flex;
  justify-content: center;
  gap: 16px;

  @media (min-width: $md) {}

  @media (min-width: $lg) {
    justify-content: initial;

  }

  @media (min-width: $xl) {
    justify-content: initial;

  }

  @media (min-width: $xxl) {}
}

.social-link-item {
  color: rgba(255, 255, 255, .8);


  &:hover {
    color: rgba(255, 255, 255, 1);

  }
}

.footer-addres-links {
  font-style: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-bottom: 30px;


  @media (min-width: $lg) {
    margin-bottom: 50px;
    align-items: initial;


  }

  @media (min-width: $xl) {}

  @media (min-width: $xxl) {}
}

.addres-text {
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 0.02em;
  text-align: left;
  margin-left: 8px;
  max-width: 203px;
}

.adress-item {
  display: flex;




}

.contact-link {
  position: relative;
  display: block;
  font-size: 24px;
  font-weight: 400;
  line-height: 34px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
  text-decoration: none;

  @include anim-underline(-3px);

}

.footer-contacts {
  font-style: normal;
  margin-bottom: 53px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (min-width: $md) {
    align-items: flex-start;

  }

  @media (min-width: $lg) {
    margin-bottom: 90px;

  }

  @media (min-width: $xl) {
    margin-bottom: 65px;

  }

  @media (min-width: $xxl) {}
}

.free-consalt {
  font-size: 24px;
  font-weight: 700;
  line-height: 33.6px;




  @media (min-width: $md) {
    font-size: 24px;
    font-weight: 700;
    line-height: 34px;
  }



}

.footer-form {
  display: flex;
  flex-direction: column;
  gap: 45px;
  margin-bottom: 70px;

  @media (min-width: $md) {
    margin-bottom: 55px;

  }

  @media (min-width: $lg) {
    order: 2;
    margin-bottom: 0px;

  }

  @media (min-width: $xl) {
    gap: 30px;

  }

  @media (min-width: $xxl) {}
}

.footer-input {
  margin-bottom: 32px;

}

.footer-section {
  margin-top: 160px;
  padding-bottom: 32px;

  @media (min-width: $md) {
    margin-top: 140px;

  }

  @media (min-width: $lg) {
    margin-top: 50px;
    padding-bottom: 60px;

  }

  @media (min-width: $xl) {
    margin-top: 0px;

  }

  @media (min-width: $xxl) {
    margin-top: 140px;

  }
}

.footer-main-text {
  // color: transparent;
  margin-bottom: 40px;
  height: 515px;

  @media (min-width: $md) {
    // font-size: 140px;
    // font-weight: 800;
    // line-height: 140px;
    // letter-spacing: -0.02em;
    // text-align: left;
    height: 1085px;


  }

  @media (min-width: $lg) {
    height: 610px;

    margin-bottom: 60px;

  }

  @media (min-width: $xl) {
    width: 1224px;
  }

  @media (min-width: $xxl) {
    width: initial;
    height: 375px;

  }


}

.main-text-accent {
  color: white;
  display: block;
}
</style>
