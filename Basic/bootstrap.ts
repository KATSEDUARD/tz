import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import { Container } from 'inversify';
import * as bodyParser from 'body-parser';
import TYPES from './constant/types';
import { TransactionService } from './service/transaction';
import './controller/home';
import './controller/transaction';

// load everything needed to the Container
let container = new Container();
container.bind<TransactionService>(TYPES.TransactionService).to(TransactionService);

// start the server
let server = new InversifyExpressServer(container);

server.setConfig((app) => {
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
});

let serverInstance = server.build();
serverInstance.listen(3000);

console.log('Server started on port 3000 :)');
