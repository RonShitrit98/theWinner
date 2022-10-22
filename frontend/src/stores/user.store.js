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
    async loadUser() {
      const user = await userService.loadUser();
      this.currUser = user;
    },
    async signup(user) {
      const newUser = await userService.signup(user);
      this.currUser = newUser;
    },
    async logout() {
      await userService.logout();
      this.currUser = null;
    },
    async login(userCred) {
      const user = await userService.login(userCred);
      this.currUser = user;
    },
  },
});
