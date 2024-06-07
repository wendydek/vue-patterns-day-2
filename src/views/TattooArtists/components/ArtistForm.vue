<template>
    <p>Tattoo artiest formulier</p>
    <AppButton @click="addArtist">test</AppButton>
</template>

<script setup lang="ts">
import AppButton from '@/components/AppButton/AppButton.vue';
import { modals } from '@/composables/useModals';
import { useArtistStore } from '@/stores/artists';

const artistStore = useArtistStore();

async function addArtist() {
  const artist = {
    name: 'New artist',
    bio: 'test artist bio',
    url: 'https://placehold.co/400x300',
    instagram: 'https://www.instagram.com/new-artist',
    country: 'Netherlands',
  };

  await artistStore.addArtist(artist);

  modals.value.clear();
}
</script>