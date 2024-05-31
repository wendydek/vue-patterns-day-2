import type { ColorType } from './index.d';

export const domClassesPerColorType: Record<ColorType, string[]> = {
  plain: [
    'text-gray-800',
    'border-transparent',
  ],
  white: [
    'text-gray-800',
    'bg-white',
    'border-white',
  ],
  primary: [
    'text-white',
    'bg-purple-800',
    'border-transparent',
    'enabled:hover:bg-pruple-900',
  ],
  secondary: [
    'text-white',
    'bg-purple-400',
    'border-transparent',
    'enabled:hover:bg-purple-600',
  ],
};