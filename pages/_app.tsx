import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

import { Header, pageInfo } from '../components/header';
import '../styles/globals.css';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] });
export default function App({ Component, pageProps }: AppProps) {
    const { title, description } = pageInfo.home;
    return (
        <>
            <Header
                title={title}
                description={description}
            />
            <div className={inter.className}>
                <Component {...pageProps} />
            </div>
        </>
    );
}
