import Head from 'next/head';
import Menu from "../components/Menu";

export default function Home() {
  return (
    <>
      <Head >
        <title>Decbase 🔥</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>

        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet"/>
      </Head>

      <Menu />
    </>
  );
}
