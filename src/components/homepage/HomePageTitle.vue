<template>
  <div>
    <h1 class="text-6xl font-extrabold mb-8 animate-pulse">
      {{ displayText }}
      <span
        class="inline-block w-0.5 h-12 bg-white ml-1"
        :class="{ 'opacity-0': !showCursor }"
      ></span>
    </h1>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  messages: {
    type: Array,
    required: true,
    validator: (value) => value.every((item) => typeof item === 'string')
  },
  typingSpeed: {
    type: Number,
    default: 100
  },
  eraseSpeed: {
    type: Number,
    default: 50
  },
  delayBeforeErasing: {
    type: Number,
    default: 2000
  },
  delayBetweenMessages: {
    type: Number,
    default: 1000
  }
})

const displayText = ref('')
const showCursor = ref(true)
let cursorInterval
let typingTimeout
let currentMessageIndex = 0

const typeText = () => {
  const currentMessage = props.messages[currentMessageIndex]
  let currentIndex = 0
  const textLength = currentMessage.length

  const typeNextChar = () => {
    if (currentIndex < textLength) {
      displayText.value += currentMessage[currentIndex]
      currentIndex++
      typingTimeout = setTimeout(typeNextChar, props.typingSpeed)
    } else {
      setTimeout(eraseText, props.delayBeforeErasing)
    }
  }

  typeNextChar()
}

const eraseText = () => {
  const eraseNextChar = () => {
    if (displayText.value.length > 0) {
      displayText.value = displayText.value.slice(0, -1)
      typingTimeout = setTimeout(eraseNextChar, props.eraseSpeed)
    } else {
      currentMessageIndex = (currentMessageIndex + 1) % props.messages.length
      setTimeout(typeText, props.delayBetweenMessages)
    }
  }

  eraseNextChar()
}

const toggleCursor = () => {
  showCursor.value = !showCursor.value
}

onMounted(() => {
  typeText()
  cursorInterval = setInterval(toggleCursor, 500)
})

onUnmounted(() => {
  clearInterval(cursorInterval)
  clearTimeout(typingTimeout)
})
</script>
