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
        <TodoCount :todolist="todolist" />
        <!-- todolist 전달 -->

        <!-- 목록 컴포넌트: 목록 화면 렌더링에 필요한 데이터 todolist를 -->
        <TodoList
          v-bind:todolist="sortedList"
          @toggle-completed="toggleCompleted"
          @delete-todo="deleteTodo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from 'vue';
import InputTodo from './components/InputTodo.vue';
import TodoList from './components/TodoList.vue';
import TodoCount from './components/TodoCount.vue';

export default {
  components: { InputTodo, TodoList, TodoCount },

  data() {
    return {
      todolist: [
        { id: Date.now(), todo: '자전거 타기', completed: false },
        { id: Date.now() + 1, todo: '딸과 공원 산책', completed: true },
        {
          id: Date.now() + 2,
          todo: '일요일 애견 카페',
          completed: false,
        },
        { id: Date.now() + 3, todo: 'Vue 원고 집필', completed: false },
      ],
    };
  },

  methods: {
    addTodo(receiveTodo) {
      this.todolist.push({
        id: Date.now(),
        todo: receiveTodo,
        completed: false,
      });
    },

    toggleCompleted(id) {
      let index = this.todolist.findIndex((item) => id === item.id);
      if (index !== -1) {
        this.todolist[index].completed = !this.todolist[index].completed;
      }
    },

    deleteTodo(id) {
      let index = this.todolist.findIndex((item) => id === item.id);
      this.todolist.splice(index, 1);
    },
  },

  computed: {
    sortedList() {
      this.todolist.sort((t1, t2) => {
        if (t1.completed > t2.completed) return 1;
        if (t1.completed < t2.completed) return -1;

        const todo1 = t1.todo.toLowerCase();
        const todo2 = t2.todo.toLowerCase();

        if (todo1 > todo2) return 1;
        else if (todo1 === todo2) return 0;
        else return -1;
      });

      return this.todolist;
    },
  },
};
</script>
