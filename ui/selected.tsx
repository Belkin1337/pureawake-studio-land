"use client"

import { HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

interface ISelected extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof selectedVariants> {
}

const selectedVariants = cva(`flex items-center gap-x-1
		hover:duration-500 hover:ease-in-out duration-150 rounded-xl border-none outline-none`, {
	variants: {
		padding: {
			default: "px-5 py-2",
			none: "p-0"
		},
		cursor: {
			default: "cursor-pointer",
			none: "cursor-default"
		},
		background: {
			transparent: "bg-transparent"
		},
		animation: {
			spring: "hover:scale-[0.98] hover:bg-neutral-300/20"
		}
	},
	defaultVariants: {
		background: "transparent",
		padding: "default",
		cursor: "default"
	}
})

const Selected = ({
	padding,
	background,
	cursor,
	className,
	...props
}: ISelected) => {
	return <div className={selectedVariants(({ padding, background, cursor, className }))} {...props}/>
}

export { Selected }