<template>
  <div class="travel-query">
    <div class="left">111</div>
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
    }
  }
};
</script>

<style lang="scss" scoped>
  .travel-query{
    width: 100%;
    height: 100%;
    display: flex;
  }
  .left{
    width: 500px;
    height: 100%;
    background: pink;
  }
  .body{
    // background: rgb(128, 218, 101);
    flex: 1;
    position: relative;
  }
</style>
