import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Club } from 'src/types/club';
import { CreateDTO } from './create.dto';

@Injectable()
export class ClubService {
  constructor(@InjectModel('Club') private clubModel: Model<Club>) {}

  async create(CreateDTO: CreateDTO) {
    const createdClub = new this.clubModel(CreateDTO);

    await createdClub.save();
    return createdClub;
  }
  async findAll() {
    const clubs = this.clubModel.find();

    return clubs;
  }
}
