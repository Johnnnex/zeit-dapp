const roundDown = (number) => {
  if (typeof number === "string") {
    return Math.floor(parseFloat(number) * 100) / 100;
  } else {
    return Math.floor(number * 100) / 100;
  }
};

export default roundDown;
