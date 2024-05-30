"use client"

import React, { ReactNode, useCallback, useState } from "react";
import { cn } from "@/lib/utils/styles";
import { Noise } from "@/ui/noise";
import { Eye } from "lucide-react"

type WobbleCardType = {
	children: ReactNode;
	containerClassName?: string;
	className?: string;
}

export const WobbleCard = ({
	children,
	containerClassName,
	className,
}: WobbleCardType) => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isHovering, setIsHovering] = useState(false);

	const handleMouseMove = useCallback((
		event: React.MouseEvent<HTMLElement>
	) => {
		const { clientX, clientY } = event;

		const rect = event.currentTarget.getBoundingClientRect();

		const x = (clientX - (rect.left + rect.width / 2)) / 20;
		const y = (clientY - (rect.top + rect.height / 2)) / 20;

		setMousePosition({ x, y });
	}, [])

	return (
		<>
			<section
				onMouseMove={handleMouseMove}
				onMouseEnter={() => setIsHovering(true)}
				onMouseLeave={() => {
					setIsHovering(false);
					setMousePosition({ x: 0, y: 0 });
				}}
				style={{
					transform: isHovering
						? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1, 1, 1)`
						: "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
					transition: "transform 0.1s ease-out",
				}}
				className={cn(
					"mx-auto group w-full bg-indigo-800 relative rounded-2xl overflow-hidden",
					containerClassName
				)}
			>
				<div
					className="absolute h-full w-full bg-transparent group-hover:bg-black/40 duration-300 hover:duration-500 ease-in-out right-0 top-0 left-0 bottom-0"/>
				<div
					className="absolute hidden h-full w-full group-hover:duration-700 duration-500 transition bg-transparent group-hover:flex justify-center items-center top-0 right-0 bottom-0 left-0 z-[10] ">
					<Eye size={54} className="text-white"/>
				</div>
				<div
					className="relative h-full [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))] sm:mx-0 sm:rounded-2xl overflow-hidden"
					style={{
						boxShadow:
							"0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)",
					}}
				>
					<div
						style={{
							transform: isHovering
								? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) scale3d(1.03, 1.03, 1)`
								: "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
							transition: "transform 0.1s ease-out",
						}}
						className={cn("h-full px-4 py-12 sm:px-10", className)}
					>
						<Noise/>
						{children}
					</div>
				</div>
			</section>
		</>
	);
};