import { defineStore } from "pinia";

export const useState = defineStore("state", {
  state: () => ({
    open: false,
  }),
  actions: {
    toggle() {
      this.open = !this.open;
    },
  },
});
