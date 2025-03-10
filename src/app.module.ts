import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './databse/database.module';
import { ConfigModule } from '@nestjs/config';
import { AnimalsModule } from './animals/animals.module';
import { OwnerModule } from './owner/owner.module';

@Module({
  imports: [DatabaseModule, ConfigModule.forRoot(), AnimalsModule, OwnerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
