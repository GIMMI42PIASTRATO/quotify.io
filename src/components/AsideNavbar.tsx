"use client";

import VerticalNavButton from "./VerticalNavButton";
import { LayoutTemplate } from "lucide-react";
import { Type } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import SidePanel from "@/components/SidePanel";
import { is } from "drizzle-orm";

export default function AsideNavbar() {
	const [isHover, setIsHover] = useState(false);
	const [isHoverAsideNavbar, setIsHoverAsideNavbar] = useState(false);
	const [isHoverSidePanel, setIsHoverSidePanel] = useState(false);

	return (
		<>
			<aside
				onMouseEnter={() => setIsHoverAsideNavbar(true)}
				onMouseLeave={() => setIsHoverAsideNavbar(false)}
			>
				<nav className="flex flex-col justify-center h-full  pt-6 w-24 text-muted-foreground">
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
			{(isHover && isHoverAsideNavbar) || isHoverSidePanel ? (
				<SidePanel setIsHoverSidePanel={setIsHoverSidePanel} />
			) : null}
		</>
	);
}
