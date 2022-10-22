import { defineStore } from "pinia";
import { userService } from "../services/user.service";
export const useUserStore = defineStore("user", {
  state: () => {
    return {
      currUser: null,
    };
  },
  getters: {},
  actions: {
    // async createUser(user) {
    //   const newUser = await userService.signup(user);
    //   console.log(newUser)
    //   this.currUser = newUser;
    // },
    async loadUser() {
      const user = await userService.loadUser();
      console.log(user);
      this.currUser = user;
      return user;
    },
    // async logout() {
    //   console.log('logout')
    //   await userService.logout();
    //   this.currentUser = null;
    async signup(user) {
      const newUser = await userService.signup(user);
      console.log(newUser);
      this.currUser = newUser;
    },
    async logout() {
      console.log("logging out");
     await userService.logout();
      // this.currUser = null;
    },
    async login(userCred){
      const user = await userService.login(userCred)
      this.currUser = user
    }
  },
});
