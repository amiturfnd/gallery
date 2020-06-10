<template>
    <div class="grid-container">
      <photo-card v-for="photo in photos"
                  :photo="photo"
                  :selectedPhotoId="selectedPhotoId"
                  :makeLink="makeLink"
                  @selectPhoto="$emit('selectPhoto', photo)"
                  :class="{'grid-container__img-card': !makeLink}"
                  :key="photo.id">
      </photo-card>
    </div>
</template>

<script>
import PhotoCard from '../components/PhotoCard'

export default {
  name: 'PhotoList',

  props: {
    photos: Array,
    selectedPhotoId: String,
    makeLink: Boolean
  },

  components: {
    PhotoCard
  }

}
</script>

<style lang="scss">
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-gap: 0.8em;

    &__img-card {
      cursor: pointer;
    }

    img {
      width: 100%;
      height: auto;
    }
  }
</style>
