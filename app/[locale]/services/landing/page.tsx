import { Button } from "@/ui/button";
import { SectionWrapper } from "@/components/wrappers/components/section-wrapper";
import { ImageWithAnnotation } from "@/ui/image-with-annotation";
import Link from "next/link";
import type { Metadata } from "next";
import { TargetPageWrapper } from "@/components/wrappers/components/target-page-wrapper";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
	const metadataT = await getTranslations("Metadata.Wiki-Landing");

	return {
		title: `${metadataT('title')}`,
		description: metadataT("description")
	}
}


export default async function ServicesLandingPage() {
	const configT = await getTranslations("Config");
	const landingWikiT = await getTranslations("Wiki.Services.Landing");

	return (
		<div className="flex flex-col w-full h-full min-h-screen pt-36 lg:pt-24">
			<TargetPageWrapper
				title={landingWikiT("Wrapper.title")}
				description={landingWikiT("Wrapper.description")}
				anchor="landing-information"
				backgroundColor="bg-blue-800"
			/>
			<div id="landing-information" className="flex flex-col">
				<SectionWrapper id="landing-pluses" title={landingWikiT("Pluses.title")}>
					<ul className="flex flex-col gap-2 *:text-md lg:*:text-lg *:text-white">
						<li>
							<p>- {landingWikiT('Pluses.leadgen')}</p>
						</li>
						<li>
							<p>- {landingWikiT('Pluses.client_info')}</p>
						</li>
						<li>
							<p>- {landingWikiT('Pluses.seo_enhance')}</p>
						</li>
						<li>
							<p>- {landingWikiT('Pluses.advertise_enhance')}</p>
						</li>
						<li>
							<p>- {landingWikiT('Pluses.simplify_process')}</p>
						</li>
					</ul>
				</SectionWrapper>
				<SectionWrapper id="landing-how-to-work" title={landingWikiT("How-to-Work.title")}>
					<div className="flex flex-col lg:flex-row gap-4 *:text-md lg:*:text-lg *:text-white">
						<div className="flex flex-col gap-y-6">
							<p>{landingWikiT("How-to-Work.basis_first")}</p>
							<p>{landingWikiT("How-to-Work.basis_second")}</p>
							<div className="flex flex-col gap-y-1">
								<p>{landingWikiT("Key-Factors.title")}</p>
								<p>- {landingWikiT("Key-Factors.first_factor")}</p>
								<p>- {landingWikiT("Key-Factors.second_factor")}</p>
								<p>- {landingWikiT("Key-Factors.third_factor")}</p>
								<p>- {landingWikiT("Key-Factors.fourth_factor")}</p>
								<p>- {landingWikiT("Key-Factors.fifth_form")}</p>
							</div>
						</div>
						<ImageWithAnnotation
							propSrc="/images/landing-duolingo.png"
							propAlt="Duo example"
							annotation={landingWikiT("How-to-Work.example.duolingo")}
						/>
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