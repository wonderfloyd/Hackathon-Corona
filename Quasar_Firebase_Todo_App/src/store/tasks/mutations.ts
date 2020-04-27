import  { MutationTree } from 'vuex';
import { TasksState } from './types';
import Task from '../../models/Task'; 

export const mutations: MutationTree<TasksState> = {
  setCurrentUserTasks: (state: TasksState, data: Task[]) => {
    state.userTasks = data;
  }
}

// export default <MutationTree<TasksState>> {
//   setCurrentUserTasks
// }