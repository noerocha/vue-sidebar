<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="collapsed">
        <div>V</div>
        <div>S</div>
      </span>
      <span v-else>Vue Sidedar </span>
    </h1>

    <SideBarLink to="/" icon="fas fa-home">Home</SideBarLink>
    <SideBarLink to="/dashboard" icon="fas fa-columns">Dashboard</SideBarLink>
    <SideBarLink to="/analytics" icon="fas fa-chart-bar">Analytics</SideBarLink>
    <SideBarLink to="/friends" icon="fas fa-users">Friends</SideBarLink>
    <SideBarLink to="/images" icon="fas fa-image">Images</SideBarLink>
    <span
      class="collapsed-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>

<script>
import { collapsed, toggleSidebar, sidebarWidth } from "./state";
import SideBarLink from "./SideBarLink";
export default {
  name: "SideBar",
  props: {},
  components: {
    SideBarLink,
  },
  setup() {
    return {
      collapsed,
      toggleSidebar,
      sidebarWidth,
    };
  },
};
</script>

<style>
:root {
  --sidebar-bg-color: #2f855a;
  --sidebar-item-hover: #38a169;
  --sidebar-item-active: #276749;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5rem;

  display: flex;
  flex-direction: column;

  transition: 0.3s ease all;
}

.collapsed-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75rem;
  color: rgba(255, 255, 255, 0.7);

  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
