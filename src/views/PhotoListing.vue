<template>
  <div>
    <h2>Photo listing and details</h2>

    <div class="gallery-layout">
      <photo-list :photos="photos" :selectedPhotoId="selectedPhoto.id" :makeLink="true"></photo-list>
      <router-view :photo="selectedPhoto"></router-view>
    </div>
  </div>
</template>

<script>
  import PhotoList from '../components/PhotoList'
  import axios from 'axios'

  const PHOTOS_URL = "https://api.unsplash.com/photos/?client_id=BI0D1wTnJGkLNMD9TS2TL6uvH1VIz5r05OEEJ1de-As&page=1&per_page=10";

  export default {
    name: 'PhotoListing',

    data() {
      return {
        photos: [],
        selectedPhoto: {}
      }
    },

    components: {
      PhotoList
    },

    methods: {
      changePhotoDetails(photoId) {
        if(photoId) {
          this.selectedPhoto = this.photos.find(({id}) => id === photoId);
        } else {
          this.selectedPhoto = {}
        }
      },

      responseHandler(data) {
        this.photos = data.sort((a, b) => { return b.likes - a.likes});
        this.changePhotoDetails(this.$route.params.id);
      }
    },

    watch: {
      '$route' (to) {
        this.changePhotoDetails(to.params.id);
      }
    },

    created() {
      axios.get(PHOTOS_URL).then((result) => {
        this.responseHandler(result.data);
      });
    }
  }
</script>

<style lang="scss">
  .gallery-layout {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 48px;
  }
</style>