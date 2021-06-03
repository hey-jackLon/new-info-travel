<template>
  <div class="travel-query">
    <div class="left">
      <div class="search-box" />
      <div class="plan-box" />
      <div class="results-show">
        <div class="result-title">共3条线路推荐</div>
        <div class="result-show-body">
          <div class="plan-info" />
          <div class="plan-info" />
        </div>

      </div>
    </div>
    <div class="body">
      <div ref="map" class="map" style="width:100%;height:100%;" />
    </div>
  </div>
</template>

<script>
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';

import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import { fromLonLat } from 'ol/proj.js';
// import Control from 'ol/control/Control';
import Zoom from 'ol/control/Zoom';
export default {
  data() {
    return {
      map: null
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const center = fromLonLat([104.06632, 30.572903]);
      const _this = this;
      const TDDLayer = new TileLayer({
        source: new XYZ({
          url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        }),
        zIndex: 1
      });
      this.map = new Map({
        target: _this.$refs.map, // 地图容器
        layers: [TDDLayer],
        view: new View({
          projection: 'EPSG:3857',
          center: center,
          zoom: 8,
          maxZoom: 18,
          minZoom: 7
        }),
        logo: false
      });

      const controls = this.map.getControls();
      console.log('controls: ', controls);
      const controlsLength = controls.getArray().length;
      for (let i = 0; i < controlsLength; i++) {
        this.map.removeControl(controls.getArray()[0]);
      }

      const zoom = new Zoom({
        className: 'custom-ol-zoom'
      });

      this.map.addControl(zoom);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
$moduleBoxShadow: 0px 0px 5px 0px rgba(39, 51, 77, 0.2);
$searchBoxHeight: 150px;
$planBoxHeight: 86px;
$titleHeight:20px;
$psHeight:20px;
  .travel-query{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .left{
    width: 460px;
    height: calc(100% - 40px);
    background: #F3F5F7;
    position: absolute;
    z-index: 99;
    box-shadow: 0px 0px 10px 0px rgba(42, 49, 65, 0.5);
    padding: 20px;
  }
  .body{
    height: inherit;
    position: relative;
  }
  .search-box{
    height: $searchBoxHeight;
    background-color: $mainColor;
    box-shadow: $moduleBoxShadow;
    border-radius: 8px;
    margin-bottom: 20px;
  }
  .plan-box{
    height: $planBoxHeight;
    border: 1px solid #B8BFD3;
    box-shadow: $moduleBoxShadow;
    border-radius: 8px;
    background: #FFFFFF;
    margin-bottom: 20px;
  }
  .results-show{
    height: calc(100% - 40px - #{$searchBoxHeight} - #{$planBoxHeight} - #{$psHeight});
    position: relative;
    // overflow: auto;
  }
  .result-title{
    height: 40px;
    line-height: 40px;
    position: relative;
    top: 0px;
    left: 0px;
  }
  .result-show-body{
    height: calc(100% - 40px);
    overflow: auto;
  }
  .result-show-body::-webkit-scrollbar{
    width:2px;
    // height:10px;
    background: #ccc;
  }
   .result-show-body::-webkit-scrollbar-track{
    background: rgb(239, 239, 239);
    border-radius:2px;
  }
   .result-show-body::-webkit-scrollbar-thumb{
    background: #bfbfbf;
    border-radius:10px;
  }
   .result-show-body::-webkit-scrollbar-thumb:hover{
    background: #333;
  }
   .result-show-body::-webkit-scrollbar-corner{
    background: #179a16;
  }
  .plan-info{
    height: 460px;
    border: 1px solid #B8BFD3;
    box-shadow: $moduleBoxShadow;
    border-radius: 8px;
    background: #FFFFFF;
    margin-bottom: 20px;
  }
</style>
