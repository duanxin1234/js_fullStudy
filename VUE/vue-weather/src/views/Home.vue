<template>
  <div class="home">
    <div class="address">
      <div class="nav">
        <p class="time">{{localtime}}</p>
        <span class="change-city">切换城市</span>
      </div>
      <div class="city-info">
        <p class="city-name">南昌市</p>
        <p class="city-weather">晴</p>
        <h1 class="city-temp">17°C</h1>
        <p class="weather-detail">
          <span>风力3</span>|
          <span>风向南飞</span>|
          <span>空气湿度:60%</span>
        </p>
      </div>
    </div>
    <div class="feature">
      <div class="group">
        明日:
        <span class="tm">白天：多云</span>
        <span class="tm">夜间：大雨</span>
      </div>
      <div class="group">
        后日:
        <span class="tm">白天：多云</span>
        <span class="tm">夜间：大雨</span>
      </div>
    </div>
    <div class="map-container" ref="mapContainer"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      localtime: "",
    };
  },
  created() {
    setInterval(() => {
      this.localtime = this.getlocalTime();
    }, 1000);
  },

  methods: {
    getlocalTime() {
      return new Date().toLocaleTimeString();
    },
  },
};
</script>
<!-- 私有化 -->
<style scoped>
.home {
  padding: 10px;
  height: 100vh;
  box-sizing: border-box;
  background-color: black;
  color: white;
}
.nav {
  display: flex;
  justify-content: space-between;
}
.city-info {
  text-align: center;
  margin: 20px 0;
  line-height: 2;
}
.city-temp {
  font-size: 40px;
}
.feature {
  width: 100%;
}
.group {
  height: 44px;
  line-height: 44px;
  background-color: rgba(255, 255, 255, 0.26);
  border-radius: 4px;
  color: white;
  font-size: 16px;
  margin-bottom: 10px;
  padding: 0 10px;
}
.group .tm {
  margin-left: 20px;
}
</style>