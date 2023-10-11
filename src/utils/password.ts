import * as argon2 from "argon2";

async function hash(password: string) {
	return argon2.hash(password);
}

async function verify(hash: string, password: string) {
	return argon2.verify(hash, password);
}

export { hash, verify };
