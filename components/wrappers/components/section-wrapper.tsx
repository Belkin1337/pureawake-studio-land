import { forwardRef, HTMLAttributes, ReactNode } from "react";

interface ISectionWrapper extends HTMLAttributes<HTMLDivElement> {
	id: string,
	children?: ReactNode,
	title: string
}

const SectionWrapper = forwardRef<HTMLDivElement, ISectionWrapper>(({
	id,
	children,
	title,
	...props
}, ref) => {
	return (
		<div
			id={id}
			ref={ref}
			className="flex flex-col w-full wrapper gap-y-6 my-24"
			{...props}
		>
			<h1 className="text-white uppercase font-[GothamProBold] text-3xl xl:text-5xl font-bold">
				{title}
			</h1>
			{children}
		</div>
	)
})

SectionWrapper.displayName = 'SectionWrapper'

export { SectionWrapper }