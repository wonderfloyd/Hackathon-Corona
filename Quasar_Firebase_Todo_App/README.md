# 📋 Quasar Firebase Todo

A simple Todo app with Quasar and Firebase

This app is loosely based on two tutorials:
1. For setting up the Quasar project and building the Todo app see [here](https://www.youtube.com/watch?v=GV-D85D9KJQ).
2. For integration with VueX and Firebase see [here](https://dev.to/quasar/to-the-stars-with-quasar-firebase-initial-service-structure-1fcf).

## Tech Stack
### Front end
- [Quasar](https://quasar.dev/)
- [Vue](https://vuejs.org/)
- [VueX](https://vuex.vuejs.org/)
- [Vuexfire](https://vuefire.vuejs.org/vuexfire/)

### Back end
- [Firebase](https://firebase.google.com/)

### Mobile Integration
- [Quasar - Cordova](https://quasar.dev/quasar-cli/developing-cordova-apps/introduction)

## Set Up
### Firebase
#### Project
1. Go to [Firebase console](https://console.firebase.google.com/).
2. Click on the _Add projet_ tile, name your project whatever you like, and click _Continue_.
3. Disable the _Google Analytics_ option and create project.
4. Click on the `</>` icon to add a web app to your project. Name it whatever you like and click _Register app_.
5. Copy the app config values into the `.env.example` file in the root of the app's folder, and delete the `.example` suffix. __The file should be ignored by .gitignore__.

#### Authentication
6. Click on the _Authentication_ tab in the left menu, then on _Sign-in method_.
7. In the _Sign-in providers_ list, click on _Google_, enable it and save.
8. In the _Sign-in method_ tab, scroll down to _Authorized domains_, and add `10.0.0.5` to them.

#### Cloud Firestore / DB
9. Click on _Database_ in the left menu and then _Create database_ to create a Cloud Firestore instance.
10. Make sure _Start in propduction mode_ is selected and click _Next_.
11. Choose a location.
12. In Database section, click the _Rules_ tab and replace the default rule with this one: 
```
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth.uid != null;
    }
  }
}
```
13. In your Firestore _Data_ tab you'll need to add two collections, one for users and one for tasks. For each do the following: 
    - Click _Start collection_ at the top of the left most column, and enter `users` / `tasks` as the collection's id.
    - It's mandatory to start a collection with a document, so add whatever you like, and delete it afterwards. 

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

### Cordova
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

2. Select `10.0.0.5` when prompt for external IP.

3. Wait for Android Studio to open and build the project, and then click the green play button on the top to run the app on a selected device / emulator.

Alternativly, you can run an emulator from the Android Studio _AVD Manager_, or connect a device to your computer, and run:
```bash
quasar dev -m cordova -T android
```

