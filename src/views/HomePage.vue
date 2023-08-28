<template>
    <button
        class="btn_home_style"
        v-on:click="$router.push({ name: 'authenticationUser' })"
      >
        Войти
      </button>
      <button
        class="btn_home_style"
        v-on:click="$router.push({ name: 'registrationUser' })"
      >
        Регистрация
      </button>
</template>