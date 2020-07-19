<template>
    <div :class='`${customClass} progress`'>
        <p class="progress__labels">Step {{currentStep}} of {{stepsTotal}}</p>
        <span class="progress__track">
            <span class="progress__bar" :style='`width: ${progressWidth}%`'></span>
        </span>
    </div>
</template>

<script>
export default {
    props: ["customClass", "stepsTotal", "stepCurrent"],
    data() {
        return {
            currentStep: 1
        }
    },
    watch:{
        stepCurrent: function(newVal) {
            this.currentStep = newVal
        }
    },
    computed: {
        progressWidth: function () {
            return (this.currentStep/this.stepsTotal)*100
        }
  }
}
</script>