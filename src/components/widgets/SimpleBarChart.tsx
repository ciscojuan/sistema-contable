"use client";
import {
  Administracion,
  Agua,
  Energia,
  Gas,
  Internet,
  Telefono,
} from "@prisma/client";
import React from "react";
import {
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  BarChart,
  Tooltip,
  YAxis,
  Bar,
  Legend,
} from "recharts";

interface Props {
  records?:
    | Agua[]
    | Gas[]
    | Energia[]
    | Internet[]
    | Telefono[]
    | Administracion[];
}

export const SimpleBarChart = ({ records = [] }: Props) => {
  const hasConsumo = (record: any): record is Agua | Gas | Energia => {
    return "consumo" in record;
  };

  const data = records.map((record) => ({
    date: record.createdAt
      ? new Date(record.createdAt).toLocaleString("default", {
          month: "long",
        })
      : "N/A",
    consumo: hasConsumo(record) ? record.consumo : 0,
    valor: record.valor ?? 0,
  }));

  return (
    <>
      <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-2 border border-gray-700">
        <h2 className="text-lg font-medium mb-4 text-gray-100">
          Consulo / Valor por mes
        </h2>
        <ResponsiveContainer width="100%" aspect={3}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey="date" />
            <YAxis dataKey="consumo" />
            <Tooltip />
            <Legend />
            <Bar dataKey="consumo" fill="#EC4899" />
            <Bar dataKey="valor" fill="#8B5CF6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};
