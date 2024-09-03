import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "./button";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
	const user = undefined;
	const isAdmin = true;

	return (
		<nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
			<MaxWidthWrapper>
				<div className="flex h-14 items-center justify-between border-b border-zinc-200">
					<Link href="/" className="flex z-40 font-medium">
						quotify.<span className="text-brand-400">io</span>
					</Link>

					<div className="h-full flex items-center space-x-4">
						{user ? (
							<>
								<Link
									href="/logout"
									className={buttonVariants({
										size: "default",
										variant: "ghost",
										className: "font-normal",
									})}
								>
									Sign out
								</Link>
								{isAdmin ? (
									<Link
										href="/dashboard"
										className={buttonVariants({
											size: "default",
											variant: "ghost",
											className: "font-normal",
										})}
									>
										Dashboard ✨
									</Link>
								) : null}
								<Link
									href="/create/quote"
									className={buttonVariants({
										size: "default",
										className:
											"hidden sm:flex items-center",
									})}
								>
									Create quote
									<ArrowRight className="ml-1.5 h-5 w-5" />
								</Link>
							</>
						) : (
							<>
								<Link
									href="/auth/register"
									className={buttonVariants({
										size: "default",
										variant: "ghost",
										className: "font-normal",
									})}
								>
									Sign up
								</Link>

								<Link
									href="/auth/login"
									className={buttonVariants({
										size: "default",
										variant: "ghost",
										className: "font-normal",
									})}
								>
									Login
								</Link>

								<div className="h-8 w-px bg-zinc-200 hidden sm:block"></div>

								<Link
									href="/create/quote"
									className={buttonVariants({
										size: "default",
										className:
											"hidden sm:flex items-center",
									})}
								>
									Create quote
									<ArrowRight className="ml-1.5 h-5 w-5" />
								</Link>
							</>
						)}
					</div>
				</div>
			</MaxWidthWrapper>
		</nav>
	);
}
