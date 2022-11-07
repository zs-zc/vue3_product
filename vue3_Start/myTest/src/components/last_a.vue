<template>
  <div>
    <div>
      last_a--{{ message }}
      Mouse position is at: {{ x }}, {{ y }}
    </div>

  </div>
</template>

<script>

import {ref, inject } from 'vue'
import { useMouse } from './mouse.js'


export default {
  setup() {
    const message = inject('last_message')
    const { x, y } = useMouse()
    return { message,x, y  }
  }
}

</script>

<style scoped>

</style>
