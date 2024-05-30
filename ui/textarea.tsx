import * as React from "react"
import { cn } from "@/lib/utils/styles"
import { forwardRef, TextareaHTMLAttributes } from "react";

export interface TextareaProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
	({
		className,
		...props
	}, ref) => {
		return (
			<textarea
				className={cn(
					"flex min-h-[80px] w-full rounded-xl border border-none bg-white/10 " +
					"px-5 py-4 text-md ring-offset-0 placeholder:text-neutral-300 text-white " +
					"focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring " +
					"focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
					className
				)}
				ref={ref}
				{...props}
			/>
		)
	}
)
Textarea.displayName = "Textarea"

export { Textarea }