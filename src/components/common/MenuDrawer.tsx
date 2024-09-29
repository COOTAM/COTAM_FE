'use client';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  selected?: boolean;
}

const MenuDrawer = ({ isOpen, onClose }: MenuDrawerProps) => {
  return (
    <div
      className={`fixed right-0 top-0 z-50 h-screen w-full bg-[#08072D80] shadow-lg backdrop-blur-[20px] transition-transform duration-300 ease-in-out lg:w-[30vw] ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
      <MenuItem text="X" onClick={onClose} />
      <MenuItem text="홈" onClick={onClose} />
      <MenuItem text="코탐 소개" onClick={onClose} />
      <MenuItem text="사람들" onClick={onClose} />
      <MenuItem text="모집 안내" onClick={onClose} />
    </div>
  );
};

const MenuItem = ({ text, selected, ...props }: MenuItemProps) => {
  return (
    <div
      className={`box-border w-full cursor-pointer px-[40px] py-[16px] text-white hover:text-cotam-red-60 ${
        selected ? 'text-cotam-red-60' : ''
      }`}
      {...props}>
      {text}
    </div>
  );
};

export default MenuDrawer;
