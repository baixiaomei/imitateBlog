<template>
  <div id="main">
    <asideNav/>

    <div class='box'>
      <div class='bizi'>{{$store.getters.not_show}}</div>
    </div>
    <div :visible.sync="show">天天向上</div>
  </div>
</template>

<script>
import asideNav from '../components/asideNav'
import { mapState } from 'vuex'
export default {
  name: 'about',
  data () {
    return {
      msg: ''
    }
  },
  computed: {
    ...mapState({
      show: state => state.dialog.show
    })
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
.box{
  width:800px;
  height:800px;
  float: left;
  margin-left: 12.5em;
  width: 42.5em;
  position: relative;
  overflow: hidden;
  -webkit-transition: width .35s;
  transition: width .35s;

  .bizi{
    width:50px;
    height:100px;
    border-radius:5px 5px 5px 5px/5px 5px 5px 5px;
    color:#EF95C1;
  }
}
</style>
