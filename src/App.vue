<template>
  <div id="app">
    <div id="nav">
      <div class="something">
        getmmagogo
        <div><input id="term" /> <button>Search Topic</button></div>
      </div>

      <ul class="menu">
        <li><router-link to="/">Home</router-link></li>
        <li>MySaves</li>
        <li><router-link to="/article/new">Make New Post</router-link></li>
        <li>Get Article</li>
        <li>LogOut</li>
      </ul>
    </div>

    <AppLoading v-show="$store.state.loaderCount" />

    <router-view v-show="!$store.state.loaderCount" />
  </div>
</template>

<script>
import AppLoading from "@/components/AppLoading";
export default {
  components: {
    AppLoading
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
}

#nav {
  padding: 30px;

  .something {
    display: flex;
    justify-content: space-between;
  }

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  button {
    border: solid lightblue;
    padding: 2px;
  }
  input {
    background: lightyellow;
    outline: solid lightgray;
    padding: 2px;
  }
}
.menu li {
  display: inline-block;
  padding: 0px 10px;
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
