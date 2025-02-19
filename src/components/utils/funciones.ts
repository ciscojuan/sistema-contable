export const consumoTotal = (records: any) => {
  return records.reduce((sum: number, record: any) => sum + record.consumo, 0);
};

export const SumaValor = (records: any) => {
  return records.reduce((sum: number, record: any) => sum + record.valor, 0);
};

export const valorTotal = (total: number) => {
  // Convertimos el número a string
  let strValue = total.toString();

  // Usamos una expresión regular para insertar un espacio cada tres dígitos
  let formattedValue = strValue.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return formattedValue;
};
