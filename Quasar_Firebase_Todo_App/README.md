# Quasar Firebase Todo (quasar_firebase_todo)

A simple Todo app with Quasar and firebase

## Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

## run on android
on the first time:

```bash
npm install -g cordova
quasar mode add cordova
quasar dev -m android --ide
```

Then in android studio build the project and run.  
After that you can just have an enulator running or a device coneccted, and run:
```bash
quasar dev -m cordova -T android
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
