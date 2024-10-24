import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";

type SidePanelProps = {
	setIsHoverSidePanel: (value: boolean) => void;
};

export default function SidePanel({ setIsHoverSidePanel }: SidePanelProps) {
	return (
		<Card
			className="w-[350px] my-4"
			onMouseEnter={() => setIsHoverSidePanel(true)}
			onMouseLeave={() => setIsHoverSidePanel(false)}
		>
			<CardHeader>
				<CardTitle>Choose a template</CardTitle>
				<Input className="mt-2" placeholder="Search a template" />
			</CardHeader>
		</Card>
	);
}
