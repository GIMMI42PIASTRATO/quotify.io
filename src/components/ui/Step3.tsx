import { eb_garamond } from "@/utils/fonts";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import CtaButton from "./CtaButton";

export default function Step3() {
	return (
		<>
			<div className="space-y-2 text-center">
				<h1
					className={`${eb_garamond.className} text-4xl font-heading font-semibold tracking-tight text-balance text-[#222222] sm:text-5xl`}
				>
					Step 3: <span className="text-brand-400">Purchase</span> and
					receive at home
				</h1>
			</div>

			<p className="max-w-prose sm:text-lg">
				Love your quote? Easily purchase a premium print and{" "}
				<span className="font-semibold text-gray-800">
					have it delivered right to your doorstep.
				</span>
				We take care of the printing and shipping, so you can enjoy your
				custom quote in physical form, beautifully crafted and ready to
				display.
			</p>

			<div className="relative w-full max-w-3xl">
				<Image
					className="rounded-md object-cover shadow-xl outline outline-4 outline-gray-700"
					src="/TEST-chad.webp"
					alt="TEST-IMAGE"
					width={1920}
					height={1080}
				/>
			</div>

			<CtaButton href="/quote/create" className="w-auto mt-4">
				Create your quote now
			</CtaButton>
		</>
	);
}
