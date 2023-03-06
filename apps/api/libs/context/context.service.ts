import { Injectable } from '@nestjs/common';
import { AsyncLocalStorage } from 'node:async_hooks';

@Injectable()
export class ContextService {
  constructor(readonly instance: AsyncLocalStorage<Map<string, any>>) {}

  set(value: any) {
    this.instance.getStore()?.set('context', value);
  }

  get() {
    return this.instance.getStore()?.get('context');
  }

  register() {
    this.instance.enterWith(new Map());
  }

  unregister() {
    this.instance.disable();
  }
}
