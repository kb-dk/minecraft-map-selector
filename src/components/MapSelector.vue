<template>
  <div class="leaflet-map">
    <l-map ref="map" v-model:zoom="zoom" :center="position">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
        class="leaf"
      ></l-tile-layer>
      <l-rectangle
        v-bind:key="i"
        v-for="(rect, i) in Data"
        :lat-lngs="[
          [rect.tl ? rect.tl[0] : 0, rect.tl ? rect.tl[1] : 0],
          [rect.tl ? rect.br[0] : 0, rect.br ? rect.br[1] : 0],
          [rect.br ? rect.br[0] : 0, rect.br ? rect.br[1] + 0.017 : 0],
          [rect.br ? rect.br[0] : 0, rect.br ? rect.tl[1] + 0.017 : 0],
        ]"
        :color="colors[Math.floor(Math.random() * colors.length) - 1]"
        :fill="true"
        :opacity="0"
        :fill-opacity="0.5"
      >
        <!-- <l-marker
          :lat-lng="[
            (rect.tl ? rect.tl[0] : 0) +
              ((rect.br ? rect.br[0] : 0) - (rect.tl ? rect.tl[0] : 0)) / 2,
            (rect.tl ? rect.tl[1] : 0) +
              ((rect.br ? rect.br[1] : 0) - (rect.tl ? rect.tl[1] : 0)) / 2,
          ]"
          > --><l-popup
          ><div class="links">
            <a class="link" target="_blank" :href="rect.loar"
              >Download this tile!</a
            >
            <a class="link" target="_blank" href="http://www.google.com"
              >See snippet of tile, rendered</a
            >
            <span class="filename">file name: {{ rect.file }}</span>
          </div>
        </l-popup>
        <!--  </l-marker> -->
      </l-rectangle>
    </l-map>
  </div>
</template>

<script lang="ts">
/*:lat-lngs="[
          [rect.tl ? rect.tl[0] : 0, rect.tl ? rect.tl[1] : 0],
          [rect.tl ? rect.br[0] : 0, rect.br ? rect.br[1] : 0],
          [rect.br ? rect.br[0] : 0, rect.br ? rect.br[1] + 0.313 : 0],
          [rect.br ? rect.br[0] : 0, rect.br ? rect.tl[1] + 0.313 : 0],
        ]"
        */

import { defineComponent } from "vue";
import "leaflet/dist/leaflet.css";
import {
  LMap,
  LTileLayer,
  LRectangle,
  LMarker,
  LPopup,
} from "@vue-leaflet/vue-leaflet";
import Data from "./../data/grid-coordinates.json";

export default defineComponent({
  name: "MapSelector",
  components: {
    LMap,
    LTileLayer,
    LRectangle,
    LPopup,
  },
  data: () => ({
    Data,
    colors: [
      "#FFB6C1",
      "#FF69B4",
      "#FFA07A",
      "#FFD700",
      "#F0E68C",
      "#98FB98",
      "#DDA0DD",
      "#87CEEB",
      "#FFA07A",
      "#20B2AA",
      "#87CEFA",
      "#00CED1",
      "#9370DB",
      "#ADFF2F",
      "#FFFFE0",
      "#00FA9A",
      "#FFDAB9",
      "#FFC0CB",
      "#DA70D6",
      "#FFDEAD",
      "#FFB6C1",
      "#FFE4E1",
      "#E6E6FA",
      "#F5DEB3",
      "#B0E0E6",
      "#FF6347",
      "#F08080",
      "#D8BFD8",
      "#00FFFF",
      "#40E0D0",
    ],
  }),

  setup() {
    const zoom = 7;
    const position = [56.1572, 10.2107];
    return { zoom, position };
  },
});
</script>

<style>
.leaflet-map {
  width: 100%;
  height: 100vh;
}
.leaflet-tile-pane {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}
.links {
  display: block;
  text-align: center;
}

.links a {
  font-size: 14px;
  font-weight: bold;
  display: block;
  margin-bottom: 10px;
}

.filename {
  color: grey;
  font-size: 12px;
}
</style>
