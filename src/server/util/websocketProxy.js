/**
 * Copyright 2017-present, Callstack.
 * All rights reserved.
 * 
 * @flow
 */
import type { WebSocketReq } from '../middleware/hotMiddleware';

/**
 * Proxy connection from single WebSockerServer by given path.
 */
function webSocketProxy(webSocketServer: *, path: string) {
  return {
    onConnection(handler: (socket: WebSocket, req: WebSocketReq) => void) {
      webSocketServer.on('connection', (socket, req) => {
        if (req.url.indexOf(path) === 0) {
          handler(socket, req);
        }
      });
    },
  };
}

module.exports = webSocketProxy;
