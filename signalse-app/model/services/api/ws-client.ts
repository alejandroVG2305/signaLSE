export const createWsClient = () => {
  let socket: WebSocket | null = null;
  let pendingResolve: ((result: string) => void) | null = null;

  const disconnect = (): void => {
    socket?.close();
    socket = null;
  };

  return {
    connect: (url: string): void => {
      if (socket?.readyState === WebSocket.OPEN) return;

      socket = new WebSocket(url);

      socket.onmessage = (event) => {
        pendingResolve?.(event.data);
        pendingResolve = null;
      };

      socket.onerror = () => disconnect();
      socket.onclose = () => {
        socket = null;
      };
    },

    disconnect,

    send: (message: string): Promise<string> =>
      new Promise((resolve, reject) => {
        if (socket?.readyState !== WebSocket.OPEN) {
          return reject(new Error("WebSocket not connected"));
        }
        pendingResolve = resolve;
        socket.send(message);
      }),
  };
};
