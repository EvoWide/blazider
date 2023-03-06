import { Controller, Get } from '@nestjs/common';
import { GetRepositoriesUseCase } from '../usecases/getRepositories.usecase';

@Controller('sources')
export class SourcesController {
  constructor(private getRepositoriesUseCase: GetRepositoriesUseCase) {}
  @Get()
  findAll() {
    const useCase = this.getRepositoriesUseCase.execute();
    return 'hello source';
  }
}
