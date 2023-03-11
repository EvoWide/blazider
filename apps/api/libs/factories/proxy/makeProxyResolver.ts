import { CLS_REQ } from 'nestjs-cls';

export function makeProxyResolver<T>(
  name: string,
  module: any,
  services: any[],
) {
  return {
    provide: name,
    imports: [module],
    inject: [CLS_REQ, ...services],
    useFactory: async (req: Request, ...services: any) => {
      //use helper function to resolve services
      console.log('proxy', req.headers);
      console.log('service', services);
      return services[0];
    },
  };
}
