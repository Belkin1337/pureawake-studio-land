import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/ui/button";
import { SectionWrapper } from "@/components/wrappers/components/section-wrapper";
import { TargetPageWrapper } from "@/components/wrappers/components/target-page-wrapper";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
	const metadataT = await getTranslations("Metadata.Wiki-TelegramBot");

	return {
		title: `pureawake.studio / ${metadataT('title')}`,
		description: metadataT("description")
	}
}

export default async function ServicesTgBotPage() {
	const configT = await getTranslations("Config");
	const telegramBotWikiT = await getTranslations("Wiki.Services.Telegram-Bot");

	return (
		<div className="flex flex-col w-full h-full min-h-screen pt-40 lg:pt-24">
			<TargetPageWrapper
				title={telegramBotWikiT("Wrapper.title")}
				description={telegramBotWikiT("Wrapper.description")}
				anchor="tg-bot-information"
				backgroundColor="bg-gray-700"
			/>
			<div id="tg-bot-information" className="flex flex-col">
				<SectionWrapper id="tg-bot-pluses" title={telegramBotWikiT("Pluses.title")}>
					<ul className="flex flex-col gap-2 *:text-lg *:text-white">
						<li>
							<p>- {telegramBotWikiT("Pluses.economy")}</p>
						</li>
						<li>
							<p>- {telegramBotWikiT("Pluses.ecosystem")}</p>
						</li>
						<li>
							<p>- {telegramBotWikiT("Pluses.advertise_users")}</p>
						</li>
						<li>
							<p>- {telegramBotWikiT("Pluses.advertising_functions")}</p>
						</li>
						<li>
							<p>- {telegramBotWikiT("Pluses.segmenting_personalisations")}</p>
						</li>
						<li>
							<p>- {telegramBotWikiT("Pluses.effective_ref_system")}</p>
						</li>
						<li>
							<p>- {telegramBotWikiT("Pluses.more_count_functions")}</p>
						</li>
					</ul>
				</SectionWrapper>
				<SectionWrapper id="tg-bot-how-to-work" title={telegramBotWikiT("Pluses.title")}>
					<div className="flex flex-row gap-4 *:text-md lg:*:text-lg *:text-white">
						<div className="flex flex-col gap-y-6">
							<p>{telegramBotWikiT("How-to-Work.basis_first")}</p>
							<ul className="flex flex-col gap-y-2">
								<li>
									<p>{telegramBotWikiT("How-to-Work.basis_second")}</p>
								</li>
								<li>
									<p>- {telegramBotWikiT("How-to-Work.chat_bot")}</p>
								</li>
								<li>
									<p>- {telegramBotWikiT("How-to-Work.info_bot")}</p>
								</li>
								<li>
									<p>- {telegramBotWikiT("How-to-Work.game_bot")}</p>
								</li>
								<li>
									<p>- {telegramBotWikiT("How-to-Work.assistant_bot")}</p>
								</li>
							</ul>
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