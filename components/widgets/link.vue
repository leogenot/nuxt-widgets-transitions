<script setup>
const props = defineProps({
  data: Object,
  id: Number,
  type: String,
})

const formattedUrl = computed(() =>
  props.data.link.url
    .replace('mailto:', '')
    .replace('tel:', '')
    .replace('http://', '')
    .replace('https://', '')
)

const internalLink = computed(() => {
  return props.data.link.url.startsWith('/')
})
</script>

<template>
  <div v-if="data?.isPresentOnMobile" class="widget-link ts-body-s widget-bg">
    <p v-if="data.headline">{{ data.headline }}</p>

    <div
      class="link"
      :class="{
        canHover: data.link,
      }"
    >
      <!-- <common-border-icon v-if="data.media" :icon="data.media[0]" /> -->

      <div class="content">
        <span v-if="data.text">{{ data.text }}</span>

        <nuxt-link
          v-if="data.link"
          class="ts-cta"
          :href="data.link.url"
          :target="internalLink ? null : 'blank'"
          :prefetch="true"
        >
          <span class="link-title">
            {{ data.link.title || formattedUrl }}
          </span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.widget-link {
  padding: units(1.4) units(1.4);

  display: grid;
  gap: units(1);

  position: relative;

  border: 1px solid hsla(var(--text-color) / 0.2);
  border-radius: var(--br);

  backdrop-filter: blur(10px);

  .link {
    --line-size: 0%;
    display: flex;
    align-items: center;
    gap: units(1.4);

    position: relative;

    svg {
      transition: transform 200ms;
    }

    width: fit-content;
    a {
      text-decoration: none;
    }

    .link-title {
      @media (--until-md) {
        --line-size: 100%;
      }
      display: inline;
      background: linear-gradient(
          hsla(var(--text-color)),
          hsla(var(--text-color))
        )
        left bottom no-repeat;
      background-size: var(--line-size) 0.75px;
      transition: background-size 0.5s;
    }

    &:hover {
      --line-size: 100%;
      svg {
        transform: scale(1.2);
      }
    }

    a {
      &:before {
        /* increase click area */
        content: '';
        position: absolute;
        inset: 0;
      }
    }
  }

  .content {
    display: flex;
    flex-direction: column;
  }
}
</style>
