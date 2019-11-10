<template>
  <div id="app" class="p-8">
    <div id="nav" class="pb-8">
      <div class="header">
        getmmagogo
        <form v-on:submit.prevent="filterOn" class="flex">
          <input
            v-bind:value="search"
            v-on:input="search = $event.target.value"
          />
          <button class="">Search</button>
        </form>
      </div>

      <ul class="menu">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>MySaves</li>
        <li>
          <router-link to="/article/new">Make New Post</router-link>
        </li>
        <li>Get Article</li>
        <li>LogOut</li>
      </ul>
    </div>

    <AppLoading v-show="$store.state.loaderCount" />

    <router-view v-show="!$store.state.loaderCount" :search="search" />
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

#nav {
  main {
    background: white;
  }
  .header {
    display: flex;
    justify-content: space-between;
    background: #bd514a;
  }

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.menu li {
  display: inline-block;
  padding: 0px 10px;
  color: #bd514a;
}
.menu li:hover {
  background: rgb(255, 206, 206);
}

.menu {
  list-style-type: none;
  display: flex;
  justify-content: center;
  background: #eee;
}
</style>
