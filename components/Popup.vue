<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container" >
                    <button v-if="closeBtn" class="close-btn fas fa-times" @click="close"><img :stroke="0" src="~/assets/medias/cancel.svg"></button>
                    <slot name="body">
                        
                    </slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props: {
        closeBtn: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    methods: {
        ...mapActions({
            close: 'popup/hide'
        })
    }
}
</script>

<style scoped>
    .modal-mask {
        position: fixed;
        z-index: 99999;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        overflow-y: hidden;
        webkit-transform: translate3d(0,0,0);
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        transition: opacity .3s ease;
    }
    .modal-wrapper {
        display: flex;
        margin: auto;
        max-width: 760px;
        padding: 64px;
        width: 100%;
    }
    .modal-container {
        display: flex;
        margin: 0px auto;
        background-color: var(--color2);
        border-radius: 15px;
        border-bottom-right-radius: 40px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        color: #35495e;
        position: relative;
    }
    .close-btn {
        position: absolute;
        right: -10px;
        top: -10px;
        height:30px;
        width:30px;
        cursor: pointer;
        outline: none;
        font-size: 20px;
        color: #35495e;
        border-width: 0px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        background-color: var(--color1);
        transition: all .5s;
    }
    .close-btn:hover {
        transition: all .5s;
        transform: scale(1.1);

    }
    .modal-subcontainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        padding: 20px;
        min-width: 404.48px;
    }
    .modal-enter {
        opacity: 0;
    }
    .modal-leave-active {
        opacity: 0;
    }
    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        transform: scale(1.1);
    }
</style>