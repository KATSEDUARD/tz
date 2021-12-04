import { controller, httpGet } from 'inversify-express-utils';

@controller('/')
export class HomeController {
  @httpGet('/')
  public get(): string {
    return 'Go to /transaction to make a request and then go to /report to see file content (server requesting data every 1 minute)';
  }
}
