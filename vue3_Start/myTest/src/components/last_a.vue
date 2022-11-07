<template>
    <div>
        last_a--{{ message }}
    </div>
</template>

<script setup>
import {inject} from "vue"
const message = inject('last_message')

</script>

<style>

</style>