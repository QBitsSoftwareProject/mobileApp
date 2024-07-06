const WebSocket = require("ws");

let clients = [];

const setupWebSocket = (server) => {
  const wss = new WebSocket.Server({ server });

  wss.on("connection", (ws) => {
    // console.log("client connected");
    clients.push(ws);

    ws.on("message", (msg) => {
      const message = JSON.parse(msg);

      clients.push(ws);
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

// const sendObject = (object, recipientId) => {
//   clients.forEach((client) => {
//     console.log(recipientId, client.userId);
//     if (client.readyState === WebSocket.OPEN && client.userId == recipientId) {
//       client.send(JSON.stringify(object));
//     }
//   });
// };

module.exports = { setupWebSocket, broadcastObject };
