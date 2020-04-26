import { ActionTree, ActionContext } from 'vuex';
import { firestoreAction } from 'vuexfire';

import { TasksState } from './state';
import { userTasksRef, addNewTask, deleteSingleTask, toggleTaskDone } from '../../services/firebase/db.js';
import Task from '../../models/Task';

export const getCurrentUserTasks = firestoreAction(({ bindFirestoreRef }, id) => {
  return bindFirestoreRef('userTasks', userTasksRef(id));
})

export const addTask = async function(store: ActionContext<TasksState, any>, payload: { title: string, userId: string }) {
  const task = new Task(payload.title, false, payload.userId);
  await addNewTask(task);
}

export const deleteTask = async function(store: ActionContext<TasksState, any>, taskId: string) {
  return await deleteSingleTask(taskId);
}

export const toggleTask = async function (store: ActionContext<TasksState, any>, task: Task) {
  return await toggleTaskDone(task, !task.done)
}

// export everything compliant to the vuex specification for actions
export default <ActionTree<TasksState, any>> {
  getCurrentUserTasks, addTask, deleteTask, toggleTaskDone
}

