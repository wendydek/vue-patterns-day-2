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
import { defineProps } from 'vue';
import { useToggleDescription } from '@/composables/useToggleDescription';

import { TattooViewData } from '@/typings';

interface Props {
    data: TattooViewData;
}

defineProps<Props>();

const { showDescription, toggleDescription } = useToggleDescription();
</script>