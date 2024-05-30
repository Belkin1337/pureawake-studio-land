import { useForm, SubmitHandler } from "react-hook-form"
import { Input } from "@/ui/input";
import { Textarea } from "@/ui/textarea";
import { Button } from "@/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { getGeo } from "@/lib/utils/get-geo";

type Inputs = {
	email: string,
	projectName: string,
	projectType?: string
}

const zodFormSchema = z.object({
	email: z.string().email(),
	projectName: z.string(),
	projectType: z.string().optional()
}).required()

type FormErrorMessageType = {
	message: string
}

const FormErrorMessage = ({
	message
}: FormErrorMessageType) => {
	return <span className="text-red-400 text-md font-medium">{message}</span>
}

export const ContactForm = () => {
	const { register, handleSubmit, watch, formState: { isValid, errors }, } = useForm<Inputs>({
		resolver: zodResolver(zodFormSchema),
		defaultValues: {
			email: "",
			projectName: "",
			projectType: ""
		},
	});

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		const regionCredentials = await getGeo();

		console.log(data)
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col w-full h-full *:gap-2 gap-2"
		>
			<div className="flex items-center justify-stretch">
				<Input
					{...register("email", {
						maxLength: 56
					})}
					maxLength={56}
					placeholder="Электронная почта"
				/>
				<Input
					{...register("projectName", {
						maxLength: 56
					})}
					maxLength={96}
					placeholder="Название проекта"
				/>
			</div>
			<Textarea
				{...register("projectType", {
					maxLength: 656
				})}
				className="max-h-[182px]"
				maxLength={656}
				placeholder="Тип проекта / Техническое задание (опционально)"
			/>
			<Button
				variant="default"
				type="submit"
				rounded="xl"
				disabled={!isValid}
			>
				Отправить
			</Button>
		</form>
	);
}