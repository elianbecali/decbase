import Head from 'next/head';
import Home from './Home';

export default function App() {
  return (
    <>
      <Head >
        <title>DecBase</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>

        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap" rel="stylesheet" />
      </Head>

      <Home />
    </>
  );
}
