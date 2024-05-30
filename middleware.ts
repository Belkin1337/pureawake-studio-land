import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix } from '@/lib/utils/navigation'

export default createMiddleware({
	defaultLocale: 'en',
	locales,
	localePrefix
});

export const config = {
	matcher: [
		'/((?!api|_next|_vercel|.*\\..*).*)',
		'/([\\w-]+)?/users/(.+)'
	]
};