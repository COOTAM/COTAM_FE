import AboutCotam from './_components/home/AboutCotam';
import Closing from './_components/home/Closing';
import Cotam from './_components/home/Cotam';
import CotamPeople from './_components/home/CotamPeople';
import FAQ from './_components/home/FAQ';
import Introduce from './_components/home/Introduce';

export default function Home() {
  return (
    <main className="relative w-full max-w-[1024px] px-10">
      <Introduce />
      <Cotam />
      <AboutCotam />
      <CotamPeople />
      <Closing />
      <FAQ />
    </main>
  );
}
