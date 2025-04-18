<template lang="">
  <div>
    edit
    <h1><i class="fa-solid fa-address-book"></i>연락처 수정</h1>
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
      <button
        type="reset"
        class="btn btn-primary"
        @click="router.push('/contacts/detail/:id')"
      >
        취소
      </button>
    </form>
  </div>
</template>

<script setup>
import { inject, reactive } from 'vue';

const { contacts } = inject('actions');

const matchedContacts = contacts.value.find(
  (contact) => contact.id === parseInt(currentRoute.params.id)
);
</script>
<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css');
</style>
