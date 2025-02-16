interface Props {
  icon: React.ReactNode;
  title: string;
}
export const TopMenu = ({ title, icon }: Props) => {
  console.log(icon, title)
  return (
    <header className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700">
      <div className="flex items-center justify-cnter max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <span className="text-3xl mr-3">{icon}</span>
        <h1 className="text-2xl font-semibold text-gray-100">{title}</h1>
      </div>
    </header>
  );
};
