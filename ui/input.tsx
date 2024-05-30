import * as React from "react"

import { cn } from "@/lib/utils/styles"
import { forwardRef } from "react";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({
		className,
		type,
		...props
	}, ref) => {
		return (
			<input
				type={type}
				className={cn(
					"flex h-10 " +
					"w-full rounded-xl border border-none bg-white/10 " +
					"px-5 py-4 text-md ring-offset-0 text-white " +
					"file:border-0 file:bg-transparent file:text-md " +
					"file:font-medium placeholder:text-neutral-300 " +
					"focus-visible:outline-none focus-visible:ring-1 " +
					"focus-visible:ring-ring focus-visible:ring-offset-1 " +
					"disabled:cursor-not-allowed disabled:opacity-50",
					className
				)}
				ref={ref}
				{...props}
			/>
		)
	}
)
Input.displayName = "Input"