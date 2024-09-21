import Navbar from "@/components/ui/Navbar";

export default function HomepageLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
}
