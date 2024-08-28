import { eb_garamond } from "@/utils/fonts";
import Image from "next/image";

export default function Step2() {
	return (
		<>
			<div className="space-y-2 text-center">
				<h1
					className={`${eb_garamond.className} text-4xl font-heading font-semibold tracking-tight text-balance text-[#222222] sm:text-5xl`}
				>
					Step 2: <span className="text-brand-400">Download</span>{" "}
					your quote
				</h1>
			</div>

			<p className="max-w-prose sm:text-lg">
				Once you&apos;re happy with your design,{" "}
				<span className="font-semibold text-gray-800">
					download your custom quote instantly as a high-quality
					image.
				</span>
				Perfect for sharing on social media, keeping as digital
				inspiration or embed it wherever you want.
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
		</>
	);
}
