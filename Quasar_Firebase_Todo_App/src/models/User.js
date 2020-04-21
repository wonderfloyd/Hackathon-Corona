/** Class representing a User. */
export default class User {
  /**
   * @param  {String} id - User id
   * @param  {String} email - User email
   * @param  {String} fullName - User full name
   */
  constructor (id, email, fullName) {
    this.id = id;
    this.email = email;
    this.fullName = fullName;

    return {
      ...this
    };  
  }
}