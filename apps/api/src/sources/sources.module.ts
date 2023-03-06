import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ContextModule } from 'libs/context/context.module';
import { SourceModel } from './infrastructure/models/sources.entity';
import { SourcesServiceProxy } from './infrastructure/proxy/sources.proxy';
import { SourcesController } from './infrastructure/sources.controller';
import { GetRepositoriesUseCase } from './usecases/getRepositories.usecase';

@Module({
  imports: [MikroOrmModule.forFeature([SourceModel]), ContextModule],
  controllers: [SourcesController],
  providers: [SourcesServiceProxy, GetRepositoriesUseCase],
})
export class SourcesModule {}
