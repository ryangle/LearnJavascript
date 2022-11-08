import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      name: "Michael",
      age: 18,
    };
  },
  getters: {
    getName: (state) => {
      return state.age;
    },
  },
});
