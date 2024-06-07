import { ref, watch } from 'vue';
import { defineStore } from 'pinia';
import { useFetch } from '@vueuse/core';

import type { TattooArtist } from '@/typings';

export const useArtistStore = defineStore('artistStore', () => {
    const artists = ref<TattooArtist[]>([]);
    const loading = ref(false);
    const error = ref(null);

    const fetchArtists = async () => {
        const response = useFetch<TattooArtist[]>('http://localhost:3000/artists').json();

        watch(response.isFetching, (value) => {
            loading.value = value;
        });

        watch(response.isFinished, () => {
            if(response.error.value) {
                error.value = response.error.value;
            }

            if(response.data.value) {
                artists.value = response.data.value;
            }
        });
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
      error,
      
      fetchArtists,
      addArtist
    };
});
