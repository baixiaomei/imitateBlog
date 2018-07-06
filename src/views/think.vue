<template>
  <div id="main">
    <asideNav/>
    <div id ='think'>
      <div clas=''></div>
    </div>
  </div>
</template>

<script>
import asideNav from '../components/asideNav'
export default {
  name: 'think',
  data () {
    return {
      msg: ''
    }
  },
  components: {
    asideNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#main{
  width:75em;// 根据父集元素大小设置宽度
  position:relative;
  overflow:hidden;
  margin:0 auto;
  display:block;
}
#think{
  float: left;
  margin-left: 12.5em;
  width: 42.5em;
  position: relative;
  overflow: hidden;
  -webkit-transition: width .35s;
  transition: width .35s;
}
</style>
