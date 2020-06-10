<template>
  <div id="app" class="gallery">
    <div class="gallery__nav">
      <router-link to="/photos">Photo listing</router-link> |
      <router-link to="/liked">Liked photos</router-link>
    </div>
    <div class="gallery__main">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
html,
body {
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
}
.gallery {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 1000px;
  margin: 0 auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 0 32px 16px;
  min-height: 100%;

  &__nav {
    padding: 30px;
    text-align: center;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-active {
        color: #42b983;
      }
    }
  }

  &__main {

  }
}
</style>
