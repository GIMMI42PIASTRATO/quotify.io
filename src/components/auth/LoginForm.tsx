"use client";

import CardWrapper from "@/components/auth/CardWrapper";

import * as z from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoginSchema } from "@/schemas";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/FormError";
import { FormSuccess } from "@/components/FormSuccess";

export default function LoginForm() {
	type FormSchema = z.infer<typeof LoginSchema>;

	const form = useForm<FormSchema>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = (data: FormSchema) => {
		console.log(data);
	};

	return (
		<CardWrapper
			headerLabel="Welcome back! Please sign in to continue."
			backButtonLabel="Dont have an account?"
			backButtonLinkLabel="Sing up"
			backButtonHref="/auth/register"
			showSocial
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-6"
				>
					<div className="space-y-4">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											placeholder="john.doe@example.com"
											type="email"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input
											placeholder="******"
											type="password"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<FormError message="" />
					<FormSuccess message="" />
					<Button type="submit" className="w-full">
						Login
					</Button>
				</form>
			</Form>
		</CardWrapper>
	);
}
