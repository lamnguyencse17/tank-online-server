import packMessage from "../utils/packMessage";
import { GAME_FOUND_EVENT } from "../constants/event";

export default (ws, payload) => {
	const matchMessage = packMessage(GAME_FOUND_EVENT, {
		message: "A game has been found",
		gameId: payload.gameId,
	});
	ws.send(matchMessage);
};
