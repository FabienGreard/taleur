import Head from 'next/head';

interface HeaderProps {
  title?: string;
}

export default function Header({ title = 'NextJs Boilerplate' }: HeaderProps) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
