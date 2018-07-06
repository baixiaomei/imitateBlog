<template>
  <div id="main">
    <asideNav/>
    <!--用vuex来控制这个的显示-->
    <!-- <div class="box" v-if='$store.state.dialog.show'> -->
    <div class="box" v-if="$store.dispatch('switch_dialog')">
      <div  class="btn" style>按钮</div>
    </div>
    <div ref="city" id="city" class="com" style="display:none;">模拟城市弹窗层</div>
    <div ref="calendar"  id="calendar" class="com" style="display:none;">模拟日历弹窗层</div>
    <div ref="description" id="description" class="com" style="display:none;">模拟说明弹窗层</div>

    <div v-for="(item, index) in list" :key="index">{{item}}</div>
    <div @click="node">点我</div>

    <div class='gowuche' v-if='this.now_products.products'>
      <div class='box1'>
        <div class='img'>
          <img :src='$store.state.dialog.imgUrl' alt="">
          <p style="color:red;">{{$store.state.moduleB.data}}</p>
          <p>{{this.data}}</p>
        </div>
        <div class='dec'>模拟城市弹窗层模拟城市弹窗层模拟城市弹窗层模拟城市弹窗层</div>
      </div>
      <div class='operate'>
        <div @click="$store.dispatch('decrease')"> - </div>
        <div> {{this.now_num}}</div>
        <div @click="$store.dispatch('increase')"> + </div>
      </div>
      <div class='delete' @click="$store.commit('delete')">X</div>

    </div>

    <div class='goodList' >
      <ul class='good'>
        <li v-for='(item, index) in goodList' :key='index' @click='goDetail(item.name)'>
          <dl>
            <dt><img :src="item.img"></dt>
            <dd>{{item.name}}</dd>
          </dl>
        </li>
      </ul>
    </div>

    <div class='circlebox'>
      <div class='circle1' ref='circle1'>
        <div class='info1'>信息</div>
        <div class='info1'>网路</div>
        <div class='info1'></div>
      </div>
      <div class='circle2' ref='circle2'>
        <div class='info2'>科技</div>
        <div class='info2'>物流</div>
      </div>
    </div>

    <div class='box' @click='change'>
      <div>{{obj.a}}</div>
    </div>

    <div class='box' @click='change1'>
      <div>{{obj.a}}</div>
    </div>

    <div class='switch'>
      <yd-switch v-model="switch1" id='switch1'></yd-switch>
    </div>

  </div>
</template>

<script>
import asideNav from '../components/asideNav'

