const WebSocket = require("ws");

let clients = [];

const setupWebSocket = (server) => {
  const wss = new WebSocket.Server({ server });

  wss.on("connection", (ws) => {
    // console.log("client connected");
    clients.push(ws);

    ws.on("message", (msg) => {
      //   console.log(`Received: ${msg}`);
    });

    ws.on("close", () => {
      //   console.log("Client disconnected");
      clients = clients.filter((client) => client !== ws);
    });
  });
};

const broadcastObject = (object) => {
  clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(object));
    }
  });
};

module.exports = { setupWebSocket, broadcastObject };
