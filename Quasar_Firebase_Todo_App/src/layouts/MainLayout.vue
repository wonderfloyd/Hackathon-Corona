<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          קוואסר פיירבייס - רשימת מטלות
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      :width="250"
      v-model="leftDrawerOpen"
    >
      <q-scroll-area class="fit">
        <q-list padding class="menu-list">
          <q-item
            v-if="!isAuthenticated"
            clickabl
            v-ripple
            to="/auth"
            exact
          >
            <q-item-section avatar>
              <q-icon name="account_circle" />
            </q-item-section>

            <q-item-section>
              הרשמה \ התחברות
            </q-item-section>
          </q-item>

          <q-item
            v-else
            clickable
            v-ripple
            @click="logout()"
          >
            <q-item-section avatar>
              <q-icon name="account_circle" />
            </q-item-section>

            <q-item-section>
              יציאה
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/" exact>
            <q-item-section avatar>
              <q-icon name="account_circle" />
            </q-item-section>

            <q-item-section>
              עמוד ראשי
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/about" exact>
            <q-item-section avatar>
              <q-icon name="info" />
            </q-item-section>

            <q-item-section>
              אודות
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend({
  name: 'MainLayout',

  components: {},

  data () {
    return {
      leftDrawerOpen: false
    }
  },

  computed: {
    ...mapGetters('auth', ['isAuthenticated'])
  },

  methods: {
    ...mapActions('auth', ['logout'])
  }

})
</script>
