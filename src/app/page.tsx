import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Hero from "@/components/Hero";
import { BasicStarReview } from "@/components/ui/basic-star-component";
import Step1 from "@/components/Step1";
import Step2 from "@/components/Step2";
import Step3 from "@/components/Step3";

export default function Home() {
	return (
		<main className="bg-[#fbfefd] text-gray-700">
			<section className="relative z-10 min-h-[80dvh] overflow-hidden border-b border-gray-200">
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
			</section>

			<section
				className="relative overflow-hidden border-b border-gray-200 px-4 py-12 text-center sm:py-28"
				style={{ backgroundImage: "url('/bg-grainy-1.png')" }}
			>
				<MaxWidthWrapper className="mt-6 py-0 px-0 max-w-7xl flex flex-col items-center gap-10">
					<Step1 />
				</MaxWidthWrapper>
			</section>

			<section className="relative overflow-hidden border-b border-gray-200 px-4 py-12 text-center sm:py-28">
				<MaxWidthWrapper className="mt-6 py-0 px-0 max-w-7xl flex flex-col items-center gap-10">
					<Step2 />
				</MaxWidthWrapper>
			</section>

			<section
				className="relative overflow-hidden border-b border-gray-200 px-4 py-12 text-center sm:py-28"
				style={{ backgroundImage: "url('/bg-grainy-1.png')" }}
			>
				<MaxWidthWrapper className="mt-6 py-0 px-0 max-w-7xl flex flex-col items-center gap-10">
					<Step3 />
				</MaxWidthWrapper>
			</section>
		</main>
	);
}
