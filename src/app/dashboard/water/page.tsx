"use client";
import {
  Card,
  funciones,
  Graphs,
  serverActions,
  Table,
  TopMenu,
} from "@/components";
import { NewRaw } from "@/components/NewRaw";
import { bienContext } from "@/context/Context";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { ImCoinDollar } from "react-icons/im";
import { IoWater } from "react-icons/io5";


const cardProps = {
  icon: [<IoWater />, <ImCoinDollar />],
  color: ["text-blue-500", "text-white"],
};

export default function WaterPage() {
  const { idBien, records, setRecords } = useContext(bienContext);
  const [open, setOpen] = useState(false);

  const pathName = usePathname();
  useEffect(() => {
    if (!idBien) return; // Verifica que `idBien` tenga un valor válido

    const getRecords = async () => {
      try {
        await serverActions
          .getRecords(idBien, pathName)
          .then((records) => setRecords(records)); // Establece los registros correctamente
      } catch (error) {
        console.error("Error fetching records:", error);
      }
    };

    getRecords();
  }, [idBien]);

  const consumoTotal = funciones.consumoTotal(records);
  const valorTotal = funciones.SumaValor(records);

  return (
    <>
      <TopMenu title="Electicity Bids" icon={cardProps.icon[0]} />
      <div className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-3 mb-8 max-w-7xl mx-auto py-6 px-4 lg:px-8 ">
          <Card
            icon={cardProps.icon[0]}
            color={cardProps.color[0]}
            title="KWh"
            consumoTotal={consumoTotal}
          />
          <Card
            icon={cardProps.icon[1]}
            color={cardProps.color[1]}
            valorTotal={valorTotal}
          />
        </div>

        {/* new Record */}
        <div className="flex flex-col items-center justify-center">
          <button
            className="w-60 h-10 bg-blue-700 rounded-md p-2 my-5"
            onClick={() => setOpen(!open)}
          >
            Crear nuevo Registro
          </button>
          {open && <NewRaw />}
        </div>

        {/* table */}
        <Table records={records} />
        {/* widgets */}
        <div className="grid grid-col-1 lg:grid-cols-2 gap-8">
          <Graphs.CircleChart records={records} />
          <Graphs.LinearChart records={records} />
          <Graphs.SimpleBarChart records={records} />
        </div>
      </div>
    </>
  );
}
