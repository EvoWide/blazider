import type { ApplicationContract } from '@ioc:Adonis/Core/Application';
import { GithubSourceService } from '../../Services/Github/GithubSourceService';
import SourceServiceProxy from './SourceServiceProxy';

/*
|--------------------------------------------------------------------------
| Provider
|--------------------------------------------------------------------------
|
| Your application is not ready when this file is loaded by the framework.
| Hence, the top level imports relying on the IoC container will not work.
| You must import them inside the life-cycle methods defined inside
| the provider class.
|
| @example:
|
| public async ready () {
|   const Database = this.app.container.resolveBinding('Adonis/Lucid/Database')
|   const Event = this.app.container.resolveBinding('Adonis/Core/Event')
|   Event.on('db:query', Database.prettyPrint)
| }
|
*/
export default class SourceProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {}

  public async boot() {
    this.app.container.singleton('Blazider/Services/Sources', () => {
      return new SourceServiceProxy(this.app);
    });

    this.app.container.singleton(
      'Blazider/Services/Sources/GithubSource',
      () => {
        const config = this.app.container
          .resolveBinding('Adonis/Core/Config')
          .get('sources.config.github');

        return new GithubSourceService(config);
      },
    );
  }

  public async ready() {}

  public async shutdown() {}
}
