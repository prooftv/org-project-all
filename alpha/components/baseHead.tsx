import Head from "next/head"
import { useRouter } from "next/router"
import { urlFor } from "lib/utils"
import { LocaleString, PageHead, Settings } from "lib/interfaces"

interface Props {
  pageHead?: PageHead
  settings: Settings
}

export function BaseHead({ pageHead, settings }: Props) {
  const { locale = "en" } = useRouter() as TRouter
  const key: keyof LocaleString = locale
  return (
    <Head>
      <title>
        {pageHead && `${pageHead.title} | `}
        {settings.title[key]}
        {pageHead ? "" : ` | ${settings.description[key]}`}
      </title>
      <link href="https://cdn.sanity.io/" rel="preconnect" crossOrigin="" />
      <link
        rel="preload"
        href="/fonts/halisr-book-mwa.woff2"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/halisr-black-mwa.woff2"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/brandongrotesque-bold-lat.woff2"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/brandongrotesque-regular-lat.woff2"
        as="font"
        crossOrigin=""
      />
      <meta
        name="Description"
        content={
          pageHead && pageHead.description
            ? pageHead.description
            : settings.description[key]
        }
      />
      {/* <meta name="keywords" content="" /> */}
      {/* Facebook */}
      <meta
        property="og:title"
        content={
          pageHead && pageHead.ogTitle
            ? pageHead.ogTitle
            : settings.ogTitle[key]
        }
      />
      <meta
        property="og:description"
        content={
          pageHead && pageHead.ogDescription
            ? pageHead.ogDescription
            : settings.ogDescription[key]
        }
      />
      <meta
        property="og:url"
        content={
          pageHead && pageHead.ogURL ? pageHead.ogURL : settings.canonicalURL
        }
      />
      <meta
        property="og:image"
        content={urlFor(
          pageHead && pageHead.ogImage ? pageHead.ogImage : settings.ogImage
        )
          .auto("format")
          .width(1200)
          .height(630)
          .quality(100)
          .url()}
      />
      <meta property="og:site_name" content={settings.title[key]} />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:type" content="article" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={
          pageHead && pageHead.ogTitle
            ? pageHead.ogTitle
            : settings.ogTitle[key]
        }
      />
      <meta
        name="twitter:description"
        content={
          pageHead && pageHead.ogDescription
            ? pageHead.ogDescription
            : settings.ogDescription[key]
        }
      />
      <meta
        name="twitter:site"
        content={
          pageHead && pageHead.ogURL ? pageHead.ogURL : settings.canonicalURL
        }
      />
      <meta
        name="twitter:image"
        content={urlFor(
          pageHead && pageHead.ogImage ? pageHead.ogImage : settings.ogImage
        )
          .auto("format")
          .width(1200)
          .height(628)
          .quality(100)
          .url()}
      />
      <meta name="twitter:creator" content="@MidWalesArts" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="mask-icon" href="/mask-icon.svg" color="#FFFFFF" />
    </Head>
  )
}

BaseHead.defaultProps = {
  pageHead: {},
}
