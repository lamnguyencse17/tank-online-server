import { GAME_FOUND_EVENT, GAME_RESULT_EVENT } from "../constants/event";
import foundGame from "../eventHandlers/foundGame";
import gameResult from "../eventHandlers/gameResult";

export default (ws, payload) => {
	switch (payload.event) {
		case GAME_FOUND_EVENT: {
			foundGame(ws, payload);
			return;
		}
		case GAME_RESULT_EVENT: {
			gameResult(ws, payload);
			return;
		}
		default:
			console.error("INVALID EVENT");
	}
};
