import AsideNavbar from "@/components/AsideNavbar";

export default function HomepageLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex min-h-screen">
			<AsideNavbar />
			<main className="flex-grow">{children}</main>
		</div>
	);
}
