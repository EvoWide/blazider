import { HttpService, createAxiosInstance } from '@blazider/http';
import { DynamicModule, Module } from '@nestjs/common';

@Module({})
export class HttpProxyModule {
  static HTTP_PROXY = 'HTTP_PROXY';

  public static register(): DynamicModule {
    return {
      module: HttpProxyModule,
      providers: [
        {
          provide: HttpProxyModule.HTTP_PROXY,
          useFactory: () => {
            return new HttpService(createAxiosInstance());
          },
        },
      ],
      exports: [HttpProxyModule.HTTP_PROXY],
    };
  }
}
