<template>
    <div class="bg-gray-50 p-4 rounded-md">
        <div v-if="isLoading">Loading image..</div>
        <div v-else-if="error">Couldn't load the image :(</div>
        <img v-else :src="imageUrl" />
        <h3 class="font-bold">{{ data.title }}</h3>
        <p class="mb-2">{{ data.subtitle }}</p>
        <button
            @click="toggleDescription"
            class="mb-2 text-purple-800"
        >
            <span>
                {{ showDescription ? 'Verberg' : 'Toon' }} beschrijving
            </span>
        </button>
        <p
            :class="{ 'hidden': !showDescription }"
        >
            {{ data.description }}
        </p>
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref, computed } from 'vue';
import { useImage } from '@vueuse/core';

import { TattooViewData } from '@/typings';

interface Props {
    data: TattooViewData;
    showDescription: undefined | boolean;
}

interface Events {
    (event: 'update:toggleDescription'): void;
}

const props = withDefaults(defineProps<Props>(), {
    showDescription: undefined,
});

const emit = defineEmits<Events>();

const _showDescription = ref(true);
const imageUrl = 'https://placehold.co/400x300';

const { isLoading, error } = useImage(
  {
    src: imageUrl,
  },
  {
    delay: 500,
  }
);

function toggleDescription() {
    if (props.showDescription !== undefined) {
        emit('update:toggleDescription');
    } else {
        _showDescription.value = !_showDescription.value;
    }
};

const showDescription = computed(() =>
  props.showDescription !== undefined ? props.showDescription : _showDescription.value
);

</script>