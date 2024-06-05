<template>
    <div class="bg-gray-50 p-4 rounded-md">
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