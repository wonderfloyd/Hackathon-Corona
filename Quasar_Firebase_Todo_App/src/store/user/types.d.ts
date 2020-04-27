import User from '../../models/User';

export interface UserState {
  currentUser: User | null
}