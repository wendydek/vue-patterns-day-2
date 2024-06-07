<template>
  <AppModalContainer />
  <p v-if="artistStore.loading">Loading..</p>
  <div
    v-else
    class="flex flex-col justify-center items-center"
  >
    <div class="w-full max-w-screen-2xl px-2">
      <img alt="Vue logo" src="./assets/logo.png" width="100" class="p-2">
  
      <div>
        <h1 class="text-2xl mb-4">
          Tattoo artiesten
        </h1>

        <AppButton
          class="mb-4"
          @click="showTattooDescription = !showTattooDescription"
        >
          {{ showTattooDescription ? 'Verberg' : 'Toon' }} beschrijvingen
        </AppButton>

        <div
            v-if="artistStore.artists.length > 0"
        >
        {{ artistStore.artists }}
          <FeaturedTattooCard
            class="mb-6"
            :data="convertTatooArtistToViewData(artistStore.artists[0])"
            :show-description="showTattooDescription"
            @update:toggle-description="showTattooDescription = !showTattooDescription"
          />

          <TattooArtists
            :artists="artistStore.artists"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useTitle, useStorage } from '@vueuse/core';
import AppModalContainer from '@/components/AppModal/AppModalContainer.vue';
import FeaturedTattooCard from '@/components/TattooCard/FeaturedTattooCard.vue';
import TattooArtists from '@/views/TattooArtists/components/TattooArtists.vue';
import { convertTatooArtistToViewData } from '@/helpers/dataConverters';
import AppButton from '@/components/AppButton/AppButton.vue';
import { useArtistStore } from '@/stores/artists';

import type { TattooArtist } from '@/typings';

const artists = ref<TattooArtist[]>([]);
const showTattooDescription = useStorage('showTattooDescription', false);
const artistStore = useArtistStore();

const bestArtist = computed(() => artists.value[0]?.name);

useTitle(bestArtist, { titleTemplate: '%s | The best tattoo artist' })

async function fetchArtists() {
  await artistStore.fetchArtists();
}

fetchArtists();
</script>

