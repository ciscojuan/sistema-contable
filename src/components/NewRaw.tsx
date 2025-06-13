"use client";
import { FormEvent, useContext, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { bienContext } from "@/context/Context";
import { addRecord } from "./actions/serverAction";
import { toast } from "sonner";
import { useForm } from "react-hook-form";

export const NewRaw = () => {
  const [valor, setValor] = useState("");
  const { idBien, setRecords } = useContext(bienContext);
  const pathname = usePathname();
  const router = useRouter();

  // Check if we're on a route that doesn't need the consumption field
  const hideConsumption =
    pathname.includes("/dashboard/maintenance") ||
    pathname.includes("/dashboard/internet") ||
    pathname.includes("/dashboard/mobil");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    // If we're on a route that doesn't need consumption, set it to 0
    const consumoNum = hideConsumption ? 0 : data.kwh ? parseInt(data.kwh) : 0;
    const valorNum = parseInt(data.valor);

    if (!idBien) {
      toast.error("ID del bien no disponible");
      return;
    }

    try {
      const record = await addRecord(valorNum, consumoNum, idBien, pathname);

      if (!record) {
        toast.error("No se pudo agregar el registro.");
        return;
      }

      // Agrega el nuevo registro al estado global
      setRecords((prev) => [...prev, record]);

      // Limpia los campos del formulario
      reset();
      toast.success(`registro creado exitosamente!`);
      // Redirige o refresca la página
      router.refresh();
    } catch (error) {
      console.error("Error al agregar registro:", error);
      toast.error(`no se pudo crear el registro!`);
      reset();
    }
  };

  return (
    <div className="w-full w-lg">
      <form
        className="bg-transparent border shadow-md rounded-xl px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        {!hideConsumption && (
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
              pattern="^[0-9]+$"
              {...register("kwh", {
                required: "El consumo es requerido",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Solo se permiten números",
                },
              })}
            />

            {errors.kwh && (
              <p className="text-red-500 text-sm italic">
                {String(errors.kwh.message)}
              </p>
            )}
          </div>
        )}

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="valor"
          >
            Valor
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="valor"
            type="text"
            placeholder="$ "
            pattern="^[0-9]+$"
            {...register("valor", {
              required: "El valor es requerido",
              pattern: {
                value: /^[0-9]+$/,
                message: "Solo se permiten números",
              },
            })}
          />
          {errors.valor && (
            <p className="text-red-500 text-sm italic">
              {String(errors.valor.message)}
            </p>
          )}
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
