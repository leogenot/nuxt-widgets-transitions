<script setup>
const props = defineProps({
  widget: Object,
  idx: Number,
})

const components = {
  link: resolveComponent('widgets-link'),
}

const container = ref(null)
const element = ref(null)

// const { addWidget } = useWidgets()

watch(container, () => {
  // if (container.value) {
  //   setTimeout(() => {
  //     addWidget({
  //       id: props.widget.id,
  //       container,
  //       element,
  //       isTop: props.idx === 0,
  //       isGlobal: props.widget.isGlobal,
  //       persist: props.widget.persist,
  //     })
  //   })
  // }
})

// onMounted(() => {
//   console.log(props.widget.data.isGlobal)
// })
</script>

<template>
  <div
    ref="container"
    class="widget-container"
    v-widget:[widget]="widget.data.isGlobal"
  >
    <div ref="element" class="widget-element">
      <div class="widget-mobile-scale-container">
        <component :is="components[widget.type]" v-bind="widget" />
      </div>
    </div>
  </div>
</template>

<style>
.widget-container {
  --z-index: 19;

  z-index: var(--z-index);

  width: calc(100% - 2rem * 2);

  position: absolute;
  bottom: auto;
  top: 0;

  /* &.is-idle {
      @media (--until-md) {
        transition: transform 300ms;

        .widget-mobile-scale-container {
          transition: transform 0ms 300ms;
        }
      }
    } */

  --border-icon-svg-color: hsl(var(--background-color, var(--color-white)));
  --border-icon-background-color: hsl(var(--text-color, var(--color-black)));

  transition: color var(--theme-transition), fill var(--theme-transition);
  color: hsl(var(--text-color));

  .widget-mobile-scale-container {
    display: flex;
    flex-direction: column;
    gap: units(1);

    transform: scale(1);

    @media (--until-md) {
      transform-origin: top;

      > * {
        border-radius: var(--br);
      }

      .widget-bg {
        background-color: hsla(var(--background-color, 0 0% 100%) / 0.5);
      }
    }
  }
}
</style>
