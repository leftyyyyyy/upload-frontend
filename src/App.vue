<template>
  <div id="app">
    <!-- <nav>
      <v-btn small color="primary"> <router-link to="/">Home</router-link> </v-btn>
    </nav>

    <router-view />-->

    <Files />

  </div>
</template>

<script>
import Files from "./components/Files.vue";

export default {
  name: "app",
  components: {
    Files
  }
};
</script>

<style>
body {
  background-color: #eeeeee;
  font-family: "Montserrat", sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  padding-top: 50px;
}

body,
html {
  margin: 0;
  height: 100%;
}
#app {
  width: 50%;
}

nav {
  padding: 20px 20px 20px 0;
}

/* nav a {
  padding: 10px;
  text-decoration: none;
  background: #fff;
  border-radius: 3px;
  color: rgb(0, 110, 255);
  font-weight: bold;
  margin-right: 15px;
} */
</style>
