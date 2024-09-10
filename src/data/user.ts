import { db } from "@/drizzle/db";

export const getUserByEmail = async (email: string) => {
	try {
		const user = await db.query.Users.findFirst({
			where: (table, { eq }) => eq(table.email, email),
		});

		if (!user) {
			return { user: null, internalServerError: false };
		}

		return { user, internalServerError: false };
	} catch {
		return { user: null, internalServerError: true };
	}
};

export const getUserById = async (id: string) => {
	try {
		const user = await db.query.Users.findFirst({
			where: (table, { eq }) => eq(table.id, id),
		});

		if (!user) {
			return { user: null, internalServerError: false };
		}

		return { user, internalServerError: false };
	} catch {
		return { user: null, internalServerError: true };
	}
};
