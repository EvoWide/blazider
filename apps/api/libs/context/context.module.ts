import { DynamicModule, Module, Global } from '@nestjs/common';
import { ContextInterceptor } from './context.interceptor';
import { ContextService } from './context.service';
import { AsyncLocalStorage } from 'node:async_hooks';

@Module({})
@Global()
export class ContextModule {
  static register(): DynamicModule {
    const instance = new AsyncLocalStorage<Map<string, any>>();

    return {
      module: ContextModule,
      providers: [
        ContextService,
        { provide: ContextService, useValue: new ContextService(instance) },
        ContextInterceptor,
      ],
      exports: [ContextService, ContextInterceptor],
    };
  }
}
