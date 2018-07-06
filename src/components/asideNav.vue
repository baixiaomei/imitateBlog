<template>
  <div id="aside-nav">
    <div class="nav-list">
      <!-- exact 匹配模式-->
      <router-link tag="a" to="/" class="item" exact>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-all"></use>
        </svg>
        <span>home</span>
      </router-link>
      <router-link tag="a" to="/codename" class="item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-iconfontxingxing"></use>
        </svg>
        <span>code</span>
      </router-link>
      <router-link tag="a" to="/project" class="item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-iconfontshumajiadian"></use>
        </svg>
        <span>project</span>
      </router-link>
      <router-link tag="a" to="/think" class="item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-iconfontzhaomingdianzi"></use>
        </svg>
        <span>think</span>
      </router-link>
      <router-link tag="a" to="/music" class="item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-set"></use>
        </svg>
        <span>music</span>
      </router-link>
      <router-link tag="a" to="/about" class="item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-good"></use>
        </svg>
        <span>about</span>
      </router-link>
      <router-link tag="a" to="/service" class="item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-account"></use>
        </svg>
        <span>service</span>
      </router-link>
      <router-link tag="a" to="/guestbook" class="item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-search"></use>
        </svg>
        <span>guestbook</span>
      </router-link>
      <router-link tag="a" to="/taobao" class="item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-comments"></use>
        </svg>
        <span>taobao</span>
      </router-link>
      <router-link tag="a" to="/aliyun" class="item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-play"></use>
        </svg>
        <span>aliyun</span>
      </router-link>
      <router-link tag="a" to="/errend" class="item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-text"></use>
        </svg>
        <span>errend.io</span>
      </router-link>
      <router-link tag="a" to="/app" class="item">
      <!--图标引入-->
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-account"></use>
        </svg>
        <span>app</span>
      </router-link>
    </div>
  </div>
</template>

<script>
// 引入icon图标（从阿里图标库里加入购物车=> 下载代码 => 将iconfont.js放到static中，在这里引入）
import '../../static/iconfont'
export default {
  name: 'navheader',
  data () {
    return {
      data: {
        list: []
      }
    }
  },
  created () {
    this.a()
  },
  methods: {
    a () {
      let list = {type: '', people: '', list: []}
      let arglist = []
      arglist.push(list)
      arglist.reverse()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@charset "utf-8";
@n: 37.5em;
/*
*calc 可以实现混合单位的逻辑运算
*/
  #aside-nav{
    background-color:rgba(238,238,238,0.4);
    position:fixed;
    width:11.5em;
    top:5.5em;
    display:inline-block;
    left:calc(50% - @n);
    .nav-list{
      width:100%;
      a.item{
        display:block;
        width:82%;
        height:3em;
        line-height:3em;
        padding:0 1em;
        // border-radius:1em;
        font-family: DINRegular,CenturyGothic;
        margin-bottom:0.5em;
        text-align: left;
        text-decoration: none;
        text-transform:uppercase;// 将小写转为大写
        /**
        *图标样式设定
        */
        .icon {
          width: 1em; height: 1em;
          vertical-align: -0.15em;
          fill: currentColor;
          overflow: hidden;
          margin-right:1em;
        }
      }
      .item:hover{
        color:#0088f5;
      }
    }
  }

  .router-link-active{
    color:#0088f5;
    background: #fff;
  }
</style>
