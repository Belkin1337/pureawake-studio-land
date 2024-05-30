import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/ui/button";
import { SectionWrapper } from "@/components/wrappers/section-wrapper";
import { TargetPageWrapper } from "@/components/wrappers/target-page-wrapper";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
	title: 'pureawake.studio / телеграм-бот',
	description: "Что такое телеграм-бот? pureawake.studio объяснит!",
};

export default async function ServicesTgBotPage() {
	const configT = await getTranslations("Config");
	const telegramBotWikiT = await getTranslations("Wiki.Services.Telegram-Bot");

	return (
		<div className="flex flex-col w-full h-full min-h-screen pt-32 lg:pt-24">
			<TargetPageWrapper
				title={telegramBotWikiT("Wrapper.title")}
				description={telegramBotWikiT("Wrapper.description")}
				anchor="tg-bot-information"
				backgroundColor="bg-gray-700"
			/>
			<div id="tg-bot-information" className="flex flex-col">
				<SectionWrapper id="tg-bot-pluses" title={telegramBotWikiT("Pluses.title")}>
					<div className="flex flex-col gap-2 *:text-lg *:text-white">
						<p>- {telegramBotWikiT("Pluses.economy")}</p>
						<p>- {telegramBotWikiT("Pluses.ecosystem")}</p>
						<p>- {telegramBotWikiT("Pluses.advertise_users")}</p>
						<p>- {telegramBotWikiT("Pluses.advertising_functions")}</p>
						<p>- {telegramBotWikiT("Pluses.segmenting_personalisations")}</p>
						<p>- {telegramBotWikiT("Pluses.effective_ref_system")}</p>
						<p>- {telegramBotWikiT("Pluses.more_count_functions")}</p>
					</div>
				</SectionWrapper>
				<SectionWrapper id="tg-bot-how-to-work" title={telegramBotWikiT("Pluses.title")}>
					<div className="flex flex-row gap-4 *:text-md lg:*:text-lg *:text-white">
						<div className="flex flex-col gap-y-6">
							<p>{telegramBotWikiT("How-to-Work.basis_first")}</p>
							<div className="flex flex-col gap-y-2">
								<p>{telegramBotWikiT("How-to-Work.basis_second")}</p>
								<p>- {telegramBotWikiT("How-to-Work.chat_bot")}</p>
								<p>- {telegramBotWikiT("How-to-Work.info_bot")}</p>
								<p>- {telegramBotWikiT("How-to-Work.game_bot")}</p>
								<p>- {telegramBotWikiT("How-to-Work.assistant_bot")}</p>
							</div>
							<p>{telegramBotWikiT("How-to-Work.basis_third")}</p>
						</div>
					</div>
				</SectionWrapper>
			</div>
			<div className="wrapper w-fit mb-12">
				<Link href="/#contacts">
					<Button>
						<p className="text-lg text-white font-medium">
							{configT('to_contacts')}
						</p>
					</Button>
				</Link>
			</div>
		</div>
	)
}