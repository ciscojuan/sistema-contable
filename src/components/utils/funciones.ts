export const consumoTotal = (records: any) => {
  return records.reduce((sum: number, record: any) => sum + record.consumo, 0);
};

export const SumaValor = (records: any) => {
  return records.reduce((sum: number, record: any) => sum + record.valor, 0);
};

export const valorTotal = (total: number) => {
  return (
    total.toLocaleString("es-CO", {
      minimumFractionDigits: 0, // Opcional, elimina los decimales si no son necesarios
    }) + " COP"
  );
};
