export const consumoTotal = (records: any) => {
  if (!records || records.length === 0) return 0; // Evita NaN en caso de datos no cargados
  return records.reduce((sum: number, record: any) => sum + record.consumo, 0);
};

export const SumaValor = (records: any) => {
   if (!records || records.length === 0) return 0; 
  return records.reduce((sum: number, record: any) => sum + record.valor, 0);
};

export const valorTotal = (total: number) => {
  if (isNaN(total)) return "0"; // Evita mostrar NaN
  return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

};
