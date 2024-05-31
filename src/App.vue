<template>
  <AppModalContainer />
  <div class="flex flex-col justify-center items-center">
    <div class="w-full max-w-screen-2xl px-2">
      <img alt="Vue logo" src="./assets/logo.png" width="100" class="p-2">
  
      <div>
        <h1 class="text-2xl mb-4">
          Tattoo artiesten
        </h1>

        <AppButton class="mb-4">
          Toon alle beschrijvingen
        </AppButton>

        <div
            v-if="artists.length > 0"
            class="grid gap-4 md:grid-cols-3 xl:grid-cols-4"
        >
          <TattooCard
            v-for="artist in artists"
            :key="artist.id"
            :data="convertTatooArtistToViewData(artist)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AppModalContainer from '@/components/AppModal/AppModalContainer.vue';
import TattooCard from '@/components/TattooCard/TattooCard.vue';
import { convertTatooArtistToViewData } from '@/helpers/dataConverters';
import AppButton from '@/components/AppButton/AppButton.vue';

import type { TattooArtist } from '@/typings';

const artists = ref<TattooArtist[]>([]);
const loading = ref(true);

async function fetchArtists() {
loading.value = true;

try {
  const response = await fetch('http://localhost:3000/artists');

  if (!response.ok) {
    throw new Error('Failed to fetch artists');
  }

  artists.value = await response.json();
} catch (error) {
  console.error('Error fetching artists:', error);
} finally {
  loading.value = false;
}
}

fetchArtists();
</script>

