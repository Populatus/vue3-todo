import { defineStore } from "pinia";
import type { ITodoItem } from "./todo";
import { useLocalStorage } from '@vueuse/core'
export interface ITodoProps {
  list: ITodoItem[];
}
type ITodoTypes = ITodoProps['list']
export const useTodoStore = defineStore("todo", () => {
  const list: ITodoTypes = $ref(useLocalStorage('todo-list', []));
  const donelist: ITodoTypes = $computed(() => {
    return list.filter((item) => item.done);
  })
  const addTodo = (text: string) => {
    const item: ITodoItem = {
      id: Date.now(),
      text,
      done: false,
    };
    list.push(item);
  }
  const editTodo = (item: ITodoItem) => {
    item.done = !item.done;
  };
  const removeTodo = (index: number) => {
    list.splice(index, 1);
  }
  return {
    list,
    donelist,
    addTodo,
    editTodo,
    removeTodo
  }
});  