<template>
  <div>
    <h1><i class="fa-solid fa-address-book"></i>연락처</h1>
    <table id="list">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>tel</th>
        </tr>
      </thead>
      <tbody id="contacts">
        <tr v-for="(contact, index) in contacts" :key="contact.id">
          <td>{{ index + 1 }}</td>
          <td>{{ contact.name }}</td>
          <td>{{ contact.tel }}</td>
        </tr>
      </tbody>
    </table>

    <button
      type="button"
      class="btn btn-primary"
      @click="router.push('/contacts/write')"
    >
      <i class="fa-solid fa-pen-to-square"></i>새 연락처
    </button>
  </div>
</template>
<script setup>
import router from '@/router';
import axios from 'axios';
import { useRouter } from 'vue-router';

const { contacts } = inject('actions');
</script>
<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css');
</style>
