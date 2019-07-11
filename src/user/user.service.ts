import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { user } from '../../entities/user';
import { user_rol } from '../../entities/user_rol';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(user) private readonly userRepository: Repository<user>,
    @InjectRepository(user_rol) private readonly userRolRepository: Repository<user_rol>
  ){
  }

  async getRols(userId){
    let rols: any = await this.userRolRepository.find({ relations: ["fkRol"], where: { fkUser: { id: userId} } });
    
    console.log("UserService", rols);

    rols = rols.map(rol => {
      return rol.fkRol.name;
    });
    
    console.log("UserService", "========");
    console.log("UserService", rols);
    
    return rols;
  }
}
