/*
https://docs.nestjs.com/providers#services
*/
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class SearchService {
  readonly GOOGLE_API_BASE_URL = 'https://www.googleapis.com';

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  testApi(keyWord: string) {
    const requestURL = new URL('/youtube/v3/search', this.GOOGLE_API_BASE_URL);

    // 10 == music
    requestURL.searchParams.append('maxResults', '20');
    // requestURL.searchParams.append('eventType', 'completed');
    // requestURL.searchParams.append('videoSyndicated', 'true');
    // requestURL.searchParams.append('videoEmbeddable', 'true');
    requestURL.searchParams.append('videoCategoryId', '10');
    requestURL.searchParams.append('type', 'video');
    requestURL.searchParams.append('part', 'snippet');
    requestURL.searchParams.append('q', keyWord);
    requestURL.searchParams.append(
      'key',
      this.configService.get<string>('YOUTUBE_API_KEY'),
    );

    // console.log(requestURL.toString());

    const result = this.httpService.get(requestURL.toString());

    // result.subscribe((res) => console.log(res.data));

    return result as Observable<AxiosResponse<Record<string, unknown>>>;
  }
}
