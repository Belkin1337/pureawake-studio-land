import { GLOBAL_SITE_HREF } from "@/shared/contacts";
import ShineBorder from "@/ui/shine-border";

export const SelfStudioWidget = () => {
	return (
		<a
			href={GLOBAL_SITE_HREF}
			target='_blank'
			rel="noreferrer"
		>
			<ShineBorder
				className="flex flex-row items-center bg-neutral-900 px-2 py-1"
				color={["#71a3a5", "#FE8FB5", "#FFBE7B"]}
				borderRadius={16}
			>
				<div className="flex flex-row w-full gap-x-2 items-center">
					<img
						src="https://i.ibb.co/c8sVb5j/favicon-transparent.png"
						alt="Developed by"
						className="w-[20px] h-[20px]"
					/>
					<p className="text-md text-white font-medium">
						Dev. by pureawake studio
					</p>
				</div>
			</ShineBorder>
		</a>
	)
}