import { Injectable } from '@nestjs/common';
import { ISourceService } from 'src/sources/domain/services/sources.service';
import { HttpService } from '@blazider/http';

@Injectable()
export class GithubSourceService implements ISourceService {
  initSource(): Promise<any> {
    throw new Error('Method not implemented.');
  }

  createSource(): Promise<any> {
    //TODO: create provider
    return Promise.resolve('Test');
    //return new HttpService().request();
    throw new Error('Method not implemented.');
  }

  getRepositories(): Promise<any> {
    console.log('getRepositories');
    throw new Error('Method not implemented.');
  }
}
