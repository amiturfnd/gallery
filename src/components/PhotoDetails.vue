<template>
    <div class="photo-details" v-if="photo.user">
       <div class="photo-details__user">
           <div class="user__img">
               <img :src="photo.user.profile_image.small" alt="photo.user.name">
           </div>
           <div>
               <div class="user__name">{{photo.user.name}}</div>
               <div class="user__created-date">{{photo.created_at}}</div>
           </div>
       </div>
        <div class="photo-details__info">
            {{photo.alt_description}}
        </div>

        <img class="photo-details__preview" :src="photo.urls.small" @click="showModal = true" alt="photo.alt_description">

        <div class="photo-details__info">
            {{photo.description}}
        </div>

        <div class="photo-details__likes">
            <span>{{photo.likes}}</span>
            <img src="../assets/thumb_up_alt-black-18dp.svg" alt="likes">
        </div>

        <div class="photo-details__info">
            <span class="info__like-btn" @click="likeImage">Like</span>
            <span class="info__liked-count">({{locallyLiked}}) likes</span>
        </div>

        <photo-modal v-if="showModal" :photo="photo" @modalClose="showModal = false"></photo-modal>

    </div>
</template>

<script>
import PhotoModal from '../components/PhotoModal'

export default {
    name: 'PhotoDetails',
    props: {
        photo: Object
    },

    data() {
        return {
            showModal: false,
            likedImgMap: {}
        }
    },

    components: {
        PhotoModal
    },

    computed: {
        likeText() {
            return `${this.photo.likes} ${this.photo.likes === 1 ? 'like' : 'likes' }`
        },

        locallyLiked() {
            return this.likedImgMap[this.photo.id] ? this.likedImgMap[this.photo.id].likes : 0;
        }
    },

    methods: {
        assignikedPhotos() {
            this.likedImgMap = JSON.parse(localStorage.getItem('likedImgMap') || "{}");
        },
        likeImage() {
            let likedImgMap = this.likedImgMap;
            if(!likedImgMap[this.photo.id]) {
                likedImgMap[this.photo.id] = {
                    alt_description: this.photo.alt_description,
                    likes: 0,
                    urls: {
                        thumb: this.photo.urls.thumb,
                        regular: this.photo.urls.regular
                    }
                }
            }
            likedImgMap[this.photo.id].likes += 1;
            localStorage.setItem('likedImgMap', JSON.stringify(likedImgMap));
            this.assignikedPhotos();
        }
    },

    created() {
        this.assignikedPhotos();
    }

}
</script>

<style scoped lang="scss">
    .photo-details {
        &__user {
            display: flex;
            align-items: center;
            height: 34px;

            img {
                display: block;
                border-radius: 50%;
            }

            .user {
                &__name {
                    font-size: 14px;
                    line-height: 20px;
                    color: #333;
                    padding-left: 12px;
                }

                &__created-date {
                    font-size: 12px;
                    line-height: 14px;
                    color: #666;
                    padding-left: 12px;
                }
            }
        }

        &__info {
            margin-top: 4px;

            .info {
                &__like-btn {
                    background-color: darkorange;
                    color: #fff;
                    cursor: pointer;
                    border: 1px solid coral;
                    border-radius: 2px;
                    font-size: 14px;
                    padding: 2px 8px;
                    display: inline-block;
                    margin-left: 8px;

                    &:hover {
                        background-color: coral;
                    }
                }
                &__liked-count {
                    display: inline-block;
                    margin-left: 8px;
                    font-size: 14px;
                    line-height: 16px;
                }
            }
        }

        &__preview {
            display: block;
            margin: 32px auto 16px;
            width: auto;
            max-height: 300px;
            box-sizing: border-box;
            cursor: pointer;
        }

        &__likes {
            margin-top: 16px;
            text-align: right;

            img {
                margin-left: 8px;
                display: inline-block;
                vertical-align: text-top;
            }
        }
    }
</style>
