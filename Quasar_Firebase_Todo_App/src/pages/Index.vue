<template>
  <q-page class="q-pa-lg">
    <h3 class="q-mt-none">רשימת מטלות</h3>

    <p v-if="currentUser">{{ currentUser.email }}</p>

    <div class="row q-pa-sm q-mb-sm">
      <q-input
        @keyup.enter="addNewTask"
        v-model="title"
        class="col"
        color="teal"
        filled
        label="הוסף משימה"
        dense
      >
        <template v-slot:append>
          <q-btn
            @click="addNewTask"
            round
            dense
            flat
            icon="add"
          />
        </template>
      </q-input>
    </div>

    <div v-if="!userTasks.length" class="flex flex-center">
      <h4>אין משימות נוספות! 😎</h4>
    </div>

    <TaskList v-else :tasks="userTasks" :deleteTask="deleteTask" :toggleTask="toggleTask" />

  </q-page>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex'; 
import TaskList from '../components/TaksList.vue';
// import { getUserTasks } from '../services/firebase/db.js';
export default Vue.extend({
  components: { TaskList },
  data() {
    return {
      title: ''
    }
  },
  methods: {
    ...mapActions('tasks', ['toggleTask', 'addTask', 'deleteTask']),
    addNewTask(): void {
      if (this.title) {
        this.addTask({ title: this.title, userId: this.currentUser.uid })
        this.title = '';
      }
    }
  },
  computed: {
    ...mapGetters('user', ['currentUser']),
    ...mapGetters('tasks', ['userTasks']),
  }
})
</script>

<style scoped lang="scss">
  div > h4 {
    color: #0d2c50;
  }
</style>
