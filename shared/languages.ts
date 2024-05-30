export const RUSSIAN_SH: "ru" = "ru";
export const ENGLISH_SH: "en" = "en";

export type LanguageType = typeof RUSSIAN_SH | typeof ENGLISH_SH;

type LanguageListType = {
	name: string,
	fullName: string,
	value: LanguageType
}

export const LANGUAGE_LIST: LanguageListType[] = [
	{
		name: "Russian",
		fullName: "Russian language",
		value: "ru"
	},
	{
		name: "English",
		fullName: "English language",
		value: "en"
	}
]