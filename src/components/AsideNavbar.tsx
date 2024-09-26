"use client";

import VerticalNavButton from "./VerticalNavButton";
import { LayoutTemplate } from "lucide-react";
import { Type } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function AsideNavbar() {
	const [isHover, setIsHover] = useState(false);

	return (
		<aside>
			<nav
				className={cn(
					"pl-4 pr-4 pt-6 w-24 text-muted-foreground h-full",
					isHover ? "bg-muted" : ""
				)}
			>
				<div className="flex flex-col">
					<VerticalNavButton
						htmlFor="template"
						label="Template"
						setIsHover={setIsHover}
					>
						<LayoutTemplate size={24} />
					</VerticalNavButton>

					<VerticalNavButton
						htmlFor="text"
						label="Text"
						setIsHover={setIsHover}
					>
						<Type size={24} />
					</VerticalNavButton>
				</div>
			</nav>
		</aside>
	);
}
