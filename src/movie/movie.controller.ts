import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateDto } from './dto/create.dto'

@Controller('movie')
export class MovieController {
    constructor(private readonly movieService: MovieService) {}
    
    @Get('all')
    getAll() {
        return this.movieService.findAll();
    }

    @Get('get/:id/:id2')
    getById(@Param('id') id, @Param('id2') id2) {
        console.log(id);
        return this.movieService.getById(id);
    }

    @Post()
    create(@Body() body: CreateDto) {
        console.log(body);
        return this.movieService.create(body);
    }
}
