/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * 'License'); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var PROXIMIIO_TOKEN = 'ENTER_YOUR_TOKEN_HERE';

var formatJson = function (obj) {
  return JSON.stringify(obj, null, 4);
};

var app = {
  // Application Constructor

  initialize: function () {
    this.bindEvents();
  },

  bindEvents: function () {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },

  onDeviceReady: function () {
    proximiio.setToken(PROXIMIIO_TOKEN);
    proximiio.setDebugOutput(true);

    proximiio.setOutputTriggerCallback(function (output) {
      document.getElementById('output').innerHTML = '<pre>' + formatJson(output) + '</pre>';
    });

    proximiio.setGeofenceTriggerCallback(function (enter, geofence) {
      document.getElementById('geofence-event').innerHTML = enter ? 'enter' : 'exit';
      document.getElementById('geofence-name').innerHTML = geofence.name;
      document.getElementById('geofence-address').innerHTML = geofence.address;
      document.getElementById('geofence-latitude').innerHTML = geofence.area.lat;
      document.getElementById('geofence-longitude').innerHTML = geofence.area.lng;
      document.getElementById('geofence-radius').innerHTML = geofence.radius;
    });

    proximiio.setPositionChangeCallback(function (coords) {
      document.getElementById('position-latitude').innerHTML = coords.coordinates.lat;
      document.getElementById('position-longitude').innerHTML = coords.coordinates.lon;
      document.getElementById('position-accuracy').innerHTML = coords.accuracy;
    });

    proximiio.setProximiioReadyCallback(function (visitorId) {
      document.getElementById('visitor').innerHTML = visitorId;
      proximiio.requestPermissions();
    });

    proximiio.setBeaconFoundCallback(function (beacon) {
      document.getElementById('beacon-found').innerHTML = '<pre>' + formatJson(beacon) + '</pre>';
    });

    proximiio.setBeaconLostCallback(function (beacon) {
      document.getElementById('beacon-lost').innerHTML = '<pre>' + formatJson(beacon) + '</pre>';
    });
  },
};

app.initialize();
