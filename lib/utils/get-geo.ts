let ip: string;
let country: string;
let wallet: string
let currencySh: string
let currencyFn: string;

export async function getGeo() {
	const res = await fetch('https://ipapi.co/json/')
	const data = await res.json();

	ip = data.ip;
	country = data.country_name;
	currencySh = data.currency;
	currencyFn = data.currency_name;

	return { ip, country, currencySh, currencyFn }
}