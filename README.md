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
use "cordova run android --device" or "cordova run ios --device" to run the application on device.
