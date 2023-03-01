import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DeploymentsController {
  public async index(ctx: HttpContextContract) {
    return "hello world"
  }
}