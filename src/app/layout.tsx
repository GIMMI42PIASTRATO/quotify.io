import type { Metadata } from "next";
import { inter } from "@/utils/fonts";
import "@/app/globals.css";

export const metadata: Metadata = {
	title: "Create and share beautiful quotes",
	description:
		"Quotify.io lets you create stunning quotes in minutes and easily share or have them delivered to your doorstep.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html>
			<body className={`${inter.className} text-gray-700 antialiased`}>
				{children}
			</body>
		</html>
	);
}
