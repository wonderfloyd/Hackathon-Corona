import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import Task from '../../models/Task';

// const { Firestore, CollectionReference } = firebase.firestore;

export default class DbService {

  firestore = (): firebase.firestore.Firestore => {
    return firebase.firestore();
  }

  // ref to tasks collection
  private tasksRef = (): firebase.firestore.CollectionReference => {
    return this.firestore().collection('tasks');
  }

  // ref to user document
  public userRef = (id: string): firebase.firestore.DocumentReference => {
    return this.firestore().collection('users').doc(id);
  }

  // ref to user's tasks in task collection
  public userTasksRef = (userId: string): firebase.firestore.Query => {
    return this.firestore().collection('tasks').where('userId', '==', userId);
  }

  public isUserRegistered = async (id: string): Promise<boolean> => {
    try {
      const data = await this.userRef(id).get();
      const user = data.data();
      const userExists = user ? true : false;
      return userExists;
    } catch (err) {
      console.log('unable to get user from db: ', err);
      return err;
    }
  }

  public addNewTask = async (newTask: Task): Promise<void> => {
    try {
      const taskAdded = await this.tasksRef().add(newTask);
      console.log(`task id: ${taskAdded.id} added`)
    } catch (err) {
      console.log('failed adding new task: ', err);
    } 
  }

  public deleteSingleTask = async (taskId: string): Promise<void> => {
    try {
      await this.tasksRef().doc(taskId).delete();
      console.log(`task id: ${taskId} deleted`)
    } catch (err) {
      console.log('failed deleting task: ', err);
    } 
  }

  public toggleTaskDone = async (task: Task, newState: boolean): Promise<void> => {
    try {
      await this.tasksRef().doc(task.id).update({ done: newState })
      console.log(`task ${task.id} toggled`);
    } catch (err) {
      console.log('toggle failed: ', err);
    }
  }

}
