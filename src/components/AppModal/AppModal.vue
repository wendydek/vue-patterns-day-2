<script lang="ts" setup>
  import { computed, defineProps } from 'vue';
  import { modals } from '@/composables/useModals';

  import type { Modal } from '@/typings';

  interface Properties {
    modal: Modal;
  }

  const properties = defineProps<Properties>();

  const ModalContent = computed(() => properties.modal.config.body);

  function closeModal(): void {
    if (properties.modal.config.closeable) modals.value.delete(properties.modal.id);
  }
</script>

<template>
  <div
    class="overlay"
    @click.self="closeModal"
  >
    <div class="modal-wrapper">
      <div class="modal-header">
        <span class="h4">{{ modal?.config?.header }}</span>

        <div v-if="modal?.config?.closeable">
          <!-- <FontAwesomeIcon
            :icon="['fal', 'xmark']"
            :title="Sluiten"
            class="close-icon"
            size="2xl"
            @click="closeModal"
          /> -->
        </div>
      </div>

      <div class="modal-content">
        <ModalContent
          v-bind="modal?.config?.properties"
          @close-modal="closeModal"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  display: flex;
  height: 100vh;
  height: 100dvh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
}

.modal-wrapper {
  background: white;
  border-radius: 30px;
  margin: 1rem;
  min-height: 10vh;
  max-height: 95vh;
  max-height: 95dvh;
  width: 90vw;
  overflow: hidden;
  padding: 2rem;
}

.modal-header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.modal-content {
  max-height: 80bh;
  max-height: 80dvh;
  overflow-y: auto;
}

.h4 {
  margin-right: 2rem;
}
</style>
