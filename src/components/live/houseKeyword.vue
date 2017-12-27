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
      <div class="row">
        <p>搜索历史</p>
        <div class="history">
          <span v-for="item in searchHistory" @click="chooseItem(item)">{{item}}</span>
        </div>
      </div>
      <div class="row">
        <p>热门商圈</p>
        <div class="history">
          <span v-for="item in hotArea" @click="chooseItem(item)">{{item}}</span>
        </div>
      </div>
      <div class="row">
        <p>热门房型</p>
        <div class="history">
          <span v-for="item in hotRoom" @click="chooseItem(item)">{{item}}</span>
        </div>
      </div>
    </section>
    <div class="searchContent" v-show="inputStatus">
      <span v-for="item in searchResult" @click="chooseItem(item.name)">{{item.name}}</span>
    </div>
  </div>
</template>
<script>
    export default {
      data () {
        return {
          search:'',
          inputStatus:false,
          searchData:[{"key":"beijing","name":"北京"},{"key":"sanya","name":"三亚"},{"key":"shenzhen","name":"深圳"},{"key":"guangzhou","name":"广州"},{"key":"guizhou","name":"贵州"},{"key":"anhui","name":"安徽"},{"key":"阿富汗","name":"阿富汗"},{"key":"amusitedan","name":"阿姆斯特丹"},{"key":"aomen","name":"澳门"}],
          searchHistory:['xxx花园','三房一厅','会展中心','复式楼','一房一厅','xx公寓','xx公寓','xx公寓'],
          hotArea:['会展中心','碧桂园','会展中心','交易场','宝安中学','世界之窗','大夜晚核电站','新安古城'],
          hotRoom:['一室一厅','一室0厅','两室一厅','四室两厅','复式楼','大阳台','三室两厅','五室一厅']
        }
      },
      methods:{
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
        chooseItem: function(val) {
          this.$store.state.houseSource = val
          this.$router.push({path:'/'});
        }
      },
      computed: {
        searchResult: function() {
          var search = this.search;
          if (search) {
            return this.searchData.filter(function(product) {
              return Object.keys(product).some(function(key) {
                return String(product[key]).toLowerCase().indexOf(search) > -1
              })
            })
          }
          return this.searchData;
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
    width: inherit;
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
  .searchContent {
    position: absolute;
    top: 0.933rem;
    left: 0;
    width: 100%;
    padding: 0.573rem 3.2% 0.213rem ;
    box-sizing: border-box;
    border-bottom: solid 1px #999;
    background: white;
  }
  .row {
    padding-top: 0.547rem;
  }
  .row p{
    padding: 0 0 0 3.067%;
    margin: 0;
    color: #333;
    font-size: 0.267rem;
  }
  .history,.searchContent {
    margin-top: 0.16rem;
    padding: 0.573rem 3.2% 0.213rem ;
    background: white;
  }
  .history span,.searchContent span{
    display: inline-block;
    width: 20.5%;
    height: 0.44rem;
    line-height: 0.44rem;
    margin:0 4.933% 0.36rem 0;
    text-align: center;
    color: #666;
    font-size: 0.267rem;
    border: solid 1px rgba(153, 153, 153, 1);
    overflow: hidden;
  }
  .history span:nth-child(4n),.searchContent span:nth-child(4n){
    margin-right: 0;
  }
</style>
