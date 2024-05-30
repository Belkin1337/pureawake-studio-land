import type { Metadata } from "next";
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";

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
	let gLocale: LocaleType;

	gLocale = locale === 'ru' ? 'ru_RU' : locale === 'en' ? 'en_EN' : 'en_EN'

	return {
		title: {
			template: '%s',
			default: 'pureawake.studio',
		},
		description: "pureawake.studio - студия разработчиков, которая разрабатывает качественные, продающие веб-сайты и не только.",
		keywords: [
			'pureawake', 'pureawake.studio', 'лендинг для сайта', 'лендинг', 'сайт-визитка',
			'телеграм бот', 'заказать сайт', 'заказать лендинг', 'создать сайт', 'создать сайт-визитку',
			'разработка сайта под ключ', 'разработка сайта', 'разработка телеграм ботов', 'разработка ботов'
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
			description: 'pureawake.studio - студия разработчиков, которая разрабатывает качественные, продающие веб-сайты и не только.',
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
			description: 'pureawake.studio - студия разработчиков, которая разрабатывает качественные, продающие веб-сайты и не только.',
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
		<html lang="en" suppressHydrationWarning={true}>
		<Script id="yandex-analytics" type="text/javascript" dangerouslySetInnerHTML={{
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
		<body>
		<QueryProvider>
			<NextIntlClientProvider messages={messages}>
				<Header/>
				{children}
				<Footer/>
				<ReactQueryDevtools/>
			</NextIntlClientProvider>
		</QueryProvider>
		<noscript>
			<div>
				<img src="https://mc.yandex.ru/watch/97248624" alt="" style={{ 'position': 'absolute', 'left': '-9999px' }}/>
			</div>
		</noscript>
		</body>
		</html>
	);
}