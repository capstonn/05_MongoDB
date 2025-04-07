<template>
  <table>
    <thead>
      <th>done</th>
      <th>id</th>
      <th>todo</th>
      <th>description</th>
      <th>Delete</th>
    </thead>

    <tbody>
      <tr v-for="todo in state.todos" :key="todo.id">
        <td>
          <input
            type="checkbox"
            :checked="todo.done"
            @change="updateTodo(todo)"
          />
        </td>

        <td>{{ todo.id }}</td>
        <td>{{ todo.todo }}</td>
        <td>{{ todo.desc }}</td>

        <td>
          <button>삭제</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { reactive } from 'vue';
import axios from 'axios';

// 상태 변수 선언 -> 값 변경 시 반응 => 컴포넌트 리랜더링
const state = reactive({ todos: [] });

// 비동기로 서버로부터 모든 할일 목록 얻어오기
const fetchTodoList = async () => {
  // /api/todos === http://localhost:3000/todos
  const response = await axios.get('/api/todos');
  state.todos = response.data; // 조회 결과를 state에 저장
};

// 할 일 목록 얻어오기 함수 호출
</script>
