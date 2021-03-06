import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { movie } from '../../entities/movie';


@Module({
  imports: [TypeOrmModule.forFeature([movie])],
  controllers: [MovieController],
  providers: [MovieService]
})
export class MovieModule {

}
