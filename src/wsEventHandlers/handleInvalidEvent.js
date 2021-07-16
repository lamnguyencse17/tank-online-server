import packMessage from "../utils/packMessage";
import { INVALID_EVENT } from "../constants/event";

export default (ws) => {
	const invalidEventMessage = packMessage(
		INVALID_EVENT,
		"This event is not registered in the system"
	);
	ws.send(invalidEventMessage);
};
