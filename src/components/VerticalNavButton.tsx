import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type VerticalNavButtonProps = {
	children: React.ReactNode;
	className?: string;
	htmlFor: string;
	label: string;
	setIsHover: (value: boolean) => void;
};

export default function VerticalNavButton({
	children,
	className,
	htmlFor,
	label,
	setIsHover,
}: VerticalNavButtonProps) {
	return (
		<div
			className={cn(
				"flex items-center justify-center flex-col h-[90px] w-full gap-1 cursor-pointer group",
				className
			)}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<Button
				className="group-hover:shadow-xl group-hover:text-yellow-400 group-hover:drop-shadow-xl group-hover:bg-gray-100"
				variant="ghost"
				size="icon"
				id={htmlFor}
			>
				{children}
			</Button>
			<label className="cursor-pointer text-sm" htmlFor={htmlFor}>
				{label}
			</label>
		</div>
	);
}
