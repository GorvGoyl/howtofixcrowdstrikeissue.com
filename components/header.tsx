import Head from 'next/head';

import { ENV, isUserOnIOS } from '../utils/utils';

const liveDomain = 'https://howtofixcrowdstrikeissue.com';
const pageURL = liveDomain;
const type = 'website';
const twitterHandle = '@GorvGoyl';
const siteName = 'How to Fix CrowdStrike Issue?';
export let domain = '';
export const pageInfo = {
    home: {
        title: 'How to Fix CrowdStrike Issue?',
        description: 'How to Fix CrowdStrike Issue?',
    },
};

if (typeof window !== 'undefined') {
    domain = window.location.origin;
}

export function Header({ title, description, ogImage }: { title: string; description: string; ogImage?: string }) {
    const isIOS = isUserOnIOS();

    const viewportContent = isIOS
        ? 'width=device-width, initial-scale=1, maximum-scale=1'
        : 'width=device-width, initial-scale=1,interactive-widget=resizes-content';

    const ogImageURL = ogImage ? ogImage : `${liveDomain}/og.jpg`;

    return (
        <Head>
            <title>{title}</title>
            <meta
                name="title"
                content={title}
                key="title"
            />
            <meta
                name="description"
                content={description}
                key="description"
            />
            <meta
                name="robots"
                content="follow, index"
                key="robots"
            />
            <meta
                name="viewport"
                content={viewportContent}
                key="viewport"
            />
            <meta
                property="og:locale"
                content="en_US"
                key="og:locale"
            />
            <meta
                property="og:url"
                content={pageURL}
                key="og:url"
            />
            <meta
                property="og:type"
                content={type}
                key="og:type"
            />
            <meta
                property="og:site_name"
                content={siteName}
                key="og:site_name"
            />
            <meta
                property="og:title"
                content={title}
                key="og:title"
            />
            <meta
                property="og:description"
                content={description}
                key="og:description"
            />
            <meta
                property="og:image"
                name="image"
                content={ogImageURL}
                key="og:image"
            />
            <meta
                property="twitter:card"
                content="summary_large_image"
                key="twitter:card"
            />
            <meta
                property="twitter:site"
                content={twitterHandle}
                key="twitter:site"
            />
            <meta
                property="twitter:title"
                content={title}
                key="twitter:title"
            />
            <meta
                property="twitter:description"
                content={description}
                key="twitter:description"
            />
            <meta
                property="twitter:image"
                content={ogImageURL}
                key="twitter:image"
            />
            <meta
                property="twitter:url"
                content={pageURL}
                key="twitter:url"
            />
            <meta
                name="msapplication-TileColor"
                content="#da532c"
                key="msapplication-TileColor"
            />
            <meta
                name="theme-color"
                content="#ffffff"
                key="theme-color"
            />
            <link
                rel="canonical"
                href={liveDomain}
                key="canonical"
            />
            <link
                rel="icon"
                href={ENV === 'development' ? '/favicon_grayscale.ico' : '/favicon.ico'}
                key="cgwIcon"
            />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
                key="apple-touch-icon"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
                key="iconSize1"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
                key="iconSize2"
            />
            <link
                rel="manifest"
                href="/site.webmanifest"
                key="manifest"
            />
            <link
                rel="mask-icon"
                href="/safari-pinned-tab.svg"
                color="#5bbad5"
                key="mask-icon"
            />
        </Head>
    );
}
