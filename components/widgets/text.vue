<script setup>
const props = defineProps({
  data: Object,
  id: Number,
  type: String,
})
</script>

<template>
  <div v-if="data?.isPresentOnMobile" class="widget-text ts-body-s widget-bg">
    <p v-if="data.headline">{{ data.headline }}</p>

    <div class="text">
      <common-border-icon v-if="data.media" :icon="data.media[0]" />

      <div class="content">
        <common-rich-text v-if="data.richText" :data="data.richText" />
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.widget-text {
  padding: units(1.4) units(1.4);

  display: grid;
  gap: units(1);

  position: relative;

  border: 1px solid hsla(var(--text-color) / 0.2);
  border-radius: var(--br);

  backdrop-filter: blur(10px);

  .text {
    display: flex;
    align-items: flex-start;
    gap: units(1.4);

    position: relative;

    svg {
      transition: transform 200ms;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
  }
}
</style>
