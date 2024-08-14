<template>
  <component
    :is="componentName"
    :href="href"
    :disabled="disabled"
    :to="to"
    :class="[themeClasses, defaultClasses]"
    @click="$emit('click')"
  >
    <mdicon
      v-if="icon && iconPosition == 'start'"
      class="inline-flex relative pr-1"
      :aria-label="icon"
      :name="icon"
    />
    <slot></slot>
    <mdicon
      v-if="icon && iconPosition == 'end'"
      class="ml-auto inline-flex relative pl-1"
      :aria-label="icon"
      :name="icon"
    />
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  href: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  iconPosition: {
    type: String,
    default: 'end'
  },
  expanded: {
    type: Boolean,
    default: false
  },
  theme: {
    type: String,
    default: 'primary'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  to: {
    type: String,
    default: ''
  }
})

defineEmits(['click'])

const componentName = computed({
  get() {
    if (props.disabled) {
      return 'button'
    }

    if (props.to) {
      return 'router-link'
    }

    if (props.href) {
      return 'a'
    }

    return 'button'
  }
})

const defaultClasses = computed({
  get() {
    let classes = 'inline-flex font-normal px-4 rounded-full items-center'

    if (props.disabled) {
      classes += ' cursor-not-allowed'
    }

    if (props.expanded) {
      classes += ' py-2'
    } else {
      classes += ' py-1'
    }

    return classes
  }
})

const themeClasses = computed({
  get() {
    switch (props.theme) {
      case 'secondary':
        return 'bg-grey-200 text-black hover:bg-grey-300 active:bg-grey-400 disabled:bg-grey-400  disabled:opacity-60'
      case 'primary':
        return 'bg-black text-white hover:bg-grey-800 active:bg-grey-900 disabled:bg-grey-900 disabled:opacity-60'
    }
  }
})
</script>
