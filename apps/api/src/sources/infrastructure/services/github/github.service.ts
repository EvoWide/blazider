import { ISourceService } from 'src/sources/domain/services/sources.service';

export class GithubSourceService implements ISourceService {
  getRepositories(): Promise<any> {
    console.log('getRepositories');
    throw new Error('Method not implemented.');
  }
}
