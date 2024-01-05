import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users') // /users
export class UsersController {
  /*
  All static routes must be infront of the dynamic routes

    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
  */
  constructor(private readonly userService: UsersService) {}
  @Get() // GET /users or ?users?role=value
  findAll(@Query('role') role?: 'ENGINEER' | 'ADMIN') {
    return this.userService.findAll(role);
  }

  @Post() // POST /users
  create(
    @Body() user: { name: string; email: string; role: 'ENGINEER' | 'ADMIN' },
  ) {
    return this.userService.create(user);
  }

  @Get(':id') // GET /users/:id
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id') // PATCH /users/:id
  update(
    @Param('id') id: string,
    @Body()
    userUpdate: { name?: string; email?: string; role?: 'ENGINEER' | 'ADMIN' },
  ) {
    return this.userService.update(+id, userUpdate);
  }

  @Delete(':id') // GET /users/:id
  deleteOne(@Param('id') id: string) {
    return this.userService.delete(+id);
  }
}
