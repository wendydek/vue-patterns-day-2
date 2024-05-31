<script lang="ts" setup>
import { domClassesPerColorType } from '.';

import type { Type, ColorType} from './index.d';

export interface Props {
  type?: Type;
  colorType?: ColorType;
  disabled?: boolean;
  loading?: boolean;
  bordered?: boolean;
  block?: boolean;
  as?: string;
}

withDefaults(defineProps<Props>(), {
  type: 'button',
  colorType: 'primary',
  disabled: false,
  loading: false,
  bordered: false,
  block: false,
  as: 'button',
});
</script>

<template>
<Component
  :is="as"
  :type="type"
  :disabled="disabled || loading"
  :class="domClassesPerColorType[colorType]"
  class="inline-flex cursor-pointer items-center whitespace-nowrap px-6 py-2
    rounded-lg text-base font-semibold transition-colors
    focus:outline-none disabled:cursor-not-allowed disabled:select-none disabled:opacity-50"
>
  <slot name="leadingIcon"></slot>

  <slot></slot>

  <slot name="trailingIcon"></slot>
</Component>
</template>
