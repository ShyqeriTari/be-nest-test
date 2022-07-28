import { Module } from '@nestjs/common';
import { ClubService } from './club.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ClubSchema } from '../models/club.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Club', schema: ClubSchema }])],
  providers: [ClubService],
  controllers: [],
  exports: [ClubService],
})
export class ClubModule {}
