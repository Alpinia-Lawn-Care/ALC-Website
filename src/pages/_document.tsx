import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicons/alc_logo_favicon_wht_circle_bkg/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/alc_logo_favicon_wht_circle_bkg/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/alc_logo_favicon_wht_circle_bkg/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/alc_logo_favicon_wht_circle_bkg/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/alc_logo_favicon_wht_circle_bkg/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 