import type Session from "@app/types/session.ts";

export declare module "express-serve-static-core" {
	// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
	interface Request {
		session: Session;
	}
}
