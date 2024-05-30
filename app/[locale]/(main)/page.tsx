import { Services } from "@/components/sections/components/services";
import { Pricing } from "@/components/sections/components/pricing";
import { SectionWrapper } from "@/components/wrappers/components/section-wrapper";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { TELEGRAM_CONTACT_PERSON_HREF, TELEGRAM_CONTACT_PERSON_ID } from "@/shared/contacts";
import Image from "next/image";
import PNG from "@/assets/images/config/png_png.jpg";
import { Button } from "@/ui/button";
import { Star } from "lucide-react";
import RetroGrid from "@/ui/retro-grid";
import WordFadeIn from "@/ui/word-fade-in";

export default async function Home() {
	const servicesT = await getTranslations("Services");
	const pricingT = await getTranslations("Costs")
	const contactsT = await getTranslations('Contacts')
	const introT = await getTranslations("Intro")
	const configT = await getTranslations("Config")

	return (
		<>
			<div
				className="flex relative flex-col justify-center lg:flex-row w-full h-full min-h-screen items-center gap-y-16 gap-x-32">
				<div className="flex relative items-center flex-col gap-y-12 w-full lg:w-4/5 lg:pt-0 wrapper">
					<div className="flex flex-col gap-y-6 w-full">
						<WordFadeIn
							words={introT('title')}
							className="font-bold text-4xl xl:text-6xl 2xl:text-7xl font-[GothamProBold] text-white"
						/>
						<WordFadeIn
							words={introT('description')}
							className="text-white text-lg xl:text-xl 2xl:text-2xl font-medium"
						/>
					</div>
					<div className="w-full sm:w-fit">
						<Link href="/#contacts">
							<Button variant="shimmer">
								<Star size={18} className="fill-white"/>
								<p className="text-white text-lg font-semibold">
									{introT('button')}
								</p>
							</Button>
						</Link>
					</div>
				</div>
				<RetroGrid/>
			</div>
			<SectionWrapper id="available-services" title={servicesT('section_title')}>
				<Services/>
			</SectionWrapper>
			<SectionWrapper id="pricing" title={pricingT('section_title')}>
				<Pricing/>
			</SectionWrapper>
			<SectionWrapper id="contacts" title={contactsT('section_title')}>
				<div className="flex flex-row lg:flex-col gap-y-6">
					<div className="flex flex-col gap-y-4">
						<div className="flex flex-col lg:flex-row gap-4 *:bg-neutral-800 *:rounded-3xl *:px-3 *:py-4 *:w-full">
							<div className="flex flex-col gap-y-4">
								<h2 className="text-xl text-white font-semibold">
									{contactsT("main_info")}
								</h2>
								<div className="flex flex-col gap-y-1">
									<p className="text-neutral-400 text-md">
										{contactsT("full_name_studio")}
									</p>
									<p className="text-white text-lg">
										pureawake studio
									</p>
								</div>
								<div className="flex flex-col gap-y-1">
									<p className="text-neutral-400 text-md">
										{contactsT("contacts_email")}
									</p>
									<p className="text-white text-lg">
										contact@pureawake-studio.su
									</p>
								</div>
								<div className="flex flex-col gap-y-1">
									<p className="text-neutral-400 text-md">
										{contactsT("contacts_telegram")}
									</p>
									<p className="text-white hover:text-emerald-500 text-lg">
										<Link target="_blank" href={TELEGRAM_CONTACT_PERSON_HREF}>
											{TELEGRAM_CONTACT_PERSON_ID}
										</Link>
									</p>
								</div>
								<div className="flex flex-col gap-y-1">
									<p className="text-neutral-400 text-md">
										{contactsT("contacts_time")}
									</p>
									<p className="text-white text-lg">
										{configT("fulltime")}
									</p>
								</div>
							</div>
							<div className="flex flex-col gap-y-6">
								<div className="flex flex-col gap-y-2">
									<h2 className="text-xl text-white font-semibold">
										{contactsT("message_example")}
									</h2>
									<p className="text-neutral-400 text-md">
										{contactsT("message_example_sub")}
									</p>
								</div>
								<div className="flex gap-x-2 w-full h-full">
									<div className="flex overflow-hidden rounded-full h-[26px] w-[26px] lg:h-[52px] lg:w-[56px]">
										<Image src={PNG} alt="Your avatar" width={26} height={26} className="w-full h-full object-cover"/>
									</div>
									<div
										className="flex flex-col justify-center gap-y-2 bg-neutral-700 h-full w-full rounded-md p-4 *:leading-3 *:text-white *:font-medium lg:*:text-xl">
										<p>1.&nbsp;{contactsT('first')}
										</p>
										<p>2.&nbsp;{contactsT('second')}
										</p>
										<p>3.&nbsp;{contactsT('third')}
										</p>
										<p>4.&nbsp;{contactsT('fourth')}
										</p>
									</div>
								</div>
							</div>
						</div>
						<p className="text-white underline underline-offset-4 font-bold">
							P.S: {contactsT('description')}
						</p>
					</div>
				</div>
			</SectionWrapper>
		</>
	);
}

// <div className="flex flex-col w-full lg:w-fit justify-between gap-y-4 *:text-white">
	{/*{GUARANTESS_LIST.map((item,*/}
	{/*	idx) => (*/}
	{/*	<div*/}
	{/*		key={idx}*/}
	{/*		className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))]*/}
	{/*	from-green-600 via-green-100 h-[100px] hover:shadow-md shadow-black to-[#34d399] hover:scale-[1.01] cursor-default rounded-3xl overflow-hidden p-[1px]">*/}
	{/*		<div className="flex items-center h-full rounded-3xl ease-in-out p-5 lg:p-6 bg-neutral-800 gap-x-4">*/}
	{/*			<item.icon size="22"/>*/}
	{/*			<p className="text-base lg:text-lg text-white font-semibold">*/}
	{/*				{item.name}*/}
	{/*			</p>*/}
	{/*		</div>*/}
	{/*	</div>*/}
	{/*))}*/}
// </div>