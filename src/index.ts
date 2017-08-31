import * as http from 'http';
import * as debug from 'debug';

import Server from './server';
import ServerStatus from './server-status';

debug('ts-express:server');

const serverStatus = new ServerStatus();
const port = serverStatus.normalizePort(process.env.PORT || 3000);

Server.set('port', port);

const server = http.createServer(Server);
      server.listen(port);
      server.on('error', serverStatus.onError.bind(port));
      server.on('listening', serverStatus.onListening.bind(server.address()));