import type { AppProps } from 'next/app'

import '@styles/styles'

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}