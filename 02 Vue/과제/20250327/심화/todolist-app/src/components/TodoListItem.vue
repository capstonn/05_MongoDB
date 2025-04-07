<template>
  <li
    :key="todoitem.id"
    class="list-group-item"
    :class="{ 'list-group-item-success': todoitem.completed }"
    @click="emit('toggle-completed', todoitem.id)"
  >
    <input
      type="checkbox"
      class="pointer me-3"
      v-model="todoitem.completed"
      @click="toggleCompletedHandler(todoitem.id)"
    />

    <!-- todoitem.completed 값이 true이면 
                   'todo-done' 클래스, '(완료') 문자열 추가 -->
    <span class="pointer" :class="{ 'todo-done': todoitem.completed }">
      {{ todoitem.todo }} {{ todoitem.completed ? '(완료)' : '' }}
    </span>

    <!-- 
                  삭제 버튼이 클릭된 경우 deleteTodo() 메서드 호출
                  .stop : 이벤트 전파(하위 요소 -> 상위 요소) 막기 
                  -->
    <span
      class="float-end badge bg-secondary pointer"
      @click.stop="emit('delete-todo', todoitem.id)"
      >삭제</span
    >
  </li>
</template>
<script setup>
const props = defineProps({
  todoitem: {
    type: Object, // 객체 타입 검사
    required: true, //필수 데이터
  },
});

const emit = defineEmits(['delete-todo', 'toggle-completed']);
</script>
