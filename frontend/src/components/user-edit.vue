<template>
  <h1>signup</h1>
  <form @submit.prevent="signup">
    <input type="text" placeholder="Name" v-model="user.name" />
    <input type="text" placeholder="UserName" v-model="user.username" />
    <input type="password" placeholder="Password" v-model="user.password" />
    <input type="submit" value="signup" />
  </form>
  <h1>login</h1>
  <form @submit.prevent="login">
    <input type="text" placeholder="UserName" v-model="user.username" />
    <input type="password" placeholder="Password" v-model="user.password" />
    <input type="submit" value="login" />
  </form>
</template>

<script>
import { useUserStore } from "../stores/user.store";
export default {
  setup() {
    const userStore = useUserStore();
    return {userStore}
  },
  data() {
    return {
      user: {
        username: "",
        name: "",
        password: "",
      },
    };
  },
  methods: {
    signup() {
        this.userStore.signup(this.user)
    },
  async login(){
     await this.userStore.login(this.user)
      this.$router.push('/')
    }
  },
};
</script>
