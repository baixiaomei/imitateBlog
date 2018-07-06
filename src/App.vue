<template>
  <div id="app">
    <navHeader/>
    <transition name="fadesd" mode="out-in">
      <keep-alive>
        <router-view class="view"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import navHeader from './components/navHeader'
export default {
  name: 'App',
  components: {
    navHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:rgba(238,238,238,0.4);
}
</style>
