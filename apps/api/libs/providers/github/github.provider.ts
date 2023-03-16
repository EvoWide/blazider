import { HttpService } from '@blazider/http';
import { Inject, Injectable } from '@nestjs/common';
import { HttpProxyModule } from 'libs/http-proxy/http-proxy.module';

@Injectable()
export class GithubProvider {
  constructor(
    @Inject(HttpProxyModule.HTTP_PROXY)
    private httpProxy: HttpService,
  ) {}

  async authorizeOauth() {
    const requestOptions = {
      method: 'GET',
      url: 'https://github.com/login/oauth/authorize',
      params: {
        client_id: '',
        redirect_uri: '',
        scope: 'repo',
        allow_signup: 'false',
      },
    };

    const result = await this.httpProxy.request(requestOptions);
    console.log(result);
  }
}
