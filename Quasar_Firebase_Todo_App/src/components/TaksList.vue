<template>
  <q-list
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
</template>

<script>
export default {
  name: 'TaskList',
  props: ['tasks', 'deleteTask']
}
</script>

<style scoped lang="scss">
  .done {
    .q-item__label {
      text-decoration: line-through;
      color: #888;
    }
  }
</style>