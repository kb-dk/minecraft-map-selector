<template>
  <div style="height: 700px; width: 1400px">
    <l-map ref="map" v-model:zoom="zoom" :center="[47.41322, -1.219482]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
    </l-map>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

export default defineComponent({
  name: "MapSelector",
  components: {
    LMap,
    LTileLayer,
  },

  setup() {
    const zoom = 2;
    return { zoom };
  },
});
</script>

<style scoped></style>
