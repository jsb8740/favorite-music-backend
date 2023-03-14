/*
https://docs.nestjs.com/modules
*/

import { HttpModule } from '@nestjs/axios/dist';
import { Module } from '@nestjs/common';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';

@Module({
  imports: [HttpModule],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
