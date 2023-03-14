/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Param, Query } from '@nestjs/common';
import { map } from 'rxjs';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private searchService: SearchService) {}

  @Get()
  searchingMusic(@Query('keyword') keyword: string) {
    // return `${keyword}`;
    return this.searchService
      .testApi(keyword)
      .pipe(map((response) => response.data));
  }
}
