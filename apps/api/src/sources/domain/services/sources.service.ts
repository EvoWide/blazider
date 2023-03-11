export interface ISourceService {
  getRepositories(): Promise<any>;
  initSource(): Promise<any>;
  createSource(): Promise<any>;
}
