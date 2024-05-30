import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/ui/button";
import { SectionWrapper } from "@/components/wrappers/section-wrapper";
import { TargetPageWrapper } from "@/components/wrappers/target-page-wrapper";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
	const metadataT = await getTranslations("Metadata.Wiki-SiteCard");

	return {
		title: `pureawake.studio / ${metadataT('title')}`,
		description: metadataT("description")
	}
}

export default async function ServicesSiteCardPage() {
	const configT = await getTranslations("Config");
	const siteCardWikiT = await getTranslations("Wiki.Services.Site-Card");

	return (
		<div className="flex flex-col w-full h-full min-h-screen pt-32 lg:pt-24">
			<TargetPageWrapper
				title={siteCardWikiT('Wrapper.title')}
				description={siteCardWikiT('Wrapper.description')}
				anchor="site-card-information"
				backgroundColor="bg-purple-800"
			/>
			<div id="site-card-information" className="flex flex-col">
				<SectionWrapper id="site-card-pluses" title={siteCardWikiT('Pluses.title')}>
					<div className="flex flex-col gap-2 *:text-md lg:*:text-lg *:text-white">
						<p>- {siteCardWikiT('Pluses.static_content')}</p>
						<p>- {siteCardWikiT('Pluses.economy_website')}</p>
						<p>- {siteCardWikiT('Pluses.stable_geo')}</p>
						<p>- {siteCardWikiT('Pluses.growth_user_rep')}</p>
						<p>- {siteCardWikiT('Pluses.inject_site_card_address')}</p>
					</div>
				</SectionWrapper>
				<SectionWrapper id="site-card-how-to-work" title={siteCardWikiT('How-to-Work.title')}>
					<div className="flex flex-row gap-4 *:text-md lg:*:text-lg *:text-white">
						<div className="flex flex-col gap-y-6">
							<div className="flex flex-col gap-y-2">
								<p>
									{siteCardWikiT('How-to-Work.basis_first')}
								</p>
								<p>
									- {siteCardWikiT('How-to-Work.basis_second')}
								</p>
								<p>
									- {siteCardWikiT('How-to-Work.basis_third')}
								</p>
								<p>
									- {siteCardWikiT('How-to-Work.basis_fourth')}
								</p>
							</div>
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