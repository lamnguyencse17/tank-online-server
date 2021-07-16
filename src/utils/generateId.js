import { customAlphabet } from "nanoid";

const clientNanoid = customAlphabet("1234567890abcdef", 10);
const gameNanoid = customAlphabet("1234567890abcdef", 18);

export const generateClientID = async () => await clientNanoid();
export const generateGameID = async () => gameNanoid();
