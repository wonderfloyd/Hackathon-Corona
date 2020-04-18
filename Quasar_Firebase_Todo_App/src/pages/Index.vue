<template>
  <q-page class="q-pa-lg">
    <h3 class="q-mt-none">רשימת מטלות</h3>

    <div class="row q-pa-sm q-mb-sm">
      <q-input
        @keyup.enter="addTask"
        v-model="newTask"
        class="col"
        color="teal"
        filled
        label="הוסף משימה"
        dense
      >
        <template v-slot:append>
          <q-btn
            @click="addTask"
            round
            dense
            flat
            icon="add"
          />
        </template>
      </q-input>
    </div>

    <div v-if="!tasks.length" class="flex flex-center">
      <h4>אין משימות נוספות! 😎</h4>
    </div>

    <TaskList v-else :tasks="tasks" :deleteTask="deleteTask" />

  </q-page>
</template>

<script>
import TaskList from '../components/TaksList';
export default {
  components: { TaskList },
  data() {
    return {
      newTask: '',
      tasks: []
    }
  },
  methods: {
    deleteTask(idx) {
      this.tasks.splice(idx, 1);
    },
    addTask() {
      console.log('addTask: ', this.newTask);
      if (this.newTask) {
        this.tasks.push({
          title: this.newTask,
          done: false
        });
        this.newTask = '';
      }
    }
  }
}
</script>

<style scoped lang="scss">
  div > h4 {
    color: #69378e;
  }
</style>
