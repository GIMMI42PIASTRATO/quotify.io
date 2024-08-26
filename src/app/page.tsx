import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Hero from "@/components/Hero";
import { BasicStarReview } from "@/components/ui/basic-star-component";

export default function Home() {
	return (
		<main className="bg-[#fbfefd] text-gray-700">
			<div className="relative z-10 min-h-[80dvh] overflow-hidden border-b border-gray-200">
				<MaxWidthWrapper className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20 mt-28 grid place-items-center gap-10 sm:grid-cols-3">
					<BasicStarReview
						rating={5}
						text='"Quotes of exceptional quality"'
						className="p-0 sm:p-0 md:p-0 lg:p-0"
					/>
					<BasicStarReview
						rating={5}
						text='"Perfect prints for my home decor!"'
						className="hidden sm:flex p-0 sm:p-0 md:p-0 lg:p-0"
					/>
					<BasicStarReview
						rating={5}
						text="Fast, easy, and beautiful quotes!"
						className="hidden sm:flex p-0 sm:p-0 md:p-0 lg:p-0"
					/>
				</MaxWidthWrapper>
				<MaxWidthWrapper className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20 relative grid place-items-center gap-8 py-12 sm:py-14 md:pt-24 lg:grid-cols-2">
					<Hero />
				</MaxWidthWrapper>
			</div>
		</main>
	);
}
