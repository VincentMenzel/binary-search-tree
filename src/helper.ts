export const getSpacing = (length: number) =>
  Array.from({length: length + 1}).join(' ');

export const valueWithSpacing = (
  value: number | string,
  valueMaxChars: number,
) => {
  const valuePadding = getSpacing(valueMaxChars - value.toString().length);

  return `${value}${valuePadding}`;
};
export const diff = (a: number, b: number): number => Math.abs(a - b);
