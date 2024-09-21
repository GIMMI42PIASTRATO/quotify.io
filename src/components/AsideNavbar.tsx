import { LayoutTemplate } from "lucide-react";
import { Type } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AsideNavbar() {
	return (
		<aside>
			<nav className="ml-2 mt-3 w-[72px] text-muted-foreground">
				<div className="flex flex-col gap-3">
					<div className="flex items-center justify-center flex-col h-[72px] w-full gap-1">
						<Button
							className="drop-shadow-xl hover:text-yellow-400"
							variant="ghost"
							size="icon"
							id="template"
						>
							<LayoutTemplate size={24} />
						</Button>
						<label
							className="cursor-pointer text-sm"
							htmlFor="template"
						>
							Template
						</label>
					</div>

					<div className="flex items-center justify-center flex-col h-[72px] w-full gap-1">
						<Button
							className="drop-shadow-xl hover:text-yellow-400"
							variant="ghost"
							size="icon"
							id="text"
						>
							<Type size={24} />
						</Button>
						<label
							className="cursor-pointer text-sm"
							htmlFor="text"
						>
							Text
						</label>
					</div>
				</div>
			</nav>
		</aside>
	);
}
