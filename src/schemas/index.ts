import * as z from "zod";

export const LoginSchema = z.object({
	email: z.string().email({
		message: "Email is required",
	}),
	password: z.string().min(1, {
		message: "Password is required",
	}),
});

export const RegisterSchema = z.object({
	email: z
		.string()
		.email({
			message: "Email is required",
		})
		.max(50, { message: "Email is too long" }),
	password: z.string().min(6, {
		message: "The password must be at least 6 characters",
	}),
	name: z
		.string()
		.min(1, {
			message: "Name is required",
		})
		.max(50, { message: "Name is too long" }),
});
