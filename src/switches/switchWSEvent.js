import handleInvalidEvent from "../wsEventHandlers/handleInvalidEvent";
import { ACKNOWLEDGED_EVENT, FIND_GAME_EVENT } from "../constants/event";
import handleFindGame from "../wsEventHandlers/handleFindGame";
import packMessage from "../utils/packMessage";

export default (ws, clientId, message) => {
	let validEvent = true;
	switch (message.EVENT) {
		case FIND_GAME_EVENT: {
			handleFindGame(ws, clientId);
			break;
		}
		default: {
			handleInvalidEvent(ws);
			validEvent = false;
		}
	}
	if (validEvent) {
		const acknowledgeMessage = packMessage(ACKNOWLEDGED_EVENT, {
			event: message.EVENT,
		});
		ws.send(acknowledgeMessage);
	}
};
