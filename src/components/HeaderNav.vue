<template>
  <div>
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          miRNA
        </q-toolbar-title>
        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>
  </div>
</template>
<script setup>
/* eslint-disable */
  import { ref } from 'vue';
  const toggleDraw = ref(false);
  const emits = defineEmits(['toggleLeftDraw'])
  const toggleLeftDrawer = () => {
    toggleDraw.value = !toggleDraw.value;
    emits('toggleLeftDraw', toggleDraw.value)
  }
</script>
<style>
</style>