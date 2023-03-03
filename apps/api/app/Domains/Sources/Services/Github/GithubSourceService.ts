import {
  GithubSourceConfig,
  GithubSourceContract,
} from '@ioc:Blazider/Services/Sources';

export class GithubSourceService implements GithubSourceContract {
  constructor(private config: GithubSourceConfig) {}

  hello(): string {
    return 'world';
  }
}
