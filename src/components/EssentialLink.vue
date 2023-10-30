<template>
  <!-- <q-item
    clickable
    tag="a"
    target="_blank"
    :href="link"
  >
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item> -->
  <div class="text-center">
    <!-- <router-link >Project Info</router-link> -->
    <!-- <p>Project Info</p> -->
    <div class="q-pa-xs">
      <q-list  padding class="rounded-borders text-primary text-bold">
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="inbox" />
          </q-item-section>
          <q-item-section>Project Info</q-item-section>
        </q-item>
        <q-separator spaced />
        <p class="text-black text-left q-ml-sm">Quality Control</p>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="inbox" />
          </q-item-section>
          <q-item-section>Read & Alignment</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="delete" />
          </q-item-section>
          <q-item-section>Visualization</q-item-section>
        </q-item>
        <q-separator spaced />
        <p class="text-black text-left q-ml-sm">Analysis</p>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="inbox" />
          </q-item-section>
          <q-item-section>Difference Expression</q-item-section>
        </q-item>
      </q-list>
    </div>
    <!-- <router-link >Quality Control</router-link>
    <router-link >Analysis</router-link> -->
  </div>
</template>

<script setup>

// import { defineComponent } from 'vue'

// export default defineComponent({
//   name: 'EssentialLink',
//   props: {
//     title: {
//       type: String,
//       required: true
//     },

//     caption: {
//       type: String,
//       default: ''
//     },

//     link: {
//       type: String,
//       default: '#'
//     },

//     icon: {
//       type: String,
//       default: ''
//     }
//   }
// })
</script>
