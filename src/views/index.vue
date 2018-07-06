<template>
  <div id="main">
    <asideNav/>
    <!-- <canvas id="c_n1"></canvas> -->
    <!-- <canvas id="Mycanvas" width="1920" height="946"></canvas> -->
      <div class="main_content">
        <div class="index">
          <div class="carrousel">
            <div class="swiper-container" ref="swiper">
              <div class="swiper-wrapper">
                  <div class="swiper-slide"><img src="../../static/img/pic1.jpg" alt=""></div>
                  <div class="swiper-slide"><img src="../../static/img/pic2.jpg" alt=""></div>
                  <div class="swiper-slide"><img src="../../static/img/pic3.jpg" alt=""></div>
                  <div class="swiper-slide"><img src="../../static/img/pic4.jpg" alt=""></div>
                  <div class="swiper-slide"><img src="../../static/img/pic5.jpg" alt=""></div>
              </div>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination"></div>
              <!-- 如果需要导航按钮 -->
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
          </div>
        </div>

        <div class="announcement">
          <div class="title">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-clock"></use>
            </svg>
          </div>
          <div class="swiper-container2" ref="swiper2" v-if="$store.dispatch('switch_dialog')">
              <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="content">
                      <p>这世界有高高在上的规则，也有自由奔放的灵魂</p>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="content">
                      <p>大概吧， 键盘是我最后的坟墓</p>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="content">
                      <p>是你吗，会给我一份光明让我勇敢前行？</p>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="content">
                      <p>仰天大笑出门去，我辈岂是蓬蒿人</p>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="content">
                      <p>如此渴望，每一天的祈祷；能够迎来，生命中的觉醒</p>
                    </div>
                  </div>
              </div>
          </div>
        </div>

        <div class="articals">
          <div class="artical_list">
            <div>
              <div class="artical_list_item">
                <div class="item_content">
                  <div class="item_thumb">
                    <a href="#">
                      <img src="../../static/img/item1.jpg" alt="">
                    </a>
                  </div>
                  <div class="item_body">
                    <div class="item_title">
                      <a href="" title="真的爱你">真的爱你</a>
                    </div>
                    <!---webkit-box-orient:vertical; 规定框的子元素纵向排列-->
                    <p class="item_dec" style="-webkit-box-orient:vertical;">
                      每当我真找不到存在的意义;
                      <br/>
                      每当我迷失在黑夜里；
                    </p>
                    <div class="item_media">
                      <span class="date">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-clock1"></use>
                        </svg>
                        <span>2018/2/24 上午</span>
                      </span>
                      <span class="views">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-eye"></use>
                        </svg>
                        <span>278</span>
                      </span>
                      <span class="comments">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-zixundianji"></use>
                        </svg>
                        <span>3</span>
                      </span>
                      <span class="likes">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-like"></use>
                        </svg>
                        <span>6</span>
                      </span>
                      <span class="category">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-list"></use>
                        </svg>
                        <span>Think</span>
                      </span>
                      <span class="tags" style="display: none;"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="artical_list_item">
                <div class="item_content">
                  <div class="item_thumb">
                    <a href="#">
                      <img src="../../static/img/item1.jpg" alt="">
                    </a>
                  </div>
                  <div class="item_body">
                    <div class="item_title">
                      <a href="" title="真的爱你">真的爱你</a>
                    </div>
                    <!---webkit-box-orient:vertical; 规定框的子元素纵向排列-->
                    <p class="item_dec" style="-webkit-box-orient:vertical;">
                      每当我真找不到存在的意义;
                      <br/>
                      每当我迷失在黑夜里；
                    </p>
                    <div class="item_media">
                      <span class="date">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-clock1"></use>
                        </svg>
                        <span>2018/2/24 上午</span>
                      </span>
                      <span class="views">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-eye"></use>
                        </svg>
                        <span>278</span>
                      </span>
                      <span class="comments">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-zixundianji"></use>
                        </svg>
                        <span>3</span>
                      </span>
                      <span class="likes">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-like"></use>
                        </svg>
                        <span>6</span>
                      </span>
                      <span class="category">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-list"></use>
                        </svg>
                        <span>Think</span>
                      </span>
                      <span class="tags" style="display: none;"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="artical_list_item">
                <div class="item_content">
                  <div class="item_thumb">
                    <a href="#">
                      <img src="../../static/img/item1.jpg" alt="">
                    </a>
                  </div>
                  <div class="item_body">
                    <div class="item_title">
                      <a href="" title="真的爱你">真的爱你</a>
                    </div>
                    <!---webkit-box-orient:vertical; 规定框的子元素纵向排列-->
                    <p class="item_dec" style="-webkit-box-orient:vertical;">
                      每当我真找不到存在的意义;
                      <br/>
                      每当我迷失在黑夜里；
                    </p>
                    <div class="item_media">
                      <span class="date">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-clock1"></use>
                        </svg>
                        <span>2018/2/24 上午</span>
                      </span>
                      <span class="views">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-eye"></use>
                        </svg>
                        <span>278</span>
                      </span>
                      <span class="comments">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-zixundianji"></use>
                        </svg>
                        <span>3</span>
                      </span>
                      <span class="likes">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-like"></use>
                        </svg>
                        <span>6</span>
                      </span>
                      <span class="category">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-list"></use>
                        </svg>
                        <span>Think</span>
                      </span>
                      <span class="tags" style="display: none;"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="artical_list_item">
                <div class="item_content">
                  <div class="item_thumb">
                    <a href="#">
                      <img src="../../static/img/item1.jpg" alt="">
                    </a>
                  </div>
                  <div class="item_body">
                    <div class="item_title">
                      <a href="" title="真的爱你">真的爱你</a>
                    </div>
                    <!---webkit-box-orient:vertical; 规定框的子元素纵向排列-->
                    <p class="item_dec" style="-webkit-box-orient:vertical;">
                      每当我真找不到存在的意义;
                      <br/>
                      每当我迷失在黑夜里；
                    </p>
                    <div class="item_media">
                      <span class="date">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-clock1"></use>
                        </svg>
                        <span>2018/2/24 上午</span>
                      </span>
                      <span class="views">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-eye"></use>
                        </svg>
                        <span>278</span>
                      </span>
                      <span class="comments">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-zixundianji"></use>
                        </svg>
                        <span>3</span>
                      </span>
                      <span class="likes">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-like"></use>
                        </svg>
                        <span>6</span>
                      </span>
                      <span class="category">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-list"></use>
                        </svg>
                        <span>Think</span>
                      </span>
                      <span class="tags" style="display: none;"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="artical_list_item">
                <div class="item_content">
                  <div class="item_thumb">
                    <a href="#">
                      <img src="../../static/img/item1.jpg" alt="">
                    </a>
                  </div>
                  <div class="item_body">
                    <div class="item_title">
                      <a href="" title="真的爱你">真的爱你</a>
                    </div>
                    <!---webkit-box-orient:vertical; 规定框的子元素纵向排列-->
                    <p class="item_dec" style="-webkit-box-orient:vertical;">
                      每当我真找不到存在的意义;
                      <br/>
                      每当我迷失在黑夜里；
                    </p>
                    <div class="item_media">
                      <span class="date">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-clock1"></use>
                        </svg>
                        <span>2018/2/24 上午</span>
                      </span>
                      <span class="views">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-eye"></use>
                        </svg>
                        <span>278</span>
                      </span>
                      <span class="comments">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-zixundianji"></use>
                        </svg>
                        <span>3</span>
                      </span>
                      <span class="likes">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-like"></use>
                        </svg>
                        <span>6</span>
                      </span>
                      <span class="category">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-list"></use>
                        </svg>
                        <span>Think</span>
                      </span>
                      <span class="tags" style="display: none;"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <asideRight />
  </div>
