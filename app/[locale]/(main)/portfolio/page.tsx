import { SectionWrapper } from "@/components/wrappers/components/section-wrapper";
import { getTranslations } from "next-intl/server";
import { Portfolio } from "@/components/sections/components/portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: 'pureawake.studio / портфолио',
};

export default async function PortfolioPage() {
	const t = await getTranslations("Portfolio");

	return (
		<div className="flex w-full h-full my-12">
			<SectionWrapper
				id="portfolio-cases"
				title={t("title")}
			>
				<div className="grid gap-4">
					<Portfolio/>
				</div>
			</SectionWrapper>
		</div>
	)
}