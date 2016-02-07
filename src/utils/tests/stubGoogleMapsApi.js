export default function() {
  window.google = {maps: {}}

  google.maps.Map = class {
    constructor(node, setting) {
      this.node = node
      this.settings = setting
    }

    getCenter() {
      return {lat: () => 5, lng: () => 10}
    }

    getZoom() {
      return 15
    }

    setZoom() {}

    setCenter() {}
  }

  sinon.spy(google.maps.Map.prototype, 'setZoom')
  sinon.spy(google.maps.Map.prototype, 'setCenter')

  google.maps.Marker = class {
    constructor(settings) {
      this.settings = settings
    }

    setMap() {}
  }

  sinon.spy(google.maps.Marker.prototype, 'setMap')
}
