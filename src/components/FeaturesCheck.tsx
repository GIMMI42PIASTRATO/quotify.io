import { CheckIcon } from "lucide-react";

export default function FeaturesCheck({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex items-start text-left">
			<p className="flex gap-1.5">
				<CheckIcon size={24} className="text-brand-400" />
				{children}
			</p>
		</div>
	);
}
