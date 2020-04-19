# 📋 Quasar Firebase Todo

A simple Todo app with Quasar and Firebase

## Tech Stack
### Front end
- [Quasar](https://quasar.dev/)
- [Vue](https://vuejs.org/)
- [VueX](https://vuex.vuejs.org/)

### Back end
- [Firebase](https://firebase.google.com/)

## Set Up
### Firebase
1. Go to [Firebase console](https://console.firebase.google.com/).
2. Click on the _Add projet_ tile, name your project whatever you like, and click _Continue_.
3. Disable the _Google Analytics_ option and create project.
4. Click on the `</>` icon to add a web app to your project. Name it whatever you like and click _Register app_. 

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
cd Quasar_Firebase_todo_app
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
