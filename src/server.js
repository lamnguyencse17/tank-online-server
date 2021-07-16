import express from "express";
import http from "http";
import WebSocket from "ws";
import handleConnection from "./handleConnection";
import findGame from "./mechanisms/findGame";
const app = express();

//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });
wss.on("connection", handleConnection);
//start our server
server.listen(3000, () => {
	findGame();
	console.log(`Server started on port 3000 :)`);
});
