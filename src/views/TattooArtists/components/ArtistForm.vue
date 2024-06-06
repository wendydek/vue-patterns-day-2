<template>
    <p>Tattoo artiest formulier</p>
    <AppButton @click="addArtist">test</AppButton>
</template>

<script setup lang="ts">
import AppButton from '@/components/AppButton/AppButton.vue';
import { modals } from '@/composables/useModals';

const artist = {
    name: 'New artist',
    bio: 'test artist bio',
    url: 'https://placehold.co/400x300',
    instagram: 'https://www.instagram.com/new-artist',
    country: 'Netherlands',
}

async function addArtist() {
  // loading.value = true;

  try {
    const response = await fetch('http://localhost:3000/artists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(artist),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch artists');
    }

    modals.value.clear();
  } catch (error) {
    console.error('Error fetching artists:', error);
  } finally {
    // loading.value = false;
  }
}
</script>