<template>
  <div>
    <button @click="chage">改变传值</button>
    <h4 class="hh">{{ title }}</h4>
  </div>
</template>

<script setup>
const props = defineProps({
  title:{
    type:String,
    default:'123'
  }
})

const emit = defineEmits(['changProp'])
function chage(){
 emit("changProp",1234)
}
</script>
<style scoped>
.hh{
  color: aqua;
}
</style>