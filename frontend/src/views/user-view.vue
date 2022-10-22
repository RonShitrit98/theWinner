<template>
  <section v-if="userStore.currUser">
    <h1>{{ userStore.currUser.name }}</h1>
    <button @click="logout">Logout</button>
  </section>
</template>

<script>
import { useUserStore } from "../stores/user.store";
export default {
  setup() {
    const userStore = useUserStore();
    return { userStore };
  },
  methods: {
    async logout() {
      await this.userStore.logout();
      this.$router.push("/");
    },
  },
};
</script>
