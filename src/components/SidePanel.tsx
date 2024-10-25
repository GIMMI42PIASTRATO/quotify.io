import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SidePanel() {
	return (
		<Card className="w-[350px] my-4">
			<CardHeader>
				<CardTitle>Choose a template</CardTitle>
				<Input className="mt-2" placeholder="Search a template" />
			</CardHeader>
		</Card>
	);
}
