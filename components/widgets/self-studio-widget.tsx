import { GLOBAL_SITE_HREF } from "@/shared/contacts";
import Image from "next/image";


export const SelfStudioWidget = () => {
	return (
		<a
			href={GLOBAL_SITE_HREF}
			target='_blank'
			rel="noreferrer"
		>
			<div className="flex items-center border border-neutral-700/10 gap-x-2 bg-neutral-800/20 rounded-xl px-2 py-1">
				<img
					src="https://i.ibb.co/c8sVb5j/favicon-transparent.png"
					alt="Developed by"
					className="w-[20px] h-[20px]"
				/>
				<p className="text-sm text-white">
					Dev. by pureawake studio ♥
				</p>
			</div>
		</a>
	)
}