<template>
  <router-view />
</template>

<script setup>

/* eslint-disable */
import { /* defineComponent */ onMounted } from 'vue'
import { handleQCfolder } from '../src/service/data_service.js'
// import data from './service/data_service';
// export default defineComponent({
//   name: 'App'
// })
onMounted(() => {
  console.log(123)
  handleQCfolder()
});
</script>
