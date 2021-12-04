import {
  controller, httpGet
} from 'inversify-express-utils';
import { inject } from 'inversify';
import { TransactionService } from '../service/transaction';
import TYPES from '../constant/types';

@controller('/transaction')
export class TransactionController {

  constructor(@inject(TYPES.TransactionService) private transactionService: TransactionService) { }

  @httpGet('/')
  public startMonitoring(): string {
    return this.transactionService.startMonitoring();
  }

  @httpGet('/report')
  public getReport(): string {
    return this.transactionService.getReport();
  }
}
