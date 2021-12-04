import { controller, httpGet } from 'inversify-express-utils';

@controller('/')
export class HomeController {
  @httpGet('/')
  public get(): string {
    return 'Go to /transaction to make a request and then go to transaction/report to see file content (server is requesting data every 1 minute)';
  }
}
