import type { ButtonHTMLAttributes } from 'vue';

export type ColorType = 'primary' | 'secondary' | 'white' | 'plain';
export type Type = NonNullable<ButtonHTMLAttributes['type']>;