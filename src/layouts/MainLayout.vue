<template>
  <q-layout view="hHh Lpr lFf">
    <HeaderNav @toggleLeftDraw="(ev) => leftDrawerOpen = !leftDrawerOpen"></HeaderNav>
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <!-- <q-item-label header>
          Essential Links
        </q-item-label> -->
        <!-- <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" /> -->
        <EssentialLink class="q-mt-md"></EssentialLink>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
/* eslint-disable */
import { /* defineComponent, */ ref } from 'vue';
import HeaderNav from '../components/HeaderNav.vue';
import EssentialLink from '../components/EssentialLink.vue';
const leftDrawerOpen = ref(false);

// const linksList = ref( [
//   {
//     title: 'Docs',
//     caption: 'quasar.dev',
//     icon: 'school',
//     link: 'https://quasar.dev'
//   },
//   {
//     title: 'Github',
//     caption: 'github.com/quasarframework',
//     icon: 'code',
//     link: 'https://github.com/quasarframework'
//   },
//   {
//     title: 'Discord Chat Channel',
//     caption: 'chat.quasar.dev',
//     icon: 'chat',
//     link: 'https://chat.quasar.dev'
//   },
//   {
//     title: 'Forum',
//     caption: 'forum.quasar.dev',
//     icon: 'record_voice_over',
//     link: 'https://forum.quasar.dev'
//   },
//   {
//     title: 'Twitter',
//     caption: '@quasarframework',
//     icon: 'rss_feed',
//     link: 'https://twitter.quasar.dev'
//   },
//   {
//     title: 'Facebook',
//     caption: '@QuasarFramework',
//     icon: 'public',
//     link: 'https://facebook.quasar.dev'
//   },
//   {
//     title: 'Quasar Awesome',
//     caption: 'Community Quasar projects',
//     icon: 'favorite',
//     link: 'https://awesome.quasar.dev'
//   }
// ]);
// export default defineComponent({
//   name: 'MainLayout',

//   // components: {
//   //   EssentialLink
//   // },
</script>
