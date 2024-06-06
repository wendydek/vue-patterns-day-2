<template>
    <div class="bg-gray-100 p-4 rounded-md">
        <div class="mb-2">
            <div v-if="isLoading">Loading image..</div>
            <div v-else-if="error">Couldn't load the image :(</div>
            <img v-else :src="imageUrl" class="w-full" />
        </div>
        <h3 class="font-bold">{{ data.title }}</h3>
        <p class="mb-2">{{ data.subtitle }}</p>
        <p>
            {{ data.description }}
        </p>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useImage } from '@vueuse/core';

import { TattooViewData } from '@/typings';

interface Props {
    data: TattooViewData;
}

defineProps<Props>();

const imageUrl = 'https://placehold.co/400x300';

const { isLoading, error } = useImage(
  {
    src: imageUrl,
  },
  {
    delay: 500,
  }
);
</script>