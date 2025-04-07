<template>
  <div class="row">
    <div class="col">
      <ul class="list-group">
        <!-- 임시 확인용 태그 -->
        <!-- <p v-for="todo in todolist">{{ todo.todo }}</p> -->

        <!-- 할 일 목록 요소 컴포넌트 -->
        <!-- props로 받은 데이터 수정 x 
          -> emit을 이용해서 부모로 전달하여  수정
          
          TodoItem -> TodoList -> App
          -->
        <TodoListItem
          v-for="todoitem in todolist"
          :key="todoitem.id"
          :todoitem="todoitem"
          @toggle-completed="emit('toggle-completed', todoitem.id)"
          @delete-todo="emit('delete-todo', todoitem.id)"
        />
        <!-- $event : 자식 컴포넌트에서 방출된 payload 참조 변수 (id) -->
      </ul>
    </div>
  </div>
</template>

<script setup>
import TodoListItem from './TodoListItem.vue';

const props = defineProps({
  todolist: { type: Array, required: true },
});

const emit = defineEmits(['delete-todo', 'toggle-completed']);
</script>
