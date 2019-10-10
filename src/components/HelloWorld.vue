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
        <el-carousel :interval="5000" arrow="always" height="850px" indicator-position="outside">
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
        <img src="../../static/images/Helloword/lunboxia1.jpg" alt="">
        <img src="../../static/images/Helloword/lunboxia2.jpg" alt="">
      </div>
      <div class="btdCake">
        <router-link to="">
          生日蛋糕
          <img src="../../static/images/Helloword/btdcake.png" alt="">
        </router-link>
      </div>
      <div class="btdCakeType">
        <router-link to="">
          <img src="../../static/images/Helloword/btdcake1.jpg" alt="">
          <br>
          <br>
          <span>雪域牛乳芝士·特浓</span>
          <br>
          <br>
          <span>&yen;298</span>
        </router-link>
        <router-link to="">
          <img src="../../static/images/Helloword/btdcake1.jpg" alt="">
          <br>
          <br>
          <span>雪域牛乳芝士·特浓</span>
          <br>
          <br>
          <span>&yen;298</span>
        </router-link>
        <router-link to="">
          <img src="../../static/images/Helloword/btdcake1.jpg" alt="">
          <br>
          <br>
          <span>雪域牛乳芝士·特浓</span>
          <br>
          <br>
          <span>&yen;298</span>
        </router-link>
        <router-link to="">
          <img src="../../static/images/Helloword/btdcake1.jpg" alt="">
          <br>
          <br>
          <span>雪域牛乳芝士·特浓</span>
          <br>
          <br>
          <span>&yen;298</span>
        </router-link>
        <router-link to="">
          <img src="../../static/images/Helloword/btdcake1.jpg" alt="">
          <br>
          <br>
          <span>雪域牛乳芝士·特浓</span>
          <br>
          <br>
          <span>&yen;298</span>
        </router-link>
        <router-link to="">
          <img src="../../static/images/Helloword/btdcake1.jpg" alt="">
          <br>
          <br>
          <span>雪域牛乳芝士·特浓</span>
          <br>
          <br>
          <span>&yen;298</span>
        </router-link>
        <router-link to="">
          <img src="../../static/images/Helloword/btdcake1.jpg" alt="">
          <br>
          <br>
          <span>雪域牛乳芝士·特浓</span>
          <br>
          <br>
          <span>&yen;298</span>
        </router-link>
        <router-link to="">
          <img src="../../static/images/Helloword/btdcake1.jpg" alt="">
          <br>
          <br>
          <span>雪域牛乳芝士·特浓</span>
          <br>
          <br>
          <span>&yen;298</span>
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
        <router-link to="">
          <img src="../../static/images/Helloword/breakfast.jpg" alt="">
          <br>
          <br>
          <span>随心周周配</span>
          <br>
          <br>
          <span>&yen;232</span>
        </router-link>
        <router-link to="">
          <img src="../../static/images/Helloword/breakfast.jpg" alt="">
          <br>
          <br>
          <span>随心周周配</span>
          <br>
          <br>
          <span>&yen;232</span>
        </router-link>
        <router-link to="">
          <img src="../../static/images/Helloword/breakfast.jpg" alt="">
          <br>
          <br>
          <span>随心周周配</span>
          <br>
          <br>
          <span>&yen;232</span>
        </router-link>
      </div>
      <div class="dessertGift">
        <router-link to="">
          <img src="../../static/images/Helloword/dessertgift.jpg" alt="">
        </router-link>
      </div>
      <div class="gift">
        <router-link to="">
          甜点心礼
          <img src="../../static/images/Helloword/btdcake.png" alt="">
        </router-link>
      </div>
      <div class="giftType">
        <router-link to="">
          <img src="../../static/images/Helloword/dessertgift1.jpg" alt="">
          <br>
          <br>
          <span>喵叽叽云顶小花曲奇礼盒（原味）</span>
          <br>
          <br>
          <span>&yen;158</span>
        </router-link>
        <router-link to="">
          <img src="../../static/images/Helloword/dessertgift1.jpg" alt="">
          <br>
          <br>
          <span>喵叽叽云顶小花曲奇礼盒（原味）</span>
          <br>
          <br>
          <span>&yen;158</span>
        </router-link>
        <router-link to="">
          <img src="../../static/images/Helloword/dessertgift1.jpg" alt="">
          <br>
          <br>
          <span>喵叽叽云顶小花曲奇礼盒（原味）</span>
          <br>
          <br>
          <span>&yen;158</span>
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
        </div><div>
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
        "/lunboTwo",
        "/lunboThree",
        "/lunboFour",
        "/lunboFive"
      ],
      adds:['上海','北京','广州','南京','成都','深圳','杭州','苏州','天津','宁波','无锡','绍兴','嘉兴','重庆'],
     // products:[
      //   {
      //     id:'001',
      //     imgs:'../../static/images/Helloword/btdcake1.jpg',
      //     pname:'雪域牛乳芝士·特浓',
      //     price:298
      //   },
      //   {
      //     id:'002',
      //     imgs:'../../static/images/Helloword/btdcake2.jpg',
      //     pname:'桂圆琥珀核桃',
      //     price:218
      //   },
      //   {
      //     id:'003',
      //     imgs:'../../static/images/Helloword/btdcake3.jpg',
      //     pname:'雪域牛乳芝士',
      //     price:218
      //   },
      //   {
      //     id:'004',
      //     imgs:'../../static/images/Helloword/btdcake4.jpg',
      //     pname:'茶草京都',
      //     price:218
      //   },
      
    }
  },
  methods:{
    addNow:function(ad){
      this.add1=ad,
      this.centerDialogVisible=false
    }
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
  width: 100%;
  line-height: 35px;
  background-color: white;
  border-bottom: 1px solid #a38d6b;
  z-index: 1000;
  text-align: center;
  div{
    text-align: left;
    position: absolute;
    left: 20px;
    display: inline-block; 
    a{
      text-decoration: none;
      font-size: 14px;
      color: black;
      img{
        position: relative;
        top:3px;
        width:17px;
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
      width: 23px;
    }
  }
}
.el-dialog__footer{
  width: 200px;
  background-image: url(../../static/images/Helloword/city_bg.png);
  background-size: cover;
}
section{
  width: 750px;
  margin: 36px auto 50px;
  background-color: white;
  .secT{
  }
  .carousel{
    padding: 30px;
    .el-carousel__item h3 a{
      color: #475669;
      font-size: 18px;
      margin: 0;
    }
  }
  .carouselBottom{
    height: 500px;
    padding: 30px;
    img{
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
    padding: 15px 25px;
    a{
      display: inline-block;
      margin: 20px 5px;
      text-decoration: none;
      color: black;
    }
  }
  .breakfastImg,.dessertGift,.exchange{
    padding: 30px;
    img{
      width: 690px;
    }
  }
  .breakfastType,.giftType{
    padding: 15px 25px;
    a{
      display: inline-block;
      margin: 5px 5px;
      text-decoration: none;
      color: black;
      font-size: 14px;
      img{
        width: 200px;
      }
    }
  }
  .cooperation{
    ul{
      width: 310px;
      display: inline-block;
      list-style-type: none;
      background-color: #f4f4f4;
      font-size: 14px;
      text-align: center;
      margin: 30px;
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
    margin-top: 20px;
    ul{
      list-style-type: none;
      text-align: center;
      li{
        width: 230px;
        img{
          width: 50px;
          border-radius: 50px;
        }
      }
    }
    div{ 
      display: inline-block;
      margin-left: 15px;
      div{
        width: 200px;
        padding-top: 30px;
        font-size: 14px;
        background-image: url(../../static/images/Helloword/comment_bg.png);
        background-size: cover; 
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
          width: 200px;
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
  .hellodingtong{
    width: 100%; 
    margin: 0;
    padding: 0;
  }
  .helloFooter {
    width: 100%;
    min-width: 250px;
    height: 43px;
    text-align: center;
    list-style-type: none;
    position: fixed;
    bottom: 0;
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
        width: 20px;
      }
    }
  }
}
</style>
