export interface IServiceRequester {
  getServiceInstance: (key: string) => any;
}