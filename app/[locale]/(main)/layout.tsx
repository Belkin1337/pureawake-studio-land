import { ReactNode } from "react";
import { PageWrapper } from "@/components/wrappers/page-wrapper";

export default async function MainLayout({
	children
}: {
	children: ReactNode
}) {
	return (
		<PageWrapper>
			{children}
		</PageWrapper>
	)
}