// import store from '../store/index'
// import $ from 'jquery'
import { mapGetters, mapMutations } from 'vuex'
import { flatArray, isRealName } from '../utils/common.js'
export default {
  name: 'codename',
  data () {
    return {
      rotate: 0,
      msg: 'baixoaeo',
      str: 'roading',
      list: ['a', 'b', 'c'],
      arr: [
        {
          'subject': '数学', 'score': '80'
        }, {
          'subject': '语文', 'score': '89'
        }, {
          'subject': '数学', 'score': '94'
        }, {
          'subject': '语文', 'score': '88'
        }, {
          'subject': '数学', 'score': '100'
        }
      ],
      goodList: [
        {
          'name': '清风（APP）卷纸 原木纯品 3层270段卫生纸*27卷（整箱销售）',
          'img': '//img20.360buyimg.com/mobilecms/s140x140_jfs/t18268/295/2405272049/289676/f72562d5/5af539f0Nf686d6cc.jpg!q90.webp'
        },
        {
          'name': '奥克斯（AUX）3匹 冷暖 定速 空调柜机(KFR-72LW/NSP1+3)',
          'img': '//img12.360buyimg.com/mobilecms/s140x140_jfs/t5920/80/2584911680/54772/de99b367/5943315fN28a9f965.jpg!q90.webp'
        },
        {
          'name': '奥克斯（AUX）3匹 冷暖 定速 空调柜机(KFR-72LW/NSP1+3)',
          'img': '//img12.360buyimg.com/mobilecms/s140x140_jfs/t5920/80/2584911680/54772/de99b367/5943315fN28a9f965.jpg!q90.webp'
        },
        {
          'name': '奥克斯（AUX）3匹 冷暖 定速 空调柜机(KFR-72LW/NSP1+3)',
          'img': '//img12.360buyimg.com/mobilecms/s140x140_jfs/t5920/80/2584911680/54772/de99b367/5943315fN28a9f965.jpg!q90.webp'
        },
        {
          'name': '奥克斯（AUX）3匹 冷暖 定速 空调柜机(KFR-72LW/NSP1+3)',
          'img': '//img12.360buyimg.com/mobilecms/s140x140_jfs/t5920/80/2584911680/54772/de99b367/5943315fN28a9f965.jpg!q90.webp'
        },
        {
          'name': '奥克斯（AUX）3匹 冷暖 定速 空调柜机(KFR-72LW/NSP1+3)',
          'img': '//img12.360buyimg.com/mobilecms/s140x140_jfs/t5920/80/2584911680/54772/de99b367/5943315fN28a9f965.jpg!q90.webp'
        },
        {
          'name': '奥克斯（AUX）3匹 冷暖 定速 空调柜机(KFR-72LW/NSP1+3)',
          'img': '//img12.360buyimg.com/mobilecms/s140x140_jfs/t5920/80/2584911680/54772/de99b367/5943315fN28a9f965.jpg!q90.webp'
        }
      ],
      arr1: [42, [22, 33], [44, 55], 66],
      arr2: [42, [22, 33, [11, 43]], [44, 55], 66],
      obj: {
        a: 1,
        b: 0
      },
      switch1: true
    }
  },
  computed: {
    ...mapGetters([
      'now_num',
      'not_show',
      'now_products',
      'ListName'
    ]),
    data () {
      // 获取moduleB的data的值
      return this.$store.state.moduleB.data
    }
  },
  created () {
    // 可以用这种方法进行数组截取
    this.goodList.length = 3
    window.document.title = '代码页面'
    // 数组扁平化处理(只适用于二维数组)
    this.arr1 = [].concat(...this.arr1)
    console.log(this.arr2.some(item => Array.isArray(item)))
  },
  mounted () {
    console.log(flatArray(this.arr2))
    console.log(isRealName('白晓梅'))
  },
  methods: {
    change () {
      this.obj.a = 'abc'
      var a = [2, 3, 4]
      console.log(a)
      var b = Array(3)
      console.log(b)
      var d = Array.of(1, 2, 3)
      console.log(d)
      var e = Array.of(3)
      console.log(e + 'e')
      var f = Array.of() // 不报错； Array()会报错
      console.log(f)
      var obj = {0: 'a', 1: 'b', 2: 'c', length: 3} // 必须写length
      var arr4 = Array.from(obj)
      console.log(arr4 + 'arr4')
      var arr5 = Array.from('hello')
      console.log(arr5)
      var arr6 = Array.from(new Set(['a', 'b', 'a'])) // 可以去重
      console.log(arr6)
    },
    change1 () {
      var a = [1, 2, 3]
      a.splice(5, 1, 4) // [1, 2, 3, 4]
      a.splice(0, 2, 5) // [5, 3, 4]
      a.splice(-1, 1, 9) // [5, 3, 9]
      a.splice(-1, 0, 3, 4, 5, 6, 7)
      console.log(a) // [5, 3, 3, 4, 5, 6, 7, 9]
      a.splice(0, 3, '添加', '添加') // ["添加", "添加", 4, 5, 6, 7, 9]
      console.log(a)
      // 不删除只添加
      var b = [1, 2, 3, 4, 5]
      b.splice(0, 0, '添加1', '添加2')
      console.log(b)
      b.splice(-1, 0, '添加1', '添加2')
      console.log(b)
    },
    goDetail (obj) {
      this.setListValue(obj)
      this.$router.push({ name: 'detail', query: {name: this.ListName} })
    },
    ...mapMutations([
      'setListValue'
    ]),
    node () {
      // 通过Vue.set 来改变数据 this.$set(a，b, c)
      /*
      * { a }   要更改的数据
      * { b }   数据的第几项
      * { c }   更改后的数据
      */
      this.$set(this.list, 0, 'x')
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
  margin:0 auto;
  display:block;
  margin-left:12.5em;
  width:42.5em;
}
.box{
  /* 将border margin content都算在100%内 */
  box-sizing: border-box;
  width:42.5em;
  margin-left:12.5em;
  border:2px solid #eee;
  text-align: center;
  line-height: 40px;
  height:40px;
}
button{
  background:#f90;
  border:#000;
}
// 弹层
.com{
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-color:#888589;
}
.btn{
  width:100%;
  height:40px;
  line-height: 40px;
  border:1px solid #ddd;
  text-align: center;
}
.gowuche{
  margin-top:100px;
  margin-left:12.5em;
  width:42.5em;
  position:relative;
  .box1{
    width:100%;
    display:flex;
    .img{
      img{
        display:block;
        width:100px;
        height:100px;
      }
    }
    .dec{
      padding-left:20px;
    }
  }
  .operate{
    display:flex;
    width:120px;
    border:1px solid #ddd;
    box-sizing: border-box;
    margin-left:120px;
    position:relative;
    div{
      width:40px;
      height:30px;
      line-height:30px;
      text-align: center;
      border-right:1px solid #000;
    }
    div:last-child{
      border-right:0;
    }
  }

  .delete{
    width:50px;
    height:50px;
    text-align: center;
    line-height:50px;
    position:absolute;
    top:88%;
    right:0px;
  }
}

.goodList{
  margin-top:100px;
  margin-left:12.5em;
  width:42.5em;
  ul.good{
      display:block;
      width:100%;
      overflow:hidden;
      li{
        width:100%;
        float:left;
        display:flex;
        flex-direction: column;
        border-top:1px solid #000;
        dl{
          img{
            display:block;
          }
        }
        dt{
          font-size:14px;
          line-height:20px;
          text-align: left;
        }
      }
    }

}

.circlebox{
      width:100%;
      display:block;
      margin-top:150px;
      height:400px;
      position:relative;
      .circle1{
        width:200px;
        height:200px;
        position:absolute;
        top:65%;
        left:50%;
        z-index:2;
        border-radius:50%;
        border:2px solid #a0a0a0;
        animation: circle 10s infinite linear;
        -webkit-animation: circle 10s infinite linear;
        .info1:first-child{
          border-radius:50%;
          width:50px;
          line-height: 50px;
          text-align: center;
          height:50px;
          position:absolute;
          top:100%;
          left:38%;
          background:url('../../static/img/3.png') no-repeat;
          background-size: 100%;
          border:0;
          animation: info1 14s infinite linear;
          -webkit-animation: info1 14s infinite linear;
          z-index:3;
        }
        .info2:first-child{
          border-radius:50%;
          border:2px solid #a0a0a0;
          width:50px;
          line-height: 50px;
          text-align: center;
          height:50px;
          position:absolute;
          top:100%;
          left:38%;
          animation: info1 14s infinite linear;
          -webkit-animation: info1 14s infinite linear;
          z-index:3;
        }
      }
      @-webkit-keyframes info1 {
        0% { transform: translate3d(-50%, -50%, 0px) rotate(-40deg) }
        50%   { transform: translate3d(-50%, -50%, 0px) rotate(-220deg)}
        100% { transform: translate3d(-50%, -50%, 0px) rotate(-360deg) }
      }
      @keyframes info1 {
        0% { transform: translate3d(-50%, -50%, 0px) rotate(-20deg) }
        50%   { transform: translate3d(-50%, -50%, 0px) rotate(-200deg)}
        100% { transform: translate3d(-50%, -50%, 0px) rotate(-360deg) }
      }
      @-webkit-keyframes circle {
        0% { transform: translate3d(-50%, -50%, 0px) rotate(0deg) }
        50%   { transform: translate3d(-50%, -50%, 0px) rotate(-180deg)}
        100% { transform: translate3d(-50%, -50%, 0px) rotate(-360deg) }
      }
      @keyframes circle {
        0% { transform: translate3d(-50%, -50%, 0px) rotate(0deg) }
        50%   { transform: translate3d(-50%, -50%, 0px) rotate(-180deg)}
        100% { transform: translate3d(-50%, -50%, 0px) rotate(-360deg) }
      }
      .circle2{
        width:340px;
        height:340px;
        position:absolute;
        top:65%;
        left:50%;
        margin:0 auto;
        border-radius:50%;
        border:2px solid #a0a0a0;
        animation: circle 14s infinite linear;
        -webkit-animation: circle 14s infinite linear;
      }
    }

    .switch{
      width:100%;
      height:50px;
      margin-bottom:50px;
      #switch1{
        display:block;
        margin:0 auto;
      }
    }
</style>
