<template>
  <div class="blog">
    <div class="blog__container">
      <div class="blog__row blog__row_align_start blog__row_justify_between">
        <blog-content v-on:heightToParent="getHeaderHeight" :articleHeader='articleHeader'></blog-content>
        <sidebar :topMargin='articleHeaderHeight'></sidebar>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articleHeader:
        "10 Best Photo Apps For Incredible iPhone Photography (2020 Edition)",
      articleHeaderHeight: 0
    };
  },
  methods:{
    getHeaderHeight(value) {
        this.articleHeaderHeight = value
    }
  }
};
</script>