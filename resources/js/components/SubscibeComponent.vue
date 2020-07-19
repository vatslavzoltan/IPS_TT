<template>
    <div class="subscribe">
        <styled-button text="Send Me The Tips" v-on:clickHandler='togglePopup(true)' customClass="subscibe__open-popup"></styled-button>
        <subscribe-popup v-if="showSubscribePopup" v-on:closeHandler='togglePopup(false)'></subscribe-popup>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showSubscribePopup: false
        }
    },
    methods:{
        togglePopup(show){
            this.showSubscribePopup = show
            const bodyEl = document.body
            show ? bodyEl.classList.add("fixed") : bodyEl.classList.remove("fixed");
        }
  }
}
</script>