</template>

<script>
// 引入icon图标（从阿里图标库里加入购物车=> 下载代码 => 将iconfont.js放到static中，在这里引入）
import '../../static/iconfont2'
import '../../build/canvas_next'
// import '../../build/canvas_about'

import asideNav from '../components/asideNav'
import asideRight from '../components/asideRight'

import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'index',
  data () {
    return {
      msg: ''
    }
  },
  components: {
    asideNav,
    asideRight
  },
  methods: {
    swiperInit () {
      let _that = this
      _that.swiper = new Swiper(this.$refs.swiper, {
        speed: 2000,
        slidesPerView: 'auto',
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
          waitForTransition: false
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      })
    },
    swiperInit1 () {
      let _that = this
      _that.swiper = new Swiper(this.$refs.swiper2, {
        speed: 1500,
        direction: 'vertical',
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
          waitForTransition: false
        }
      })
    }
  },
  mounted () {
    this.swiperInit()
    this.swiperInit1()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

.icon {
   width: 1em; height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}
#main{
  width:75em;// 根据父集元素大小设置宽度
  position:relative;
  overflow:hidden;
  margin:0 auto;
  display:block;
}
.main_content{
  float:left;
  margin-left:12.5em;
  width:42.5em;
  position:relative;
  overflow:hidden;
  transition: width .35s;
  .index{
    .carrousel{
      height:15em;
      margin-bottom:1em;
      position:relative;
      overflow:hidden;
      background-color:hsla(0,0%,100%,0.6);
      .swiper-container{
        width:100%;
        height:100%;
        img{
          width:100%;
          transition: transform 1s,-webkit-transform 1s;
        }
        img:hover{
          transform: rotate(2deg) scale(1.1);
          -webkit-transform:rotate(2deg) scale(1.1);
        }
      }
    }

    .announcement{
      height:2.8em;
      line-height: 2.8em;
      font-size:0.9em;
      margin-bottom:1em;
      overflow:hidden;
      // position:relative;
      background-color:hsla(0,0%,100%,0.6);
      .title{
        width:10%;
        float:left;
        text-align: center;
      }
      .swiper-container2{
        float:left;
        width:90%;
        height:100%;
        .swiper-slide{
          height:100%;
          width:100%;
          .content{
            height:100%;
            width:100%;
            text-align: left;
            position:relative;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            p{
              width:90%;
              margin:0;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
      }
    }

    .articals{
      .artical_list{
        min-height:1em;
        margin-bottom:1em;
        overflow:hidden;
        div{
          .artical_list_item{
            margin-bottom:1em;
            background-color:hsla(0,0%,100%,0.6);
            .item_content{
              display:block;
              overflow:hidden;
              height:9.5em;
              padding:0.5em;
              .item_thumb{
                float:left;
                width:12em;
                height:8.5em;
                overflow:hidden;
                a{
                  img{
                    min-width: 100%;
                    width: calc(100% + .5em);
                    max-width: calc(100% + .5em);
                    height: auto;
                    min-height: 8.5em;
                    border-color: transparent;
                    background-color: silver;
                    -webkit-opacity: 1;
                    -khtml-opacity: 1;
                    -moz-opacity: 1;
                    -ms-opacity: 1;
                    -o-opacity: 1;
                    opacity: 1;
                    -webkit-transform: translateX(0);
                    -khtml-transform: translateX(0);
                    transform: translateX(0);
                  }
                }
              }
              .item_body{
                width:28.5em;
                height:8.5em;
                float:right;
                text-align: left;
                .item_title{
                  font-size: 1em;
                  font-weight: 700;
                  color: #333;
                  margin-top: .2em;
                  margin-bottom: .5em;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  a{
                    margin-left:0;
                  }
                }
                .item_dec{
                  font-size: .9em;
                  margin: 0;
                  margin-bottom: .3em;
                  height: 5em;
                  line-height: 1.8em;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  overflow: hidden;
                  -webkit-line-clamp: 3;
                  -webkit-box-orient: vertical;
                }
                .item_media{
                  font-size:0.9em;
                  height:2em;
                  line-height: 2em;
                  display:flex;
                  justify-content: flex-start;
                  align-items: baseline;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  word-wrap: normal;
                  .date,.views,.comments,.likes{
                    margin-right:1em;
                    i{
                      margin-right:0.4em;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

*, :hover{
  transition: background-color .25s linear,color .05s linear,margin .25s linear,opacity .25s linear,filter .25s linear,visibility .25s linear,transform .25s linear,-webkit-filter .25s linear,-webkit-transform .25s linear;
}
</style>
