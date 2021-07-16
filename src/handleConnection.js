import parseMessage from "./utils/parseMessage";
import { generateClientID } from "./utils/generateId";
import packMessage from "./utils/packMessage";
import { ASSIGN_ID } from "./constants/event";
import switchWSEvent from "./switches/switchWSEvent";
import { registerUser } from "./states/userState";
import switchEvent from "./switches/switchEvent";
import handleDisconnection from "./handleDisconnection";
import { registerClientEvent } from "./eventEmitter";

export default async (ws) => {
	let clientId = await generateClientID();
	while (!registerUser(clientId)) {
		clientId = await generateClientID();
	}
	ws.on("message", async (payload) => {
		const message = parseMessage(payload);
		switchWSEvent(ws, clientId, message);
	});
	ws.on("close", () => handleDisconnection(clientId));
	registerClientEvent(ws, clientId);
	const assignIDMessage = packMessage(ASSIGN_ID, { clientId });
	ws.send(assignIDMessage);
};
