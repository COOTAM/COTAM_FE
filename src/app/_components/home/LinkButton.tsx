import Link from 'next/link';

interface Props {
  href: string;
  label: string;
  className?: string;
}

const LinkButton = ({ href, label, className }: Props) => {
  return (
    <div className="flex justify-end">
      <Link
        href={href}
        className={`cursor-pointer text-cotam-red-60 galmuri11-body-3 ${className}`}>
        {label}
      </Link>
    </div>
  );
};

export default LinkButton;
