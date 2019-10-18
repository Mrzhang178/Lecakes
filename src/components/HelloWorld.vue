<template>
  <div class="hello">
    <nav>
      <div>
        <a>
          <img src="../../static/images/Helloword/map.png" alt="">
          <el-button type="text" @click="centerDialogVisible = true">
            {{adds[add1]}}
          </el-button>
        </a>
        <a href="" class="searchMap">配送查询</a>
      </div>
      <h4>诺心 LE CAKE</h4>
      <router-link to="/news" class="news">
        <img src="../../static/images/Helloword/news.png" alt="">
      </router-link>
    </nav>
    <el-dialog
      title="配送至"
      :visible.sync="centerDialogVisible"
      width="25%">
      <span>当前定位城市：临沂市</span>
      <span slot="footer" class="el-dialog__footer">
        更多城市：
        <br>
        <span v-for="(add,ad) in adds" @click='addNow(ad)'>{{add}}<br></span>
        </span>
    </el-dialog>
    <section>
      <div class="member">
        <router-link to="/member">
          <img src="../../static/images/Helloword/hellodingtong.jpg" alt="">
        </router-link>
      </div>
      <div class="carousel">
        <el-carousel indicator-position="outside" arrow="always" :interval="5000">
          <el-carousel-item v-for="(i,s) in imgs" :key="s">
            <h3>
              <router-link :to="srcs[s]">
                <img :src="i" alt="">
              </router-link>
            </h3>
          </el-carousel-item>
        </el-carousel>        
      </div>
      <div class="carouselBottom">
        <router-link to="/lingquanxiadan">
          <img src="../../static/images/Helloword/lunboxia1.jpg" alt="">
        </router-link>
        <router-link to="/member">
          <img src="../../static/images/Helloword/lunboxia2.jpg" alt="">
        </router-link>
      </div>
      <div class="btdCake">
        <router-link to="/birthdayCake">
          生日蛋糕
          <img src="../../static/images/Helloword/btdcake.png" alt="">
        </router-link>
      </div>
      <div class="btdCakeType">
        <router-link to="/prodetails" v-for="(pro,p) in products" :key="p">
          <img :src="pro.imgs" alt="">
          <br>
          <br>
          <span>{{pro.pname}}</span>
          <br>
          <span class="des">{{pro.desc}}</span>
          <br>
          <br>
          <span>&yen;{{pro.price}}</span>
        </router-link>
      </div>
      <div class="breakfastImg">
        <router-link to="">
          <img src="../../static/images/Helloword/btdcake9.jpg" alt="">
        </router-link>
      </div>
      <div class="breakfast">
        <router-link to="">
          元气早餐
          <img src="../../static/images/Helloword/btdcake.png" alt="">
        </router-link>
      </div>
      <div class="breakfastType">
        <router-link to="" v-for="(bft,b) in bfts" :key="b">
          <img :src="bft.imgs" alt="">
          <br>
          <br>
          <span>{{bft.pname}}</span>
          <br>
          <br>
          <span>&yen;{{bft.price}}</span>
        </router-link>
      </div>
      <div class="dessertGift">
        <router-link to="">
          <img src="../../static/images/Helloword/dessertgift.jpg" alt="">
        </router-link>
      </div>
      <div class="gift">
        <router-link to="/dessertGift">
          甜点心礼
          <img src="../../static/images/Helloword/btdcake.png" alt="">
        </router-link>
      </div>
      <div class="giftType">
        <router-link to="" v-for="(gif,t) in gifts" :key="t">
          <img :src="gif.imgs" alt="">
          <div>          
            <span>{{gif.pname}}</span>
            <br>
            <span class="spans">{{gif.desc}}</span>
          </div>
          <br>
          <span>&yen;{{gif.price}}</span>
        </router-link>
      </div>
      <div class="exchange">
        <router-link to="">
          <img src="../../static/images/Helloword/exchange.jpg" alt="">
        </router-link>
      </div>
      <div class="cooperation">
        <router-link to="">
          <ul>
            <li><img src="../../static/images/Helloword/binding.png" alt=""></li>
            <li><span>卡券绑定</span></li>
          </ul>
        </router-link>
        <router-link to="">
          <ul>
            <li><img src="../../static/images/Helloword/Cooperation.png" alt=""></li>
            <li><span>合作专区</span></li>          
          </ul>
        </router-link>
      </div>
      <p class="userComment">用户评论</p>
      <div class="comment">
        <div>
          <ul>
            <li>
              <img src="../../static/images/Helloword/user1.png" alt="">
            </li>
            <li>135****2212</li>
          </ul>
          <div>
            <router-link to="">
               <p>这款品牌巧克力松露蛋糕食材纯正、口味不甜不腻、物有所值。到货速度快，卖家服务态度好，谢谢！</p>
              <p class="days">2019-09-29</p>
              <img src="../../static/images/Helloword/user-cake.png" alt="">
            </router-link>
          </div>
        </div>
        <div>
          <ul>
            <li>
              <img src="../../static/images/Helloword/user2.png" alt="">
            </li>
            <li>189****0124</li>
          </ul>
          <div>
            <router-link to="">
              <p>这款品牌巧克力松露蛋糕食材纯正、口味不甜不腻、物有所值。到货速度快，卖家服务态度好，谢谢！</p>
              <p class="days">2019-09-29</p>
              <img src="../../static/images/Helloword/user-cake.png" alt="">
            </router-link>
          </div>
        </div>
        <div>
          <ul>
            <li>
              <img src="../../static/images/Helloword/user2.png" alt="">
            </li>
            <li>138****5958</li>
          </ul>
          <div>
            <router-link to="">
              <p>这款品牌巧克力松露蛋糕食材纯正、口味不甜不腻、物有所值。到货速度快，卖家服务态度好，谢谢！</p>
              <p class="days">2019-09-29</p>
              <img src="../../static/images/Helloword/user-cake.png" alt="">
            </router-link>
          </div>
        </div>
      </div>
      <div class="version">
        <router-link to="">
          <ul>
            <li>
              <img src="../../static/images/Helloword/phone.png" alt="">
            </li>
            <li>触屏版</li>
          </ul>
        </router-link>
        <router-link to="">
          <ul>
            <li><img src="../../static/images/Helloword/computer.png" alt=""></li>
            <li>电脑版</li>
          </ul>
        </router-link>
      </div>
      <p class="company">
        copyright © 2010-2019 诺心lecake.com版权所有
        <br>
        诺心食品（上海）有限公司 沪ICP备10211730号
      </p>
    </section>
    <footer>
      <ul class="helloFooter">
        <router-link to="/" tag="li">
          <img src="../../static/images/Helloword/helloword.png" alt="">
          <br>
           首页 
        </router-link>
        <router-link to="/dessertGift" tag="li">
          <img src="../../static/images/Helloword/gife1.png" alt="">
          <br>
          甜点心礼
        </router-link>
        <router-link to="/birthdayCake" tag="li">
          <img src="../../static/images/Helloword/cake1.png" alt="">
          <br>
          生日蛋糕
        </router-link>
        <router-link to="/shoppingCart" tag="li">
          <img src="../../static/images/Helloword/car1.png" alt="">
          <br>
          购物车
        </router-link>
        <router-link to="/home" tag="li">
          <img src="../../static/images/Helloword/home1.png" alt="">
          <br>
          我的诺心
        </router-link>
      </ul>
    </footer>
    <router-view/>
  </div>

