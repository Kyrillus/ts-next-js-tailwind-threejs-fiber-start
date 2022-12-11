import Head from 'next/head';
import {useRouter} from 'next/router';

const defaultMeta = {
    title: 'Next.js + Tailwind CSS + TypeScript + React Three Fiber Starter',
    siteName: 'Next.js + Tailwind CSS + TypeScript + React Three Fiber Starter',
    description:
        'A starter for Next.js, Tailwind CSS, TypeScript and React Three Fiber',
    url: '',
    type: 'website',
    robots: 'follow, index',
    image: 'https://pbs.twimg.com/ext_tw_video_thumb/1179329366909739014/pu/img/DeCrZUILOPzisQ9Z.jpg',
};

type SeoProps = {
    date?: string;
    templateTitle?: string;
} & Partial<typeof defaultMeta>;

export default function Seo(props: SeoProps) {
    const router = useRouter();
    const meta = {
        ...defaultMeta,
        ...props,
    };
    meta['title'] = props.templateTitle
        ? `${props.templateTitle} | ${meta.siteName}`
        : meta.title;

    return (
        <Head>
            <title>{meta.title}</title>
            <meta name='robots' content={meta.robots}/>
            <meta content={meta.description} name='description'/>
            <meta property='og:url' content={`${meta.url}${router.asPath}`}/>
            <link rel='canonical' href={`${meta.url}${router.asPath}`}/>
            {/* Open Graph */}
            <meta property='og:type' content={meta.type}/>
            <meta property='og:site_name' content={meta.siteName}/>
            <meta property='og:description' content={meta.description}/>
            <meta property='og:title' content={meta.title}/>
            <meta name='image' property='og:image' content={meta.image}/>

            {meta.date && (
                <>
                    <meta property='article:published_time' content={meta.date}/>
                    <meta
                        name='publish_date'
                        property='og:publish_date'
                        content={meta.date}
                    />
                    <meta
                        name='author'
                        property='article:author'
                        content='Kyrillus Mehanni'
                    />
                </>
            )}
            <link rel="shortcut icon" href="/images/favicon.ico" />
            <meta name='theme-color' content='#ffffff'/>
        </Head>
    );
}
