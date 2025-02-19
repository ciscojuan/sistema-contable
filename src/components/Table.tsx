"use client";
import {
  Administracion,
  Agua,
  Energia,
  Gas,
  Internet,
  Telefono,
} from "@prisma/client";
import { usePathname } from "next/navigation";
import { FaSearchengin } from "react-icons/fa";

interface Props {
  records?:
    | Agua[]
    | Gas[]
    | Energia[]
    | Internet[]
    | Telefono[]
    | Administracion[];
}

const excludedPaths = ["/dashboard/internet", "/dashboard/mobil", "/dashboard/maintenance"];

export const Table = ({ records = [] }: Props) => {
  const path = usePathname();

  console.log(path);
  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Product List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="search your bids"
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="lucide lucide-search absolute left-3 top-2.5 text-yellow-500 flex items-center justify-center">
            <FaSearchengin size={20} />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                DATE
              </th>

              {!excludedPaths.includes(path) && (
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  # GALONS
                </th>
              )}

              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                MONTH
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                TOTAL
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {records.map((raw) => (
              <tr
                key={raw.registro_id}
                style={{ opacity: "1", willChange: "auto" }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 ">
                  {new Date(raw.createdAt).toLocaleDateString()}
                </td>

                {!excludedPaths.includes(path) && (
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    {raw.consumo}
                  </th>
                )}

                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {new Date(raw.createdAt).toLocaleString("default", {
                    month: "long",
                  })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {raw.valor || "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
