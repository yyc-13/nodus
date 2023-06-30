function shortenAddress(address, startChars = 6, endChars = 4) {
  const firstChars = address.slice(0, startChars);
  const lastChars = address.slice(-endChars);
  return `${firstChars}...${lastChars}`;
}
export default shortenAddress;
