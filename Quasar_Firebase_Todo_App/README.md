# Quasar Firebase Todo (quasar_firebase_todo)

A simple Todo app with Quasar and Firebase

## Tech Stack
### Front end
- [Quasar]()
- [Vue]()

### Back end
- [Firebase]()

## Set Up
Install Quasar-Cli globally:
```bash
npm install -g @quasar/cli
```

If you didn't yet, clone the hackathon's repo:
```bash
git clone https://github.com/wonderfloyd/Hackathon-Corona.git
cd Hackathon-Corona
```

If you did update your code from master:
```bash
git pull origin master
```

Install dependencies:
```bash
npm install
```

## Start the app in development mode
### For the web version:
```bash
quasar dev
```

### Or to run on android
On the first time:

```bash
npm install -g cordova
quasar dev -m android --ide
```

This will open the project in Android Atudio. You can now run it by selecting a device/emulator and clicking the green play button.   
   
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
