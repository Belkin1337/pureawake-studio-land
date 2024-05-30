"use client"

import { SERVICES_LIST } from "@/shared/services";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/ui/hover-card";
import { CircleHelp } from "lucide-react";
import { useTranslations } from "next-intl";
import { NeonGradientCard } from "@/ui/neon-gradient-card";

export const Services = () => {
	const t = useTranslations("Services");

	return (
		<div className="flex flex-col lg:flex-row items-center justify-between w-full gap-6">
			{SERVICES_LIST.map((item,
				idx) => (
				<NeonGradientCard key={idx}>
					<h3 className="text-white text-lg font-semibold">
						{t(item.name + '.title')}
					</h3>
					<HoverCard>
						<HoverCardTrigger className="absolute top-2 right-2">
							<CircleHelp size={22} className="text-neutral-400 cursor-pointer"/>
						</HoverCardTrigger>
						<HoverCardContent>
							{t(item.name + '.description')}
						</HoverCardContent>
					</HoverCard>
				</NeonGradientCard>
			))}
		</div>
	)
}