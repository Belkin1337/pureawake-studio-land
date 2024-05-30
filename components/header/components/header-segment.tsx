import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/ui/hover-card";
import { HeaderSegmentsType } from "@/shared/header";
import { Selected } from "@/ui/selected";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export const HeaderSegment = ({
	component: {
		icon: Icon,
		href: href,
		title: title
	},
	nested
}: HeaderSegmentsType) => {
	const locale = useLocale();
	const t = useTranslations("Header");

	console.log(locale)
	return (
		<HoverCard openDelay={0} closeDelay={0}>
			<HoverCardTrigger
				href={href}
				onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
					if (nested) e.preventDefault();
				}}
			>
				{nested ? (
					<Selected
						padding="default"
						animation="spring"
						cursor="default"
						className="hover:scale-[0.97] duration-300 hover:bg-neutral-600/40 cursor-pointer text-white hover:text-cyan-aqua-100 hover:duration-300"
					>
						<Icon size="14"/>
						<p className="hidden lg:inline text-md lg:text-base font-semibold">
							{t(title + '.title')}
						</p>
					</Selected>
				) : (
					<Selected
						padding="default"
						animation="spring"
						cursor="default"
						className="hover:scale-[0.97] duration-300 hover:bg-neutral-600/40 cursor-pointer text-white hover:text-cyan-aqua-100 hover:duration-300"
					>
						<Icon size="14"/>
						<p className="hidden lg:inline text-md lg:text-base font-semibold">
							{t(title)}
						</p>
					</Selected>
				)}
			</HoverCardTrigger>
			{nested && (
				<HoverCardContent
					className="flex flex-col gap-y-2 w-fit lg:w-[260px] p-1"
					sideOffset={-1}
					align="start"
				>
					{nested.map((item,
						idx) => (
						<Link key={idx} href={href + item.href}>
							<div className="flex hover:bg-neutral-700 rounded-xl w-full lg:px-4 px-2 py-1 lg:py-2">
								<p className="text-white text-md font-medium">
									{t(title + '.' + item.title)}
								</p>
							</div>
						</Link>
					))}
				</HoverCardContent>
			)}
		</HoverCard>
	)
}