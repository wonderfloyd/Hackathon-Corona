# Skeleton app for a chat room using Ionic 4 / angular

A simple chat room. Every user logged in will be able to send and recieve messages to / from all other users.  
See [Issues](https://github.com/wonderfloyd/Skeleton_Chatroom_Ionic_Angular/issues) for what's still missing / not working properley.

----
## Install and run dev enviroment
### Set up Firebase
1. Open [Firebase conosle](https://console.firebase.google.com/) and start a new project.
1. Click on the `</>` icon to add a web app to your project.
1. Copy the firebase config object values. *- The config object should appear after adding the app. Otherwise, it can be found in __Settings__ (icon next to __Project Overview__) => __Project Settings__ => scroll down to __Your apps__*.
1. Paste the copied values in the corresponding fields in `src\environments\environment.example.ts`, and then delete the `.example` suffix. *- The file should be ignored by `.gitignore`*.
1. In Firebase console, select *Database* on the left, then select *Realtime Database*, then click the *Rules* tab and copy this into the text field: 
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

### Set up local enviroment on your devices
1. Clone the repo.
2. Run `npm install -g @ionic/cli`.  
3. `cd` into the repo and run `npm install`.

##### Web:
To run dev web version:  

5. Run `ionic serve`. 

##### Android
Or to run on Android:  

5. Download *Android Studio* from the [Android website](https://developer.android.com/studio/).
6. Follow the instructions in [Ionic's guide](https://ionicframework.com/docs/installation/android) and/or in [Android's guide](https://developer.android.com/studio/install) to set everything up.
7. Run `ionic build` to build JS bundles.
8. Run `ionic capacitor add android` to add an Android project using [Capacitor](https://capacitor.ionicframework.com/).
9. Run `ionic capacitor copy` to sync the Android project with the Ionic project.
10. To open the project in *Android Studio*, run `ionic cap run android`, or open the project folder from *Android Studio*.
11. Press the green play button to run the project on your selected device.

_* Note: The instructions assume an Android OS device. The steps for running the dev build on iOS devices are slightly different (and require a Mac or iOS device). More info about installing, and using Ionic can be found [here](https://ionicframework.com/docs)_.

**You should be able to login with the users you created in your Firebase project and send messages.**

## Running tests (e2e)
To run tests (web version):
1. Run the dev web server with `ionic serve`.
2. Run `npm run e2e:web`.

There's no need to run a Webdriver instance in order to run the tests (as long as the dev server is running on port `8100`). __BUT: There might be a problem running the tests if you have a global installation of Webdriver. If you get: *'error: Could not find update-config.json. Run 'webdriver-manager update' to download binaries.'* and running `webdriver-manager update` does not help, try running `cd node_modules/.bin && webdriver-manager update` to update the local dependency of Webdriver.__
*Note: Remeber to `cd` back out of `/node_modules/.bin`.*
