import BaseModel from './BaseModel.js';
import { ifcUser } from './interface.js';

class User extends BaseModel implements ifcUser {
  static idCounter: number = 0;
  readonly id: number;
  private _password: string;

  public changePassword(newPassword: string): void {
    if (!newPassword || !newPassword.trim()) {
      throw new Error('Password must be a string');
    }
    this._password = newPassword;
  }

  get info(): string {
    return `ID: ${this.id}; name: ${this.name}; Email: ${this.email}`;
  }

  constructor(
    public name: string,
    private _email: string
  ) {
    super();
    this.name = name;
    this.email = _email;
    this._password = '';
    this.id = User.idCounter;

    User.idCounter += 1;
  }

  get email(): string {
    return this._email;
  }

  protected set email(email: string) {
    if (!email.includes('@') || !email.trim()) {
      throw new Error('Invalid email');
    } else {
      this._email = email;
    }
  }

  set password(NewPassword: string) {
    this._password = atob(NewPassword);
  }
}

export default User;
