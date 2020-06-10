<template>
  <div>
    <h2>Liked photos</h2>
    <photo-list :photos="photos" :makeLink="false" @selectPhoto="setSelectedPhoto"></photo-list>
    <photo-modal v-if="showModal" :photo="selectedPhoto" @modalClose="showModal = false"></photo-modal>
  </div>
</template>

<script>
import PhotoList from '../components/PhotoList'
import PhotoModal from '../components/PhotoModal'

export default {
  name: 'PhotoLiked',

  data() {
    return {
      photos: [],
      showModal: false,
      selectedPhoto: {},
      likedImgMap: {}
    }
  },

  components: {
    PhotoList,
    PhotoModal
  },

  methods: {
    likeText(likes) {
      return `${likes} ${likes === 1 ? 'like' : 'likes' }`
    },

    setSelectedPhoto(photo) {
      this.selectedPhoto = photo;
      this.showModal = true;
    },

    responseHandler() {
      let photos = [], id;
      for(id in this.likedImgMap) {
        let photo = this.likedImgMap[id];
        photo.id = id;
        photos.push(photo);
      }

      this.photos = photos.sort((a, b) => { return b.likes - a.likes});
    }
  },

  created() {
    this.likedImgMap = JSON.parse(localStorage.getItem('likedImgMap') || "{}");
    this.responseHandler();
  }
}
</script>
