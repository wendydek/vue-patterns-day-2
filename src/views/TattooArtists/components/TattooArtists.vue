<template>
  <div class="flex items-center justify-between mb-2">
    <h3 class="text-xl font-bold mb-2">Artists</h3>
    <AppButton
      @click="openAddArtistModal"
    >
      Artiest toevoegen
    </AppButton>
  </div>

  <div class="grid grid-cols-3 gap-4">
    <TattooCard
        v-for="artist in artists"
        :key="artist.id"
        :data="convertTatooArtistToViewData(artist)"
    />
  </div>
</template>

<script setup lang="ts">
import { markRaw } from 'vue';
import TattooCard from '@/components/TattooCard/TattooCard.vue';
import { convertTatooArtistToViewData } from '@/helpers/dataConverters';
import AppButton from '@/components/AppButton/AppButton.vue';
import useModals from '@/composables/useModals';
import ArtistForm from '@/views/TattooArtists/components/ArtistForm.vue';

import type { TattooArtist } from '@/typings';

interface Props {
  artists: TattooArtist[];
}

defineProps<Props>();

function openAddArtistModal() {
  useModals({
    header: 'Artiest toevoegen',
    body: markRaw(ArtistForm),
    closeable: true,
  });
}
</script>