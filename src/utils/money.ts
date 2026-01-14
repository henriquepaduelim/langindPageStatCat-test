type FormatOptions = {
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
};

export const formatCAD = (amount: number, options: FormatOptions = {}) => {
  const { minimumFractionDigits = 0, maximumFractionDigits = 2 } = options;

  const formatted = new Intl.NumberFormat("en-CA", {
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(amount);

  return `CAD $${formatted}`;
};
