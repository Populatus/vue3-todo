<script setup lang="ts">
import { Icon } from '@iconify/vue';
import type { ITodoItem } from './todo'
interface EmitTypes {
  (event: 'remove', data: number): void,
  (event: 'edit', data: ITodoItem): void,
}
defineProps<{ list: ITodoItem[] }>()
defineEmits<EmitTypes>()
</script>
<template>
  <div class="bg-white p-6 flex flex-col">
    <div v-for="(item, index) in list" :key="item.id" class="todo-item group">
      <div class="flex">
        <Icon
          @click="$emit('edit', index)"
          icon="carbon:checkmark-filled"
          class="mr-4 text-28px cursor-pointer"
          :class="[item.done ? 'text-dark-50/50 hover:text-dark-50/20' : 'text-green-500 hover:text-green-500/50']"
        ></Icon>
        <div :class="[item.done ? 'line-through text-dark-50/50' : '']">{{ item.text }}</div>
      </div>
      <Icon
        @click="$emit('remove', index)"
        icon="carbon:trash-can"
        class="cursor-pointer text-red-500 opacity-0 group-hover:opacity-100"
      ></Icon>
    </div>
  </div>
</template>
<style scoped>
.todo-item {
  box-shadow: 0 0 3px rgb(0 0 0 / 40%);
  @apply p-3 rounded-md my-6px hover:bg-warm-gray-500/10 flex items-center justify-between;
}
</style>