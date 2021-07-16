import { findAvailableUser } from "../states/userState";
import lodash from "lodash";
import { generateGameID } from "../utils/generateId";
import { addNewGame } from "../states/gameState";
import { announceGameFound } from "../eventEmitter";

export default () => {
	setInterval(async () => {
		let availableUser = findAvailableUser();
		if (availableUser === undefined || availableUser.length === 0) {
			return;
		}
		while (availableUser.length >= 2) {
			const gamePlayers = lodash.take(availableUser, 2);
			availableUser = extractUsers(availableUser, gamePlayers);
			const gameId = await generateGameID();
			addNewGame(gameId, gamePlayers);
			announceGameFound(gameId, gamePlayers);
		}
	}, 2000);
};

const extractUsers = (availableUser, gamePlayers) => {
	return lodash.filter(availableUser, (original) => {
		let isNotTaken = true;
		lodash.forEach(gamePlayers, (taken) => {
			if (original.clientId === taken.clientId) {
				isNotTaken = false;
			}
		});
		return isNotTaken;
	});
};
