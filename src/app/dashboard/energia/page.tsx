"use client";
import {
  Card,
  energiaActions,
  funciones,
  Graphs,
  serverActions,
  Table,
  TopMenu,
} from "@/components";
import { NewRaw } from "@/components/NewRaw";
import { bienContext } from "@/context/Context";
import { useContext, useEffect } from "react";
import { FcFlashOn } from "react-icons/fc";
import { ImCoinDollar } from "react-icons/im";

const cardProps = {
  icon: [<FcFlashOn />, <ImCoinDollar />],
  color: ["text-yellow-500", "text-white"],
};

export default function ElectricityPage() {
  const { idBien, records, setRecords } = useContext(bienContext);

  useEffect(() => {
    if (!idBien) return; // Verifica que `idBien` tenga un valor válido

    const getRecords = async () => {
      try {
        await serverActions
          .getRecords(idBien)
          .then((records) => setRecords(records)); // Establece los registros correctamente
      } catch (error) {
        console.error("Error fetching records:", error);
      }
    };

    getRecords();
  }, [idBien]);

  console.log(records);
  return (
    <>
      <TopMenu title="Electicity Bids" icon={cardProps.icon[0]} />
      <div className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* Cards */}
        {/* <div className="grid grid-cols-1 gap-5 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-3 mb-8 max-w-7xl mx-auto py-6 px-4 lg:px-8 ">
          <Card
            icon={cardProps.icon[0]}
            color={cardProps.color[0]}
            title="KWh"
            consumoTotal={consumoTotal.toString()}
          />
          <Card
            icon={cardProps.icon[1]}
            color={cardProps.color[1]}
            valorTotal={valorTotal}
          />
        </div> */}

        {/* new Record */}
        <NewRaw />

        {/* table */}
        <Table records={records} />

        {/* widgets */}
        <div className="grid grid-col-1 lg:grid-cols-2 gap-8">
          <Graphs.CircleChart />
          <Graphs.LinearChart />
          <Graphs.BarChart />
        </div>
      </div>
    </>
  );
}
