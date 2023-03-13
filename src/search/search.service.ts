/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchService {
  private keyWord: string;

  getKeyword(keyword: string): void {
    if (!keyword) {
      throw new console.error('dfd');
    }
    return;
  }
}
