import packMessage from "../utils/packMessage";
import { GAME_RESULT_EVENT } from "../constants/event";

export default (ws, payload) => {
	const resultMessage = packMessage(GAME_RESULT_EVENT, {
		message: "Winner is decided!",
		gameId: payload.gameId,
		winner: payload.winner,
	});
	ws.send(resultMessage);
};
