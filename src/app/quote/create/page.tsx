import { auth } from "@/auth";

import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import CanvasKonva from "@/components/CanvasKonva";

export default async function Create() {
	const session = await auth();

	return (
		<div>
			{/* <div className="w-full h-[500px] mt-12 border border-gray-200 bg-muted rounded-lg">
				<CanvasKonva />
			</div> */}
		</div>
	);
}
