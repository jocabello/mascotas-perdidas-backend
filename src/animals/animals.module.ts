import { Module } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { AnimalsController } from './animals.controller';

@Module({
  controllers: [AnimalsController],
  providers: [AnimalsService],
  imports: [],
})
export class AnimalsModule {}
