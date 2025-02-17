import Link from "next/link";
import { SideBarItem } from "./SideBarItem";
import {
  IoFilterOutline,
  IoFlashOffOutline,
  IoMenuOutline,
  IoPhonePortrait,
  IoWater,
  IoWifi,
} from "react-icons/io5";
import { GrVmMaintenance } from "react-icons/gr";
import { TfiWidgetized } from "react-icons/tfi";
import { Dispatch, SetStateAction } from "react";

interface Props {
  toggleMenu: boolean;
  setToggleMenu: Dispatch<SetStateAction<boolean>>;
}
const itemsMenu = [
  {
    title: "Overview",
    icon: <TfiWidgetized />,
    path: "/dashboard",
    color: "text-white",
  },
  {
    title: "Agua",
    icon: <IoWater />,
    path: "/dashboard/water",
    color: "text-blue-600",
  },
  {
    title: "Gas",
    icon: <IoFilterOutline />,
    path: "/dashboard/gas",
    color: "text-gray-400",
  },
  {
    title: "Movistar (celular)",
    icon: <IoPhonePortrait />,
    path: "/dashboard/mobil",
    color: "text-green-400",
  },
  {
    title: "Internet",
    icon: <IoWifi />,
    path: "/dashboard/internet",
    color: "text-purple-600",
  },
  {
    title: "Administracion",
    icon: <GrVmMaintenance />,
    path: "/dashboard/maintenance",
    color: "text-red-700",
  },
  {
    title: "Energia",
    icon: <IoFlashOffOutline />,
    path: "/dashboard/energia",
    color: "text-yellow-500",
  },
];

export const SideBar = ({ toggleMenu, setToggleMenu }: Props) => {
  return (
    <>
      <div className="flex flex-col p-2 items-start w-[50px] hover:bg-gray-700 hover:rounded-3xl ">
        <IoMenuOutline
          size="32"
          onClick={() => setToggleMenu(!toggleMenu)}
          className="text-white cursor-pointer "
        />
      </div>
      <nav className="mt-8 flex-grow">
        {itemsMenu.map((item, index) => (
          <SideBarItem 
          key={index} 
          {...item} 
          toggleMenu={toggleMenu}
          setToggleMenu={setToggleMenu}
          />
        ))}
      </nav>
    </>
  );
};
