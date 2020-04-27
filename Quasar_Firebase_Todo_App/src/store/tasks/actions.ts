import { ActionTree, ActionContext } from 'vuex';
import { firestoreAction } from 'vuexfire';

import { TasksState } from './types';
import { RootState } from '../types';
import DbService from '../../services/firebase/db';
import Task from '../../models/Task';

const db = new DbService();

export const actions: ActionTree<TasksState, RootState> = {
  getCurrentUserTasks: firestoreAction(({ bindFirestoreRef }, id) => {
    return bindFirestoreRef('userTasks', db.userTasksRef(id));
  }),
  addTask: async function(store: ActionContext<TasksState, RootState>, payload: { title: string, userId: string }) {
    const task = new Task(payload.title, false, payload.userId, '');
    await db.addNewTask(task);
  },
  deleteTask: async function(store: ActionContext<TasksState, RootState>, taskId: string) {
    return await db.deleteSingleTask(taskId);
  },
  toggleTask: async function (store: ActionContext<TasksState, RootState>, task: Task) {
    return await db.toggleTaskDone(task, !task.done)
  }
};

