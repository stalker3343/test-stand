<script
  lang="ts"
  setup
>
import BaseInput from '@/ui/BaseInput.vue'
import BaseButton from '@/ui/BaseButton.vue'
import SuccessBlock from '@/components/sections/Footer/SuccessBlock.vue'

import BaseIcon from '@/ui/BaseIcon.vue'
import { useForm } from 'vee-validate';
import { object, string } from 'yup';
import { toTypedSchema } from '@vee-validate/yup';
import { ref } from 'vue';

const formSendSucess = ref(false)
const formError = ref('')

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: toTypedSchema(
    object({
      // email: string().required().email().default(''),
      name: string().required().label('Name').default(''),
      description: string().label('Description').required().default(''),
    }),
  ),
});



const onSubmit = handleSubmit((values) => {
  return new Promise(resolve => {
    formError.value = ''
    grecaptcha.ready(() => {
      grecaptcha.execute(import.meta.env.VITE_CAPTCHA_CLIENT, { action: 'submit' })
        .then(async (token) => {
          if (window.gtag) {
            window.gtag('event', 'Confirm', { 'event_category': 'Button' });
          }

          interface Map {
            [key: string]: string
          }

          const reqBody: Map = {
            'name': values.name,
            'email': '',
            'phone': '',
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





</script>

<template>
  <footer class="footer-section">
    <div class="container">
      <div class="footer-main-text">
        READY TO TAKE THE NEXT STEP ?
        <span class="main-text-accent">
          Let’s Talk !
        </span>
      </div>

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
              class="footer-input"
              placeholder="Your name"
              name="name"
            ></BaseInput>
            <BaseInput
              name="description"
              style="resize: none"
              as="textarea"
              placeholder="Tell us about your project"
            >
            </BaseInput>
          </div>
          <div>
            <BaseButton
              :disabled="isSubmitting"
              block
            >
              Book a call
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

          <div class="footer-contacts">
            <a
              class="contact-link "
              href="mailto:works@afterlogic.com"
            >
              works@afterlogic.com
            </a>
            <a
              class="contact-link "
              href="tel:+14155130152"
            >
              +1 415 513 0152
            </a>
          </div>
          <div class="addres-and-social-wrapper">



            <div class="footer-addres-links">
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
      </div>

    </div>

  </footer>
</template>

<style
  scoped
  lang="scss"
>
.main-footer-wrapper {
  @media (min-width: $md) {}

  @media (min-width: $lg) {
    display: grid;
    grid-template-columns: 1fr 504px;
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
  font-family: 'Onest';
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
    grid-template-columns: 1fr;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;


  }

  @media (min-width: $xl) {}

  @media (min-width: $xxl) {}
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 16px;

  @media (min-width: $md) {}

  @media (min-width: $lg) {}

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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-bottom: 50px;


  @media (min-width: $lg) {
    margin-bottom: 50px;

  }

  @media (min-width: $xl) {}

  @media (min-width: $xxl) {}
}

.addres-text {
  font-family: "Onest", sans-serif;
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
  font-family: "Onest", sans-serif;
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
  margin-bottom: 53px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (min-width: $md) {
    align-items: flex-start;

  }

  @media (min-width: $lg) {
    margin-bottom: 0px;

  }

  @media (min-width: $xl) {}

  @media (min-width: $xxl) {}
}

.free-consalt {
  // TODO заменить на переменную
  font-family: "Onest", sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0px;

  @media (min-width: $md) {
    font-size: 24px;
    font-weight: 700;
    line-height: 34px;
  }



}

.footer-form {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 55px;

  @media (min-width: $md) {
    margin-bottom: 55px;

  }

  @media (min-width: $lg) {
    order: 2;
    margin-bottom: 0px;

  }

  @media (min-width: $xl) {}

  @media (min-width: $xxl) {}
}

.footer-input {
  margin-bottom: 20px;
}

.footer-section {
  margin-top: 140px;
  padding-bottom: 32px;

  @media (min-width: $md) {}

  @media (min-width: $lg) {
    margin-top: 140px;
    padding-bottom: 60px;

  }

  @media (min-width: $xl) {
    margin-top: 120px;

  }

  @media (min-width: $xxl) {}
}

.footer-main-text {
  color: transparent;
  text-transform: uppercase;
  font-family: "Open Sans", sans-serif;
  font-size: 70px;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  font-variation-settings:
    "wdth" 100;
  line-height: 77px;
  letter-spacing: -0.02em;
  text-align: left;
  -webkit-text-stroke: 1.5px #fff;
  margin-bottom: 40px;

  @media (min-width: $md) {
    font-size: 140px;
    font-weight: 800;
    line-height: 140px;
    letter-spacing: -0.02em;
    text-align: left;

  }

  @media (min-width: $lg) {
    margin-bottom: 60px;

  }

  @media (min-width: $xl) {}

  @media (min-width: $xxl) {}


}

.main-text-accent {
  color: white;
  display: block;
}
</style>
