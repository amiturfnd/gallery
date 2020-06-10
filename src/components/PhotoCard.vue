<template>
    <div class="photo-card" :class="{'photo-card--selected': isSelectedPhoto}" @click="$emit('selectPhoto', photo)">
        <component v-bind:is="imageParentTag" :to="{name: 'photoDetails', params: {id: photo.id}}" class="photo-card__img">
            <img :src="photo.urls.thumb" :alt="photo.alt_description">
        </component>
        <div class="photo-card__likes">
            {{likeText}}
        </div>
    </div>
</template>

<script>

export default {
    name: 'PhotoCard',

    props: {
        photo: Object,
        selectedPhotoId: String,
        makeLink: Boolean
    },

    computed: {
        likeText() {
            return `${this.photo.likes} ${this.photo.likes === 1 ? 'like' : 'likes' }`
        },

        imageParentTag() {
            return this.makeLink ? 'router-link' : 'div';
        },

        isSelectedPhoto() {
            return this.selectedPhotoId === this.photo.id;
        }
    }
}
</script>

<style lang="scss">
    .photo-card {
        border: 1px solid #eeeeee;
        border-radius: 2px;

        &__img {
            display: flex;
            align-items: center;
            min-height: 167px;
            height: calc(100% - 28px);
        }

        &__likes {
            font-size: 12px;
            font-weight: normal;
            line-height: 14px;
            padding: 6px 8px 8px;
        }

        &--selected {
            border-color: darkslateblue;
        }
    }
</style>
