/** Class representing a User. */
export default class User {

  public uid: string;
  public email: string;
  public displayName: string;
  
  constructor (uid: string, email: string, displayName: string) {
    this.uid = uid;
    this.email = email;
    this.displayName = displayName;

    return {
      ...this
    };  
  }
}