import { Injectable } from '@nestjs/common';
import { GithubProvider } from 'libs/providers/github/github.provider';
import { ISourceService } from 'src/sources/domain/services/sources.service';

@Injectable()
export class GithubSourceService implements ISourceService {
  constructor(private githubProvider?: GithubProvider) {}

  async initSource(): Promise<any> {
    const result = await this.githubProvider.authorizeOauth();
    console.log(result);
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
