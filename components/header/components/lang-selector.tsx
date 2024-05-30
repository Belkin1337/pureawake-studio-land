import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/ui/dropdown-menu";
import { Languages } from "lucide-react";
import { Selected } from "@/ui/selected";
import { LANGUAGE_LIST } from "@/shared/languages";
import { useLocale } from "next-intl";
import { Link } from "@/lib/utils/navigation";

export const LangSelector = () => {
	const locale = useLocale();

	return (
		<DropdownMenu modal={false}>
			<DropdownMenuTrigger>
				<Selected
					animation="spring"
					className="flex justify-center items-center p-4 hover:scale-[0.97]	hover:duration-500 duration-300 hover:bg-neutral-600/40 rounded-xl cursor-pointer"
				>
					<Languages size="18" className="text-neutral-200"/>
				</Selected>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				{LANGUAGE_LIST.map((item, idx) => (
					<Link
						href="/"
						locale={item.value}
						key={idx}
					>
						<DropdownMenuItem
							className={`${locale === item.value && 'bg-neutral-700'}`}
						>
							<p className="uppercase font-bold text-white text-md lg:text-base">
								{item.value.toUpperCase()}
							</p>
							<p className="text-white font-medium text-md lg:text-base">
								{(item.fullName)}
							</p>
						</DropdownMenuItem>
					</Link>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}