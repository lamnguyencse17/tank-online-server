import lodash from "lodash";
import { markUserInGame } from "./userState";
import { WAITING_TO_ACCEPT_STATUS } from "../constants/gameStatus";

const gameState = {};

export const addNewGame = (gameId, gamePlayers) => {
	const players = lodash.map(gamePlayers, (user) => user.clientId);
	const newGame = { gameId, players, status: WAITING_TO_ACCEPT_STATUS };
	lodash.extend(gameState, { [gameId]: newGame });
	lodash.forEach(players, (user) => {
		markUserInGame(user, gameId);
	});
};

export const withdrawUser = (gameId, clientId) => {
	const gameData = lodash.remove(gameState, (game) => game.gameId === gameId);
	const winnerIndex = lodash.findIndex(
		gameData.players,
		(player) => player !== clientId
	);
	gameData.winner = gameData.players[winnerIndex];
	gameData.finishedTime = new Date();
	return gameData;
};
