<template>
  <div id="app" class="container">
    <div class="card card-body bg-light">
      <div class="title">🕒 TodoList App 💻</div>
    </div>

    <div class="card card-default card-borderless">
      <div class="card-body">
        <!-- 입력용 컴포넌트 -->
        <InputTodo @add-todo="addTodo" />

        <!-- 카운트 컴포넌트 -->
        <TodoCount :todolist="state.todolist" />

        <!-- 목록 컴포넌트 -->
        <TodoList
          v-bind:todolist="sortedList"
          @toggle-completed="toggleCompleted"
          @delete-todo="deleteTodo"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, computed } from 'vue';
import InputTodo from './components/InputTodo.vue';
import TodoList from './components/TodoList.vue';
import TodoCount from './components/TodoCount.vue';

const ts = new Date().getTime();
const state = reactive({ todolist: [] });

onMounted(() => {
  state.todolist.push({ id: ts, todo: '자전거 타기', completed: false });
  state.todolist.push({ id: ts + 1, todo: '딸과 공원 산책', completed: true });
  state.todolist.push({
    id: ts + 2,
    todo: '일요일 애견 카페',
    completed: false,
  });
  state.todolist.push({ id: ts + 3, todo: 'Vue 원고 집필', completed: false });
});

const addTodo = (receiveTodo) => {
  state.todolist.push({
    id: new Date().getTime(),
    todo: receiveTodo,
    completed: false,
  });
};

const toggleCompleted = (id) => {
  let index = state.todolist.findIndex((item) => id === item.id);
  if (index !== -1) {
    state.todolist[index].completed = !state.todolist[index].completed;
  }
};

const deleteTodo = (id) => {
  let index = state.todolist.findIndex((item) => id === item.id);
  state.todolist.splice(index, 1);
};

// 정렬된 리스트 계산
const sortedList = computed(() => {
  // 정렬을 새로운 배열로 반환하도록 수정
  state.todolist.sort((t1, t2) => {
    if (t1.completed > t2.completed) return 1;
    if (t1.completed < t2.completed) return -1;

    const todo1 = t1.todo.toLowerCase();
    const todo2 = t2.todo.toLowerCase();

    if (todo1 > todo2) return 1;
    else if (todo1 === todo2) return 0;
    else return -1;
  });

  return state.todolist;
});
</script>
