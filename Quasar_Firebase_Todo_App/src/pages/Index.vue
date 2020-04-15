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

    <q-list
      v-else
      separator
      bordered
    >

      <q-item
        v-for="(task, idx) in tasks"
        :key="task.title"
        @click="task.done = !task.done"
        :class="{ 'done' : task.done }"
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-checkbox v-model="task.done" color="teal" class="no-pointer-events" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>
        <q-item-section
          v-if="task.done"
          side
        >
          <q-btn
            @click.stop="deleteTask(idx)"
            flat
            round
            dense
            color="primary"
            icon="delete"
          />
        </q-item-section>
      </q-item>

    </q-list>
  </q-page>
</template>

<script>
export default {
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
  .done {
    .q-item__label {
      text-decoration: line-through;
      color: #888;
    }
  }

  div > h4 {
    color: #69378e;
  }
</style>
