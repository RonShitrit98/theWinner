<template>
  <section class="home-view">
    <winner-detail></winner-detail>
  </section>
</template>

<script>
import winnerDetail from "../components/winner-detail.vue";
import { useUserStore } from "../stores/user.store";
export default {
  components: { winnerDetail },
  setup() {
    const userStore = useUserStore();
    return { userStore };
  },
  async created() {
    await this.userStore.loadUser();
  },
};
</script>
