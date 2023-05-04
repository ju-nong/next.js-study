import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="ko">
            <Head>
                <meta name="theme-color" content="#0f0f0f"></meta>
                <meta
                    name="description"
                    content="여러 고양이를 만나보세요!"
                ></meta>
                <meta name="keywords" content="cat, Cat, CAT, 고양이"></meta>
                <meta name="author" content="이준용"></meta>
                <meta content="Make Cat" property="og:title"></meta>
                <meta content="/favicon.png" property="og:image"></meta>
                <meta content="website" property="og:type"></meta>
                <meta
                    content="make-cat.vercel.app"
                    property="og:site_name"
                ></meta>
                <meta
                    content="https://make-cat.vercel.app"
                    property="og:url"
                ></meta>
                <link rel="icon" href="/favicon.png"></link>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
