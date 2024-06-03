import crypto from "crypto";

export const saltAndHashPassword = (password: string) => {
	const saltLength = 16;
	const iterations = 10000;
	const keyLength = 64;
	const digest = "sha512";

	const salt = crypto.randomBytes(saltLength).toString("hex");
	const hash = crypto
		.pbkdf2Sync(password, salt, iterations, keyLength, digest)
		.toString("hex");

	return { salt, hash };
};

export const verifyPassword = (
	password: string,
	salt: string,
	hash: string,
) => {
	const iterations = 10000;
	const keyLength = 64;
	const digest = "sha512";

	const derivedHash = crypto
		.pbkdf2Sync(password, salt, iterations, keyLength, digest)
		.toString("hex");
	return hash === derivedHash;
};
