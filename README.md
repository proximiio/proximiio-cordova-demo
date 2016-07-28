# Proximi.io Cordova Demo Application #

## Installation / Usage ###

### Clone this repository
```
  git clone https://github.com/proximiio/proximiio-cordova-demo.git
```

### Install dependencies (execute inside cloned proximiio-cordova-demo directory)
```
  npm install
```

### Enter credentials
Edit www/js/index.js find line containing "PROXIMIIO_TOKEN" and replace your Authentication Token. You can find this from the Proximi.io Web Portal Applications section)

```
  var PROXIMIIO_TOKEN = "YOUR_TOKEN";
```

### Add cordova platform of your choice
```
   cordova platform add ios
   cordova platform add android
```

### Run 
In some cases Cordova doesn't recognize the end device correctly and runs the application in simulator instead, 
in that case use --device parameter to force installation on device.
```
  cordova run android --device
  cordova run ios
```

