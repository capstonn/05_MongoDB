<template>
  <div>
    <h1>새연락처</h1>
    <form>
      <div class="mb-3 mt-3">
        <label for="name">Name:</label>
        <input
          type="name"
          class="form-control"
          id="name"
          placeholder="이름을 입력하세요."
          name="name"
        />
      </div>
      <div class="mb-3">
        <label for="tel">tel:</label>
        <input
          type="tel"
          class="form-control"
          id="tel"
          placeholder="전화번호룰 입력하세요."
          name="tel"
        />
      </div>
      <div class="mb-3 mt-3">
        <label for="address">address:</label>
        <input
          type="address"
          class="form-control"
          id="address"
          placeholder="주소를 입력하세요."
          name="address"
        />
      </div>
      <div class="mb-3 mt-3">
        <label for="url">photo url:</label>
        <input
          type="url"
          class="form-control"
          id="url"
          placeholder="사진의 url을 입력하세요."
          name="url"
        />
      </div>
      <button type="submit" class="btn btn-primary" @click="confirmStore">
        확인
      </button>
      <button type="reset" class="btn btn-primary" @click="gotoList">
        취소
      </button>
    </form>
  </div>
</template>

<script setup>
import axios from 'axios';
import { inject, reactive } from 'vue';
import { useRouter } from 'vue-router';
const contactItem = reactive({ contact: '' });

const { contacts } = inject('actions');

// 취소 클릭시 목록으로
const gotoList = () => {
  router.push('/contacts');
};

// 확인버튼 클릭시
const confirmStore = (e) => {
  if (!confirm('내용을 저장하겠습니까?')) {
    e.preventDefault();
  } else {
    axios.post(url, data);
  }
};

const addHandler = () => {
  let { contact } = contactItem;
  addContacts({ ...contactItem }, () => {
    router.push('/contacts');
  });
};
</script>
<style></style>
