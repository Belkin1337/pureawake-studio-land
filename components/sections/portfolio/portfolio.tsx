"use client"

import { CircleChevronDown  } from 'lucide-react';
import { PORTFOLIO_CASES } from "@/shared/portfolio";
import { Dialog, DialogContent, DialogTrigger } from "@/ui/dialog";
import { WobbleCard } from "@/ui/wobble-card";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/ui/accordion";

export const Portfolio = () => {
	const portfolioT = useTranslations("Portfolio");
	const configT = useTranslations("Config")

	return (
		PORTFOLIO_CASES.map((item,
			idx) => (
			<Dialog key={idx}>
				<DialogTrigger>
					<WobbleCard
						containerClassName={`col-span-1 lg:col-span-2 h-full min-h-[500px] lg:min-h-[300px]`}
						className={item.backgroundColor}
					>
						<div className="max-w-xl relative">
							<h2 className="text-left text-balance font-bold text-base
								md:text-xl lg:text-5xl tracking-[-0.015em] text-white">
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
							alt={portfolioT(item.name.toLowerCase() + '.type')}
							className="absolute -right-4 filter -bottom-2 object-contain rounded-2xl"
							loading="lazy"
						/>
					</WobbleCard>
				</DialogTrigger>
				<DialogContent className="flex flex-col gap-y-6 max-w-5xl max-h-[620px] lg:max-h-[720px] py-4 px-4
				 overflow-hidden !overflow-y-auto w-full">
					<div className="flex flex-col gap-y-1">
						<h2 className="text-white text-3xl font-semibold">
							{item.name}
						</h2>
						<p className="text-neutral-400 text-md">
							нажмите на одну из кнопок, чтобы раскрыть список скриншотов
						</p>
					</div>
					<Accordion type="single" collapsible className="flex flex-col gap-y-2">
						<AccordionItem value="desktop">
							<AccordionTrigger className="bg-neutral-800 rounded-md p-2 w-full">
								<p className="text-white text-lg font-semibold">
									{configT("desktop_version")}
								</p>
							</AccordionTrigger>
							<AccordionContent>
								<div className="flex flex-col gap-y-4 grow">
									{item.desktopCase.map((screen,
										idx) => (
										<div key={idx} className="flex w-full overflow-hidden">
											<Image
												src={screen}
												alt={item.name}
												width={1200}
												height={900}
												loading="lazy"
												className="w-full h-full"
											/>
										</div>
									))}
								</div>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="mobile">
							<AccordionTrigger className="bg-neutral-800 rounded-md p-2 w-full">
								<p className="text-white text-lg font-semibold">
									{configT("mobile_version")}
								</p>
							</AccordionTrigger>
							<AccordionContent>
								<div className="flex flex-col gap-y-4 items-center">
									{item.mobileCase.map((screen,
										idx) => (
										<div key={idx} className="w-[390px] h-full overflow-hidden flex">
											<Image
												src={screen}
												alt={item.name}
												width={390}
												height={500}
												loading="lazy"
												className="w-full h-full"
											/>
										</div>
									))}
								</div>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</DialogContent>
			</Dialog>
		))
	)
}