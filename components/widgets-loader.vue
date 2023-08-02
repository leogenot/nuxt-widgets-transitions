<script setup>
const props = defineProps({
  widgets: Array,
  idx: Number,
})
</script>

<template>
  <div class="widget-bar" v-if="widgets">
    <widget-loader
      v-for="widget in widgets"
      :key="widget.id"
      :widget="widget"
      :idx="idx"
    />
  </div>
</template>

<style>
.widget-bar {
  position: absolute;
  right: 0;
  top: 2rem;
  width: 5rem;
  padding: 0 2rem;

  display: grid;
  gap: units(1);
  z-index: 25;
  transition: opacity 1s;

  pointer-events: none;

  .widget-element {
    pointer-events: all;
  }
}
</style>
