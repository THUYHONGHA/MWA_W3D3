import {Injectable} from '@angular/core';

interface IUser {
  id: string;
  stuID: string;
  name: string;
  email: string;
}
class User implements IUser {
  id: string;
  name: string;
  stuID: string;
  email: string;
  user: Array<IUser>;

  constructor(id: string, name: string, stuID: string, email: string, user?: Array<IUser>) {
    this.id = id;
    this.name = name;
    this.stuID = stuID;
    this.email = email;
    this.user = user || [];
  }

  addUser(user: IUser) {
    this.user.push(user);
  }
}

@Injectable()
export class DbService {
  user: Array<IUser> = [
    new User('1', 'Assad Saad', '12345', 'asaad.mum.edu'),
    new User('2', 'Hong Ha', '12346', 'hongha@gmail.com'),
    new User('3', 'Hong', '12347', 'hong@gmail.com'),
    new User('4', 'Ha', '12348', 'ha@gmail.com')
  ];

  constructor() {
  }

  getData() {
    return this.user;
  }

}
