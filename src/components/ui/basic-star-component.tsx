// 👇 available here: https://crotus.io/dashboard/primitive-components
import { Stars } from "@/components/ui/stars-crotus";
import { cn } from "@/lib/utils";

interface BasicStarReviewProps {
	rating: number;
	text: string;
	className?: string;
}

export const BasicStarReview = ({
	rating,
	text,
	className,
}: BasicStarReviewProps) => {
	return (
		<article
			itemScope
			itemType="https://schema.org/Review"
			className={cn(
				"flex flex-col items-center gap-1 bg-white px-6 py-24 sm:py-32 lg:px-8",
				className
			)}
		>
			<header>
				<h2 className="sr-only">Customer Review</h2>
				<div
					className="flex"
					aria-label={`Rating: ${rating} out of 5 stars`}
				>
					<Stars rating={rating} className="size-5" />
				</div>
				<meta itemProp="reviewRating" content={rating.toString()} />
			</header>

			<blockquote
				itemProp="reviewBody"
				className="max-w-prose text-center"
			>
				<p className="text-lg font-medium text-gray-800">{text}</p>
			</blockquote>
		</article>
	);
};
