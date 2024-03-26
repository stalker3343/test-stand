<template>
  <div
    v-scroll-reveal
    id="industries"
    class="container"
  >
    <h2 class="section-header">{{ header }}</h2>
    <div class="list-wrapper">
      <div
        v-for="(item, key) in rows"
        :key="key"
        class="list-item"
      >
        <div class="row-title"> {{ item.title }}</div>
        <div class="row-text">
          {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>
<script
  setup
  lang="ts"
>

interface Props {
  rows: { title: string, text: string }[]
  header: string
}

defineProps<Props>()



</script>
<style
  lang="scss"
  scoped
>
.section-header {
  text-transform: uppercase;
  margin-top: 120px;
  margin-bottom: 45px;
  color: transparent;
  -webkit-text-stroke: 1.5px #fff;
  font-family: "Open Sans", sans-serif;

  font-size: 70px;
  font-weight: 800;
  font-style: normal;
  font-variation-settings:
    "wdth" 100;
  line-height: 77px;
  letter-spacing: -0.02em;
  text-align: left;

  @media (min-width: $md) {
    margin-top: 127px;
    margin-bottom: 20px;

  }

  @media (min-width: $lg) {
    margin-top: 120px;
    font-size: 120px;
    line-height: 132px;
    text-align: center;
  }

  @media (min-width: $xl) {
    font-size: 140px;
    line-height: 151px;
    text-align: center;
    margin-top: 140px;
    margin-bottom: 65px;


  }

  @media (min-width: $xxl) {
    margin-top: 145px;
    margin-bottom: 45px;


  }
}

.row-title {
  //styleName: H2_mobile;
  font-family: "Onest", sans-serif;

  font-size: 24px;
  font-weight: 600;
  line-height: 34px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 20px;

  @media (min-width: $md) {
    font-size: 32px;
    line-height: 45px;
    max-width: 400px;
  }

  @media (min-width: $lg) {
    max-width: 1024px;
    margin-bottom: 0px;
  }
}

.row-text {
  font-family: "Onest", sans-serif;

  font-size: 17px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;


  @media (min-width: $md) {}

  @media (min-width: $lg) {

    font-size: 19px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;


  }

  @media (min-width: $xl) {}

  @media (min-width: $xxl) {}
}





.list-item {
  @media (min-width: $md) {
    padding: 24px;

  }

  @media (min-width: $lg) {
    display: grid;
    grid-template-columns: 400px 490px;
    column-gap: 30px;
  }

  @media (min-width: $xl) {
    grid-template-columns: 380px 490px;
    column-gap: 150px;
  }

  @media (min-width: $xxl) {
    column-gap: 430px;
  }

  &:not(:last-child) {
    padding-bottom: 24px;

    @media (min-width: $md) {
      border-bottom: 2px solid rgba(255, 255, 255, 0.3);

    }

    @media (min-width: $lg) {}

    @media (min-width: $xl) {}

    @media (min-width: $xxl) {}
  }
}

.list-wrapper {
  display: flex;
  flex-direction: column;
  gap: 34px;

  @media (min-width: $md) {
    gap: 10px;
  }

  @media (min-width: $xl) {
    gap: 8px;

  }

}
</style>
