import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

/**
 * Firestore
 * https: //firebase.google.com/docs/reference/js/firebase.firestore.Firestore.html
 *
 * @return {Interface} returns Firestore
 */
export const firestore = () => {
  return firebase.firestore();
}

// ref to user document
export const userRef = (id) => {
  return firestore().collection('users').doc(id);
}

// ref to user's tasks in task collection
export const userTasksRef = (userId) => {
  return firestore().collection('tasks').where('userId', '==', userId);
}

// ref to tasks collection
export const tasksRef = () => {
  return firestore().collection('tasks');
}

/**
 * @param {String} id - Uid of the user that logging in
 * 
 * @return {Boolean} retutns true if the user is already in firestore
 */
export const isUserRegistered = async (id) => {
  try {
    const data = await userRef(id).get();
    const user = data.data();
    return user ? true : false;
  } catch (err) {
    console.log('unable to get user from db: ', err);
  }
}

/**
 * 
 * @param {Object} newTask new task to be added
 */
export const addNewTask = async (newTask) => {
  try {
    const taskAdded = await tasksRef().add(newTask);
    console.log(`task id: ${taskAdded.id} added`)
  } catch (err) {
    console.log('failed adding new task: ', err);
  } 
}

/**
 * 
 * @param {string} taskId task id to be deleted
 */
export const deleteSingleTask = async (taskId) => {
  try {
    await tasksRef().doc(taskId).delete();
    console.log(`task id: ${taskId} deleted`)
  } catch (err) {
    console.log('failed deleting task: ', err);
  } 
}

/**
 * 
 * @param {Object} task the task to be toggled
 * @param {Boolean} newState new task state
 */
export const toggleTaskDone = async (task, newState) => {
  try {
    await tasksRef().doc(task.id).update({ done: newState })
    console.log('task toggled');
  } catch (err) {
    console.log('toggle failed: ', err);
  }
}

