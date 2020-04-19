<template>
  <q-page padding>
    
    <h4>
      כניסה
    </h4>
    <q-btn
      outline
      label="כניסה עם גוגל"
      icon="ion-logo-google"
      @click="login"
    />
    
  </q-page>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  methods: {
    ...mapActions('auth', ['userGoogleLogin']),
    async login() {
      try {
        const user = await this.userGoogleLogin();
        console.log('User logged in: ', user.displayName);
        this.$router.push({
          path: '/'
        })
      } catch (err) {
        console.warn('failed to log in: ', err);
      }
    }
  }
}
</script>
