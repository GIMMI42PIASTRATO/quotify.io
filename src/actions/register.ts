"use server";

import * as z from "zod";
import bcrypt from "bcrypt";

import { db } from "@/drizzle/db";
import { userTable } from "@/drizzle/schema";
import { getUserByEmail } from "@/data/user";

import { RegisterSchema } from "@/schemas";

export const register = async (data: z.infer<typeof RegisterSchema>) => {
	const validatedFields = RegisterSchema.safeParse(data);

	if (!validatedFields.success) {
		return { error: "Invalid data" };
	}

	console.log(validatedFields.data);

	const { email, password, name } = validatedFields.data;
	// hash the password
	const hashedPassword = await bcrypt.hash(password, 10);

	// check if the email is taken
	const { user, internalServerError } = await getUserByEmail(email);

	if (internalServerError) {
		return { error: "Internal server error, try again" };
	}

	if (user) {
		return { error: "Email already in use" };
	}

	// insert the user
	await db.insert(userTable).values({
		email,
		password: hashedPassword,
		username: name,
	});

	// TODO: Send verification token email
	// This is not an error to pass the unhashed password because it will be compared with the hashed password in the database.
	// await signIn("credentials", { email, password });

	return { success: "User created" };
};
