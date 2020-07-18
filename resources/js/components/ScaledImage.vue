<template>
    <img
        :srcset='`${image1x} 1x, ${image2x} 2x, ${image3x} 3x`'
        :src='image1x'
        :class='className'
    >
</template>

<script>
export default {
    props: ["image1x", "image2x", "image3x","className"]
}
</script>