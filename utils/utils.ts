export function isUserOnIOS() {
    if (typeof window === 'undefined') {
        return false;
    }
    const userAgent = window.navigator.userAgent;
    const iosMobileRegex = /iPhone|iPad|iPod/u;

    return iosMobileRegex.test(userAgent);
}
export const ENV = process.env.NEXT_PUBLIC_ENV as 'production' | 'development';
