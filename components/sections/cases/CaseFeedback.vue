<script lang="ts" setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
})

</script>


<template>
  <div class="case-feedback">

    <div class="feedback-name">
      {{ name }}
    </div>
    <div class="feedback-position-wrapper">
      <span class="feedback-position">
        {{ position }}
      </span>
      <span class="feedback-company">
        {{ company }}
      </span>
    </div>

    <div class="feedback-description">
      <span class="feedback-description-tick">
        “
      </span>
      {{ text }}
      <span class="feedback-description-tick">
        ”
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.feedback-position-wrapper {
  text-align: center;
  margin-bottom: 16px;

  @media (min-width: $md) {
    margin-bottom: 24px;
  }
}

.case-feedback {

  @media (min-width: $md) {
    padding: 32px 0px;
  }

  @media (min-width: $lg) {
    padding: 24px 0px;
  }

  @media (min-width: $xl) {
    padding: 48px 0px;
  }


  @media (min-width: $xxl) {
    padding: 64px 0px;

  }

}

.feedback-name {
  text-align: center;
  font-family: "Onest", sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0.02em;
  text-align: center;


  @media (min-width: $lg) {
    font-size: 20px;
  }

  @media (min-width: $xl) {
    line-height: 26px;
    font-size: 23px;

  }

  @media (min-width: $xl) {}

  @media (min-width: $xxl) {}

}

.feedback-position {
  font-family: "Onest", sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 22px;
  letter-spacing: 0.02em;
  text-align: center;
}

.feedback-company {
  font-family: "Onest", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0.02em;
  text-align: center;

}



.feedback-description {



  margin: 0 auto;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.01em;
  text-align: center;


  font-family: 'Onest', sans-serif;

  font-size: 20px;
  font-weight: 200;
  line-height: 28px;
  letter-spacing: 0.01em;
  text-align: center;





  @media (min-width: $lg) {
    max-width: 640px;
    font-size: 18px;
    line-height: 25px
  }

  @media (min-width: $xl) {
    font-size: 20px;
    line-height: 28px;
    max-width: 860px;
  }

}

.feedback-description-tick {
  font-family: "Onest", sans-serif;

  font-size: 22px;
  font-weight: 900;
  line-height: 30.8px;
  letter-spacing: 0.01em;
  text-align: center;



}
</style>
