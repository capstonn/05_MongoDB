<template>
  <div>
    <h2>TodoList 테스트 (Composition API)</h2>
    <hr />
    할 일 추가:
    <input type="text" v-model="todo" />
    <button @click="addTodoHandler">추가</button>
    <hr />
    <ul>
      <li v-for="todoItem in todoList" :key="todoItem.id">
        <span style="cursor: pointer" @click="toggleDone(todoItem.id)">
          {{ todoItem.todo }} {{ todoItem.done ? '(완료)' : '' }}
        </span>
        &nbsp;&nbsp;&nbsp;
        <button @click="deleteTodo(todoItem.id)">삭제</button>
      </li>
    </ul>
    <div>완료된 할 일 수 : {{ doneCount }}</div>
  </div>
</template>

<script setup>
import { useTodoListStore } from '@/stores/todoList.js';
import { ref, computed } from 'vue';

const todo = ref('');

// Pinia store 사용
const todoListStore = useTodoListStore();
const { todoList, addTodo, deleteTodo, toggleDone } = todoListStore;

// 완료된 할 일 개수
const doneCount = computed(() => todoListStore.doneCount);

// 할 일 추가 핸들러
const addTodoHandler = () => {
  addTodo(todo.value);
  todo.value = ''; // 입력란 비우기
};
</script>
