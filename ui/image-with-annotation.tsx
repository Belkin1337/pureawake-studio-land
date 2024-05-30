import Image from "next/image";

interface IImageWithAnnotation {
	propSrc: string,
	propAlt: string,
	width?: number,
	height?: number,
	annotation: string
}

export const ImageWithAnnotation = ({
	propSrc,
	propAlt,
	height,
	width,
	annotation
}: IImageWithAnnotation) => {
	return (
		<div className={`w-full h-[280px]
		 flex flex-col items-center gap-y-2 *:text-white *:text-md overflow-hidden rounded-xl border-none outline-none`}>
			<Image
				src={propSrc}
				alt={propAlt}
				width={400}
				height={400}
				className="w-full h-full object-cover rounded-xl"
			/>
			<p>{annotation}</p>
		</div>
	)
}