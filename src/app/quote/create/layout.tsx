import AsideNavbar from "@/components/AsideNavbar";

export default function HomepageLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex flex-grow">
			<AsideNavbar />
			<main>{children}</main>
		</div>
	);
}
