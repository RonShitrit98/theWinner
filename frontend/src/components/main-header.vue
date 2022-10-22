<template>
  <section class="main-header">
    <router-link to="/" class="main-logo">The Winner</router-link>
    <nav class="main-nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link :to="accountLink">Account</router-link>
    </nav>
  </section>
</template>

<script>
import {useUserStore} from '../stores/user.store'
export default {
  setup(){
    const userStore = useUserStore()
    return {userStore}
  },
  computed: {
    accountLink(){
      if(this.userStore.currUser) return '/account' 
      else return '/auth'
    }
  },
};
</script>
