/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';

@Controller('search')
export class SearchController {
  @Get()
  async searchingMusic(): Promise<string> {
    return 'search Test';
  }
}
