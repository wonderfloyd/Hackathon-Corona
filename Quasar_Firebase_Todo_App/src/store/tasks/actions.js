import { firestoreAction } from 'vuexfire';
import { userTasksRef } from '../../services/firebase/db.js';

import Task from '../../models/Task.js';

export const getCurrentUserTasks = firestoreAction(({ bindFirestoreRef }, id) => {
  return bindFirestoreRef('userTasks', userTasksRef(id));
})

export const addTask = async function(store, { title, userId }) {
  const task = new Task(title, false, userId);
  await this.$fb.addNewTask(task);
}

export const deleteTask = async function(store, taskId) {
  return await this.$fb.deleteTask(taskId);
}

export const toggleTaskDone = async function (store, task) {
  return await this.$fb.toggleTaskDone(task, !task.done)
}