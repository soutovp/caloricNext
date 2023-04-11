import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
	return (
		<Html lang="en" tabIndex={-1}>
			<Head />
			<body tabIndex={-1}>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
