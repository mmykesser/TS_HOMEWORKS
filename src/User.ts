import BaseModel from './BaseModel.js';

class User extends BaseModel {
  static idCounter: number = 0;
  id: number;
  name: string;
  #email: string = '';
  #password: string = '';

  changePassword(newPassword: string) {
    if (!newPassword || !newPassword.trim()) {
      throw new Error('Password must be a string');
    }
    this.#password = newPassword;
  }

  get info(): string {
    return `ID: ${this.id}; name: ${this.name}; Email: ${this.email}`;
  }

  constructor(name: string, email: string) {
    super();
    this.name = name;
    this.email = email;

    this.id = User.idCounter;

    User.idCounter += 1;
  }

  get email(): string {
    return this.#email;
  }

  set email(email: string) {
    if (!email.includes('@') || !email.trim()) {
      throw new Error('Invalid email');
    } else {
      this.#email = email;
    }
  }
}

export default User;
