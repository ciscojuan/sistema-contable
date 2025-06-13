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
  XAxis,
  BarChart,
  YAxis,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  Line,
  LineChart,
  AreaChart,
} from "recharts";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#EC4899",
  "#8B5CF6",
];

interface Props {
  records?:
    | Agua[]
    | Gas[]
    | Energia[]
    | Internet[]
    | Telefono[]
    | Administracion[];
}
export const CircleChart = ({ records = [] }: Props) => {
  const data = records.map((record, index) => ({
    month: record.createdAt
      ? new Date(record.createdAt).toLocaleString("default", {
          month: "long",
        })
      : "N/A",
    ammount: record.valor ?? 0,
    value: "consumo" in record ? record.consumo : record.valor ?? 0,
    color: COLORS[index % COLORS.length],
  }));

  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700">
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Distribución de Consumo / Valor
      </h2>
      <ResponsiveContainer width="100%" aspect={2}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ month }) => ` ${month}`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            nameKey={`month`}
            stroke="#FFF"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name, props) => {
              const total = data.reduce((sum, entry) => sum + entry.value, 0);
              const percentage = ((Number(value) / total) * 100).toFixed(2);
              return [
                `${value} (${percentage}%)`,
                name === "valor" ? "Valor" : "Consumo",
              ];
            }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export const LinearChart = ({ records = [] }: Props) => {
  const hasConsumo = (record: any): record is Agua | Gas | Energia => {
    return "consumo" in record;
  };

  const data = records.map((record) => ({
    date: record.createdAt
      ? new Date(record.createdAt).toLocaleDateString("default", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : "N/A",
    consumo: hasConsumo(record) ? record.consumo : 0,
    valor: record.valor ?? 0,
  }));

  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700">
      <h2 className="text-xl font-semibold text-gray-100 mb-4">Sales Trend</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="consumo"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="valor" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

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
