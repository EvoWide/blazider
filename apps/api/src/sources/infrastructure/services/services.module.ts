import { Module } from '@nestjs/common';
import { GithubSourceService } from './github/github.service';

@Module({
  providers: [GithubSourceService],
  exports: [GithubSourceService],
})
export class ServicesModule {}
