<template>
  <div id="app" class="app">
    <header>
      <div class="top-main">
        <div class="user_admin">
          <b>{{ date[1] }}</b>
          <span>{{ date[0] }}</span>
          <svg
            t="1610948986263"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2513"
            width="28"
            height="28"
          >
            <path
              d="M881 512c0-52.4 32.9-96.8 79-114.5-11-43.2-28-83.9-50.2-121.3C864.6 296.3 810 288.1 773 251c-37-37-45.2-91.7-25.1-136.8C710.4 92 669.7 75 626.5 64c-17.8 46.1-62.2 79-114.5 79-52.4 0-96.8-32.9-114.5-79-43.2 11-83.9 28-121.3 50.2 20.1 45.2 11.9 99.8-25.1 136.8-37 37-91.7 45.2-136.8 25.2C92 313.6 75 354.3 64 397.5c46.1 17.8 79 62.2 79 114.5 0 52.4-32.9 96.8-79 114.5 11 43.2 28 83.9 50.2 121.3C159.4 727.7 214 735.9 251 773c37 37 45.2 91.7 25.1 136.8C313.6 932 354.3 949 397.5 960c17.8-46.1 62.2-79 114.5-79 52.4 0 96.8 32.9 114.5 79 43.2-11 83.9-28 121.3-50.2-20.1-45.2-11.9-99.8 25.1-136.8 37-37 91.7-45.2 136.8-25.2C932 710.4 949 669.7 960 626.5c-46.1-17.7-79-62.1-79-114.5zM512 635c-67.9 0-123-55.1-123-123s55.1-123 123-123 123 55.1 123 123-55.1 123-123 123z"
              fill="#00E5FF"
              p-id="2514"
            ></path>
          </svg>
          <div>
            <img src="./assets/logo.png" align="absmiddle" />
            Admin
          </div>
        </div>
      </div>
    </header>
    <div class="main">
      <section>
        <!-- 地图部分 -->
        <div id="container"></div>
        <!-- 标题栏 -->
        <div class="map-title">
          <div>安可计算机使用地区地图展示</div>
        </div>
        <!-- 实时状态 -->
        <div class="map-right">
          <div class="map-right-card">
            <h1>实时状态</h1>
            <h5><span>更新时间</span><span>2021/01/12 02:03</span></h5>
            <p><span>设备总量</span><span>1250</span></p>
            <p><span>维修总量</span><span>50</span></p>
            <p><span>使用中</span><span>1150</span></p>
            <p><span>空闲中</span><span>50</span></p>
          </div>
          <div class="map-right-card">
            <h1>故障信息</h1>
            <h5><span>更新时间</span><span>2021/01/12 02:03</span></h5>
            <p><span>设备总量</span><span>1250</span></p>
            <p><span>维修总量</span><span>50</span></p>
            <p><span>使用中</span><span>1150</span></p>
            <p><span>空闲中</span><span>50</span></p>
          </div>
        </div>
        <!-- 部门安装数量 -->
        <div class="map-left">
          <div class="map-left-lists">
            <h1>部门安装数量</h1>
            <h5>更新时间 2021/01/12 02:03</h5>
            <div>
              <span v-for="(item, index) in 18" :key="index" class="list"
                ><span>吕山乡</span><b> 6 </b></span
              >
            </div>
          </div>
          <div class="map-left-detail">
            <div class="detail-top">
              <p>地区:<span>吕山乡</span></p>
              <p>部门:<span>吕山乡乡政府</span></p>
              <p>联系人:<span>杨旭东</span> <span>12345678910</span></p>
              <p>数量:<span>5</span></p>
              <p>安装时间:<span>2020/10/25</span></p>
              <p>上次维护:<span>无</span></p>
              <p>设备配置:<span></span></p>
            </div>
            <div class="detail-bottom">
              <ul>
                <li>电脑型号：</li>
                <li>显卡系列</li>
                <li>显卡类型</li>
                <li>内存频率</li>
                <li>散热方式</li>
                <li>硬盘类型</li>
                <li>CPU系列</li>
                <li>主板芯片组类型</li>
              </ul>
              <ul>
                <li>电脑型号：</li>
                <li>显卡系列</li>
                <li>显卡类型</li>
                <li>内存频率</li>
                <li>散热方式</li>
                <li>硬盘类型</li>
                <li>CPU系列</li>
                <li>主板芯片组类型</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <!--*************** 侧边栏 *************-->
      <aside class="">
        <div class="bard">
          <!-- 实时动态start -->
           <div class="bard_top">
            &gt; &gt; <span>常见问题</span> &lt; &lt;
          </div>
          <div class="tab">
            <el-table
              :data="QueryMemberList"
              border
              overflow-y="scroll"
              style="
                width: 100%;
                overflow-y: scroll;
                color: #b4f2ff;
                font-weight: Bold;
                line-height: 1rem;
              "
              fit
            >
              <el-table-column width="5"> </el-table-column>
              <el-table-column prop="CreateTime" label="时间" width="180">
                <template slot-scope="scope">
                  {{ scope.row.CreateTime.slice(0, -4) }}
                </template>
              </el-table-column>
              <el-table-column prop="Department,Cause,Status" label="原因">
                <template slot-scope="scope">
                  <span v-if="scope.row.Status == 0" style="color: #d22625">
                    {{ scope.row.Department }}{{ scope.row.Cause }}
                  </span>
                  <span v-else>
                    {{ scope.row.Department }}{{ scope.row.Cause }}
                  </span>
                </template>
              </el-table-column>
              <el-table-column
                prop="Status"
                label="状态"
                width="80"
              
              >
                <template slot-scope="scope">
                  <span v-if="scope.row.Status == 0" style="color: #d22625"
                    >未完成</span
                  >
                  <span v-if="scope.row.Status == 1" style="color: #dda71f"
                    >正在维修</span
                  >
                  <span v-if="scope.row.Status == 2" style="color: #40c548"
                    >已完成</span
                  >
                </template>
              </el-table-column>
              <el-table-column width="20"> </el-table-column>
            </el-table>
          </div>
        </div>
        <!-- 实时动态end -->

        <!-- 常见问题 -->
        <div class="bard" style="margin-top: 3.5vh">
          <div class="bard_top">
            <b
              v-if="show_problem"
              style="float:left; padding-left=10px;"
              @click="show_problem = false"
              >&lt;返回</b
            >
            &gt; &gt; <span>常见问题</span> &lt; &lt;
          </div>
          <div class="problem-list" v-if="!show_problem">
            <ul v-for="(item, index) in QueryFAQList" :key="index">
              <li @click="problemclick(item)">
                {{ index + 1 }},{{ item.Question }}
              </li>
            </ul>
          </div>
          <!-- 问题详情 -->
          <div class="problem-details" v-if="show_problem">
            <p>{{ answers.Question }}</p>
            {{ answers.Answer }}<br />
          </div>
        </div>

        <!--  装机总量 -->
        <div class="bard" style="margin-top: 3.5vh">
          <div class="bard_top">
            &gt; &gt; <span>装机列表</span> &lt; &lt;
          </div>
          <p>更新时间{{ computers.update_time }}</p>
          <div class="computers">
            <p style="color: #b4f2ff">
              <span style="background-color: #b4f2ff"></span> 装机总量
              {{ computers.all }}
            </p>
            <p style="color: #40c548">
              <span style="background-color: #40c548"></span>已装机量
              {{ computers.perform }}
            </p>
            <p style="color: #dda71f">
              <span style="background-color: #dda71f"></span>待装总量
              {{ computers.waiting }}
            </p>
            <p style="color: #d22625">
              <span style="background-color: #d22625"></span>故障申报
              {{ computers.trouble }} <b>&uarr;</b> 较上月{{
                computers.trouble_add
              }}
            </p>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import * as info from "./untils/api";

