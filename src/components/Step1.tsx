import { eb_garamond } from "@/utils/fonts";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import FeaturesCheck from "./FeaturesCheck";

export default function Step1() {
	return (
		<>
			<div className="space-y-2 text-center">
				<h1
					className={`${eb_garamond.className} text-4xl font-heading font-semibold tracking-tight text-balance text-[#222222] sm:text-5xl`}
				>
					Step 1: <span className="text-brand-400">Create</span> a
					quote
				</h1>
			</div>

			<p className="max-w-prose sm:text-lg">
				We provide you with an easy-to-use, beautifully designed quote
				creation tool.{" "}
				<span className="font-semibold text-gray-800">
					Customize your quotes with various styles and fonts
				</span>
				, and bring your vision to life in just minutes
			</p>

			<div className="relative w-full max-w-3xl">
				<Image
					src="/TEST-chad.webp"
					alt="TEST-IMAGE"
					width={1920}
					height={1080}
				/>
			</div>

			<MaxWidthWrapper className="mt-6 grid place-items-center gap-y-4 sm:grid-cols-3">
				<FeaturesCheck>
					<span>
						<span className="font-semibold text-[#222222]">
							Personalize
						</span>{" "}
						with diverse styles
					</span>
				</FeaturesCheck>
				<FeaturesCheck>
					<span>
						<span className="font-semibold text-[#222222]">
							High-quality
						</span>{" "}
						image exports
					</span>
				</FeaturesCheck>
				<FeaturesCheck>
					<span>
						<span className="font-semibold text-[#222222]">
							Seamless
						</span>{" "}
						design experience
					</span>
				</FeaturesCheck>
			</MaxWidthWrapper>
		</>
	);
}
