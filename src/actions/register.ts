"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import { db } from "@/drizzle/db";
import { userTable } from "@/drizzle/schema";

export const register = async (data: z.infer<typeof RegisterSchema>) => {
	const validatedFields = RegisterSchema.safeParse(data);

	if (!validatedFields.success) {
		return { error: "Invalid data" };
	}

	console.log(validatedFields.data);

	await db.insert(userTable).values({
		name: validatedFields.data.name,
	});

	return { success: "Email sent" };
};
