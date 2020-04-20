/** Class representing a User. */
export default class User {
  /**
   * Create a user.
   * @param {String} id - Place holder for a unique Firebase id.
   * @param {String} email - A valid email.
   * @param {String} fullName - The user's full name.
  */
  id = '';
  email = '';
  fullName = '';

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