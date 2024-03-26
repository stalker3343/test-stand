<script
  lang="ts"
  setup
>



</script>

<template>
  <div class="success-block-footer">
    <img
      class="block-img"
      src="@/assets/images/done.svg"
    >
    <div class="block-header">See yous soon!</div>
    <div class="block-description">Your response was successfully send. We will contact you soon.</div>
  </div>

</template>

<style
  scoped
  lang="scss"
>
.block-img {
  margin-bottom: 24px;
}

.success-block-footer {
  padding: 27px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.3);


  @media (min-width: $xl) {
    padding: 37px 0px;

  }


}

.block-header {
  font-family: "Onest";
  font-size: 25px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0px;
  text-align: center;
  margin-bottom: 12px;


}

.block-description {
  /* description */

  max-width: 256px;


  font-family: 'Onest';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 140%;
  /* or 20px */
  text-align: center;
  letter-spacing: 0.02em;

  color: #DDF1FF;

  @media (min-width: $xl) {
    max-width: initial;

  }



}
</style>
