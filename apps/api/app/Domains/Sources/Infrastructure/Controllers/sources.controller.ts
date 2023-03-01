import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class SourcesController {
  public async index(_ctx: HttpContextContract) {
    return 'hello world';
  }
}
