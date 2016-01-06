# Proximi.io Cordova Demo Application #

### Installation / Usage ###

1. Edit www/js/index.js
2. find line containing and replace your APP key & Authentication Token. (you can find these on Proximi.io Portal)

```
  proximiio.setIDandAuthToken("YOUR_APP_KEY", "YOUR_AUTH_TOKEN", null, null);
```

3. use "cordova run android --device" or "cordova run ios --device" to run the application on device.