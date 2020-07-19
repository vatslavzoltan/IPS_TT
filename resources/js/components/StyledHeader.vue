<template>
    <h1 class="blog__header" ref="articleHeader">
        {{value}}
    </h1>
</template>

<script>
export default {
    props: ["value"],
    methods: {
        matchHeight () {
            let height = this.$refs.articleHeader.clientHeight;
            // In most cases I use Vuex, but here I am not sure if it is allowed to be used in the test.
            this.$emit('heightToParent', height)
        }
    },
    mounted () {
        this.matchHeight()
    },
}
</script>