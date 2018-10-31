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

## Android Troubleshooting
```
A problem occurred configuring project ':CordovaLib'.
> Could not resolve all files for configuration ':CordovaLib:classpath'.
   > Could not find intellij-core.jar (com.android.tools.external.com-intellij:intellij-core:26.0.1).
     Searched in the following locations:
         https://jcenter.bintray.com/com/android/tools/external/com-intellij/intellij-core/26.0.1/intellij-core-26.0.1.jar
```
There is a bug in cordova-android that should be fixed @ 7.1.2, after adding platform, you will have to manualy edit platforms/android/CordovaLib/build.gradle, it's necessary
to reverse the order of maven google repository and jcenter()

```
buildscript {
    repositories {
        maven {
            url "https://maven.google.com"
        }
        jcenter()
    }
```

### Run 
In some cases Cordova doesn't recognize the end device correctly and runs the application in simulator instead, 
in that case use --device parameter to force installation on device.
```
  cordova run android --device
  cordova run ios
```

