import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { user } from '../../entities/user';
import { rol } from '../../entities/rol';
import { user_rol } from '../../entities/user_rol';

@Module({
  imports: [
    TypeOrmModule.forFeature([user, rol, user_rol]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
