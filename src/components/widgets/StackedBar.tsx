import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface Totales {
  agua: number;
  energia: number;
  gas: number;
  internet: number;
  telefono: number;
  administracion: number;
}

interface Props {
  totales: Totales | null;
}

export const StackedBar = ({ totales }: Props) => {
  if (!totales) return <p>No hay datos disponibles</p>;

  const data = Object.entries(totales).map(([key, value]) => ({
    categoria: key,
    valor: value ?? 0,
  }));

  return (
    <>
      <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-2 border border-gray-700">
        <h2 className="text-lg font-medium mb-4 text-gray-100">
          Consulo / Valor por mes
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="categoria" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="valor" stackId="a" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};
