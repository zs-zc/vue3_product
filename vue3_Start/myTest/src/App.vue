<script setup>
import Test from '../src/components/test.vue'
import Test2 from '../src/components/test_two.vue'
import Test_A from "../src/components/test_a.vue"
import {ref,reactive,nextTick,computed,provide} from "vue"

provide("last_message",'give-last_a-message')
const count=ref(0);
const obj = reactive({
  nested: { count: 0 },
  arr: ['foo', 'bar']
})
const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

const isActive=ref(true)
const hasError = ref(false)

const styleObj=reactive({
  color: 'red',
  fontSize: '23px'
})

const items = ref([{ message: 'Foo' }, { message: 'Bar' }])

const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})
const checked=ref(false)
const awesome=ref(false)
const checkedNames = ref([])
const picked=ref(null)
const selected=ref(null)
const propTitle=ref("牛逼")
const isShow=ref(false)
// ---------------------
function changProp(val){
  propTitle.value=val
}
function add(){
  count.value++;
  nextTick(()=>{
    console.log('0001');
  })
}
function mutateDeeply() {
  // 以下都会按照期望工作
  obj.nested.count++
  obj.arr.push('baz')
  console.log(obj.nested,obj.arr,'obj');
}

// 一个计算属性 ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})
const now = computed(() => Date.now())

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {
    // 注意：我们这里使用的是解构赋值语法
    [firstName.value, lastName.value] = newValue.split(' ')
  }
})

</script>

<template>
  <!-- <TheWelcome /> -->
  <div>

    <!-- 组件 -->
    <Test2>
      <template v-slot:header>
        <h1>
          header组件
        </h1>
      </template>
      <template #main>
        <h1>
          mian组件
        </h1>
      </template>
      <template #footer>
        <h1>
          footer组件
        </h1>
      </template>

    </Test2>
    <Test_A>
      <template v-slot="{ text }">
        <h1>
          动态组件-{{ text }}
        </h1>
      </template>
    </Test_A>
    <div v-show="isShow">
      <!-- end -->
      计数：{{ count }}
      <button @click="add">按钮1</button>
      <button @click="mutateDeeply">按钮2</button>
      <p>{{ publishedBooksMessage }}</p>
      <p :style="styleObj"> {{ now }}</p>
      <p :class="{ active: isActive, 'text-danger': hasError }">{{ fullName }}</p>

      <button @click="awesome = !awesome">Toggle</button>
      <h1 v-if="awesome">Vue is awesome!</h1>
      <h1 v-else>Oh no 😢</h1>

      <hr>
      <ul>
        <li v-for="({ message }, index) in items">
          {{ message }} {{ index }}
        </li>
      </ul>
      <hr>

      <ul>
        <li v-for="(value, key) in myObject">
          {{ key }}: {{ value }}
        </li>

      </ul>
      <hr>
      <input type="checkbox" id="checkbox" v-model="checked" />
      <label for="checkbox">{{ checked }}</label>


      <hr>
      <div>Checked names: {{ checkedNames }}</div>

      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>

      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>

      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <hr>
      <div>Picked: {{ picked }}</div>

      <input type="radio" id="one" value="One" v-model="picked" />
      <label for="one">One</label>

      <input type="radio" id="two" value="Two" v-model="picked" />
      <label for="two">Two</label>
      <hr>
      <div>Selected: {{ selected }}</div>

      <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
    </div>
    <hr>
    <Test :title="propTitle" @changProp="changProp" class="test"></Test>
    <hr>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}

.active {
  color: red;
}

.test {
  background-color: blueviolet;
}
</style>
