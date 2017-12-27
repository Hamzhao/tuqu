<template>
  <div class="container">
    <header @click="closeSearch">
      <div class="search-ctx">
        <i class="icon"><img src="../../assets/icon-search.png" alt="icon"></i>
        <input type="text" placeholder="输入搜索内容" @input="inputChange" v-model='search'>
      </div>
      <span class="headCancle" @click="cancelSearch">取消</span>
    </header>
    <section @click="closeSearch">
      <div class="hot">
        <p>热门目的地</p>
        <div class="hotPlace">
          <span v-for="item in hotPlace" @click="choosePlace(item)">{{item}}</span>
        </div>
      </div>
      <div class="allCity">
        <p>全部城市</p>
        <div class="letterIndex">
          <span v-for="(item,index) in letterIndex" :class="Index == index?'active':''" @click="indexSearch(index)">{{item}}</span>
        </div>
      </div>
      <div class="hot">
        <p>{{letter}}</p>
        <div class="hotPlace">
          <span v-for="item in filterPlace" @click="choosePlace(item.name)">{{item.name}}</span>
        </div>
      </div>
    </section>
    <div class="searchPlace" v-show="inputStatus">
      <span v-for="item in searchData" @click="choosePlace(item.name)">{{item.name}}</span>
    </div>
  </div>
</template>
<script>
    export default {
      data () {
        return {
          search:'',
          inputStatus:false,
          Index:'0',
          letter:'A',
          hotPlace:['北京','三亚','深圳','秦皇岛','广州','成都','上海','南京','北海','贵州','云南','beijing'],
          letterIndex:['A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','W','X','Y','Z'],
          Place:[{"key":"beijing","name":"北京"},{"key":"sanya","name":"三亚"},{"key":"shenzhen","name":"深圳"},{"key":"guangzhou","name":"广州"},{"key":"guizhou","name":"贵州"},{"key":"anhui","name":"安徽"},{"key":"afuhan","name":"阿富汗"}]
        }
      },
      methods:{
        indexSearch:function (index) {
          this.Index = index;
          this.letter = this.letterIndex[index];
        },
        inputChange: function(){
          var val = this.search.trim();
          if(val != '') {
            this.inputStatus = true;
          }else {
            this.inputStatus = false;
          }
        },
        cancelSearch:function(){
          this.search = '';
          this.inputStatus = false;
        },
        closeSearch: function () {
          if(this.inputStatus){
            this.inputStatus = false;
          }else {
            return false;
          }
        },
        choosePlace: function(val) {
//          this.$store.state.address = val
          this.$store.state[this.$route.query.key] = val
//          this.$router.push({path:'/'});
          this.$router.go(-1);
        }
      },
      computed: {
        filterPlace: function () {
          var Key = this.letter;
          var Place = this.Place;
          return Place.filter(function (item) {
            return item.key.toLowerCase().slice(0,1).indexOf(Key.toLowerCase()) != -1;
          });
        },
        searchData: function() {
          var search = this.search;
          if (search) {
            return this.Place.filter(function(product) {
              return Object.keys(product).some(function(key) {
                return String(product[key]).toLowerCase().indexOf(search) > -1
              })
            })
          }
          return this.Place;
        }
      }
    }
</script>
<style scoped>
  html,body,.container {
    padding: 0;
    margin: 0;
    height: 100%;
    background: #f5f5f5;
  }
  header {
    padding: 0.133rem 0;
    background-color: rgba(238, 238, 238, 1);
  }
  .search-ctx {
    display: inline-block;
    width: 84.4%;
    margin-left: 3.2%;
    padding: 0.133rem 0;
    color: #666;
    font-size: 0;
    vertical-align: middle;
    background: white;
    border-radius: 25px;
  }
  .search-ctx .icon {
    display: inline-block;
    width: 5.055%;
    margin-left: .347rem;
    vertical-align: middle;
  }
  .search-ctx .icon img{
    width: 100%;
  }
  .search-ctx input{
    height: 0.32rem;
    margin-left: 2.527%;
    font-size: 0.32rem;
    border: none;
    outline: none;
    background: transparent;
    vertical-align: middle;
  }
  .headCancle {
    margin-left: 1.738%;
    color: #666;
    font-size: 0.32rem;
    vertical-align: middle;
  }
  .hot, .allCity {
    padding-top: 0.547rem;
  }
  .hot p,.allCity p{
    padding: 0 0 0 3.067%;
    margin: 0;
    color: #333;
    font-size: 0.267rem;
  }
  .hotPlace {
    margin-top: 0.16rem;
    padding: 0.573rem 3.2% 0.213rem ;
    background: white;
  }
  .hotPlace span,.searchPlace span{
    display: inline-block;
    width: 12.133%;
    height: 0.44rem;
    line-height: 0.44rem;
    margin:0 4.133% 0.36rem 0;
    text-align: center;
    color: #666;
    font-size: 0.267rem;
    border: solid 1px rgba(153, 153, 153, 1);
    overflow: hidden;
  }
  .hotPlace span:nth-child(6n) {
    margin-right: 0;
  }
  .letterIndex {
    margin-top: 0.16rem;
    padding: 0.573rem 7.667% 0.213rem;
    background: white;
  }
  .letterIndex span {
    display: inline-block;
    width: 4%;
    margin-right: 6%;
    margin-bottom: 0.4rem;
    color: #666;
    font-size: 0.267rem;
  }
  .letterIndex span.active {
    color: #ef9439;
  }
  .searchPlace {
    position: absolute;
    top: 0.933rem;
    left: 0;
    width: 100%;
    padding: 0.573rem 3.2% 0.213rem ;
    box-sizing: border-box;
    border-bottom: solid 1px #999;
    background: white;
  }
</style>
