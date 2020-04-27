import { GetterTree } from 'vuex';
import { TasksState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<TasksState, RootState> = {
  userTasks: ({ userTasks }: TasksState) => userTasks
};