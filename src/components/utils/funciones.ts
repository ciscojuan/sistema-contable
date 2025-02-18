export const consumoTotal = (records) => {
  return records.reduce((sum, record) => sum + record.consumo, 0);
};

export const SumaValor = (records) => {
  return records.reduce((sum, record) => sum + record.valor, 0);
};

export const valorTotal = (total) => {
  return (
    total.toLocaleString("es-CO", {
      minimumFractionDigits: 0, // Opcional, elimina los decimales si no son necesarios
    }) + " COP"
  );
};
