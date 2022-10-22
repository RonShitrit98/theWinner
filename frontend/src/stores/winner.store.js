import { defineStore } from "pinia";
export const useUserStore = defineStore("winner", {
  state: () => {
    return {
        currWinner: null,
    };
  },
  getters: {},
  actions: {},
});
