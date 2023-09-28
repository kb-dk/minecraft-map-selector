<template>
  <div style="height: 700px; width: 1400px">
    <l-map ref="map" v-model:zoom="zoom" :center="position">
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
    const zoom = 7;
    const position = [56.1572, 10.2107];
    return { zoom, position };
  },
});
</script>

<style scoped></style>
