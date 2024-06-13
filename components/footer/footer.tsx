import { FOOTER_SEGMENTS } from "@/shared/footer";
import Link from "next/link";
import { SelfStudioWidget } from "@/components/widgets/self-studio-widget";
import { TelegramIcon } from "@/ui/icons/components/telegram-icon";

export const Footer = () => {
	return (
		<div
			className="flex flex-col w-full wrapper gap-y-4 py-4 bg-gradient-to-t from-transparent via-neutral-700/10 to-transparent">
			{/*<div className="flex w-full justify-between">*/}
			{/*	{FOOTER_SEGMENTS.map((item, idx) => (*/}
			{/*		<div key={idx} className="flex flex-row w-full justify-center gap-4">*/}
			{/*			{item.nested.map((nested, idx) => (*/}
			{/*				<Link key={idx} href={nested.href}>*/}
			{/*					<p className="text-white text-md font-medium">*/}
			{/*						{nested.title}*/}
			{/*					</p>*/}
			{/*				</Link>*/}
			{/*			))}*/}
			{/*		</div>*/}
			{/*	))}*/}
			{/*</div>*/}
			<div className="flex gap-y-4 flex-col lg:flex-row justify-between items-center w-full">
				<SelfStudioWidget/>
				<div className="flex flex-col gap-y-2">
					<p className="text-your-pink-200 text-md lg:text-xl xl:text-2xl font-bold">
						piterschimpson@gmail.com
					</p>
					<Link href="https://t.me/pureawake" target="_blank">
						<div className="flex gap-x-1 items-center justify-end">
							<TelegramIcon height="18" width="18"/>
							<p className="text-md text-white ">Telegram</p>
						</div>
					</Link>
				</div>
			</div>
		</div>
	)
}
