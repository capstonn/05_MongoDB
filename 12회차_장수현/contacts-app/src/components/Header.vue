<template>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <span class="navbar-brand ps-2">Contacts</span>

    <div>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contacts"
            >목록 보기 페이지</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contacts/detail/:id"
            >상세 보기 페이지</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contacts/write"
            >새 연락처 추가 페이지</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contacts/edit/:id"
            >연락처 수정 페이지</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
