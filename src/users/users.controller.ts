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

@Controller('users') // /users
export class UsersController {
  /*
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id


    All static routes must be infront of the dynamic routes
  */

  @Get() // GET /users or ?users?role=value
  findAll(@Query('role') role?: 'intern' | 'engineer') {
    return [role];
  }

  @Post() // POST /users
  create(@Body() user: { name: string; email: string; role: string }) {
    return { user };
  }

  @Get('interns') // GET /users/interns
  findAllIntern() {
    return [];
  }

  @Get(':id') // GET /users/:id
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Patch(':id') // PATCH /users/:id
  update(
    @Param('id') id: string,
    @Body() userUpdate: { name: string; email: string; role: string },
  ) {
    return { id, userUpdate };
  }

  @Delete(':id') // GET /users/:id
  deleteOne(@Param('id') id: string) {
    return { id };
  }
}
