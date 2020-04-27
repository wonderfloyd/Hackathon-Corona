import { ActionTree, ActionContext } from 'vuex';
import { firestoreAction } from 'vuexfire';

import { TasksState } from './types';
import { RootState } from '../types';
import { userTasksRef, addNewTask, deleteSingleTask, toggleTaskDone } from '../../services/firebase/db.js';
import Task from '../../models/Task';


export const actions: ActionTree<TasksState, RootState> = {
  getCurrentUserTasks: firestoreAction(({ bindFirestoreRef }, id) => {
    return bindFirestoreRef('userTasks', userTasksRef(id));
  }),
  addTask: async function(store: ActionContext<TasksState, RootState>, payload: { title: string, userId: string }) {
    const task = new Task(payload.title, false, payload.userId);
    await addNewTask(task);
  },
  deleteTask: async function(store: ActionContext<TasksState, RootState>, taskId: string) {
    return await deleteSingleTask(taskId);
  },
  toggleTask: async function (store: ActionContext<TasksState, RootState>, task: Task) {
    return await toggleTaskDone(task, !task.done)
  }
};

