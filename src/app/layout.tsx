import type { Metadata } from "next";
import { inter } from "@/utils/fonts";
import "./globals.css";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} text-gray-700 antialiased`}>
				{children}
			</body>
		</html>
	);
}
