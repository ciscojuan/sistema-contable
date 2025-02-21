interface Props {
  icon: React.ReactNode;
  color: string;
  title?: string;
  consumoTotal?: string;
  valorTotal?: string;
}

export const Card = ({
  icon,
  color,
  title,
  consumoTotal,
  valorTotal,
}: Props) => {
  return (
    <div className="flex items-center justify-center bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700 hover:-translate-y-2 transition-all duration-300 hover:shadow-card">
      <div className="flex flex-col items-center justify-center px-4 py-5 sm:p-6 ">
        <span className={`flex items-center text-3xl  ${color}`}>
          <span className="mr-2 ">{icon}</span>
          {title}
        </span>
        <p className="mt-1 text-3xl font-semibold text-gray-100">
          {valorTotal ? valorTotal : consumoTotal}
        </p>
      </div>
    </div>
  );
};
