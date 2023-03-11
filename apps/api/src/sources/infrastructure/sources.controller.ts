import { Controller, Get } from '@nestjs/common';
import { GetRepositoriesUseCase } from '../usecases/getRepositories.usecase';

@Controller('sources')
export class SourcesController {
  constructor(private getRepositoriesUseCase: GetRepositoriesUseCase) {}
  @Get()
  async findAll() {
    const useCase = await this.getRepositoriesUseCase.execute();
    return useCase;
  }
}
