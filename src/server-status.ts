import * as debug from 'debug';

export default class ServerStatus {
    normalizePort(val: number|string): number|string|boolean {
        let port: number = (typeof val === 'string') ? parseInt(val, 10) : val;
        let res = (isNaN(port)) ? val : (port >= 0) ? port : false;
        console.log(`Server listening on port ${port}`);
        return port;
    }

    onListening(addr): void {
        debug(`Listening on 3000`);
    }

    onError(error: NodeJS.ErrnoException, port): void {
        if (error.syscall !== 'listen') throw error;
        let bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port ' + port;
        switch(error.code) {
            case 'EACCES':
                console.error(`${bind} requires elevated privileges`);
                process.exit(1);
            break;
            case 'EADDRINUSE':
                console.error(`${bind} is already in use`);
                process.exit(1);
                break;
            default:
                throw error;
        }
    } 
}