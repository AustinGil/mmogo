<template>
  <div id="app" class="p-8">
    <header id="nav" class="pb-8">
      <div class="header flex justify-between">
        <img
          src="\img\icons-mmogo\original\Getmmogo logo_FINAL-05.png"
          style="width:30%; height:30%;"
        />
        <form v-on:submit.prevent class="flex">
          <input
            v-bind:value="search"
            v-on:input="search = $event.target.value"
          />
          <AppBtn>Search</AppBtn>
        </form>
      </div>

      <ul class="menu">
        <li>
          <router-link to="/">Home</router-link>
        </li>

        <li>MySaves</li>

        <li v-if="$store.state.user">
          <router-link to="/article/new">Make New Post</router-link>
        </li>

        <li>Get Article</li>

        <li v-if="isOnline">
          <button
            v-if="$store.state.user"
            @click="$store.commit('setUser', null)"
          >
            Log Out
          </button>
          <RouterLink v-else to="/login">Log In</RouterLink>
        </li>
      </ul>
    </header>

    <main class="p-4 bg-white">
      <AppLoading v-show="$store.state.loaderCount" />

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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
  background: #bd514a;
}
body {
  background: #bd514a;
}
#nav {
  .header {
    background: #bd514a;
  }

  a {
    color: #bd514a;
  }
}
.menu li {
  display: inline-block;
  padding: 0px 10px;
}
.menu li:hover,
button:hover {
  color: #000;
  background: #eee5cc;
}

.menu {
  list-style-type: none;
  display: flex;
  justify-content: center;
  background: white;
  padding: 5px 0px;
}
</style>
