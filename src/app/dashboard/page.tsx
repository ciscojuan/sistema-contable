import { Card, Graphs, TopMenu } from "@/components";
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

export default async function Overview() {
  return (
    <>
      <TopMenu title="Overview" />
      <div className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-3 mb-8 max-w-7xl mx-auto py-6 px-4 lg:px-8  "
          style={{ opacity: 1, willChange: "auto", transform: "none" }}
        >
          <Card icon={cardProps.icon[0]} color={cardProps.color[0]} />
          <Card icon={cardProps.icon[1]} color={cardProps.color[1]} />
          <Card icon={cardProps.icon[2]} color={cardProps.color[2]} />
          <Card icon={cardProps.icon[3]} color={cardProps.color[3]} />
          <Card icon={cardProps.icon[4]} color={cardProps.color[4]} />
          <Card icon={cardProps.icon[5]} color={cardProps.color[5]} />
        </div>
        <div className="grid grid-col-1 lg:grid-cols-2 gap-8">
          <Graphs.CircleChart />
          <Graphs.LinearChart />
          <Graphs.BarChart />
        </div>
      </div>
    </>
  );
}
