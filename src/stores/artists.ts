import { ref } from 'vue';
import { defineStore } from 'pinia';

import type { TattooArtist } from '@/typings';

export const useArtistStore = defineStore('artistStore', () => {
    const artists = ref<TattooArtist[]>([]);
    const loading = ref(false);

    const fetchArtists = async () => {
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
    };

    const addArtist = async (newArtist: TattooArtist) => {
        try {
            const response = await fetch('http://localhost:3000/artists', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newArtist),
            });
            if (!response.ok) {
                throw new Error('Failed to add artist');
            }
            const addedArtist = await response.json();
            artists.value.push(addedArtist);
        } catch (error) {
            console.error('Error adding artist:', error);
        }
    };

    return {
      artists,
      loading,
      
      fetchArtists,
      addArtist
    };
});
