import { injectable } from 'inversify';
const Web3 = require('web3');
import abi from '../constant/abi'
import contractAddresses from '../constant/contractAddresses';
import writeCSV from '../helpers/writeCSV';
import * as fs from 'fs';


@injectable()
export class TransactionService {

  public startMonitoring(): string {
    this.getTransactionData();
    return 'Please wait 1 minute before the first request. Requesting every minute. Go to transaction/report to see content.';
  }

  public getReport(): string {
    return fs.readFileSync('transaction.csv', { encoding: 'utf8' });
  }

  private async getTransactionData(): Promise<void> {
    const testnet = 'https://cloudflare-eth.com';
    const address = '0xa145ac099e3d2e9781c9c848249e2e6b256b030d';
    const Web3Client = new Web3(testnet);

    let results = [];

    setInterval(async () => {
      let ethBalance = '';
      let tokenAddress = '';
      let tBalance = '';

      await Web3Client.eth.getBalance(address, (error, wei) => {
        ethBalance = Web3Client.utils.fromWei(wei, 'ether');
      });
      for (let tAddress of contractAddresses) {
        tokenAddress = tAddress;
        let contract = new Web3Client.eth.Contract(abi, tAddress);
        await contract.methods.balanceOf(address).call((err, result) => {
          tBalance = Web3Client.utils.fromWei(result, 'ether');
        })

        results.push(
          {
            "ETH": ethBalance,
            "Address": tokenAddress,
            "Balance": tBalance
          }
        );
      }
      writeCSV(results)
    }, 1000 * 60);
  }

}
