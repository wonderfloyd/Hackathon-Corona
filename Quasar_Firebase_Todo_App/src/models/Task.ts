/** Class representing a Task. */
export default class Task {
  
  title: string;
  done: boolean;
  userId: string;

  constructor (title: string, done: boolean, userId: string) {
    this.title = title;
    this.done = done;
    this.userId = userId;

    return {
      ...this
    };  
  }
}