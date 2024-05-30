import { ReactNode } from "react";

export const PageWrapper = ({
	children,
	...props
}: {
	children: ReactNode
}) => {
	return (
		<div className="flex flex-col min-h-screen justify-center items-center w-full relative overflow-hidden border-none outline-none" {...props}>
			{children}
		</div>
	)
}