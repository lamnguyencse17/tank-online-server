import { removeUser } from "./states/userState";
import withdrawPlayer from "./mechanisms/withdrawPlayer";

export default (clientId) => {
	const user = removeUser(clientId);
	if (user.gameId === undefined) {
		return;
	}
	withdrawPlayer(user.gameId);
};
