import { ref } from 'vue';

const showDescription = ref();
export function useToggleDescription() {

  function toggleDescription() {
    showDescription.value = !showDescription.value;
  }

  return {
    showDescription,
    toggleDescription
  };
}