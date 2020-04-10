# 📬 Ionic Angular Firebase Chatroom
Skeleton app for a chat room using Ionic 4 / angular
- A simple chat room.
- Every user logged in will be able to send and recieve messages to / from all other users.

<!-- not based on a specific tutorial -->

## FrontEnd
- [Ionic 4 / Angular](https://ionicframework.com/docs/angular/overview)
- [TypeScript](https://www.typescriptlang.org/)
## BackEnd
- [Firebase](https://firebase.google.com/)
## Mobile Integration
- [Capacitor](https://capacitor.ionicframework.com/)
## DataBase
- [Firebase Realtime DB](https://firebase.google.com/)
- [Firebase NPM Package](https://www.npmjs.com/package/firebase)
## Tests
- [Jasmine](https://jasmine.github.io/index.html)
- [Protractor](https://www.protractortest.org/#/)
- [Appium](http://appium.io/)

![Diagram Image](https://github.com/wonderfloyd/Hackathon-Corona/blob/Ionic_Angular_Chatroom/Ionic_Angular_Chatroom/src/assets/ChatroomIonicAngular.png)
# Set Up
## Set up Firebase
1. Open [Firebase conosle](https://console.firebase.google.com/) and start a new project.
2. Click on the `</>` icon to add a web app to your project.
3. Copy the firebase config object values. *- The config object should appear after adding the app. Otherwise, it can be found in __Settings__ (icon next to __Project Overview__) => __Project Settings__ => scroll down to __Your apps__*.
4. Paste the copied values in the corresponding fields in `src\environments\environment.example.ts`, and then delete the `.example` suffix. *- The file should be ignored by `.gitignore`*.
5. In Firebase console, select *Database* on the left, then select *Realtime Database*, then click the *Rules* tab and copy this into the text field: 
```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

6. In the Firebase console, select *Authentication* on the left.
7. In the *Sign-in method* tab select *Email/Password* and enable it.
8. In the *Users* tab add mock users.
## Install Ionic CLI
    npm install -g @ionic/cli
## Install local environment
    cd Ionic_Angular_Chatroom
    npm install
## Start Web Server:
    ionic serve
### Open Browser
http://localhost:8100
### Expected Page
You should first see the Login Page:
![Login Page](https://github.com/wonderfloyd/Hackathon-Corona/blob/Ionic_Angular_Chatroom/Ionic_Angular_Chatroom/src/assets/chatFirstPage.JPG)

After logging in you'll see the Chat Page:
![Chat Page](https://github.com/wonderfloyd/Hackathon-Corona/blob/Ionic_Angular_Chatroom/Ionic_Angular_Chatroom/src/assets/ionicChatPage.JPG)
    
### E2E Tests (web version):
    npm run e2e:web
There's no need to run a Webdriver instance in order to run the tests (as long as the dev server is running on port `8100`).<br>
__BUT: There might be a problem running the tests if you have a global installation of Webdriver.<br>
If you get: *'error: Could not find update-config.json. Run 'webdriver-manager update' to download binaries.'* and running `webdriver-manager update` does not help, try running `cd node_modules/.bin && webdriver-manager update` to update the local dependency of Webdriver.__<br>
*Note: Remember to `cd` back out of `/node_modules/.bin`.*

## Run on Android
1. Download *Android Studio* from the [Android website](https://developer.android.com/studio/).
2. Follow the instructions in [Ionic's guide](https://ionicframework.com/docs/installation/android) and/or in [Android's guide](https://developer.android.com/studio/install) to set everything up.
3. Run `ionic build` to build JS bundles.
4. Run `ionic capacitor add android` to add an Android project using [Capacitor](https://capacitor.ionicframework.com/).
5. Run `ionic capacitor copy` to sync the Android project with the Ionic project.
6. To open the project in *Android Studio*, run `ionic cap run android`, or open the project folder from *Android Studio*.
7. Press the green play button to run the project on your selected device.

_* Note: The instructions assume an Android OS device.<br>
The steps for running the dev build on iOS devices are slightly different (and require a Mac or iOS device).<br>
More info about installing, and using Ionic can be found [here](https://ionicframework.com/docs)_.

**You should be able to login with the users you created in your Firebase project and send messages.**
