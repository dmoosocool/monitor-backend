import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { BaseInterface, TypeError } from '../base/base.interface';

@Controller('user')
export class UserController {

  constructor(
    private readonly userService: UserService,
  ) {}

  @Get()
  async getAll(): Promise<BaseInterface> {
    return await this.userService.findAll();
  }

  @Get(':id')
  async getById( @Param('id') id: string): Promise<BaseInterface> {
    if ( ~~id > 0) {
      return await this.userService.findById(id);
    } else {
      return TypeError;
    }
  }
}
