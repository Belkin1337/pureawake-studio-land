"use client"

import { PORTFOLIO_CASES } from "@/shared/portfolio";
import { Dialog, DialogContent, DialogTrigger } from "@/ui/dialog";
import { WobbleCard } from "@/ui/wobble-card";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const Portfolio = () => {
	const portfolioT = useTranslations("Portfolio");
	const configT = useTranslations("Config")

	return (
		PORTFOLIO_CASES.map((item, idx) => (
			<Dialog key={idx}>
				<DialogTrigger>
					<WobbleCard containerClassName={`col-span-1 lg:col-span-2 h-full min-h-[500px] lg:min-h-[300px]`} className={item.backgroundColor}>
						<div className="max-w-xl relative">
							<h2 className="text-left text-balance font-bold text-base md:text-xl lg:text-5xl tracking-[-0.015em] text-white">
								{item.name}
							</h2>
							<p className="mt-4 text-left text-xl text-neutral-200">
								{portfolioT(item.name.toLowerCase() + '.description')}
							</p>
						</div>
						<Image
							src={item.image}
							width={500}
							height={500}
							alt={portfolioT(item.name.toLowerCase())}
							className="absolute -right-4 filter -bottom-2 object-contain rounded-2xl"
							loading="lazy"
						/>
					</WobbleCard>
				</DialogTrigger>
				<DialogContent
					className="flex flex-col gap-y-24 lg:flex-row max-w-5xl max-h-[620px] lg:max-h-[820px] py-8 px-4 overflow-hidden !overflow-y-auto w-full">
					<div className="flex flex-col gap-y-4 grow">
						<p className="text-white text-lg font-semibold">
							{configT("desktop_version")}
						</p>
						{item.desktopCase.map((screen,
							idx) => (
							<Image
								key={idx}
								src={screen}
								alt={item.name}
								width={200}
								height={200}
								loading="lazy"
							/>
						))}
					</div>
					<div className="flex flex-col gap-y-4 ">
						<p className="text-white text-lg font-semibold">
							{configT("mobile_version")}
						</p>
						<div className="overflow-hidden">
							{item.mobileCase.map((screen,
								idx) => (
								<Image
									key={idx}
									src={screen}
									alt={item.name}
									width={200}
									height={500}
									loading="lazy"
									className="w-full h-full"
								/>
							))}
						</div>
					</div>
				</DialogContent>
			</Dialog>
		))
	)
}