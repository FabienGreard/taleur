import Head from 'next/head';

interface HeaderProps {
  title?: string;
  description?: string;
}

export default function Header({
  title = 'Taleur.io',
  description = 'Taleur.io is a free scheduling app, plan events and start organizing your next meetings, with synching everything on your agenda.',
}: HeaderProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
