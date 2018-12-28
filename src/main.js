import Vue from 'vue'
import App from './App'
import router from './router'
import Cesium from 'cesium/Cesium'
/* eslint-disable */
import widgets from 'cesium/Widgets/widgets.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
  mounted () {
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxNzUwM2FmOS1lMDVmLTRlNzAtOTgyMy02YWRiOGE1ZTM0ZDQiLCJpZCI6NjIzMywic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU0NTcwMTkzMn0.SwvBp-6vZPUMlId3p_OzK5PV5G4c-JZz5XLO9ZCzyII'
    var viewer = new Cesium.Viewer('cesiumContainer', {
      geocoder: false,
      homeButton: false,
      sceneModePicker: false,
      baseLayerPicker: false,
      navigationHelpButton: false,
      animation: false,
      creditsDisplay: false,
      timeline: false,
      fullscreenButton: false,
      vrButton: false,
      scene3DOnly: true,
      selectionIndicator: false
    })
    Vue.propotype.Viewer = viewer
    var scene = viewer.scene
    scene.debugShowFramesPerSecond = true
  }
})
