import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ContextModule } from 'libs/context/context.module';
import { GetRepositoriesUseCase } from '../usecases/getRepositories.usecase';
import { SourceModel } from './models/sources.entity';
import { SourcesController } from './sources.controller';
import { ClsModule } from 'nestjs-cls';
import { ServicesModule } from './services/services.module';
import { GithubSourceService } from './services/github/github.service';
import { makeProxyResolver, SOURCE_SERVICE_PROXY } from 'libs/factories/proxy';
import { ISourceService } from '../domain/services/sources.service';

@Module({
  imports: [
    MikroOrmModule.forFeature([SourceModel]),
    ContextModule,
    ClsModule.forFeatureAsync(
      makeProxyResolver<ISourceService>(SOURCE_SERVICE_PROXY, ServicesModule, [
        GithubSourceService,
      ]),
    ),
  ],
  controllers: [SourcesController],
  providers: [GetRepositoriesUseCase],
})
export class SourcesModule {}
