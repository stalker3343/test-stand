<template>
  <div class="container">
    <div class="clients-list">
      <img v-for="(item, idx) in items" :key="idx" alt="" :src="item.img" class="client-item" />



      <!-- <div v-for="(item, idx) in items" :key="idx" class="client-item">
        <img class="item-img" alt="" :src="item.img" />
      </div> -->
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";


const items = ref([{
  img: './other-clients/1.png'
}, {
  img: './other-clients/2.png'
}, {
  img: './other-clients/3.png'
}, {
  img: './other-clients/4.png'
}, {
  img: './other-clients/5.png'
}, {
  img: './other-clients/6.png'
}])

</script>
<style lang="scss" scoped>
.clients-list {
  margin-top: 120px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;

  @media (min-width: $md) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }

  @media (min-width: $lg) {
    margin-top: 140px;

    gap: 20px;

  }

  @media (min-width: $xl) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

    gap: 40px;
    margin-top: 160px;
  }

  @media (min-width: $xxl) {
    display: flex;
    justify-content: center;
  }
}
</style>
