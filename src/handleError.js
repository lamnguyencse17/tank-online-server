import packMessage from "./utils/packMessage";
import { ERROR_EVENT } from "./constants/event";

export default (ws, event, error) => {
	const errorContent = { event, error };
	const errorMessage = packMessage(ERROR_EVENT, errorContent);
	ws.send(errorMessage);
};
