<template>
  <div id="aside">
    <div class="aside_search">
      <div class="search_box">
        <!--required 声明此字段为必填字段-->
        <input type="search"  class="search-input" placeholder="Search..." id="keyword" required="required">
        <button class="search-btn">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-search"></use>
          </svg>
        </button>
      </div>
    </div>
    <div class='num'>{{this.now_num}}</div>
  </div>
</template>

<script>
import '../../static/iconfont2'
// import store from '../store/index'
import { mapGetters } from 'vuex'
export default {
  name: 'asideright',
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'now_num'
    ])
  }
}
</script>

<style lang="less">
#aside{
  width:19em;
  float:right;
  display:block;
  margin:0;
  position:relative;
  .aside_search{
    margin-bottom:1em;
    .search_box{
      padding:0.5em;
      overflow:hidden;
      .search-input{
        box-sizing:border-box;
        margin-right:0px;
        width:calc(100% - 6.5em -1px);
        float:left;
        height:2em;
        line-height:2em;
        background-color:hsla(0,0%,77%,0.4);
      }
      .search-btn{
        width:2em;
        background-color:hsla(0,0%,57%,0.4);
        height:2em;
        line-height:2.5em;
        float:left;
        .icon{
          width:1em;
          height:1em;
        }
      }
    }
  }

  .num{
    width:20px;
    height:20px;
    line-height:20px;
    text-align: center;
    border-radius:50%;
    background:red;
    color:#fff;
    position:absolute;
    font-size:12px;
    top:0;
    right:0;
  }
}
input[type=search]{
  background:#fff;
  color:#555;
  display:inline-block;
  padding:4px;
  vertical-align: middle;
  min-height:1.5em;
}
</style>
