<template>
  <div class="go-top" @click="childMethod()">
    <div class="icon-arrow-up"></div>顶部
  </div>
</template>

<script>
export default {
  methods: {
    childMethod() {
      this.$parent.fatherMethod()
    }
  }
}
</script>>
<style lang="scss">
.go-top {
  width: 45px;
  height: 45px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  text-align: center;
  position: fixed;
  z-index: 999;
  bottom: 100px;
  right: 8px;
  color: #fff;
  .icon-arrow-up {
    width: 16px;
    height: 9px;
    margin: 5px auto 2px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAASCAYAAAA6yNxSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0QwQkMyQUM0RkRCMTFFNjkxQ0I4NkY4ODg3MkI3NEEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0QwQkMyQUQ0RkRCMTFFNjkxQ0I4NkY4ODg3MkI3NEEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDRDBCQzJBQTRGREIxMUU2OTFDQjg2Rjg4ODcyQjc0QSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDRDBCQzJBQjRGREIxMUU2OTFDQjg2Rjg4ODcyQjc0QSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpV2dW8AAADHSURBVHjavJTbCgIhEED9uqiItha6PNRun15EFPQBtbRgYzgkixPjOCYcELycA4LGWmuEbIE7cANq6T1S+QHo7Xf0PugvAUN5VkSqvCXkYcSmVEBM/gC6nAiuvCHkY2BORKy1AmLyp5fjHnGEhhypJBFacnEEddGekE8YT7YgIlbcgBx5cgRH3iXKkyLCAztFObKMRLzCiJJyVoTxk5h8qiBHaiKicovXwvJfEZdhQCk5FfEJmLkJcARGBeWI852As/vU3gIMANjHYdmMaYZIAAAAAElFTkSuQmCC)
      no-repeat;
    background-size: contain;
  }
}
</style>
