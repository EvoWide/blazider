import { ContextService } from 'libs/context/context.service';
import { Injectable } from '@nestjs/common';
import { GithubSourceService } from '../services/github/github.service';

@Injectable()
export class SourcesServiceProxy {
  constructor(private contextService: ContextService) {}

  pickServiceFromContext() {
    return new GithubSourceService();
  }
}
