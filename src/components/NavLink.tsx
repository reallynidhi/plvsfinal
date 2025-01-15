import Link from "next/link";

interface NavLinkProps {
  to: string;
  id: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick?: () => void;
  newPage?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({
  to,
  id,
  children,
  isActive,
  onClick,
  newPage,
}) => {
  return (
    <Link
      href={newPage ? to : `/#${to}`}
      onClick={() => onClick?.()}
      className={`hover:text-gray-600 transition-colors ${
        isActive ? "font-bold" : ""
      }`}
    >
      {children}
    </Link>
  );
};
