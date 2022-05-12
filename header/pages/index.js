import Head from "next/head";

import Header from "../components/Header.jsx";

const HeaderApp = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Header />
     </main>
  </div>
);

export default HeaderApp;
