<template>
  <div id="app" class="p-8">
    <header id="nav">
      <RouterLink to="/">
        <img
          src="\img\icons-mmogo\original\Getmmogo logo_FINAL-05.png"
          class="w-64 mx-auto mb-5"
        />
      </RouterLink>

      <ul
        class="menu flex flex-wrap rounded-t justify-center align-center bg-white border-b-2 border-solid border-gray-300"
      >
        <li>
          <router-link to="/" class="m-1 p-2 block">Home</router-link>
        </li>

        <li v-if="$store.state.user">
          <router-link to="/article/new" class="m-1 p-2 block">
            Write
          </router-link>
        </li>

        <li>
          <RouterLink :to="{ name: 'downloads' }" class="m-1 p-2 block">
            Downloads
          </RouterLink>
        </li>

        <li>
          <RouterLink :to="{ name: 'scan' }" class="m-1 p-2 block"
            >Scan</RouterLink
          >
        </li>

        <li v-if="isOnline">
          <button
            v-if="$store.state.user"
            @click="$store.commit('setUser', null)"
            class="m-1 p-2 block"
          >
            Log Out
          </button>
          <RouterLink v-else to="/login" class="m-1 p-2 block">
            Log In
          </RouterLink>
        </li>
      </ul>
    </header>

    <p v-if="isOffline" class="text-center p-3 bg-blue-200">
      You are currently in offline mode.
    </p>

    <main class="p-5 bg-white rounded-b">
      <AppLoading
        v-show="$store.state.loaderCount"
        class="main-loader mx-auto"
      />

      <router-view v-show="!$store.state.loaderCount" :search="search" />
    </main>
  </div>
</template>

<script>
import AppLoading from "@/components/AppLoading";
export default {
  components: {
    AppLoading
  },
  data() {
    return {
      search: ""
    };
  }
};
</script>

<style lang="scss">
body {
  background: #bd514a;
}
svg {
  stroke: currentColor;
  fill: currentColor;
}
input,
textarea,
select {
  border: 1px solid;
}
input[type="radio"],
input[type="checkbox"] {
  width: initial;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
}

.menu a,
.menu button {
  color: #bd514a;
  &:hover {
    color: #000;
    background: #eee5cc;
  }
}

.main-loader {
  color: #bd514a;
}
</style>
