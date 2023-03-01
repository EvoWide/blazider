import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SourcesController {
  public async index(ctx: HttpContextContract) {
    return "hello world"
  }
}