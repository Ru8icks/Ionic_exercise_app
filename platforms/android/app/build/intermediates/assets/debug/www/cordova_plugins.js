cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "ionic-plugin-keyboard.keyboard",
    "file": "plugins/ionic-plugin-keyboard/www/android/keyboard.js",
    "pluginId": "ionic-plugin-keyboard",
    "clobbers": [
      "cordova.plugins.Keyboard"
    ],
    "runs": true
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-googlemaps.BaseClass",
    "file": "plugins/cordova-plugin-googlemaps/www/BaseClass.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.BaseArrayClass",
    "file": "plugins/cordova-plugin-googlemaps/www/BaseArrayClass.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.LatLng",
    "file": "plugins/cordova-plugin-googlemaps/www/LatLng.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.LatLngBounds",
    "file": "plugins/cordova-plugin-googlemaps/www/LatLngBounds.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.VisibleRegion",
    "file": "plugins/cordova-plugin-googlemaps/www/VisibleRegion.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Location",
    "file": "plugins/cordova-plugin-googlemaps/www/Location.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.CameraPosition",
    "file": "plugins/cordova-plugin-googlemaps/www/CameraPosition.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Polyline",
    "file": "plugins/cordova-plugin-googlemaps/www/Polyline.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Polygon",
    "file": "plugins/cordova-plugin-googlemaps/www/Polygon.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Marker",
    "file": "plugins/cordova-plugin-googlemaps/www/Marker.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.HtmlInfoWindow",
    "file": "plugins/cordova-plugin-googlemaps/www/HtmlInfoWindow.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Circle",
    "file": "plugins/cordova-plugin-googlemaps/www/Circle.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.TileOverlay",
    "file": "plugins/cordova-plugin-googlemaps/www/TileOverlay.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.GroundOverlay",
    "file": "plugins/cordova-plugin-googlemaps/www/GroundOverlay.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Common",
    "file": "plugins/cordova-plugin-googlemaps/www/Common.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.encoding",
    "file": "plugins/cordova-plugin-googlemaps/www/encoding.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.spherical",
    "file": "plugins/cordova-plugin-googlemaps/www/spherical.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.poly",
    "file": "plugins/cordova-plugin-googlemaps/www/poly.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Geocoder",
    "file": "plugins/cordova-plugin-googlemaps/www/Geocoder.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.LocationService",
    "file": "plugins/cordova-plugin-googlemaps/www/LocationService.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Map",
    "file": "plugins/cordova-plugin-googlemaps/www/Map.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.event",
    "file": "plugins/cordova-plugin-googlemaps/www/event.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.MapTypeId",
    "file": "plugins/cordova-plugin-googlemaps/www/MapTypeId.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.KmlOverlay",
    "file": "plugins/cordova-plugin-googlemaps/www/KmlOverlay.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.KmlLoader",
    "file": "plugins/cordova-plugin-googlemaps/www/KmlLoader.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Environment",
    "file": "plugins/cordova-plugin-googlemaps/www/Environment.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.MarkerCluster",
    "file": "plugins/cordova-plugin-googlemaps/www/MarkerCluster.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Cluster",
    "file": "plugins/cordova-plugin-googlemaps/www/Cluster.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.geomodel",
    "file": "plugins/cordova-plugin-googlemaps/www/geomodel.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.CordovaGoogleMaps",
    "file": "plugins/cordova-plugin-googlemaps/www/googlemaps-cdv-plugin.js",
    "pluginId": "cordova-plugin-googlemaps",
    "clobbers": [
      "plugin.google.maps"
    ]
  },
  {
    "id": "cordova-plugin-googlemaps.CordovaGoogleMaps",
    "file": "plugins/cordova-plugin-googlemaps/www/googlemaps-cdv-plugin.js",
    "pluginId": "cordova-plugin-googlemaps",
    "clobbers": [
      "plugin.google.maps"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.geolocation",
    "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
    "pluginId": "cordova-plugin-geolocation",
    "clobbers": [
      "navigator.geolocation"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.PositionError",
    "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
    "pluginId": "cordova-plugin-geolocation",
    "runs": true
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "cordova-sqlite-storage.SQLitePlugin",
    "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
    "pluginId": "cordova-sqlite-storage",
    "clobbers": [
      "SQLitePlugin"
    ]
  },
  {
    "id": "cordova-universal-links-plugin.universalLinks",
    "file": "plugins/cordova-universal-links-plugin/www/universal_links.js",
    "pluginId": "cordova-universal-links-plugin",
    "clobbers": [
      "universalLinks"
    ]
  },
  {
    "id": "cordova-plugin-buildinfo.BuildInfo",
    "file": "plugins/cordova-plugin-buildinfo/www/buildinfo.js",
    "pluginId": "cordova-plugin-buildinfo",
    "clobbers": [
      "BuildInfo"
    ]
  },
  {
    "id": "cordova-plugin-browsertab.BrowserTab",
    "file": "plugins/cordova-plugin-browsertab/www/browsertab.js",
    "pluginId": "cordova-plugin-browsertab",
    "clobbers": [
      "cordova.plugins.browsertab"
    ]
  },
  {
    "id": "cordova-plugin-inappbrowser.inappbrowser",
    "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "pluginId": "cordova-plugin-inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "ionic-plugin-keyboard": "2.2.1",
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-device": "1.1.7",
  "cordova-plugin-splashscreen": "4.1.0",
  "cordova-plugin-ionic-webview": "1.1.16",
  "cordova-plugin-googlemaps": "2.2.3",
  "cordova-plugin-geolocation": "4.0.1",
  "cordova-plugin-statusbar": "2.4.1",
  "cordova-sqlite-storage": "2.2.0",
  "cordova-universal-links-plugin": "1.2.1",
  "cordova-plugin-buildinfo": "2.0.2",
  "cordova-plugin-browsertab": "0.2.0",
  "cordova-plugin-inappbrowser": "3.0.0"
};
// BOTTOM OF METADATA
});