<template>
    <div class="photo-modal">
        <div class="photo-modal__container">
            <div class="container__header">
                <div class="header__img-name">{{photo.alt_description}}</div>

                <div class="header__close" @click="$emit('modalClose')">
                    <img src="../assets/clear-black-18dp.svg" alt="close">
                </div>
            </div>
            <div class="container__content">
                <img :src="photo.urls.regular" alt="photo.alt_description">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'PhotoModal',

    props: {
        photo: Object
    }


}
</script>

<style lang="scss">
    .photo-modal {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity 0.3s ease;

        &__container {
            width: 800px;
            background-color: #fff;
            border-radius: 5px;
            padding: 24px;

            .container {
                &__header {
                    display: flex;
                    margin-bottom: 16px;

                    .header {
                        &__img-name {
                            flex: 12;
                        }

                        &__close {
                            flex: 1;
                            text-align: right;
                            cursor: pointer;
                        }
                    }
                }
                &__content {
                    min-height: 500px;
                    max-height: 800px;
                    overflow: hidden;

                    img {
                        max-width: 100%;
                        max-height: 100%;
                    }
                }
            }
        }
    }
</style>
