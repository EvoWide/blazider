import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { SourcesModule } from './sources/sources.module';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { SourceModel } from './sources/infrastructure/models/sources.entity';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ContextInterceptor } from 'libs/context/context.interceptor';
import { ContextModule } from 'libs/context/context.module';

@Module({
  imports: [
    MikroOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        driver: PostgreSqlDriver,
        entities: [SourceModel],
        dbName: configService.get('DATABASE_NAME'),
        host: configService.get('DATABASE_HOST'),
        port: configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USER'),
        password: configService.get('DATABASE_PASSWORD'),
        debug: true,
      }),
      inject: [ConfigService],
    }),
    SourcesModule,
    ContextModule.register(),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ContextInterceptor,
    },
  ],
})
export class AppModule {}
