"use server";
import { signIn } from "@/auth";

export const githubSingIn = async () => {
	await signIn("github", { redirectTo: "/quote/create" });
};

export const googleSingIn = async () => {
	await signIn("google", { redirectTo: "/quote/create" });
};
