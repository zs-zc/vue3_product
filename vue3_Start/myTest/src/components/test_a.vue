<template>
  <div>
    <h4>测试组件插槽传值</h4>
    <slot :text="msg"></slot>
    <last_A></last_A>
    <h4>深层传值：{{ message }}</h4>

    Mouse position is at: {{ x }}, {{ y }}
    <hr>

   
  </div>
</template>

<script setup>
import {ref,reactive,inject,onMounted,onUnmounted } from "vue"
import last_A from "./last_a.vue"

const message = inject('last_message')
const msg=ref("组件传值")

const x = ref(0)
const y = ref(0)

function update(event) {
  x.value = event.pageX
  y.value = event.pageY
}

onMounted(() => window.addEventListener('mousemove', update))
onUnmounted(() => window.removeEventListener('mousemove', update))
</script>

<style>

</style>