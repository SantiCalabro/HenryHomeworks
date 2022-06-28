const layout = [
  [
    { type: "VIP", booked: false },
    { type: "VIP", booked: true },
    { type: "VIP", booked: true },
    { type: "VIP", booked: false },
  ],
  [
    { type: "NORMAL", booked: false },
    { type: "VIP", booked: true },
    { type: "VIP", booked: false },
    { type: "NORMAL", booked: false },
  ],
  [
    { type: "NORMAL", booked: false },
    { type: "NORMAL", booked: true },
    { type: "NORMAL", booked: true },
    { type: "NORMAL", booked: false },
  ],
  [
    { type: "ECONOMIC", booked: true },
    { type: "NORMAL", booked: true },
    { type: "NORMAL", booked: true },
    { type: "ECONOMIC", booked: false },
  ],
  [
    { type: "ECONOMIC", booked: false },
    { type: "ECONOMIC", booked: true },
    { type: "ECONOMIC", booked: false },
    { type: "ECONOMIC", booked: false },
  ],
];

function checkSeatStatus(row, number) {
  //fila, número
  if (typeof row !== "string")
    throw new TypeError("First parameter is not a string.");
  if (typeof number !== "number")
    throw new TypeError("Second parameter is not a number.");

  const seat = getSeat(row, number);

  return seat.booked;
}

function getRowNumber(letter) {
  //retorna un número
  return letter.charCodeAt(0) - 65; // B - 65 = 1. Esto le asigna un número a la fila que es una letra!!
}

function book(row, number) {
  if (checkSeatStatus(row, number))
    return `Seat in ${row}${number} is already booked`;

  const seat = getSeat(row, number);

  seat.booked = true;
  return `Seat in ${row}${number} successfully booked`;
}

function getSeat(row, number) {
  const numberRow = getRowNumber(row); //recibe string y retorna nro de fila
  const layoutRows = layout[numberRow]; //Itera con el nro de fila
  const seat = layoutRows[number]; //número de asiento de esa fila
  return seat;
}

module.exports = {
  checkSeatStatus,
  getRowNumber,
  book,
};
