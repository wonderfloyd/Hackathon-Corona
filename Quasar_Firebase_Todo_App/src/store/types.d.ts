import { AuthState } from './auth/types';
import { UserState } from './user/types';
import { TasksState } from './tasks/types';

export interface RootState {
  auth: AuthState;
  user: UserState;
  tasks: TasksState;
}