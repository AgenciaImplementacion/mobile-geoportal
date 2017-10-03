require('ol/ol.css');
require('./map.css');
import Map from 'ol/map';
import View from 'ol/view';
import TileLayer from 'ol/layer/tile';
import XYZ from 'ol/source/xyz';
import Overlay from 'ol/overlay';

/**
 * Elements that make up the popup.
 */
var container = document.getElementById('popup')
var content = document.getElementById('popup-content')
var closer = document.getElementById('popup-closer')

/**
 * Create an overlay to anchor the popup to the map.
 */
window.overlay = new Overlay( /** @type {olx.OverlayOptions} */ ({
  element: container,
  autoPan: true,
  autoPanAnimation: {
    duration: 250
  }
}))

/**
 * Add a click handler to hide the popup.
 * @return {boolean} Don't follow the href.
 */
closer.onclick = function() {
  overlay.setPosition(undefined);
  closer.blur();
  return false;
};


window.map = new Map({
  target: 'map',
  overlays: [overlay],
  layers: [
    new TileLayer({
      source: new XYZ({
        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      })
    })
  ],
  view: new View({
    center: [-8282907.32946053, 590390.74892778],
    zoom: 16
  })
});

window.map.getLayer = _getLayerById;


function _getLayerById(id) {
  var layers = window.map.getLayers().getArray();
  return layers.find(function(layer) {
    var source = layer.getSource();
    if (typeof(source.config) !== 'undefined') {
      return source.config.id === id;
    }
    return false;
  });
}
