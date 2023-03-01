import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class DeploymentsController {
  public async index(_ctx: HttpContextContract) {
    return 'hello world';
  }
}
