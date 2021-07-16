import EventEmitter from "events";
import lodash from "lodash";
import switchEvent from "./switches/switchEvent";
import { GAME_FOUND_EVENT, GAME_RESULT_EVENT } from "./constants/event";
const eventEmitter = new EventEmitter();

export const registerClientEvent = (ws, clientId) => {
	eventEmitter.on(clientId, (payload) => {
		switchEvent(ws, payload);
	});
};

export const unregisterClientEvent = (clientId) => {
	eventEmitter.removeAllListeners(clientId);
};

export const announceGameResult = (gameId, players, winner) => {
	lodash.forEach(players, (player) => {
		eventEmitter.emit(player, { event: GAME_RESULT_EVENT, gameId, winner });
	});
};

export const announceGameFound = (gameId, players) => {
	lodash.forEach(players, (user) => {
		eventEmitter.emit(user.clientId, { event: GAME_FOUND_EVENT, gameId });
	});
};
