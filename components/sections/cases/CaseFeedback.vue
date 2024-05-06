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
    <cite class="feedback-position-wrapper">
      <span class="feedback-position">
        {{ position }}
      </span>
      <span class="feedback-company">
        {{ company }}
      </span>
    </cite>

    <blockquote class="feedback-description">
      <span class="feedback-description-tick">
        “
      </span>
      {{ text }}
      <span class="feedback-description-tick">
        ”
      </span>
    </blockquote>
  </div>
</template>

<style lang="scss" scoped>
.feedback-position-wrapper {
  font-style: normal;
  display: block;
  text-align: center;
  margin-bottom: 16px;

  @media (min-width: $md) {
    margin-bottom: 20px;
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
  font-size: 14px;
  font-weight: 300;
  line-height: 22px;
  letter-spacing: 0.02em;
  text-align: center;
}

.feedback-company {
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0.02em;
  text-align: center;

}



.feedback-description {



  // margin: 0 auto;
  // font-size: 15px;
  // line-height: 19px;
  // letter-spacing: 0.01em;
  // text-align: center;

  z-index: 11;
  position: relative;

  font-size: 15px;
  font-weight: 200;
  line-height: 21px;
  letter-spacing: 0.01em;
  text-align: center;




  // font-size: 20px;
  // font-weight: 200;
  // line-height: 28px;
  // letter-spacing: 0.01em;
  // text-align: center;




  @media (min-width: $lg) {
    max-width: 640px;

    font-size: 16px;
    font-weight: 200;
    line-height: 22.4px;
    letter-spacing: 0.01em;
    text-align: center;



    margin: 0 auto;

  }

  @media (min-width: $xl) {
    font-size: 20px;
    line-height: 28px;
    max-width: 890px;
  }

  @media (min-width: $xxl) {
    max-width: 840px;

  }

}

.feedback-description-tick {

  font-size: 16px;
  font-weight: 900;
  line-height: 22.4px;
  letter-spacing: 0.01em;


  @media (min-width: $md) {}

  @media (min-width: $lg) {}

  @media (min-width: $xl) {
    font-size: 22px;
    font-weight: 900;
    line-height: 30.8px;
    letter-spacing: 0.01em;
    text-align: center;
  }

  @media (min-width: $xxl) {}




}
</style>
