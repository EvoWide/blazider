import Route from '@ioc:Adonis/Core/Route';

Route.group(() => {
  Route.get('/', 'sources.controller.index');
})
  .prefix('/sources')
  .namespace('App/Domains/Sources/Infrastructure/Controllers');
