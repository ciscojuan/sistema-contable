import { Card, funciones, Graphs, Table, TopMenu } from "@/components";
import prisma from "@/lib/prisma";
import React from "react";
import { ImCoinDollar } from "react-icons/im";
import { IoWifiSharp } from "react-icons/io5";

const cardProps = {
  icon: [<IoWifiSharp />, <ImCoinDollar />],
  color: ["text-purple-500", "text-white"],
};

export default async function InternetPage() {
  const records = await prisma.internet.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  const total = funciones.SumaValor(records);

  const valorTotal = parseInt(funciones.valorTotal(total));
  return (
    <>
      <TopMenu title="Gas Bids" icon={cardProps.icon[0]} />
      <div className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* Cards */}
        <div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-3 mb-8 max-w-7xl mx-auto py-6 px-4 lg:px-8 "
          style={{ opacity: 1, willChange: "auto", transform: "none" }}
        >
          <Card
            icon={cardProps.icon[1]}
            color={cardProps.color[1]}
            title="Total"
            valorTotal={valorTotal}
          />
        </div>

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
