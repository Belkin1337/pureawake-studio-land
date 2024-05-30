"use client"

import { PRICING_LIST } from "@/shared/pricing";
import { Button } from "@/ui/button";
import { useLocale, useTranslations } from 'next-intl';
import Link from "next/link";

export const Pricing = () => {
	const locale = useLocale()

	const costsT = useTranslations('Costs');
	const otherT = useTranslations("Other")
	const configT = useTranslations("Config")

	return (
		<div className="flex flex-col lg:flex-row justify-between items-stretch w-full gap-6 ">
			{PRICING_LIST.map((item,
				idx) => (
				<div
					key={idx}
					className="bg-gradient-to-bl hover:duration-700 ease-in duration-300
					hover:from-cyan-aqua-100 rounded-3xl overflow-hidden hover:to-your-pink-200 p-[1px]	w-full"
				>
					<div className="flex flex-col p-[23px] bg-neutral-800 gap-y-6 justify-between rounded-3xl h-full w-full">
						<div className="flex flex-col gap-y-2">
							<p className="text-white text-2xl font-[GothamProBold]">
								{costsT(item.name)}
							</p>
							<p className="text-white text-xl">
								{configT("price")}: {configT("from")}&nbsp;
								{locale === 'en' ?
									item.price.usd : locale === 'ru' ? item.price.rub : item.price.usd
								}
							</p>
						</div>
						<Link href="#contacts">
							<Button>
								<p className="text-white text-lg font-bold">
									{otherT("ihave")} {costsT(item.name).toLowerCase()}
								</p>
							</Button>
						</Link>
					</div>
				</div>
			))}
		</div>
	)
}