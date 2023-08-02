<script setup>
const { data } = await useEndpoint('/api/dummy-endpoint', {
  // force refresh, for demo purposes
  key: 'index',
  await: true,
})
</script>

<template>
  <div class="index">
    <h1>Index page</h1>
    <p>
      This page's <code>useEndpoint</code> has
      <code>{ await: true }</code>.<br />
      So the <code>onEnter</code> transition will first run when its (newest)
      data is in the DOM:
    </p>
    <pre><code>{{ data || 'null' }}</code></pre>

    <div class="section">
      <div v-view.parallax class="home">Home</div>
      <widgets-loader
        :widgets="[
          {
            type: 'link',
            id: 7686,
            data: {
              media: [],
              headline: 'widget 1',
              link: {
                url: 'htttps://google.com',
                title: 'widget 1',
                target: null,
              },
              isPresentOnMobile: true,
            },
          },
        ]"
      />
    </div>
    <div class="section">
      <widgets-loader
        :widgets="[
          {
            type: 'link',
            id: 6456,
            data: {
              media: [],
              headline: 'widget 2',
              link: {
                url: 'htttps://google.com',
                title: 'widget 2',
                target: null,
              },
              isPresentOnMobile: true,
            },
          },
        ]"
      />
    </div>
    <div class="section">
      <widgets-loader
        :widgets="[
          {
            type: 'link',
            id: 43242,
            data: {
              media: [],
              headline: 'widget 2',
              link: {
                url: 'htttps://google.com',
                title: 'widget 2',
                target: null,
              },
              isPresentOnMobile: true,
            },
          },
        ]"
      />
    </div>
  </div>
</template>

<style>
.index {
  height: 400vh;
}

.home {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  --parallax-duration: 0.5;
  --parallax-y: 50;
  --parallax-ease: 'sine.out';
}

.section {
  position: relative;
  margin-top: 30rem;
  height: 100vh;
  background-color: lightblue;
}
</style>
