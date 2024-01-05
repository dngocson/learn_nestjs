import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'Name1', email: 'Email1@example.com', role: 'ENGINEER' },
    { id: 2, name: 'Name2', email: 'Email2@example.com', role: 'ENGINEER' },
    { id: 3, name: 'Name3', email: 'Email3@example.com', role: 'ENGINEER' },
    { id: 4, name: 'Name4', email: 'Email4@example.com', role: 'ADMIN' },
    { id: 5, name: 'Name5', email: 'Email5@example.com', role: 'ADMIN' },
  ];

  findAll(role?: 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  create(user: { email: string; name: string; role: 'ADMIN' | 'ENGINEER' }) {
    const userByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: userByHighestId[0].id + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(
    id: number,
    updateUser: { email?: string; name?: string; role?: 'ADMIN' | 'ENGINEER' },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUser };
      }
      return user;
    });

    this.findOne(id);
  }

  delete(id: number) {
    const deletedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);

    return deletedUser;
  }
}
