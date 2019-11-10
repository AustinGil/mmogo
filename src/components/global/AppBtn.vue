<template>
  <button v-on="$listeners" class="app-btn rounded px-4 py-2">
    <slot />
  </button>
</template>

<style lang="scss">
.app-btn {
  line-height: 1;
  color: #fff;
  background: #bd514a;

  &:hover {
    color: #000;
    background: #eee5cc;
  }
}
</style>
