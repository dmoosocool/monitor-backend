import { Controller, Get, Request, Req } from '@nestjs/common';

@Controller('cats')
export class CatsController {

  @Get()
  findAll() {
    return 'index router';
  }
}
