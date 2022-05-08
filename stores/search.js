import { defineStore } from "pinia";

export const useSearch = defineStore("search", {
  state: () => ({
    open: false,
  }),
  actions: {
    toggle() {
      this.open = !this.open;
    },
  },
});
