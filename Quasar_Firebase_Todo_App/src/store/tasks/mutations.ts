import  { MutationTree } from 'vuex';
import { TasksState } from './state'
import Task from '../../models/Task'; 

export const setCurrentUserTasks = (state: TasksState, data: Task[]) => {
  state.userTasks = data;
}

export default <MutationTree<TasksState>> {
  setCurrentUserTasks
}