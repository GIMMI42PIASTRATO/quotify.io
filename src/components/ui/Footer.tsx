import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="z-10 bg-white/50 py-8 backdrop-blur-lg">
			<MaxWidthWrapper className="px-2.5 md:px-20 pt-10">
				<div className="xl:grid xl:grid-cols-5 xl:gap-8">
					<div className="space-y-8 xl:col-span-2">
						<Link href="/" className="flex z-40 font-medium">
							quotify.<span className="text-brand-400">io</span>
						</Link>
						<p className="max-w-xs text-sm text-gray-600">
							Create stunning quotes in minutes and easily share
							or have them delivered to your doorstep.
						</p>
					</div>
				</div>

				<div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
					<p className="text-sm leading-5 text-gray-500">
						© {new Date().getFullYear()} quotify.io. All rights
						reserved.
					</p>
				</div>
			</MaxWidthWrapper>
		</footer>
	);
}
