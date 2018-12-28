<template>
  <div id="cesiumContainer">
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'cesiumViewer'
}
</script>
<style scoped>
 #cesiumContainer{
   position:absolute;
   top:0;
   bottom:0;
   width:100%;
   height:100%;
   overflow:hidden;
   z-index:9999;
 }
</style>
