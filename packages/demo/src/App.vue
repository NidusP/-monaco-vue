<script setup lang="ts">
import Layout from './layout/index.vue'
import { useEditorStore } from './store';
const store = useEditorStore()
</script>

<template>
  <VThemeProvider :theme="store.themeMode">
    <Layout />
  </VThemeProvider>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
