<template>
    <button :class='`${customClass} subscribe__button`' @click="(e)=>{e.preventDefault(); $emit('clickHandler')}" >
        {{text}}
    </button>
</template>

<script>
export default {
    props: ["text", "customClass"]
}
</script>