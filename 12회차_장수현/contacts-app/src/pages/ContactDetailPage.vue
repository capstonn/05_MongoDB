<template lang="">
  <div>
    <h1><i class="fa-solid fa-address-book"></i>연락처</h1>

<div>

</div>

    <button type="submit" class="btn btn-primary" @click='router.push('/contacts')'><i class="fa-solid fa-list"></i>
        목록
      </button>
      
    <button type="submit" class="btn btn-primary" @click='router.push('/contacts')'><i class="fa-solid fa-pen-to-square"></i>
        수정
      </button>
      
    <button type="submit" class="btn btn-danger" @click='router.push('/contacts')'><i class="fa-solid fa-trash"></i>
       삭제
      </button>
  </div>
</template>
<script setup>
const { contacts } = inject('actions');
</script>
<style lang=""></style>
