/** Class representing a Task. */
export default class Task {
  
  /**
   * Create a task.
   * @param {String} title - Task's title.
   * @param {String} done - Task's status.
   * @param {String} userId - Id of the user teh task belongs to.
  */
  constructor (title, done, userId) {
    this.title = title;
    this.done = done;
    this.userId = userId;

    return {
      ...this
    };  
  }
}