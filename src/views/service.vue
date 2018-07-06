<template>
  <div id="main">
    <asideNav/>
    <div>code</div>
  </div>
</template>

<script>
import asideNav from '../components/asideNav'
export default {
  name: 'service',
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
</style>
