<template>
  <div id="app">
    <header class="navBar">
      <nav class="navItems">
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'Movie' }">Movie</router-link>
        <router-link :to="{ name: 'Profile' }">Profile</router-link>
        <router-link :to="{ name: 'Sign' }">Login</router-link>
      </nav>
    </header>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
  padding-top: 55px;
}

// CSS transition
.fade-enter-active, .fade-leave-active {
  transition: all .3s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>

<style scoped lang="scss">
// a {
//   color: $primary;
//   text-decoration: none;
// }
</style>
