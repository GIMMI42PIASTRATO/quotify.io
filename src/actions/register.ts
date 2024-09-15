"use server";

import * as z from "zod";
import bcrypt from "bcrypt";

import { db } from "@/drizzle/db";
import { Users } from "@/drizzle/schema";
import { getUserByEmail } from "@/data/user";

import { RegisterSchema } from "@/schemas";

import { signIn } from "@/auth";

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
	const response = await getUserByEmail(email);

	if (response.internalServerError) {
		return { error: "Internal server error, try again" };
	}

	if (response.user) {
		return { error: "Email already in use" };
	}

	// insert the user
	await db.insert(Users).values({
		email,
		name,
		password: hashedPassword,
	});

	// TODO: Send verification token email
	// This is not an error to pass the unhashed password because it will be compared with the hashed password in the database.
	// await signIn("credentials", { email, password });

	return { success: "User created" };
};
