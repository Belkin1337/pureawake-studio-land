"use client"

import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef, HTMLAttributes } from "react";

const buttonVariants = cva("flex items-center w-full text-white font-medium disabled:cursor-not-allowed disabled:text-neutral-600", {
	variants: {
		variant: {
			default: "bg-neutral-900 px-5 py-3",
			shimmer: `inline-flex h-14 animate-shimmer
           items-center justify-center border gap-x-2
           hover:border-[#528588] hover:duration-700 border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]
           bg-[length:200%_100%] px-12
           transition-colors focus:outline-none focus:ring-2
           focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50`
		},
		animation: {
			spring: "hover:scale-[0.92]"
		},
		rounded: {
			full: "rounded-full",
			xl: "rounded-xl"
		}
	},
	defaultVariants: {
		variant: "default",
		rounded: "full"
	}
})

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>,
	VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, IButton>(({
	variant,
	className,
	animation,
	rounded,
	...props
}, ref) => {
	return (
		<button
			ref={ref}
			className={buttonVariants(({
				variant,
				rounded,
				animation,
				className
			}))}
			{...props}
		/>
	)
})

export { Button }