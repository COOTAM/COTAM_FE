'use client';

import BorderTop from '@/components/common/BorderTop';
import { ZIndex } from '@/constants/ui';
import useIsVisible from '@/hooks/useIsVisible';
import AboutCotam from './_components/home/AboutCotam';
import Closing from './_components/home/Closing';
import Cotam from './_components/home/Cotam';
import CotamPeople from './_components/home/CotamPeople';
import FAQ from './_components/home/FAQ';
import Introduce from './_components/home/Introduce';

export default function Home() {
  const { isVisible, ref } = useIsVisible();

  return (
    <main className="h-full w-full max-w-[1024px] px-10">
      <Introduce />
      <Cotam />
      <AboutCotam />
      <div ref={ref}>{isVisible && <CotamPeople />}</div>
      <div className={`relative h-full bg-cotam-blue-100 ${ZIndex.home.thirdLayer}`}>
        <BorderTop />
        <Closing />
        <FAQ />
      </div>
    </main>
  );
}
