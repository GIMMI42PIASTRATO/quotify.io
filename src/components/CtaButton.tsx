import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CtaButtonProps = {
	href: string;
	children: React.ReactNode;
	className?: string;
};

export default function CtaButton({
	href,
	children,
	className,
}: CtaButtonProps) {
	return (
		<div className={cn("w-full flex-1", className)}>
			<Link
				href={href}
				className="group relative flex transform items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md border border-white bg-brand-400 px-8 text-base font-medium text-[#222222] transition-all duration-300 hover:ring-2 hover:ring-brand-400 hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-offset-2 h-12 w-full"
			>
				<span className="relative text-base font-semibold z-10 flex items-center gap-2">
					{children}
					<ArrowRight
						size={18}
						strokeWidth={2.3}
						className="transition-transform duration-300 ease-in-out group-hover:translate-x-[2px]"
					/>
				</span>
				<div className="ease-[cubic-bezier(0.19,1,0.22,1)] absolute -left-[75px] -top-[50px] -z-10 h-[155px] w-8 rotate-[35deg] bg-white opacity-40 transition-all duration-500 group-hover:left-[120%]"></div>
			</Link>
		</div>
	);
}
