import BaseModel from './BaseModel.js';

class User extends BaseModel {
  static id = 0;
  name = null;
  #email = null;
  #password = null;

  changePassword(newPassword) {
    if (typeof newPassword !== 'string') return;
    this.#password = newPassword;
  }

  get info() {
    return `ID: ${this.id}' 'name:${this.name}' 'email:${this.email}'`;
  }

  test() {
    console.log(this.#password);
  }

  constructor({ name, email }) {
    super();
    this.name = name;
    this.email = email;

    this.id = User.id;
    User.id += 1;
  }

  set email(email) {
    if (email.includes('@')) {
      this.#email = email;
    } else {
      throw new Error(`Invalid email: ${email}`);
    }
  }

  get email() {
    return this.#email;
  }
}

export default User;
