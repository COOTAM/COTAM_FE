import { ReactNode } from 'react';

export interface TopMoveBoxProps {
  icon: ReactNode;
  label: string;
  backgroundColor: string;
}

const TopMoveBox = ({ icon, label, backgroundColor }: TopMoveBoxProps) => {
  return (
    <li
      className={`flex w-fit items-center gap-[10px] rounded-[10px] px-3 py-2 ${backgroundColor}`}>
      {icon}
      <p className={`text-white galmuri11-body-1`}>{label}</p>
    </li>
  );
};

export default TopMoveBox;
