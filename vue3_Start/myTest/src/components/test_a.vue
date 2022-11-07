<template>
    <div>
        <h4>测试组件插槽传值</h4>
        <slot :text="msg"></slot>
        <last_A></last_A>
        <h4>深层传值：{{ message }}</h4>
    </div>
</template>

<script setup>
import {ref,reactive,inject } from "vue"
import last_A from "./last_a.vue"

const message = inject('last_message')


const msg=ref("组件传值")
// function BaseLayout(slots) {
//   return `<div class="container">
//       <header>${slots.header}</header>
//       <main>${slots.default}</main>
//       <footer>${slots.footer}</footer>
//     </div>`
// }
// BaseLayout({
//   header: `header`,
//   default: `main`,
//   footer: `footer`
// })
</script>

<style>

</style>