const shortenAdress = (address) => {
  return `${address.substring(0, 6)}...${address.substring(38)}`;
};

export default shortenAdress;
