"use client";
import { FormEvent, useContext, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { bienContext } from "@/context/Context";
import { addRecord } from "./actions/serverAction";

export const NewRaw = () => {
  const [consumo, setConsumo] = useState("");
  const [valor, setValor] = useState("");
  const { idBien, setRecords } = useContext(bienContext);
  const pathname = usePathname();

  const router = useRouter();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    let consumoNum = parseInt(consumo);
    let valorNum = parseInt(valor);

    try {
      const record = await addRecord(consumoNum, valorNum, idBien, pathname);

      if (!record) {
        console.error("No se pudo agregar el registro.");
        return;
      }

      // Agrega el nuevo registro al estado global
      setRecords((prev) => [...prev, record]);

      // Limpia los campos del formulario
      setConsumo("");
      setValor("");

      // Redirige o refresca la página
      router.refresh();
    } catch (error) {
      console.error("Error al agregar registro:", error);
    }
  };
  return (
    <div className="w-full max-w-md">
      <form
        className="bg-transparent border shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={onSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="kwh"
          >
            Consumo
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="kwh"
            type="text"
            placeholder="Kwh"
            value={consumo}
            onChange={({ target }) => setConsumo(target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Valor
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="valor"
            type="text"
            placeholder="$ "
            value={valor}
            onChange={({ target }) => setValor(target.value)}
          />
          <p className="text-red-500 text-xs italic">
            Please choose a password.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Guardar Registro
          </button>
        </div>
      </form>
    </div>
  );
};
