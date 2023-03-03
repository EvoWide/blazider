import {
  SourceProxyContract,
  SourceServiceContract,
} from '@ioc:Blazider/Services/Sources';

import type { ApplicationContract } from '@ioc:Adonis/Core/Application';
import type { RequestContract } from '@ioc:Adonis/Core/Request';

export default class SourceServiceProxy implements SourceProxyContract {
  constructor(private app: ApplicationContract) {}

  public fromName(name: string): SourceServiceContract {
    switch (name) {
      case 'github': {
        return this.app.container.use('Blazider/Services/Sources/GithubSource');
      }
    }
    throw new Error('failed to find the specified service');
  }

  public fromRequest(request: RequestContract) {
    const { source = '' } = request.qs();
    return this.fromName(source);
  }
}
