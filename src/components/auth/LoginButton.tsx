"use client";
import { useRouter } from "next/navigation";

type LoginButtonProps = {
	children: React.ReactNode;
	mode?: "modal" | "redirect";
	asChild?: boolean;
};

export default function LoginButton({
	children,
	mode = "modal",
	asChild,
}: LoginButtonProps) {
	const router = useRouter();

	const handleClick = () => {
		router.push("/auth/login");
	};

	if (mode === "modal") {
		return <span>TODO: Implement Modal</span>;
	}

	return (
		<span onClick={handleClick} className="cursor-pointer">
			{children}
		</span>
	);
}
