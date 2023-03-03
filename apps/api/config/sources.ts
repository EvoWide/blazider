import Env from '@ioc:Adonis/Core/Env';
import type { ServiceSourceConfig } from '@ioc:Blazider/Services/Sources';

const sourcesConfig: ServiceSourceConfig = {
  github: {
    privateKey: Env.get('SERVICE_GITHUB_PRIVATE_KEY'),
  },
};

const queueNames: ['default'] = ['default'];

export { sourcesConfig as config, queueNames };
