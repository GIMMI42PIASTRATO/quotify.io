import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function HomepageLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
}
