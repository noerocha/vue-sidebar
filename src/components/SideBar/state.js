import { ref, computed } from "vue";

export const collapsed = ref(true);
export const toggleSidebar = () => (collapsed.value = !collapsed.value);

export const SIDEBAR_WIDTH = 180;
export const SIDEBAR_WIDTH_COLLPSED = 38;
export const showSidebar = () => (collapsed.value = false);
export const hideSidebar = () => (collapsed.value = true);
export const sidebarWidth = computed(
  () => `${collapsed.value ? SIDEBAR_WIDTH_COLLPSED : SIDEBAR_WIDTH}px`
);
