import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { BaseInterface } from '../base/base.interface';
import { BaseService } from 'src/base/base.service';

@Injectable()
export class UserService extends BaseService{
  constructor(
    @Inject('UserRepositoryToken')
    private readonly userRepository: Repository<User>,
  ) {
    super();
  }

  async findAll(): Promise<BaseInterface> {
    const users = await this.userRepository.find();
    return this.ReturnJsonData(users);
  }

  async findById(id: string): Promise<BaseInterface> {
    const user = await this.userRepository.findOne(id);
    return this.ReturnJsonData(user);
  }
}
