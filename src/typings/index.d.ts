import type { Component } from 'vue';

export interface ModalConfig {
  header: string;
  body: Component;
  closeable?: boolean;
  properties?: unknown;
  id?: string;
}

export interface Modal {
  id: symbol;
  config: ModalConfig;
}

export interface TattooArtist {
  id: string;
  isActive: number;
  isFeatured: number;
  name: string;
  bio: string;
  url: string;
  image: string;
  instagram: string;
  country: string;
}

export interface TattooViewData {
  title: string;
  subtitle: string;
  description: string;
}