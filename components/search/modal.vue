<template>
  <TransitionRoot :show="isOpen" as="template">
    <Dialog
      class="fixed inset-0 z-50 flex justify-center items-start"
      :open="isOpen"
      @close="isOpen = false"
    >
      <TransitionChild
        enter="duration-200 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
        as="template"
      >
        <DialogOverlay
          class="fixed inset-0 bg-black bg-opacity-70"
        ></DialogOverlay>
      </TransitionChild>

      <TransitionChild
        enter="duration-200 ease-out"
        enter-from="opacity-0 scale-95"
        enter-to="opacity-100 scale-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100 scale-100"
        leave-to="opacity-0 scale-95"
        as="template"
      >
        <div
          class="
            w-full
            max-w-2xl
            bg-white
            rounded-lg
            mx-4
            max-h-[80vh]
            mt-[10vh]
            relative
          "
        >
          modal contents
        </div>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>
<script>
import {
  Dialog,
  DialogOverlay,
  TransitionRoot,
  TransitionChild,
} from "@headlessui/vue";

import { useSearch } from "~~/stores/search";
import { onMounted, onUnmounted, ref } from "vue";

export default {
  components: { Dialog, DialogOverlay, TransitionRoot, TransitionChild },
  setup() {
    const isAppleOS = () => {
      if (process.client) {
        const platform =
          navigator?.userAgentData?.platform ||
          navigator?.platform ||
          "unknown";

        return /(Mac|iPhone|iPod|iPad)/i.test(platform);
      }

      return "unknown";
    };

    const keyboardShortcut = isAppleOS() ? "⌘K" : "Ctrl K";

    const search = useSearch();

    const isOpen = ref(false);

    watch(
      search,
      () => {
        // this is bad (?)
        if (!isOpen.value) {
          isOpen.value = true;
        }
      },
      { deep: true }
    );

    const onKeyDown = (event) => {
      if (isOpen.value) return;

      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        isOpen.value = true;
      }
    };

    onMounted(() => window.addEventListener("keydown", onKeyDown));
    onUnmounted(() => window.removeEventListener("keydown", onKeyDown));

    return {
      isOpen,
      keyboardShortcut,
    };
  },
};
</script>