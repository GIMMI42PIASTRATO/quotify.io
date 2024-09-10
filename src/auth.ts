import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import * as z from "zod";
import { LoginSchema } from "@/schemas";
import bcrypt from "bcrypt";
import { getUserByEmail } from "@/data/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		Credentials({
			credentials: {
				name: {},
				email: {},
				password: {},
			},

			// authorize: async (credentials: z.infer<typeof LoginSchema>) => {
			// 	const safeCredentials = await LoginSchema.safeParse(
			// 		credentials
			// 	);

			// 	if (!safeCredentials.success) {
			// 		return null;
			// 	}

			// 	const { email, password } = safeCredentials.data;

			// 	const response = await getUserByEmail(email);

			// 	if (response.internalServerError) {
			// 		return null;
			// 	}

			// 	if (!response.user) {
			// 		return null;
			// 	}

			// 	if (!response.user.password) {
			// 		return null;
			// 	}

			// 	const isPasswordValid = await bcrypt.compare(
			// 		password,
			// 		response.user?.password
			// 	);

			// 	if (!isPasswordValid) {
			// 		return null;
			// 	}

			// 	return response.user;
			// },
		}),
	],
});
