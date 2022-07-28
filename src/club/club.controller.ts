import { Body, Controller, Post } from '@nestjs/common';
import { CreateDTO } from 'src/club/create.dto';
import { ClubService } from 'src/club/club.service';

@Controller('club')
export class AuthController {
  constructor(private clubService: ClubService) {}

  @Post('create')
  async create(@Body() CreateDTO: CreateDTO) {
    const club = await this.clubService.create(CreateDTO);

    return club;
  }
  async findClubs() {
    const clubs = this.clubService.findAll();

    return clubs;
  }
}
