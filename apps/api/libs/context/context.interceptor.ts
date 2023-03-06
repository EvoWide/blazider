import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { ContextService } from './context.service';

@Injectable()
export class ContextInterceptor implements NestInterceptor {
  constructor(private contextService: ContextService) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<any> | Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();

    this.contextService.register();
    this.contextService.set(request.headers);
    return next.handle();
  }
}
