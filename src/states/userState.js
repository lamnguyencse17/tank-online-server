import lodash from "lodash";

const userState = {};

export const isUserInCache = (clientId) => lodash.has(userState, clientId);

export const registerUser = (clientId) => {
	if (isUserInCache(clientId)) {
		return false;
	}
	const initialUserState = {
		clientId,
		available: false,
	};
	lodash.extend(userState, { [clientId]: initialUserState });
	return true;
};

export const makeUserAvailable = async (clientId) => {
	const availableUserState = {
		clientId,
		available: true,
	};
	lodash.extend(userState, { [clientId]: availableUserState });
};

export const getUserState = (clientId) => {
	return lodash.get(userState, clientId);
};

export const findAvailableUser = () => {
	return lodash.filter(userState, (user) => {
		return user.available;
	});
};

export const markUserUnavailable = (clientId) => {
	const unavailableUserState = {
		clientId,
		available: false,
	};
	lodash.extend(userState, { [clientId]: unavailableUserState });
};

export const markUserInGame = (clientId, gameId) => {
	const userInGameState = {
		clientId,
		available: false,
		gameId,
	};
	lodash.extend(userState, { [clientId]: userInGameState });
};

export const removeUser = (clientId) => {
	return lodash.remove(userState, (user) => user.clientId === clientId);
};
