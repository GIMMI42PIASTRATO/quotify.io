"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";

import { githubSingIn, googleSingIn } from "@/actions/oauth";

export default function Social() {
	return (
		<div className="flex items-center w-full gap-x-2">
			<Button
				size="lg"
				className="w-full"
				variant="outline"
				onClick={async () => await googleSingIn()}
			>
				<FcGoogle className="h-5 w-5" />
			</Button>
			<Button
				size="lg"
				className="w-full"
				variant="outline"
				onClick={async () => await githubSingIn()}
			>
				<FaGithub className="h-5 w-5" />
			</Button>
		</div>
	);
}
