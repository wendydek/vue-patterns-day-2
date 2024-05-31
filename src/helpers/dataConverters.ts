import type { TattooArtist, TattooViewData } from '@/typings';

export const convertTatooArtistToViewData = (artist: TattooArtist): TattooViewData => {
    return {
        title: artist.name,
        subtitle: artist.country,
        description: artist.bio,
    };
}