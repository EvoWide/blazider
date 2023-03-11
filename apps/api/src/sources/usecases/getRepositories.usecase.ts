import { ISourceService } from '../domain/services/sources.service';
import { Inject } from '@nestjs/common';

export class GetRepositoriesUseCase {
  constructor(
    @Inject('SOURCE_SERVICE_PROXY')
    private sourceService: ISourceService,
  ) {}

  async execute(): Promise<any> {
    return await this.sourceService.getRepositories();
  }
}
