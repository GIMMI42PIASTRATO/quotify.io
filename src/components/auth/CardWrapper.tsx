import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import Header from "@/components/auth/Header";
import Social from "@/components/auth/Social";
import BackButton from "@/components/auth/BackButton";

type CardWrapperProps = {
	children: React.ReactNode;
	headerLabel: string;
	backButtonLabel: string;
	backButtonLinkLabel: string;
	backButtonHref: string;
	showSocial?: boolean;
};

export default function CardWrapper({
	children,
	headerLabel,
	backButtonLabel,
	backButtonLinkLabel,
	backButtonHref,
	showSocial,
}: CardWrapperProps) {
	return (
		<Card className="w-[400px] shadow-md">
			<CardHeader>
				<Header label={headerLabel} />
			</CardHeader>
			<CardContent>{children}</CardContent>
			{showSocial && (
				<CardFooter>
					<Social />
				</CardFooter>
			)}
			<CardFooter className="justify-center gap-1">
				<BackButton
					label={backButtonLabel}
					linkLabel={backButtonLinkLabel}
					href={backButtonHref}
				/>
			</CardFooter>
		</Card>
	);
}
