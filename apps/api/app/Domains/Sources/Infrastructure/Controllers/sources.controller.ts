import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import SourceProxy from '@ioc:Blazider/Services/Sources';

export default class SourcesController {
  constructor() {}

  public async index({ request }: HttpContextContract) {
    return SourceProxy.fromRequest(request);
  }
}
