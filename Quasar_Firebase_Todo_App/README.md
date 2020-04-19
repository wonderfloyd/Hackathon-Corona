# 📋 Quasar Firebase Todo

A simple Todo app with Quasar and Firebase

## Tech Stack
### Front end
- [Quasar](https://quasar.dev/)
- [Vue](https://vuejs.org/)
- [VueX](https://vuex.vuejs.org/)

### Back end
- [Firebase](https://firebase.google.com/)

### Mobile Integration
- [Quasar - Cordova](https://quasar.dev/quasar-cli/developing-cordova-apps/introduction)

## Set Up
### Firebase
1. Go to [Firebase console](https://console.firebase.google.com/).
2. Click on the _Add projet_ tile, name your project whatever you like, and click _Continue_.
3. Disable the _Google Analytics_ option and create project.
4. Click on the `</>` icon to add a web app to your project. Name it whatever you like and click _Register app_.
5. Copy the app config values into the `.env.example` file in the root of the app's folder, and delete the `.example` suffix. __The file should be ignored by .gitignore__.
6. Click on the _Authentication_ tab in the left menu, then on _Sign-in method_.
7. In the _Sign-in providers_ list, click on _Google_, enable it and save.

### Quasar
1. Install Quasar-Cli globally:
```bash
npm install -g @quasar/cli
```

2. If you didn't yet, clone the hackathon's repo:
```bash
git clone https://github.com/wonderfloyd/Hackathon-Corona.git
cd Hackathon-Corona
```

3. If you did, update your code from master:
```bash
git pull origin master
```

4. Navigate to the app's folder, and install the dependencies:
```bash
cd Quasar_Firebase_Todo_App
npm install
```

### Set up the Android project
1. Install Cordova globally:
```bash
npm install -g cordova
```

## Start the app in development mode
### For the web version:
```bash
quasar dev
```

### Or to run on android
1. Open the project in Android Studio
```bash
quasar dev -m android --ide
```
_Note: The first time you run this it will take a little longer than usual to build and install the project and all of its dependencies._

2. Wait for Android Studio to open and build the project, and then click the green play button on the top to run the app on a selected device / emulator.

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
