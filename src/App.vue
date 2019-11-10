<template>
  <div id="app">
    <div id="nav">
      <div class="header">
        <img
          src="\img\icons-mmogo\original\Getmmogo logo_FINAL-05.png"
          style="width:30%; height:30%;"
        />
        <form v-on:submit.prevent="filterOn">
          <input id="term" v-bind:value="search" v-on:input="search = $event.target.value" />
          <button>Search Topic</button>
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

    <router-view v-show="!$store.state.loaderCount" filter="yo" />
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
  },

  methods: {
    filterOn() {
      console.log(this.search);
    }
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
  padding: 30px;
  main {
    background: white;
    max-width: 600px;
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
      color: #2c3e50;
    }
  }
  button {
    background: white;
    padding: 2px;
  }
  input {
    background: white;
    padding: 2px;
  }
}
.menu li {
  display: inline-block;
  padding: 0px 10px;
  color: #bd514a;
}
.menu li:hover,
button:hover {
  background: #eee5cc;
}

.menu {
  list-style-type: none;
  display: flex;
  justify-content: center;
  background: white;
}
</style>
