import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/Entities/user.entity';
import { Repository } from 'typeorm';
import { UserParam } from './utils/types';
import { Updateuserparam } from './CreateUser.dto';

@Injectable()
export class UserServices {
  constructor(@InjectRepository(User) private userRep: Repository<User>) {}
  //our method will take a parameter called user details  their types should be of useParam type we defined in utils
  addUser(CreateDetails: UserParam) {
    const newUser = this.userRep.create({
      ...CreateDetails,
      createdAt: new Date(),
    });
    if (newUser) {
      return this.userRep.save(newUser);
    }
  }
  updateUser(id: number, updateUserDetails: Updateuserparam) {
    return this.userRep.update({ id }, { ...updateUserDetails });
  }
  getUsers() {
    return this.userRep.find();
  }
  deleteUser(): string {
    return 'this will delete a user';
  }
}
