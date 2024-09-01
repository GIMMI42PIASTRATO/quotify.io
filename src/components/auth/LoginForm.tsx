import CardWrapper from "@/components/auth/CardWrapper";

export default function LoginForm() {
	return (
		<CardWrapper
			headerLabel="Welcome back! Please sign in to continue."
			backButtonLabel="Dont have an account?"
			backButtonLinkLabel="Sing up"
			backButtonHref="/auth/register"
			showSocial
		>
			LoginForm
		</CardWrapper>
	);
}
