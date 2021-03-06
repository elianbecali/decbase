import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from '../styles/GlobalStyle';


function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Decbase</title>
        <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