</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      add1:"0",
      centerDialogVisible: false,
      imgs:[
        "../../static/images/Helloword/lunbo1.jpg",
        "../../static/images/Helloword/lunbo2.jpg",
        "../../static/images/Helloword/lunbo3.jpg",
        "../../static/images/Helloword/lunbo4.jpg",
        "../../static/images/Helloword/lunbo5.jpg"
      ],
      srcs:[
        "/lunboOne",
        "/member",
        "/lunboOne",
        "/lunboOne",
        "/lunboOne"
      ],
      adds:['上海','北京','广州','南京','成都','深圳','杭州','苏州','天津','宁波','无锡','绍兴','嘉兴','重庆'],
      products:[
        {
          id:'001',
          imgs:'../../static/images/Helloword/btdcake1.jpg',
          pname:'雪域牛乳芝士·特浓',
          desc:"甄选澳洲a2®全脂鲜牛奶 浓醇升级",
          price:298
        },
        {
          id:'002',
          imgs:'../../static/images/Helloword/btdcake2.jpg',
          pname:'桂圆琥珀核桃',
          desc:"滋养新食尚 予你不藏私的关怀",
          price:218
        },
        {
          id:'003',
          imgs:'../../static/images/Helloword/btdcake3.jpg',
          pname:'雪域牛乳芝士',
          desc:"滋养新食尚 予你不藏私的关怀",
          price:218
        },
        {
          id:'004',
          imgs:'../../static/images/Helloword/btdcake4.jpg',
          pname:'茶草京都',
          desc:"抹茶控京都寻味 草色茶香自悠然",
          price:218
        },
        {
          id:'005',
          imgs:'../../static/images/Helloword/btdcake4.jpg',
          pname:'草莓拿破仑',
          desc:"经典之作 热销多年",
          price:218
        },
        {
          id:'006',
          imgs:'../../static/images/Helloword/btdcake4.jpg',
          pname:'环游世界',
          desc:"迷上缤纷果香的滋味",
          price:218
        },
      ],
      bfts:[
        {
          id:'010',
          imgs:'../../static/images/Helloword/breakfast.jpg',
          pname:'随心周周配',
          price:223
        },
        {
          id:'020',
          imgs:'../../static/images/Helloword/breakfast.jpg',
          pname:'随心周周配',
          price:223
        },
        {
          id:'030',
          imgs:'../../static/images/Helloword/breakfast.jpg',
          pname:'随心周周配',
          price:223
        },
      ],
      gifts:[
        {
          id:'010',
          imgs:'../../static/images/Helloword/dessertgift1.jpg',
          pname:'喵叽叽云顶小花曲奇礼盒（原味）',
          desc:"卖到疯狂的秒杀款",
          price:158
        },
        {
          id:'020',
          imgs:'../../static/images/Helloword/dessertgift1.jpg',
          pname:'喵叽叽云顶小花曲奇礼盒（巧克力味）',
          desc:"",
          price:158
        },
        {
          id:'030',
          imgs:'../../static/images/Helloword/dessertgift1.jpg',
          pname:'喵叽叽云顶小花曲奇礼盒（原味+巧克力味）',
          desc:"征服朋友圈的办公室零食",
          price:158
        },
      ]
    }
  },
  methods:{
    addNow:function(ad){
      this.add1=ad,
      this.centerDialogVisible=false
     
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
*{
  padding: 0;
  margin: 0;
}
.hello{
  background-color: #f4f4f4;
}
nav{
  height: 35px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  line-height: 35px;
  background-color: white;
  border-bottom: 1px solid #a38d6b;
  z-index: 1000;
  text-align: center;
  div{
    text-align: left;
    position: absolute;
    left: 10px;
    display: inline-block; 
    a{
      text-decoration: none;
      font-size: 14px;
      color: black;
      img{
        position: relative;
        top:3px;
        width:13px;
      }
    }
    .searchMap{
      color: #9c9c9c;
    }
  }
  h4{
    display: inline-block;
    color:#e83a0e;
  }
  .news{
    position: absolute;
    right: 20px;
    img{
      width: 17px;
    }
  }
}
.el-dialog__footer{
  width: 200px;
  background-image: url(../../static/images/Helloword/city_bg.png);
  background-size: cover;
}
section{
  width: 100%;
  margin: auto ;
  background-color: white;
  .member{
    margin-top: 38px;
    img{
      width: 100%;
    }
  }
  .carousel{
    .el-carousel{
    }
    img{
      width: 100%;
    }
  }
  .carouselBottom{
    padding: 15px;
    img{
      width: 45%;
      margin: 0 5px;
    }
  }
  .btdCake,.breakfast,.gift{
    text-align: center;
    a{
      color: black;
      text-decoration: none;
      font-size: 20px;
      img{
        position: relative;
        top: 3px;
        width: 20px;  
      }
    }
  }
  .btdCakeType{
    width: 100%;
    text-align:center;
    a{
      width: 40%;
      display: inline-block;
      margin: 20px 5px;
      text-decoration: none;
      color: black;
      .des{
        font-size: 14px;
        color: #9c9c9c;
      }
      img{
        width: 100%;
      }
    }
  }
  .breakfastImg,.dessertGift,.exchange{
    img{
      width: 100%;
    }
  }
  .breakfastType,.giftType{
    padding: 15px 25px;
    a{
      width: 45%;
      display: inline-block;
      margin: 5px 5px;
      text-decoration: none;
      color: black;
      font-size: 14px;
      img{
        width: 100%;
      }
      div{
        height: 80px;
      }
      span{
        display: inline-block;
        width: 150px;
      }
      .spans{
        color: #9c9c9c;
      }
    }
  }
  .cooperation{
    text-align: center;
    ul{
      width: 35%;
      display: inline-block;
      list-style-type: none;
      background-color: #f4f4f4;
      font-size: 14px;
      text-align: center;
      color: black;
      img{
        width: 35px;
        height: 30px;
      }
    }
    ul:last-child img{
      width: 28px;
    }
  }
  .userComment{
    text-align: center;
    font-size: 21px;
  }
  .comment{
    text-align: center;
    margin-top: 20px;
    div{ 
      width: 30%;
      display: inline-block;
      ul{
        list-style-type: none;
        text-align: center;
        li{
          width: 20%;
          padding:0 10px;
          img{
            margin: 0 10px;
            width: 50px;
            border-radius: 50px;
          }
        }
      }
      div{
        width: 100%;
        padding-top: 30px;
        font-size: 12px;
        background-image: url(../../static/images/Helloword/comment_bg.png);
        background-size: contain; 
        background-repeat: no-repeat;
      }
      a{
        text-decoration: none;
        color: #3e3e3e;
        p:first-child{
          padding: 10px;
          height: 76px;
        }
        .days{
          text-align: right;
          padding-bottom: 30px;
        }
        img{
          width: 100%;
        }
      }
    }
  }
  .version{
    margin: 20px 0;
    text-align: center;
    ul{
      width: 50px;
      list-style-type: none;
      display: inline-block;
      color: #3e3e3e;
      font-size: 13px;
      img{
        height: 20px;
      }
    }
  }
  .company{
    text-align: center;
    font-size: 13px;
    color: #3e3e3e;
  }
}
footer{
  .helloFooter {
    width: 100%;
    height: 43px;
    text-align: center;
    list-style-type: none;
    position: fixed;
    bottom: 0;
    left: 0;
    column-count: 5;
    z-index: 1000;
    background-color: white;
    border-top: 1px solid #d1c6af;
    padding-top: 7px;
    li {
      color: #ac8e6a;
      text-decoration: none;
      font-size: 12px;
      text-align:center;
      img{
        height: 20px;
      }
    }
  }
}
</style>
