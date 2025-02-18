"use client";
import { usePathname } from "next/navigation";

export const NewRaw = () => {
  const path = usePathname();
  return (
    <div className="flex">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-gray-500 text-md font-bold mb-2"
          for="grid-first-name"
        >
          ¿Cuántos KWh consumiste este mes?
        </label>
        <input
          className="appearance-none block w-[100px] bg-transparent text-gray-500 border-b-2 border-white rounded py-3 px-4 mb-5 leading-tight focus:outline-none"
          type="text"
          
          placeholder="¿KWh?"
        />
      </div>

      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-gray-500 text-md font-bold mb-2"
          for="grid-first-name"
        >
          ¿Cuánto costo este mes la energia?
        </label>
        <input
          className="appearance-none block w-[100px] bg-transparent text-gray-500 border-b-2 border-white rounded py-3 px-4 mb-5 leading-tight focus:outline-none"
          type="text"
          placeholder="$"
        />
      </div>
    </div>
  );
};
