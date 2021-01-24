import { FunctionComponent } from 'react';
import GlobalStyle from '../styles/GlobalStyle';

interface AppProps {
  Component: FunctionComponent;
  pageProps: any;
}

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default App;
