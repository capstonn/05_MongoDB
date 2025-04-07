<template>
  <div>
    <InputName v-model:name="searchName" />
    <h3>검색어 : {{ searchName }}</h3>
  </div>
  <hr />
  <h1>Teleport Test</h1>
  <button @click="changeModal">isModal 상태 변경</button>
  <!-- id="modal" 요소에 모달 컴포넌트 렌더링 -->
  <teleport to="#modal">
    <Modal v-if="isModal" />
  </teleport>
  <h1>부모 Click Count : {{ count }}</h1>

  <!-- 자식 click count -->
  <ClickCount />
</template>

<script>
import InputName from './components/InputName.vue';
import ClickCount from './components/ClickCount.vue';
import ChildClickCount from './components/ChildClickCount.vue';

// 텔레포트 테스트
import Modal from './components/Modal.vue';
import { computed } from 'vue';

export default {
  name: 'App',
  // 자식 컴포넌트 등록
  components: { InputName, ClickCount, Modal },

  data() {
    return { searchName: 'John', count: 0, isModal: false };
  },

  // 하위 컴포넌트에게 정보 제공
  provide() {
    return {
      // count 변경 시 하위 컴포넌트 리렌더링
      cnt: computed(() => this.count),

      // increment() 호출 시 App.vue의 count 1 증가
      increment: () => this.count++,
    };
  },

  methods: {
    changeModal() {
      this.isModal = true;
      setTimeout(() => {
        this.isModal = false;
      }, 2000);
    },
  },
};
</script>
