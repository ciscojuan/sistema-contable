'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  title: string;
  icon: React.ReactNode;
  path: string;
  color: string;
  toggleMenu: boolean;
  setToggleMenu: Dispatch<SetStateAction<boolean>>;
}




export const SideBarItem = ({title, icon, path, color, toggleMenu, setToggleMenu}: Props)  => {

    const pathName = usePathname();
  return (
    <>
      <Link href={path}>
        <div className={`flex items-center p-4  font-medium rounded-lg transition-colors mb-2 ${color} 
        ${
          pathName === path ? 'bg-blue-700 text-white' : 'hover:bg-gray-700'
        }` }>
          {icon}
          <span
            className="ml-4 whitespace-nowrap"
            style={{opacity: 1, width: 'auto', willChange: 'auto'}}
          >
            {!toggleMenu && title}
          </span>
        </div>
      </Link>
    </>
  );
}
