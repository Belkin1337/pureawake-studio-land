"use client"

import { cn } from "@/lib/utils/styles";
import { Variants, motion } from "framer-motion";

interface WordFadeInProps {
	words: string;
	className?: string;
	delay?: number;
	variants?: Variants;
}

export function WordFadeIn({
	words,
	delay = 0.15,
	variants = {
		hidden: { opacity: 0 },
		visible: (i: any) => ({
			y: 0,
			opacity: 1,
			transition: { delay: i * delay },
		}),
	},
	className,
}: WordFadeInProps) {
	const _words = words.split(" ");

	return (
		<motion.h1
			variants={variants}
			initial="hidden"
			animate="visible"
			className={cn(
				"text-center tracking-[-0.02em] drop-shadow-sm text-white",
				className,
			)}
		>
			{_words.map((word, i) => (
				<motion.span key={word} variants={variants} custom={i}>
					{word}{" "}
				</motion.span>
			))}
		</motion.h1>
	);
}