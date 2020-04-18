<template>
  <q-page padding>
    
    <h4>
      <q-btn @click="login">
        כניסה
      </q-btn>
    </h4>
    
  </q-page>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  methods: {
    ...mapActions('auth', ['userLogin']),
    async login() {
      try {
        const user = await this.userLogin();
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