const AMap = window.AMap;
export default {
  name: "App",
  data() {
    return {
      date: [],
      QueryFAQList: Array,
      answers: "",
      QueryMemberList: [],
      show_problem: false,
      map: "",
      icon: "",
      defaultValue: {
        map: "",
        formattedAddress: "",
        longitude: "119.9",
        latitude: "31.01",
      },
      mapMarkers: [
        {
          lnglat: [119.896008, 31.030588], //点标记位置
          name: "林城镇",
          id: 1,
        },
        {
          lnglat: [119.931026, 31.023527], //点标记位置
          name: "beijing",
          id: 1,
        },
        {
          lnglat: [119.967419, 31.038825], //点标记位置
          name: "beijing",
          id: 1,
        },
        {
          lnglat: [119.914547, 30.989834], //点标记位置
          name: "beijing",
          id: 1,
        },
      ],
      marks: [],

      // 装机数据
      computers: {
        updatetime: "2020/01/12 02:33",
        all: 150,
        perform: 120,
        waiting: 30,
        trouble: 10,
        trouble_add: 3,
      },
    };
  },
  components: {},
  mounted() {
    // 地图加载
    this.initMap();
    // 时间刷新
    this.getdate();
    // 大屏适配
    this.fitWin();
    // 数据渲染
    this.QueryFAQLists();
  },
  methods: {
    // 接口处理
    QueryFAQLists() {
      info.QueryFAQList().then((res) => {
        this.QueryFAQList = res.data.Result.List;
      });
       info.QueryMemberList().then((res) => {
        this.QueryMemberList = res.data.Result.List;
        console.log(this.QueryMemberList);
      });
    },
    getdate() {
      this.timer = setInterval(() => {
        // 修改数据date
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        var h = date.getHours() + 1;
        var min = date.getMinutes() + 1;
        var s = date.getSeconds();
        if (month >= 1 && month <= 9) {
          month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        var current = h + ":" + min + ":" + s;
        this.date = [currentdate, current];
      }, 1000);
    },
    problemclick(details) {
      this.show_problem = true;
      this.answers = details;
    },
    initMap() {
      var that = this;
      this.map = new AMap.Map("container", {
        mapStyle: "amap://styles/darkblue", //设置地图的显示样式
        resizeEnable: true,
        center: [this.defaultValue.longitude, this.defaultValue.latitude],
        zoom: 10,
      });
      // 绘制长兴区域
      AMap.plugin("AMap.DistrictSearch", function () {
        // 创建行政区查询对象
        var district = new AMap.DistrictSearch({
          // 返回行政区边界坐标等具体信息
          extensions: "all",
          // 设置查询行政区级别为 县
          level: "district",
        });

        district.search("长兴县", function (status, result) {
          // 边界信息
          var bounds = result.districtList[0].boundaries;
          var polygons = [];
          if (bounds) {
            for (var i = 0, l = bounds.length; i < l; i++) {
              //生成行政区划polygon
              var polygon = new AMap.Polygon({
                map: that.map,
                strokeWeight: 1,
                path: bounds[i],
                fillOpacity: 0.7,
                fillColor: "#19376D",
                strokeColor: "#608EA0",
              });
              polygons.push(polygon);
              that.map.add(polygon);
            }
            // 地图自适应
            //  that.map.setFitView()
          }
        });
      });
      this.mapmaker();
    },
    mapmaker() {
      // 信息窗体
      this.mapMarkers.forEach((item) => {
        let marker = new AMap.Marker({
          position: new AMap.LngLat(item.lnglat[0], item.lnglat[1]),
          offset: new AMap.Pixel(-10, -10),
          icon: require("./assets/b62.png"), // 添加 Icon 实例
          title: "北京",
          clickable: true,
          extData: [item.lnglat, item.name],
        });
        this.marks.push(marker);
        // marker点击事件
        marker.on("click", this.markerClick);
      });

      this.map.add(this.marks);
    },
    markerClick(e) {
      // 设置其他的图标
      var icon2 = new AMap.Icon({
        size: new AMap.Size(25, 34),
        image: require("./assets/b62.png"),
      });
      for (var i = 0; i < this.marks.length; i++) {
        this.marks[i].setIcon(icon2);
      }
      var icon = new AMap.Icon({
        size: new AMap.Size(25, 34),
        image: require("./assets/dun.png"),
      });
      e.target.setIcon(icon);
      let content = `
          <div class="map-popover1" @click="catchinfo()">
          <p><b style="color:#FFF">地区: </b><span> ${
            e.target.getExtData()[1]
          }</span></p>
          <p><b style="color:#FFF">部门: </b><span></span></p>
          <p><b style="color:#FFF">联系人: </b><span></span></p>
          <p><b style="color:#FFF">数量: </b><span></span></p>
          <p><b style="color:#FFF">配置: </b><span class="list">显卡系列: GTX 1060<br/></span>
          <ul>
         <li>显卡类型: 独立显卡</li>
         <li>内存频率: 1333MHz</li>
         <li>散热方式: 风冷</li>
         <li>硬盘类型: 固态硬盘(SSD)</li>
         <li>CPU系列: INTEL XEON</li>
         <li>主板芯片组类型: Intel X58</li>
         </ul>
         </p>
          <p><b style="color:#FFF">安装时间: </b><span></span></p>
          <p><b style="color:#FFF">上次维修: </b><span></span></p>
        </div>
            `;
      // 添加信息窗体
      var infoWindow = new AMap.InfoWindow({
        author: "top-center",
        isCustom: true,
        offset: new AMap.Pixel(0, -30),
        content: content,
        closeWhenClickMap: true,
      });
      infoWindow.open(this.map, e.target.getExtData()[0]);
    },
    catchinfo() {
      console.log("333");
      this.map.infoWindow.close();
    },
    // 大屏适配
    fitWin() {
      var w = document.body.clientWidth;
      var h = document.body.clientHeight;
      console.log(w, h);
    },
  },
  // 关闭弹窗

  watch: {},
};
</script>
<style lang="less">
html,
body,
section,
header,
aside,
p,
h1,
h3,
h5,
ul {
  margin: 0;
  padding: 0;
  margin-block-start: 0;
  margin-block-end: 0;
}
html{
  font-size: 14px;
}
* {
  font-family: "AlibabaPuHuiTi-Bold";
}

@head_height: 10vh;
@main_height: 85vh;
@main_height_section: 930px;
@map_right_height: 20px;
@font_color_user: #79eefc;
@font_color_card: #00e5ff;
@font_color_td: #b4f2ff;
@back_clolr: #03152a;
@back_color_main: #030b1f;
@back_color-card: #031226;
@border_bard:1px solid rgba(240, 229, 229, 0.2);
@height_bard: 25vh;
@height_bard_main: 22vh;
@height_bard_top: 3vh;
// 滚动条隐藏
*::-webkit-scrollbar {
  display: none;
}
.app {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background: @back_color_main;
  box-sizing: border-box;
  max-width: 100%;
  max-height: 100%;
}
.amap-logo {
  opacity: 0;
}
.tdstyle {
  height: 25px;
}
li {
  list-style: none;
}

// 顶部栏header部分
header {
  width: 100%;
  height: @head_height;
  line-height: @head_height;
  // 用户部分
  .top-main {
    width: 100%;
    height: @head_height;
    background: url("./assets/images/1.png") top left no-repeat;
    background-color: @back_clolr;
    .user_admin {
      float: right;
      right: 2vw;
      display: flex;
      justify-content: center;
      align-items: center;
      color: @font_color_user;
      vertical-align: middle;
      b {
        font-size: 24px;
      }
      svg {
        margin: 0 28px;
      }
      span {
        font-size: 16px;
        margin: 0 31px;
      }
      // 用户头像部分
      div {
        img {
          width: 48px;
          height: 48px;
          margin: 10px;
        }
        vertical-align: middle;
      }
    }
  }
}
// 主体
#container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid rgba(0, 229, 255, 0.6);
}
.main {
  width: 100%;
  height: 85vh;
  display: flex;
  overflow: hidden;
  margin-top: 4vh;
  section {
    width: 68vw;
    height: 83vh;
    padding: 1vh 1vw 1vh 1vw;
    position: relative;
    background: url("./assets/images/3.png") top center  no-repeat;
    background-size:80%,100%;
    box-sizing: border-box;
  }
  // 侧边信息栏
  aside {
    width: 30vw;
    overflow: hidden;
    // 表格
    .bard {
      display: flex;
      flex-direction: column;
      background-color: @font_color_card;
      width: 100%;
      height: 25vh;
      background: url("./assets/images/2.png") top center no-repeat;
      background-size: 100% 100%;
      text-align: center;
      color: @font_color_card;
      overflow: scroll;
      .bard_top > {
        font-size: 1rem;
        font-weight: Bold;
        margin-top: 1vh;
        letter-spacing: 1rem;
        .tab {
          color: #b4f2ff;
        }
        span {
          font-size: 1.375rem;
        }
      }
    }
   
  }
   // 问题列表
    .problem-list {
      height: @height_bard_main;
      text-align: start;
      font-size: 0.9375rem;
      overflow-y: scroll;
      margin-left: 0.5rem;
      li {
        padding-left: 10px;
        color: #b4f2ff;
        margin: 0.5rem 0;
        font-size: 0.9375rem;
        font-weight: Bold;
      }
    }
    .problem-details {
      margin: 1rem;
      font-size: 0.9375rem;
      p {
        font-size: 1.125rem;
        font-weight: 500;
        padding: 0;
        margin: 0;
      }
      text-align: start;
      font-size: 0.9375rem;
    }
    // 装机总量
    .computers {
      padding-left: 2rem;
      display: flex;
      height:26vh;
      flex-direction: column;
      justify-content: space-evenly;
      text-align: start;
      p {
        line-height: 2rem;
        span {
          display: inline-block;
          height: 2rem;
          width: 2rem;
          border-radius: 1rem;
          background: url("./assets/3computer.png") center no-repeat;
          margin-bottom: -0.6rem;
          margin-right: 2rem;
        }
      }
    }
  // 地图

  // 地图标题栏
  .map-title {
    width: 40vw;
    position: absolute;
    left: 14vw;
    top: 0;
    z-index: 11;
    font-size: 1.625rem;
    color: @font_color_card;
    text-align: center;
    font-weight: bold;
    text-shadow: 0px 3px 0px #1155c1;
    div {
      margin-top: 12px;
      height: 50px;
      background: rgba(0, 0, 0, 0.39);
    }
  }
  // 地图左边部门安装信息列表
  .map-left {
    width: 40rem;
    height: 20rem;
    position: absolute;
    left: 1vw;
    bottom: 1vh;
    z-index: 10;
    color: @font_color_td;
    border: @border_bard;
    text-align: center;
    display: flex;
    .map-left-lists {
      width: 20rem;
      font-size: 1.125rem;
      font-weight:bold ;
      h1 {
        font-size: 1.5rem;
        margin-top: 0.5rem;
      }
      h5 {
        margin: 0.5rem 0;
      }
      div {
        display: flex;
        flex-wrap: wrap;
        .list {
          width: 33%;
          line-height: 2rem;
        }
        b {
          color: #3e99ff;
          font-size: 21px;
        }
      }
    }
    .map-left-detail {
      margin-left: 0.1rem;
      border: @border_bard;
      
      text-align: start;
      font-size: 0.8rem;
      .detail-top {
        padding: 0px 0.8rem;
        p {
          line-height: 1.3rem;
          margin: 0;
          font-weight: Bold;
          color: #ffffff;
          span {
            color: @font_color_td;
            margin-left: 0.8rem;
          }
        }
      }
      .detail-bottom {
        padding: 0 0.8rem;
        color: @font_color_td;
        display: flex;
        ul {
          width:10rem;
          flex: 1;
          display: flex;
          flex-flow: column;
          li{
            line-height: 1.3rem;
        }
        }
        
      }
    }
  }
}
// 地图右边状态信息
.map-right {
  position: absolute;
  right: 1vw;
  bottom: 1vh;
  z-index: 10;
  color: @font_color_td;
  .map-right-card {
    margin-top: 1.25rem;
    text-align: center;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.56);
    border-radius: .1875rem;
    border: @border_bard;
    font-size: 1.125rem;
    h1 {
      color: @font_color_user;
      font-size: 1.4375rem;
      line-height: 1.5rem;
    }
    h5 {
      line-height: 2rem;
    }
    p {
      line-height: 1.8rem;
      display: flex;
      width: 100%;
      margin: 0.8rem 0;
      span {
        flex: 1;
        text-align: center;
      }
      span:last-of-type {
        font-size: 1.3125rem;
      }
    }
  }
}
// 地图点击弹窗
.map-popover1 {
  color: @font_color_td;
  font-size: .75rem;
  width: 12.625rem;
  height: 16.3625rem;
  background: rgba(0, 0, 0, 0.56);
  padding: .625rem .6125rem;
  z-index: 600;
  p {
    margin: 0;
    line-height: 1.425rem;
  }
  ul {
    padding-left: 1.875rem;
  }
}
// element
.el-table__row {
  font-size: 0.9375rem;
  line-height:1.5rem;
}
.problem-top {
  position: relative;
  b {
    position: absolute;
    top: 1vh;
    left: 1vw;
    letter-spacing: 1rem;
    font-size: 0.875rem;
  }
}
</style>