<template>
  <div>
    <header>
      <h5>接下来是header组件</h5>
      <slot name="header"></slot>
    </header>
    <main>
      <h5>接下来是main组件</h5>
      <slot name="main"></slot>
    </main>
    <footer>
      <h5>接下来是footer组件</h5>
      <slot name="footer"></slot>
    </footer>
    <hr>
  </div>
</template>

<script setup>
 import Test_A from "./test_a.vue"
</script>

<style>

</style>