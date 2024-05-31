<template>
    <div class="bg-gray-50 p-4 rounded-md">
        <h3 class="font-bold">{{ data.title }}</h3>
        <p class="mb-2">{{ data.subtitle }}</p>
        <button
            @click="() => { showDescription = !showDescription}"
            class="mb-2"
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
import { defineProps, ref } from 'vue';

import { TattooViewData } from '@/typings';

interface Props {
    data: TattooViewData;
}

defineProps<Props>();

const showDescription = ref(false);
</script>