type HeaderProps = {
	label: string;
};

export default function Header({ label }: HeaderProps) {
	return (
		<div className="w-full flex flex-col gap-y-4 items-center justify-centere">
			<h1 className="text-3xl font-semibold">
				quotify.<span className="text-brand-400">io</span>
			</h1>
			<p className="text-muted-foreground text-sm">{label}</p>
		</div>
	);
}
