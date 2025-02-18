import { Card, Graphs, Table, TopMenu } from "@/components";
import { NewRaw } from '@/components/NewRaw'
import prisma from "@/lib/prisma";
import { FcFlashOn } from "react-icons/fc";
import { ImCoinDollar } from "react-icons/im";


export const metadata = {
 title: 'Dasboard - Energia',
 description: 'Dasboard - Energia',
};

const cardProps = {
  icon: [<FcFlashOn />, <ImCoinDollar />],
  color: ["text-yellow-500", "text-white"],
};

export default async function ElectricityPage() {

const records = await prisma.energia.findMany({
  orderBy:{
    createdAt: "desc",
  }
})
  return (
    <>
      <TopMenu title="Electicity Bids" icon={cardProps.icon[0]} />
      <div className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* Cards */}
        <div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-3 mb-8 max-w-7xl mx-auto py-6 px-4 lg:px-8 "
          style={{ opacity: 1, willChange: "auto", transform: "none" }}
        >
          <Card
            icon={cardProps.icon[0]}
            color={cardProps.color[0]}
            title="KWh"
          />
          <Card
            icon={cardProps.icon[1]}
            color={cardProps.color[1]}
            title="Total"
          />
        </div>

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
