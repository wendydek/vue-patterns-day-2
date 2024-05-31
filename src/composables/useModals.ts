import { ref } from 'vue';

import type { Modal, ModalConfig } from '@/typings';

export const modals = ref(new Map<symbol, Modal>());

export default function useModals(config: ModalConfig): symbol {
  const id = config.id ? Symbol(config.id) : Symbol('modal-id');

  modals.value.set(id, {
    id,
    config,
  });

  return id;
}