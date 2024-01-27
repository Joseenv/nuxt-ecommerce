<template>
  <main class="login-container">
    <h1 class="font-lyon text-xl">Hola mi amor</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">Username</label>
        <input v-model="username" type="text" id="username">
        <span v-if="usernameError" class="error-message">{{ usernameError }}</span>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="password" type="password" id="password">
        <span v-if="passwordError" class="error-message">{{ passwordError }}</span>
      </div>
      <button type="submit">Login</button>
    </form>
  </main>
</template>

<script setup lang="ts">
const { loginUser } = useAuth();

const username = ref('');
const password = ref('');

const usernameError = ref('');
const passwordError = ref('');

const validateForm = () => {
  usernameError.value = '';
  passwordError.value = '';

  if (!username.value) {
    usernameError.value = 'Please enter your username';
  }

  if (!password.value) {
    passwordError.value = 'Please enter your password';
  }

  return !usernameError.value && !passwordError.value;
};

const handleSubmit = () => {
  if (validateForm()) {
    loginUser({ username: username.value, password: password.value });
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.error-message {
  color: red;
}
</style>
