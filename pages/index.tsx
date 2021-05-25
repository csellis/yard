import Head from "next/head";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Yard</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className=''>
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
          <h1 className=''>
            Welcome to <a href='https://nextjs.org'>Next.js!</a>
          </h1>
        </div>
      </main>

      <footer></footer>
      <Menu />
    </div>
  );
}
