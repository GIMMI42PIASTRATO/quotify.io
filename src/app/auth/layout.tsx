import Navbar from "@/components/ui/Navbar";

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Navbar />
			<div className="grow h-full flex justify-center items-center bg-[#fbfefd]">
				{children}
			</div>
		</>
	);
}
