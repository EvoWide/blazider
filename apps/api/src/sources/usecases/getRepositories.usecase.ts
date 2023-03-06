import { ISourceService } from '../domain/services/sources.service';
import { SourcesServiceProxy } from '../infrastructure/proxy/sources.proxy';
import { Inject } from '@nestjs/common';

export class GetRepositoriesUseCase {
  private sourceService: ISourceService;
  constructor(
    @Inject(SourcesServiceProxy)
    private sourceServiceProxy: SourcesServiceProxy,
  ) {
    this.sourceService = this.sourceServiceProxy.pickServiceFromContext();
  }

  async execute(): Promise<any> {
    return await this.sourceService.getRepositories();
  }
}
