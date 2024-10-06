import BorderTop from '@/components/common/BorderTop';
import AboutCotam from './_components/home/AboutCotam';
import Closing from './_components/home/Closing';
import Cotam from './_components/home/Cotam';
import CotamPeople from './_components/home/CotamPeople';
import FAQ from './_components/home/FAQ';
import Introduce from './_components/home/Introduce';
import { ZIndex } from '@/constants/ui';

export default function Home() {
  return (
    <main className="h-full w-full max-w-[1024px] px-10">
      <Introduce />
      <Cotam />
      <AboutCotam />
      <CotamPeople />
      <div className={`relative h-full bg-cotam-blue-100 ${ZIndex.home.thirdLayer}`}>
        <BorderTop />
        <Closing />
        <FAQ />
      </div>
    </main>
  );
}
