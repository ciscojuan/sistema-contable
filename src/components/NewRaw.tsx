"use client";
import { FormEvent, useState } from "react";
import { usePathname } from "next/navigation";
import { addRaw } from "./actions/agua.route";

export const NewRaw = () => {
  const [consumo, setConsumo] = useState("");
  const [valor, setValor] = useState("");

  const path = usePathname();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    let consumoNum =parseInt(consumo)
    let valorNum = parseInt(valor)
    await addRaw(consumoNum, valorNum);

    setConsumo("");
    setValor("");
  };

  return (
    <div className="flex">
      <form onSubmit={onSubmit} className="flex items-center justify-center">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-500 text-md font-bold mb-2">
            ¿Cuántos KWh consumiste este mes?
          </label>
          <input
            className="appearance-none block w-[100px] bg-transparent text-gray-500 border-b-2 border-white rounded py-3 px-4 mb-5 leading-tight focus:outline-none"
            type="text"
            placeholder="¿KWh?"
            value={consumo}
            onChange={({ target }) => setConsumo(target.value)}
          />
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-500 text-md font-bold mb-2">
            ¿Cuánto costo este mes la energia?
          </label>
          <input
            className="appearance-none block w-[100px] bg-transparent text-gray-500 border-b-2 border-white rounded py-3 px-4 mb-5 leading-tight focus:outline-none"
            type="text"
            placeholder="$"
            onChange={({ target }) => setValor(target.value)}
            value={valor}
          />
        </div>
        <button
          type="submit"
          className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all"
        >
          Crear
        </button>
      </form>
    </div>
  );
};
