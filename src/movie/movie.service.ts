import { Injectable, Get } from '@nestjs/common';
import { movie } from '../../entities/movie';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MovieService {
    constructor(
        @InjectRepository(movie)
        private readonly movieRepository: Repository<movie>,
      ) {}

      findAll(): Promise<movie[]> {
        return this.movieRepository.find();
      }
    getHello(): string {
        return 'Hello World!';
      }
}

