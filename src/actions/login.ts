"use server";

import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { FormSuccess } from "@/components/FormSuccess";

export const login = async (data: z.infer<typeof LoginSchema>) => {
	const validatedFields = LoginSchema.safeParse(data);

	if (!validatedFields.success) {
		return { error: "Invalid data" };
	}

	console.log(validatedFields.data);
	return { success: "Email sent" };
};
