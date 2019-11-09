<template>
  <div id="app">
    <div id="nav">
      getmmagogo
      <div style="display: block; float: right; padding-right:10px;">
        <input id="term" /> <button>Search Topic</button>
      </div>
      <button type="button" class="collapsible">menu</button>
      <ul class="menu">
        <li><router-link to="/">Home</router-link></li>
        <li>MySaves</li>
        <li><router-link to="/article/new">Make New Post</router-link></li>
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
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

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

  .collapsible {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: center;
    outline: none;
    font-size: 15px;
  }

  /* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
  .active,
  .collapsible:hover {
    background-color: #ccc;
  }

  /* Style the collapsible content. Note: hidden by default */
  .menu {
    padding: 0 18px;
    display: none;
    overflow: hidden;
    background-color: #f1f1f1;
  }
}
</style>
