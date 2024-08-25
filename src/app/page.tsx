import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Hero from "@/components/Hero";

export default function Home() {
	return (
		<main className="bg-[#fbfefd]">
			<MaxWidthWrapper className="pb-24 pt-36 grid lg:grid-cols-2 sm:pb-32 place-items-center gap-8 lg:pt-44 xl:pt-72 lg:pb-52">
				<Hero />
			</MaxWidthWrapper>
		</main>
	);
}
