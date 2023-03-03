declare module '@ioc:Blazider/Services/Sources' {
  export interface SourceProxyContract {
    fromName(name: string): SourceServiceContract;
    fromRequest(request: any): SourceServiceContract;
  }

  export interface GithubSourceConfig {
    privateKey: string;
  }

  export interface ServiceSourceConfig {
    github: GithubSourceConfig;
  }

  export interface GithubSourceContract extends SourceServiceContract {}

  export const GithubSourceService: GithubSourceContract;

  const SourceProxy: SourceProxyContract;
  export default SourceProxy;
}
