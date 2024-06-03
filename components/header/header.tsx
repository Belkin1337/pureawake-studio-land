"use client"

import { HEADER_SEGMENTS } from "@/shared/header";
import { HeaderSegment } from "@/components/header/components/header-segment";
import { LangSelector } from "@/components/header/components/lang-selector";
import { GLOBAL_SITE_HREF } from "@/shared/contacts";
import { useInView } from "react-intersection-observer";
import { TelegramIcon } from "@/ui/icons/components/telegram-icon";
import { Selected } from "@/ui/selected";
import Link from "next/link";
import Image from "next/image";
import LogoTransparent from "@/assets/images/favicon_transparent.png"

export const Header = () => {
	const { ref, inView } = useInView();
	const headerHeight = inView ? 'py-4' : 'py-1';

	return (
		<>
			<div ref={ref} className="absolute top-0 right-0 left-0 py-6 w-full"/>
			<div className={`flex flex-col lg:flex-row justify-center lg:justify-between backdrop-blur-md z-[60] bg-neutral-900/10 	${headerHeight}
			 items-center fixed duration-500 top-0 right-0 left-0 w-full wrapper *:w-full`}
			>
				<hr className="absolute bottom-0 right-0 left-0 m-0 h-px w-full border-none bg-gradient-to-r
					from-neutral-200/0 via-neutral-200/30 to-neutral-200/0"
				/>
				<div className="flex justify-center lg:justify-start items-center overflow-hidden">
					<Link aria-label="pureawake" id="pureawake-logotype" href={GLOBAL_SITE_HREF}>
						<div className="flex justify-center items-center gap-x-1 py-2">
							<Image
								src={LogoTransparent}
								className="w-[36px] h-[36px]"
								width={36}
								height={36}
								alt="pureawake studio logo"
							/>
							<p className="text-2xl text-white font-[Pixy] leading-3">
								pureawake
							</p>
						</div>
					</Link>
				</div>
				<div className="hidden lg:flex items-center gap-x-4">
					{HEADER_SEGMENTS.map((item,
						idx) => (
						<HeaderSegment
							key={idx}
							nested={item.nested}
							component={{ title: item.component.title, icon: item.component.icon, href: item.component.href }}
						/>
					))}
				</div>
				<div className="flex flex-col sm:flex-row items-center justify-center sm:justify-center gap-x-4 lg:justify-end">
					<div className="lg:hidden flex items-center gap-x-4">
						{HEADER_SEGMENTS.map((item,
							idx) => (
							<HeaderSegment
								key={idx}
								nested={item.nested}
								component={{ title: item.component.title, icon: item.component.icon, href: item.component.href }}
							/>
						))}
					</div>
					<div className="flex items-center gap-x-2">
						<LangSelector/>
						<Selected
							animation="spring"
							className="flex justify-center items-center p-4 hover:scale-[0.97]	hover:duration-500 duration-300 hover:bg-neutral-600/40 rounded-xl cursor-pointer"
						>
							<Link aria-label="telegram" id="telegram-media" href="https://t.me/pureawake">
								<TelegramIcon height="18" width="18"/>
							</Link>
						</Selected>
					</div>
				</div>
			</div>
		</>
	)
}