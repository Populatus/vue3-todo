<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useTodoStore } from './store'
const title = $ref<String>('Todo List')
let content = $ref<String>('')
const todo = useTodoStore()
const addTodo = () => {
  todo.addTodo(content.toString())
  content = ""
}
</script>
<template>
  <div class="w-500px flex-center flex-col">
    <div class="text-7xl text-white mb-4">{{ title }}</div>
    <div class="w-full">
      <div class="bg-gray-200 text-white flex justify-end">
        <div class="rounded-btn">
          Tasks
          <div class="rounded-content">{{ todo.list.length }}</div>
        </div>
        <div class="rounded-btn">
          Done
          <div class="rounded-content">{{ todo.donelist.length }}</div>
        </div>
      </div>
      <List
        :list="todo.list"
        @edit="todo.editTodo"
        @remove="todo.removeTodo"
      />
      <div class="flex bg-light-500 px-6 py-4">
        <div
          class="border-blue-500 bg-white border-3px px-2 flex rounded-30px w-full justify-between"
        >
          <input
            v-model="content"
            type="text"
            class="mr-4 text-blue-500 bg-transparent px-6 text-20px outline-none w-full"
          />
          <Icon
            @click="addTodo"
            icon="carbon:add-filled"
            class="text-blue-500 cursor-pointer text-48px"
          />
        </div>
      </div>
    </div>
  </div>,
</template>
<style scoped>
.rounded-btn {
  @apply rounded-20px bg-blue-500 py-2px pl-4 pr-1 m-2 cursor-pointer  flex-center;
}
.rounded-content {
  @apply rounded-full bg-white w-20px h-20px text-blue-500 flex-center ml-2;
}
</style>