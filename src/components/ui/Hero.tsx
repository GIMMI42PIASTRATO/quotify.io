import { eb_garamond } from "@/utils/fonts";
import CtaButton from "./CtaButton";
import Link from "next/link";
import { buttonVariants } from "./button";

export default function Hero() {
	return (
		<>
			<div className="flex flex-col gap-8 items-center text-center lg:items-start lg:text-left">
				<h1
					className={`${eb_garamond.className} font-semibold tracking-tight max-w-2xl text-balance text-5xl text-[#222222] sm:text-6xl`}
				>
					Get <span className="text-brand-400">beautiful</span> quotes
					designed your way.
				</h1>
				<p className="max-w-lg text-lg">
					Quotify.io lets you create stunning quotes in minutes and{" "}
					{""}
					<span className="font-semibold">
						easily share or have them delivered to your doorstep.
					</span>
				</p>
				<div className="inline-flex flex-col sm:flex-row w-full max-w-sm items-center justify-between gap-3">
					<CtaButton href="/create/quote">Try for free</CtaButton>
					<Link
						href="/pricing"
						className={buttonVariants({
							variant: "link",
							className:
								"inline-block text-base font-medium text-gray-700",
						})}
					>
						See Pricing
					</Link>
				</div>
			</div>
			<div className="bg-gray-400 aspect-video h-full w-full"></div>
		</>
	);
}
