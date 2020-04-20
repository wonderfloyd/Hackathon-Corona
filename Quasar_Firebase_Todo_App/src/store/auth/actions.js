import User from '../../models/User.js'

const addUserToUsersCollection = async (state, userRef) => {
  const
    { uid, email, displayName } = state,
    user = new User(uid, email, displayName);
  userRef.set(user);
}

export function routeUserToAuth () {
  this.$router.push({
    path: '/auth'
  });
}

export const userGoogleLogin = async function(store, payload) {
  const $fb = this.$fb;

  try {
    const googleAuthRes = await $fb.loginWithGoogle();
    return googleAuthRes;
  } catch (err) {
    console.log('problem logging in: ', err);
  }
}

export const registerNewUsers = async function(store, payload) {
  const $fb = this.$fb;
  const res = await $fb.getGoogleLoginResult();

  // Check if redirecting from google login 
  if (res) {
    const { uid, email, displayName } = res;
    const isUser = await $fb.isUserRegistered(uid);
    
    // Check if user is alread registered
    if (!isUser) {
      console.log('registering user: ', displayName);
      const userRef = $fb.userRef('users', uid);
      return addUserToUsersCollection({ uid, email, displayName }, userRef);
    }

    console.log('user exists: ', displayName);
    return;
  }
  return res;
}

export const logoutUser = async function ({ commit }, payload) {
  const $fb = this.$fb;
  await $fb.logoutUser();
}

