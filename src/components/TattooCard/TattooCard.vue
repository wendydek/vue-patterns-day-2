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
import { defineProps, ref, watch } from 'vue';

import { TattooViewData } from '@/typings';

interface Props {
    data: TattooViewData;
    showDescriptions: boolean;
}

interface Events {
    (event: 'update:showDescription', value: boolean): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Events>();

const showDescription = ref(false);

function toggleDescription() {
    showDescription.value = !showDescription.value;
    emit('update:showDescription', showDescription.value);
}

watch(() => props.showDescriptions, (value) => {
    showDescription.value = value;
});
</script>
