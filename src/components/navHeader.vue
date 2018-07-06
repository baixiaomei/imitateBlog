<template>
  <div id="navHeader">
    <div class="header_content">
      <div class="header_inner">
        <img class="blog" src="https://cdn.surmon.me/images/logo.svg" alt="">
        <span class="motto">Talk is cheap Show me the code</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navHeader',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#navHeader {
  width:100%;
  height:60px;
}
/*
*HSLA(H,S,L,A)
*H(色调  0为红色，120为绿色，240为蓝色   0-360)
*S(饱和度 0.0% - 100.0%)
*L(亮度 0.0% - 100.0%)
*A(透明度 0-1)
*/
.header_content{
  width:100%;
  height:60px;
  position:fixed;
  top:0px;
  left:0px;
  // background-color: rgba(255,255,255,0.8);
  background-color:hsla(0,0%,100%,0.6);
  display:flex;
  z-index:999;
@media screen and (min-width: 1024px) {
    .header_inner{
      width:1000px;
      height:60px;
      margin:0 auto;
      display:flex;
      overflow:hidden;
      img.blog{
        width:10em;
        vertical-align: middle;
      }
      .motto{
        color:#37A1F5;
        line-height: 60px;
        text-align: left;
        margin-left:100px;
      }
    }
  }
}
  /**ipad**/
@media only screen and (min-width:768px)and(max-width:1024px){
  .header_inner{
      width:95%;
      height:60px;
      margin:0 auto;
      display:flex;
      overflow:hidden;
      padding-left:5%;
      img.blog{
        width:6em;
        vertical-align: middle;
      }
      .motto{
        color:#37A1F5;
        line-height: 60px;
        text-align: left;
        margin-left:50px;
        font-size:14px;
      }
    }
}
/**iphone**/
 @media only screen and (min-width:320px)and (max-width:768px){
   .header_inner{
      width:95%;
      height:60px;
      margin:0 auto;
      display:flex;
      overflow:hidden;
      padding-left:5%;
      img.blog{
        width:6em;
        vertical-align: middle;
      }
      .motto{
        color:#37A1F5;
        line-height: 60px;
        text-align: left;
        margin-left:50px;
        font-size:14px;
      }
    }
 }
</style>
