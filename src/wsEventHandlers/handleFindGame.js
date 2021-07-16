import { makeUserAvailable } from "../states/userState";
import handleError from "../handleError";
import { FIND_GAME_EVENT } from "../constants/event";

export default async (ws, clientId) => {
	try {
		await makeUserAvailable(clientId);
	} catch (err) {
		handleError(ws, FIND_GAME_EVENT, err);
	}
};
