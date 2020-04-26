import { GetterTree } from 'vuex';
import { TasksState } from './state';

export const userTasks = ({ userTasks }: TasksState) => userTasks;

export default <GetterTree<TasksState, any>> {
  userTasks
}