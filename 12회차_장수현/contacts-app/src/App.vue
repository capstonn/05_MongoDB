<script setup>
import { RouterLink, RouterView } from 'vue-router';
import axios from 'axios';
import { reactive, provide, computed } from 'vue';
import Header from './components/Header.vue';

const BASEURI = '/api/contacts';
const states = reactive({ contacts: [] });

//contact 조회
const fetchContacts = async () => {
  try {
    const response = await axios.get(BASEURI);
    if (response.status === 200) {
      states.contacts = response.data;
    } else {
      alert('데이터조회실패');
    }
  } catch (error) {
    alert('에러' + error);
  }
};

//contact 추가
const addContacts = async (
  { id, name, tel, address, url },
  successCallback
) => {
  try {
    const payload = { id, name, tel, address, url };
    const response = await axios.post(BASEURL, payload);
    if (response.status === 201) {
      states.contacts.push({ ...response.data, done: false });
      successCallback();
    } else {
      alert('추가 실패');
    }
  } catch (error) {
    alert('에러발생 : ' + error);
  }
};

// contact 변경
const EditContacts = async (
  { id, name, tel, address, url },
  successCallback
) => {
  try {
    const payload = { id, name, tel, address, url };
    const response = await axios.put(BASEURL + `/${id}`, payload);
    if (response.status === 200) {
      let index = states.contacts.findIndex(
        (contact) => contact.id === contact
      );
      states.contact[index] = payload;
      successCallback();
    } else {
      alert('추가 실패');
    }
  } catch (error) {
    alert('에러발생 : ' + error);
  }
};

// contact 삭제
const deleteContacts = async (id) => {
  try {
    const response = await axios.delete(BASEURI + `/${id}`);
    if (response.data.status === 'success') {
      let index = status.contacts.findIndex((contact) => contact.id === id);
      states.contacts.splice(index, 1);
    } else {
      alert('삭제 실패');
    }
  } catch (error) {
    alert('에러발생');
  }
};

provide(
  'contacts',
  computed(() => states.contacts)
);
provide('actions', {
  addContacts,
  deleteContacts,
  EditContacts,
  fetchContacts,
});

fetchContacts();
</script>

<template>
  <div class="container">
    <Header />
    <router-view />
  </div>
</template>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css');
</style>
