"use server";

import * as z from "zod";
import { LoginSchema } from "@/schemas";

export const login = async (data: z.infer<typeof LoginSchema>) => {
	const result = LoginSchema.safeParse(data);

	if (!result.success) {
		return result.error.format();
	}

	console.log(result.data);
	return result.data;
};
