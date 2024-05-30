import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/ui/button";
import { SectionWrapper } from "@/components/wrappers/components/section-wrapper";
import { TargetPageWrapper } from "@/components/wrappers/components/target-page-wrapper";
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
		<div className="flex flex-col w-full h-full min-h-screen pt-36 lg:pt-24">
			<TargetPageWrapper
				title={siteCardWikiT('Wrapper.title')}
				description={siteCardWikiT('Wrapper.description')}
				anchor="site-card-information"
				backgroundColor="bg-purple-800"
			/>
			<div id="site-card-information" className="flex flex-col">
				<SectionWrapper id="site-card-pluses" title={siteCardWikiT('Pluses.title')}>
					<ul className="flex flex-col gap-2 *:text-md lg:*:text-lg *:text-white">
						<li>
							<p>- {siteCardWikiT('Pluses.static_content')}</p>
						</li>
						<li>
							<p>- {siteCardWikiT('Pluses.economy_website')}</p>
						</li>
						<li>
							<p>- {siteCardWikiT('Pluses.stable_geo')}</p>
						</li>
						<li>
							<p>- {siteCardWikiT('Pluses.growth_user_rep')}</p>
						</li>
						<li>
							<p>- {siteCardWikiT('Pluses.inject_site_card_address')}</p>
						</li>
					</ul>
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