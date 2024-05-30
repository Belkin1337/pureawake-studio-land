import { Archive, Contact, Coffee, Asterisk } from "lucide-react";

export type HeaderComponentType = {
	title: string,
	href: string,
	icon: any,
}

export type HeaderSegmentsType = {
	component: HeaderComponentType,
	nested?: Array<HeaderComponentType>
}

export const HEADER_SEGMENTS: HeaderSegmentsType[] = [
	{
		component: {
			title: "main",
			href: "/",
			icon: Coffee
		}
	},
	{
		component: {
			title: "portfolio",
			href: "/portfolio",
			icon: Archive
		}
	},
	{
		component: {
			title: "services",
			href: "/services",
			icon: Asterisk,
		},
		nested: [
			{
				title: "landing",
				href: "/landing",
				icon: Archive
			},
			{
				title:"site-card",
				href: "/site-card",
				icon: Archive
			},
			{
				title: "telegram-bot",
				href: "/tg-bot",
				icon: Archive
			}
		]
	},
	{
		component: {
			title: "contacts",
			href: "/#contacts",
			icon: Contact
		}
	},
]

export const HEADER_CONTACT = "Обратиться к нам"