import React from 'react';

interface Props {
  href: string;
  label: string;
  className?: string;
}

const LinkButton = ({ href, label, className }: Props) => {
  return (
    <div className="flex justify-end">
      <a href={href} className={`cursor-pointer text-cotam-red-60 galmuri11-body-3 ${className}`}>
        {label}
      </a>
    </div>
  );
};

export default LinkButton;
