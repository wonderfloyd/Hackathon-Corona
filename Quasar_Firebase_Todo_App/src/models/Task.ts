/** Class representing a Task. */
export default class Task {
  
  title: string;
  done: boolean;
  userId: string;
  id?: string;

  constructor (title: string, done: boolean, userId: string, id?: string) {
    this.title = title;
    this.done = done;
    this.userId = userId;
    this.id = id;

    return {
      ...this
    };  
  }
}