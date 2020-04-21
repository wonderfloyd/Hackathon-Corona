import { firestoreAction } from 'vuexfire'
import { userTasksRef } from '../../services/firebase/db.js'

export const getCurrentUserTasks = firestoreAction(({ bindFirestoreRef }, id) => {
  return bindFirestoreRef('userTasks', userTasksRef(id));
})

export const addTask = async function(store, { title, userId }) {
  await this.$fb.addNewTask({
    title,
    done: false,
    userId,
  });
}

export const deleteTask = async function(store, taskId) {
  return await this.$fb.deleteTask(taskId);
}

export const toggleTaskDone = async function (store, task) {
  return await this.$fb.toggleTaskDone(task, !task.done)
}