<template>
  <div id="app">
    <Photograph :image="image" :statusInfo="statusInfo" @getPhoto="getPhoto"></Photograph>
  </div>
</template>

<script>
import Photograph from "./plugs/camera";
import { setTimeout } from "timers";

export default {
  name: "App",
  components: {
    Photograph
  },
  data() {
    return {
      image: "", // 传递图像数据
      statusInfo: { // 状态显示
        status: "", // loading | fail
        msg: ""
      }
    };
  },
  mounted() {},
  methods: {
    // 获取拍照图像
    getPhoto({ formdata, base64 }) {
      // 上传中
      this.statusInfo.status = "loading";
      this.statusInfo.msg = "上传中";
      // 上传失败
      setTimeout(() => {
        this.statusInfo.status = "fail";
        this.statusInfo.msg = "失败";
      }, 2000);
      // 上传成功
      setTimeout(() => {
        this.statusInfo.status = "";
        this.statusInfo.msg = "";
        this.image = base64;
      }, 4000);
    }
  }
};
</script>

<style>
@import "./assets/css/main.css";
</style>