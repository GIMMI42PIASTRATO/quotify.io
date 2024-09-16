"use server";
import { signIn } from "@/auth";

export const githubSingIn = async () => {
	await signIn("github");
};

export const googleSingIn = async () => {
	await signIn("google");
};
