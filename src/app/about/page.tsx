import { Metadata } from 'next';

import TabAbout from './_components/TabAbout';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: '소개',
  };
}

export default function About() {
  return (
    <main className="box-border flex min-h-screen w-full p-10 lg:w-[1024px]">
      <TabAbout />
    </main>
  );
}
