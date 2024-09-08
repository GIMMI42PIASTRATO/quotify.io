"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas";

export const register = async (data: z.infer<typeof RegisterSchema>) => {
	const validatedFields = RegisterSchema.safeParse(data);

	if (!validatedFields.success) {
		return { error: "Invalid data" };
	}

	console.log(validatedFields.data);

	return { success: "Email sent" };
};
