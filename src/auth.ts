import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { LoginSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "@/data/user";
import { z } from "zod";

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		Credentials({
			credentials: {
				email: {},
				password: {},
			},

			authorize: async (credentials: z.infer<typeof LoginSchema>) => {
				const safeCredentials = await LoginSchema.safeParse(
					credentials
				);

				if (!safeCredentials.success) {
					return null;
				}

				const { email, password } = safeCredentials.data;

				const response = await getUserByEmail(email);

				if (response.internalServerError) {
					return null;
				}

				if (!response.user) {
					return null;
				}

				if (!response.user.password) {
					return null;
				}

				const isPasswordValid = await bcrypt.compare(
					password,
					response.user?.password
				);

				if (!isPasswordValid) {
					return null;
				}

				return response.user;
			},
		}),
	],
});
