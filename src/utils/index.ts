export const valueFormatter = (number: number) =>
  `$ ${Intl.NumberFormat("es-CL").format(number).toString()}`;
