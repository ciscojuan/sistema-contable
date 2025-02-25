"use client";
import { Card, Graphs, serverActions, StackedBar, TopMenu } from "@/components";
import { bienContext } from "@/context/Context";
import { useContext, useEffect, useState } from "react";
import { FaMobileAlt } from "react-icons/fa";
import { FaFireFlameCurved } from "react-icons/fa6";
import { GrVmMaintenance } from "react-icons/gr";
import {
  IoFlashOffOutline,
  IoFlashOutline,
  IoWaterOutline,
  IoWifiSharp,
} from "react-icons/io5";

const cardProps = {
  icon: [
    <IoFlashOutline />,
    <FaFireFlameCurved />,
    <IoWifiSharp />,
    <GrVmMaintenance />,
    <FaMobileAlt />,
    <IoWaterOutline />,
    <IoFlashOffOutline />,
  ],
  color: [
    "text-yellow-500",
    "text-gray-500",
    "text-purple-500",
    "text-red-500",
    "text-green-500",
    "text-blue-500",
    "text-orange-500",
  ],
};

const iconMenu = cardProps.icon[0];

export default function Overview() {
  const { idBien } = useContext(bienContext);
  const [totales, setTotales] = useState<{
    agua: number;
    energia: number;
    gas: number;
    internet: number;
    telefono: number;
    administracion: number;
  } | null>(null);

  useEffect(() => {
    if (!idBien) return;

    const getRecords = async () => {
      try {
        const res = await serverActions.getTotalValues(idBien);
        setTotales(
          res?.vtotals ?? {
            // Evita valores null asegurando un objeto válido
            agua: 0,
            energia: 0,
            gas: 0,
            internet: 0,
            telefono: 0,
            administracion: 0,
          }
        );
      } catch (error) {
        console.error("Error fetching records:", error);
      }
    };

    getRecords();
  }, [idBien]);

  return (
    <>
      <TopMenu title="Overview" icon={iconMenu} />
      <div className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-3 mb-8 max-w-7xl mx-auto py-6 px-4 lg:px-8  "
          style={{ opacity: 1, willChange: "auto", transform: "none" }}
        >
          <Card
            icon={cardProps.icon[0]}
            color={cardProps.color[0]}
            valorTotal={totales?.energia.toString()}
          />
          <Card
            icon={cardProps.icon[1]}
            color={cardProps.color[1]}
            valorTotal={totales?.gas.toString()}
          />
          <Card
            icon={cardProps.icon[2]}
            color={cardProps.color[2]}
            valorTotal={totales?.internet.toString()}
          />
          <Card
            icon={cardProps.icon[3]}
            color={cardProps.color[3]}
            valorTotal={totales?.administracion.toString()}
          />
          <Card
            icon={cardProps.icon[4]}
            color={cardProps.color[4]}
            valorTotal={totales?.telefono.toString()}
          />
          <Card
            icon={cardProps.icon[5]}
            color={cardProps.color[5]}
            valorTotal={totales?.agua.toString()}
          />
        </div>
        <div className="grid grid-col-1 lg:grid-cols-2 gap-8">
          <Graphs.CircleChart />
          <Graphs.LinearChart />
          <StackedBar totales={totales} />
        </div>
      </div>
    </>
  );
}
