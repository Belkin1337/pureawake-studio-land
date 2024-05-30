"use client"

import Link from "next/link";
import { Button } from "@/ui/button";
import { useTranslations } from "next-intl";

interface ITargetPageWrapper {
	title: string,
	description: string,
	anchor: string,
	backgroundColor: string
}

export const TargetPageWrapper = ({
	anchor,
	description,
	title,
	backgroundColor,
}: ITargetPageWrapper) => {
	const t = useTranslations('Config');

	return (
		<div className={`flex flex-col wrapper justify-between py-6 ${backgroundColor} w-full h-[312px]`}>
			<div className="flex flex-col gap-y-4 w-full lg:w-2/3">
				<h1 className="text-5xl xl:text-6xl 2xl:text-7xl text-white font-[GothamProBold]">
					{title}
				</h1>
				<p className="text-neutral-50 text-base lg:text-xl font-medium font-[GothamPro]">
					{description}
				</p>
			</div>
			<Link href={`#` + anchor} className="w-fit">
				<Button>
					<p className="text-lg text-white font-medium">
						Узнать больше
					</p>
				</Button>
			</Link>
		</div>
	)
}