export const valueFormatter = (number: number) =>
  `$ ${Intl.NumberFormat("es-CL").format(number).toString()}`;

export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formattedDate = `${year}-${month > 9 ? month : "0" + month}-${
    day > 9 ? day : "0" + day
  }`;
  return formattedDate;
};
