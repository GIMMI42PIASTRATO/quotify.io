import { Button } from "@/components/ui/button";
import Link from "next/link";

type BackButtonProps = {
	href: string;
	label: string;
	linkLabel: string;
};

export default function BackButton({
	href,
	label,
	linkLabel,
}: BackButtonProps) {
	return (
		<>
			<span className="text-sm text-muted-foreground">{label}</span>
			<Button className="p-0 text-zinc-950" variant="link" asChild>
				<Link href={href}>{linkLabel}</Link>
			</Button>
		</>
	);
}
