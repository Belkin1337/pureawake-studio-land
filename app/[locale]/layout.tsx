import type { Metadata } from "next";
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { Analytics } from "@vercel/analytics/react"
import { Partytown } from '@builder.io/partytown/react';

import "@/styles/globals.css";

import QueryProvider from "@/lib/providers/query-provider";
import Script from "next/script";

type LocaleType = 'ru_RU' | 'en_EN';

type MetadataType = {
	params: { locale: string }
}

export async function generateMetadata({
	params: { locale }
}: MetadataType): Promise<Metadata> {
	const metadataT = await getTranslations("Metadata");

	let gLocale: LocaleType;

	gLocale = locale === 'ru' ? 'ru_RU' : locale === 'en' ? 'en_EN' : 'en_EN'

	return {
		metadataBase: new URL('https://pureawake-studio.su'),
		alternates: {
			canonical: '/',
			languages: {
				'en-US': '/en',
				'ru-RU': '/ru',
			},
		},
		title: {
			template: '%s | pureawake.studio',
			default: `${metadataT("Global.title")} | pureawake.studio`,
		},
		description: metadataT("Global.description"),
		keywords: [
			'pureawake', 'pureawake.studio', 'лендинг для сайта', 'landing page for the site', 'лендинг', 'landing',
			'сайт-визитка', 'web site card', 'site-card',
			'телеграм бот', 'telegram bot', 'bot', 'bots', 'to order a site', 'order website development', 'заказать лендинг', 'to order a landing', 'order landing development',
			'создать сайт', 'create a website', 'создать сайт-визитку', 'create a web site card',
			'разработка сайта под ключ', 'turnkey website development', 'разработка сайта', 'website development',
			'разработка телеграм ботов', 'telegram bot development', 'bots development', 'разработка ботов'
		],
		authors: [
			{
				name: 'Rus Belkin'
			},
			{
				name: 'pureawake.studio',
				url: 'https://pureawake-studio.su'
			}
		],
		creator: 'pureawake-studio',
		referrer: 'origin-when-cross-origin',
		applicationName: 'pureawake.studio',
		openGraph: {
			title: 'pureawake.studio',
			description: metadataT("Global.description"),
			url: 'https://pureawake-studio.su',
			siteName: 'pureawake.studio main',
			type: 'website',
			locale: gLocale,
			images: ["/app/favicon.ico"]
		},
		robots: {
			index: true,
			follow: true,
			nocache: true,
			googleBot: {
				index: true,
				follow: false,
				noimageindex: true,
				'max-video-preview': -1,
				'max-image-preview': 'large',
				'max-snippet': -1,
			},
		},
		twitter: {
			title: 'pureawake.studio',
			description: metadataT("Global.description"),
			images: ['/app/favicon.ico'],
		},
		verification: {
			google: 'google',
			yandex: 'yandex',
			yahoo: 'yahoo',
			other: {
				me: ['contact@pureawake-studio.su'],
			},
		},
		other: {
			"yandex-verification": "2f848a06f521e7bb"
		}
	}
}

export default async function RootLayout({
	children,
	params: { locale }
}: Readonly<{
	children: ReactNode;
	params: { locale: string };
}>) {
	const messages = await getMessages();

	return (
		<html lang={locale} suppressHydrationWarning={true}>
		<body>
		<QueryProvider>
			<NextIntlClientProvider messages={messages}>
				<Header/>
				{children}
				<Footer/>
				<ReactQueryDevtools/>
			</NextIntlClientProvider>
		</QueryProvider>
		<Analytics/>
		<script id="yandex-analytics" type="text/partytown" dangerouslySetInnerHTML={{
			__html: `
			(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
				m[i].l=1*new Date();
			for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
				k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
				(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

			ym(97248624, "init", {
				clickmap:true,
				trackLinks:true,
				accurateTrackBounce:true
			});`,
		}}/>
		<noscript>
			<div>
				<img src="https://mc.yandex.ru/watch/97248624" alt="" style={{ 'position': 'absolute', 'left': '-9999px' }}/>
			</div>
		</noscript>
		</body>
		</html>
	);
}