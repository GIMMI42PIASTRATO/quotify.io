import VerticalNavButton from "./VerticalNavButton";
import { LayoutTemplate } from "lucide-react";
import { Type } from "lucide-react";

export default function AsideNavbar() {
	return (
		<aside>
			<nav className="ml-2 mt-3 w-[72px] text-muted-foreground">
				<div className="flex flex-col gap-3">
					<VerticalNavButton htmlFor="template" label="Template">
						<LayoutTemplate size={24} />
					</VerticalNavButton>

					<VerticalNavButton htmlFor="text" label="Text">
						<Type size={24} />
					</VerticalNavButton>
				</div>
			</nav>
		</aside>
	);
}
