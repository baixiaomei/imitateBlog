<template>
  <div id="project">
    <asideNav/>
    <div id='main'>
      <div class='rotate'>
        <div class='wrap'>
          <div class='circle-wrap'>
            <div class='circle center-XY circle1'></div>
            <div class="circle center-XY circle2" id='circle2'>
              <div class="small-circle-wrap small-circle-wrap1">
                  <div class="small-circle ">安全性</div>
              </div>
              <div class="small-circle-wrap small-circle-wrap2">
                  <div class="small-circle ">稳定性</div>
              </div>
              <div class="small-circle-wrap small-circle-wrap3">
                  <div class="small-circle no-active"></div>
              </div>
              <div class="small-circle-wrap small-circle-wrap4">
                  <div class="small-circle  no-active"></div>
              </div>
            </div>
            <div class="circle center-XY circle3" id='circle3'>
              <div class="small-circle-wrap small-circle-wrap1">
                  <div class="small-circle ">安全性</div>
              </div>
              <div class="small-circle-wrap small-circle-wrap2">
                  <div class="small-circle ">稳定性</div>
              </div>
              <div class="small-circle-wrap small-circle-wrap3">
                  <div class="small-circle no-active"></div>
              </div>
              <div class="small-circle-wrap small-circle-wrap4">
                  <div class="small-circle  no-active"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>code</div>
  </div>
</template>

<script>
import $ from 'jquery'
import asideNav from '../components/asideNav'
export default {
  name: 'project',
  data () {
    return {
      msg: '',
      rotateData: [
        {
          el: $('#circle2'),
          initRotates: [30, 140, 2300, 33],
          catIndex: 0
        }, {
          el: $('#circle3'),
          initRotates: [60, 20, 123]
        }
      ],
      rotate: 0,
      flag: true
    }
  },
  components: {
    asideNav
  },
  created () {
    console.log($('#circle2'))
    // setInterval(() => {
    //   if (this.flag) {
    //     this.rotate += 0.1
    //   }
    // })
    this.rotateChange()
  },
  methods: {
    rotateChange () {
      this.rotate %= 360
      this.setRotate(this.rotate, $('#circle2'))
      $('#circle2').children().each((index, child) => {
        this.setRotate(-$('#circle2').initRotates[index] - this.rotate, $(child).find('.small-circle'))
      })
    },
    setRotate (num, $el) {
      $el.css({
        transform: 'translate3d(-50%, -50%, 0)rotate(' + num + ')'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#project{
  height:100%;
  width:75em;// 根据父集元素大小设置宽度
  position:relative;
  overflow:hidden;
  margin:0 auto;
  display:block;
  #main{
    position: relative;
    margin: 0 auto;
    display: block;
    margin-left: 12.5em;
    width: 42.5em;
    .rotate{
      width:100%;
      display:block;
      margin-top:40px;
      .wrap{
        display:block;
        width:100%;
        margin:0 auto;
        .circle-wrap{
          width:557px;
          height:557px;
          position:relative;
          margin:0 auto;
        }
      }
    }
  }
}

.circle1{
  width:51.5%;
  height:51.5%;
  background:url('../../static/img/2.png');
  background-size: 100%;
  background-repeat: no-repeat;
  margin:0 auto;
}
.circle2{
  width:79%;
  height:79%;
  border:2px solid #a0a0a0;
  z-index:2;
}
.circle{
  border-radius:50%;
}
.center-XY{
  position:absolute;
  left:50%;
  top:50%;
  transform:translate3d(-50%, -50%, 0);
}

.small-circle-wrap{
  width:50%;
  height:50%;
  position:absolute;
  top:25%;
  left:25%;
}
.small-circle{
  width:79px;
  height:79px;
  line-height:79px;
  text-align: center;
  border-radius:50%;
  border:2px solid #a0a0a0;
  position:absolute;
  top:18%;
  left:128%;
  background-color:#fff;
  z-index:3;
  cursor:pointer;
}
.small-circle.active{
  width:93px;
  height:93px;
  line-height:93px;
  color:#fff;
  background:url('../../static/img/3.png');
  border:0;
  background-size:100%;
}
.small-circle.no-active {
    width: 42px;
    height: 38px;
    border: none;
    background: url(../../static/img/4.png) center center no-repeat;
    background-size: 100% 100%;
}

</style>
