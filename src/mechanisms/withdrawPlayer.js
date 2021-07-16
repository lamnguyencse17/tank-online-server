import { withdrawUser } from "../states/gameState";
import { announceGameResult, unregisterClientEvent } from "../eventEmitter";

export default (gameId, clientId) => {
	const gameData = withdrawUser(gameId, clientId);
	unregisterClientEvent(clientId);
	announceGameResult(gameId, gameData.players, gameData.winner);
};
