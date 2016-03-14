/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var PROXIMIIO_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImlzcyI6IjczNzQ4MzdjOTE3MzQzN2VjM2ZmYjRhZWMyNmUxOGI4IiwidHlwZSI6InVzZXIiLCJ1c2VyIjoiUHJveGltaWlvIERldnMiLCJ1c2VyX2lkIjoiMTU1YjEzNmMtNDM2OC00ODdiLTg0MzQtOGRlZGJhNzc1YzVmIiwidGVuYW50X2lkIjoiMmZkOTFmMzUtNTI0My00MjI2LWIxODItZTEzOGQzNDgyNWY1In0.xBV7cKJ82VnExTQMy9J2aOitS59TpbHZHXr-AhwhbLQ";

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        console.log('onDeviceReady');
        proximiio.setToken(PROXIMIIO_TOKEN);
        proximiio.setDebugOutput(true, null, null);

        proximiio.setOutputTriggerCallback(function (output) {
          document.getElementById("output").innerHTML = "<pre>" + JSON.stringify(output, null, 4) + "</pre>";
        });

        proximiio.setInputTriggerCallback(function(enter, geofence) {
            document.getElementById("geofence-event").innerHTML = enter ? "enter" : "exit";
            document.getElementById("geofence-name").innerHTML = geofence.name;
            document.getElementById("geofence-address").innerHTML = geofence.address;
            document.getElementById("geofence-latitude").innerHTML = geofence.area.lat;
            document.getElementById("geofence-longitude").innerHTML = geofence.area.lng;
            document.getElementById("geofence-radius").innerHTML = geofence.radius;
        });

        proximiio.setPositionChangeCallback(function(coords) {
          console.log('should update position div: ' + JSON.stringify(coords, null, 4));
          document.getElementById("position-latitude").innerHTML = coords.coordinates.lat;
          document.getElementById("position-longitude").innerHTML = coords.coordinates.lon;
          document.getElementById("position-accuracy").innerHTML = coords.accuracy;
        });
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
      var parentElement = document.getElementById(id);
      var listeningElement = parentElement.querySelector('.listening');
      var receivedElement = parentElement.querySelector('.received');

      listeningElement.setAttribute('style', 'display:none;');
      receivedElement.setAttribute('style', 'display:block;');
    }
};

app.initialize();
