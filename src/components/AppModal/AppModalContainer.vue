<script lang="ts" setup>
  import { modals } from '@/composables/useModals';
  import AppModal from './AppModal.vue';
</script>

<template>
  <AppModal
    v-for="modal in modals.values()"
    :key="modal.id"
    :modal="modal"
  />
</template>