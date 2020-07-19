<template>
    <aside class="blog__sidebar" :style='`margin-top:${asideTopMargin}px`'>
        <subscribe-form></subscribe-form>
    </aside>
</template>

<script>
export default {
    props: ["topMargin"],
    data() {
        return {
            asideTopMargin: 0
        }
    },
    watch:{
        topMargin: function(newVal) { // watch it
            if(window.screen.width > 768){
                this.asideTopMargin = newVal
            }
        }
    }
}
</script>