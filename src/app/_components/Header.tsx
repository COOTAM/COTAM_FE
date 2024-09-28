import Link from 'next/link';

import Cotam from '../../../public/assets/logo/Cotam.svg';
import Hamburger from '../../../public/assets/icons/Hamburger.svg';
import { ROUTES } from '@/constants/routes';

const Header = () => {
  return (
    <header className="sticky top-0 flex h-14 w-full items-center justify-between px-10 backdrop-blur-[50px] lg:h-[60px] lg:w-[1024px]">
      <Link href={ROUTES.HOME.PATH}>
        <Cotam className="h-[18px] w-20 cursor-pointer text-cotam-red-60" />
      </Link>
      <Hamburger className="h-6 w-6 cursor-pointer" />
    </header>
  );
};

export default Header;
